import json
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status

class BankAccountViewCase(APITestCase):
  def setUp(self):
    self.user = User.objects.create_user(username="testcase",
                                        password="password321")
    self.token = Token.objects.create(user=self.user)
    self.api_authentication()

  
  def api_authentication(self):
    self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token.key)


  def test_bankaccount_view(self):
    response = self.client.get("/api/v1/bank-accounts/list/")
    self.assertEqual(response.status_code, status.HTTP_200_OK)
