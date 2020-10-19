import json
from django.contrib.auth.models import User
from .models import BankAccount
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status


class BankAccountCreateCase(APITestCase):
  def setUp(self):
    self.user = User.objects.create_user(username="testcase",
                                        password="password321")
    self.token = Token.objects.create(user=self.user)
    self.api_authentication()

  def api_authentication(self):
    self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token.key)

  def test_bankaccount_create(self):
    data = {
      "name": "Example Bank Account 2",
      "records": "debit_account_example.csv",
    }
    response = self.client.post("/api/v1/bank-accounts/create/", data, format='json')
    self.assertEqual(response.status_code, status.HTTP_200_OK)



class BankAccountViewCase(APITestCase):
  def setUp(self):
    self.user = User.objects.create_user(username="testcase",
                                        password="password321")
    self.token = Token.objects.create(user=self.user)
    self.api_authentication()
    self.bank_account = BankAccount.objects.create(name="Example Bank Account",
                                                  records="debit_account_example.csv",
                                                  user_id=self.user)

  
  def api_authentication(self):
    self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token.key)


  def test_bankaccount_view_authenticated(self):
    response = self.client.get("/api/v1/bank-accounts/list/")
    self.assertEqual(response.status_code, status.HTTP_200_OK)


  def test_bankaccount_view_un_authenticated(self):
    self.client.force_authenticate(user=None)
    response = self.client.get("/api/v1/bank-accounts/list/")
    self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


  def test_bankaccount_detail_retrieve(self):
    response = self.client.get(reverse("bank-account-detail", kwargs={"pk": 1}))
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertEqual(response.data[1]['name'], "Example Bank Account")



