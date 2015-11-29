"""
all business logic here.
"""
from django.template import RequestContext
from django.shortcuts import render_to_response


def home(request):
    """
    """
    return render_to_response("home.html", {},
        context_instance=RequestContext(request))


def add_city(request):
    """
    """
    return render_to_response("add_city.html", {},
        context_instance=RequestContext(request))


def plot_graph(request):
    """
    """
    return render_to_response("plot_graph.html", {},
        context_instance=RequestContext(request))
