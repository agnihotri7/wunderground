"""
utility fuctions here.
"""
import requests
from datetime import date
from dateutil.rrule import rrule, DAILY
from django.conf import settings

API_KEY = settings.WUNDERGROUND_KEY


def get_data_from_api(zip_num, start_date, typ):
    urlstart = 'http://api.wunderground.com/api/' + API_KEY + '/history_'
    urlend = '/q/' + zip_num + '.json'

    url = urlstart + str(start_date) + urlend
    data = requests.get(url).json()

    result = []
    for observations in data['history']['observations']:
        if typ == 'tmp':
            result.append(float(observations['tempi']))
        elif typ == 'hum':
            result.append(float(observations['hum']))
        elif typ == 'dew':
            result.append(float(observations['dewptm']))
    return result

def get_data(zip_num, start_date, end_date, typ):
    data = []
    for dt in rrule(DAILY, dtstart=start_date, until=end_date):
        result = get_data_from_api(zip_num, dt.strftime("%Y%m%d"), typ)
        data += result
    return data
