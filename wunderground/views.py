"""
all business logic here.
"""
from datetime import date
from django.template import RequestContext
from django.shortcuts import render_to_response

from wunderground.models import Station
from wunderground.forms import StationForm, CheckWeatherForm
from wunderground.utils import get_data


def home(request):
    """
    """
    form = CheckWeatherForm()
    if request.method == 'GET':
        return render_to_response("home.html", {'form': form},
            context_instance=RequestContext(request))

    elif request.method == 'POST':
        form = CheckWeatherForm(request.POST)
        if form.is_valid():
            try:
                # get date from POST request
                city = form.data['city']
                state = form.data['state']
                wp = form.data['wp'] # weather parameter
                station = Station.objects.get(city=city, state=state)
                zip_num = station.zip_num
                start_date = form.cleaned_data['start_date'] # start date
                end_date = form.cleaned_data['end_date'] # end date

                # get data from wunderground API's
                data = get_data(zip_num, start_date, end_date, typ=wp)
                context_data = {'data': data, 'yr': start_date.year,
                                'mnth': start_date.month, 'day': start_date.day}
                if wp == 'tmp':
                    context_data.update({'wp': 'tmp'})
                elif wp == 'hum':
                    context_data.update({'wp': 'hum'})
                elif wp == 'dew':
                    context_data.update({'wp': 'dew'})
            except Exception as e:
                return render_to_response("plot_graph_faliure.html", {'exception_msg': e},
                        context_instance=RequestContext(request))

            return render_to_response("plot_graph.html", context_data,
                    context_instance=RequestContext(request))
        else:
            return render_to_response("home.html", {'form': form},
                context_instance=RequestContext(request))


def add_station(request):
    """
    """
    form = StationForm()
    if request.method == 'POST':
        # import pdb
        # pdb.set_trace()
        form = StationForm(request.POST)
        if form.is_valid():
            obj = Station(zip_num=form.data['zip_num'], city=form.data['city'],\
                state=form.data['state'])
            obj.save()
            return render_to_response("city_add_success.html",
                context_instance=RequestContext(request))
        else:
            return render_to_response("add_station.html",
                {'form': form},
                context_instance=RequestContext(request))
    return render_to_response("add_station.html", {'form': form},
        context_instance=RequestContext(request))


def plot_graph(request):
    """
    """
    form = CheckWeatherForm()
    if request.method == 'POST':
        form = CheckWeatherForm(request.POST)
        if form.is_valid():
            try:
                # get date from POST request
                city = form.data['city']
                state = form.data['state']
                wp = form.data['wp'] # weather parameter
                station = Station.objects.get(city=city, state=state)
                zip_num = station.zip_num
                sd = form.data['start_date']
                ed = form.data['end_date']
                print self.cleaned_data['start_date']

                # get year , month , day from form date fields
                start_month, start_day, start_year =  sd.split('/')
                end_month, end_day, end_year =  ed.split('/')

                # create date object using yr, mnth, day
                start_date = date(int(start_year), int(start_month), int(start_day))
                end_date = date(int(end_year), int(end_month), int(end_day))

                # get data from wunderground API's
                data = get_data(zip_num, start_date, end_date, typ=wp)
                context_data = {'data': data, 'yr': int(start_year),
                                'mnth': int(start_month), 'day': int(start_day)}
            except Exception as e:
                return render_to_response("plot_graph_faliure.html", {},
                        context_instance=RequestContext(request))

            return render_to_response("plot_graph.html", context_data,
                    context_instance=RequestContext(request))
    return render_to_response("plot_graph_faliure.html", {},
            context_instance=RequestContext(request))
