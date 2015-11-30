"""
Project forms module.
"""
from django import forms
from django.forms import ModelForm
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from wunderground.models import Station

WP_CHOICES = settings.W_PARAMETERS


class StationForm(ModelForm):
    class Meta:
        model = Station


class CheckWeatherForm(forms.Form):
    state = forms.ChoiceField(required=True, choices=[])
    city = forms.ChoiceField(required=True, choices=[])
    wp = forms.ChoiceField(required=True, choices=WP_CHOICES)
    start_date = forms.DateField(required=True)
    end_date = forms.DateField(required=True)

    def __init__(self, *args, **kwargs):
        super(CheckWeatherForm, self).__init__(*args, **kwargs)
        stations = Station.objects.all()
        STATE_CHOICES = [(st.state, st.state) for st in stations]
        CITY_CHOICES = [(st.city, st.city) for st in stations]
        self.fields['state'] = forms.ChoiceField(choices=STATE_CHOICES)
        self.fields['city'] = forms.ChoiceField(choices=CITY_CHOICES)

    def clean(self):
        if 'start_date' in self.cleaned_data and 'end_date' in self.cleaned_data:
            if self.cleaned_data['start_date'] >= self.cleaned_data['end_date']:
                raise forms.ValidationError(_("Start Date can not be greater then or equal to End Date."))
        return self.cleaned_data
