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
    accountData = {
      "accounts": [], 
      "total_expenditure": 0,
      "total_difference": 0,
      "total_transactions": 0,
      "chart_data": [],
      "pie_chart_data": [],
    }
    i = 0
    while i < len(csv_array):
      accountData['accounts'].append([csv_array[i], serializer.data[i]])
      i += 1
    accountData["total_expenditure"] = BankAccount.find_total_expenditure(accountData["accounts"])
    accountData["total_difference"] = BankAccount.find_total_difference(accountData["accounts"])
    accountData["total_transactions"] = BankAccount.find_total_transactions(accountData["accounts"])
    accountData["chart_data"] = BankAccount.set_chart_data(accountData["accounts"]) 
    accountData["pie_chart_data"] = BankAccount.set_pie_chart_data(accountData["accounts"]) 
    return accountData


  def find_total_transactions(accounts):
    total_transactions = 0
    for account in accounts:
      total_transactions += len(account[0]) - 1
    return total_transactions


  def set_chart_data(accountData):
    chart_data = []
    for account in accountData:
      dates = []
      accountBalances = []
      i = 1
      while i < len(account[0]):
        dates.append(account[0][i][0])
        i += 1
      i = 1
      while i < len(account[0]):
        accountBalance = float(account[0][i][7])
        accountBalances.append(accountBalance)
        i += 1
      chart_data.append({
        "dates": dates, 
        "accountBalances": accountBalances,
      })
    return chart_data


  def set_pie_chart_data(accountData):
    pie_chart_data = []
    for account in accountData:
      shops = []
      debit_amounts = []
      i = 1
      while i < len(account[0]):
        if account[0][i][5] == '':
          i += 1
          continue
        shops.append(account[0][i][4])
        i += 1
      i = 1
      while i < len(account[0]):
        if account[0][i][5] == '':
          i += 1
          continue 
        debit_amount = float(account[0][i][5])
        debit_amounts.append(debit_amount)
        i += 1
      pie_chart_data.append({
        "shops": shops, 
        "debit_amounts": debit_amounts,
      })
    return pie_chart_data


  def find_total_expenditure(accounts):
    total_expenditure = 0
    for account in accounts:
      i = 1
      while i < len(account[0]):
        if len(account[0][i][5]) != 0:
          total_expenditure += float(account[0][i][5])
        i += 1
    return total_expenditure


  def find_total_difference(accounts):
    total_difference = 0
    for account in accounts:
      total_difference += (float(account[0][1][7]) - float(account[0][len(account[0]) - 1][7]))
    return total_difference


  def csv_to_array(account, csv_object):
    with open(f'{account.records}', 'r') as csv_file:
        csv_reader = csv.reader(csv_file)
        for line in csv_reader:
          csv_object.append(line)

