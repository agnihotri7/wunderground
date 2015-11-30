"""
Models related to project.
"""
from django.db import models


class Station(models.Model):
    zip_num = models.CharField(max_length=10, unique=True)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('state', 'city')
        unique_together = (("state", "city"),)
        db_table = 'station'
        verbose_name_plural = 'stations'

    def get_zip(self):
        return self.zip_num
