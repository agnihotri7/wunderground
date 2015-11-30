"""
project urls here.
"""
from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^blog/', include('blog.urls')),
    # url(r'^admin/', include(admin.site.urls)),

    url(r'^$', 'wunderground.views.home', name='home'),
    url(r'^city/add/$', 'wunderground.views.add_station', name='add-city'),
    url(r'^plot-graph/$', 'wunderground.views.plot_graph', name='plot-graph'),
)
