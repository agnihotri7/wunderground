Wunderground
=============
A django website to plot weather chart using weather underground API's and highcharts.

You can select a city & time range and chart will be ploted for temprature, humidity, dew point etc.

# Installation

## Clone Project

    git clone https://github.com/agnihotri7/wunderground

## Virtual Envirnoment and requirements

    virtualenv env
    source env/bin/activate
    pip install -r requirements.txt

## Create db for project.

    python manage.py syncdb

## Running Development Server

    python manage.py runserver
