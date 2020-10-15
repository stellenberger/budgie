from django.db import models

from apps.utils.models import Timestamps
from django.contrib.auth.models import User

class BankAccount(Timestamps, models.Model):
  name = models.CharField(max_length=100)
  records = models.FileField()
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
