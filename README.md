Wunderground
=============

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
