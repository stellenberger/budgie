from django.db import models

from apps.utils.models import Timestamps

class BankAccount(Timestamps, models.Model):
  name = models.CharField(max_length=100)
  records = models.FileField()
