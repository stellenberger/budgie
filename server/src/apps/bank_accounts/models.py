from django.db import models

from apps.utils.models import Timestamps
from django.contrib.auth.models import User

import csv
class BankAccount(Timestamps, models.Model):
  name = models.CharField(max_length=100)
  records = models.FileField()
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)

  def sort_csv_data(bankAccounts):
    csv_array = []
    for account in bankAccounts: 
      csv_object = []
      BankAccount.csv_to_array(account, csv_object)
      csv_array.append(csv_object)
    return csv_array


  def sort_account_data(csv_array, serializer):
    accounts = []
    i = 0
    while i < len(csv_array):
      accounts.append([csv_array[i], serializer.data[i]])
      i += 1
    total_expenditure = BankAccount.find_total_expenditure(accounts)
    accounts.append(total_expenditure)
    return accounts


  def find_total_expenditure(accounts):
    total_expenditure = 0
    for account in accounts:
      i = 1
      while i < len(account[0]):
        if len(account[0][i][5]) != 0:
          total_expenditure += float(account[0][i][5])
        i += 1
    return total_expenditure

  def csv_to_array(account, csv_object):
    with open(f'{account.records}', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)
        for line in csv_reader:
          csv_object.append(line)