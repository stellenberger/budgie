import json
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status



class RegistrationTestCase(APITestCase):

  def test_registration(self):
    data = {"username": "testcase", 
            "email": "test@test.com",
            "password": "password",
            }
    response = self.client.post("/api/v1/authentication/users/", data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class LoginTestCase(APITestCase):
  def setUp(self):
    self.user = User.objects.create_user(username="testcase",
                                        password="password321")

  def test_login(self):
    data = {"username": "testcase", 
            "password": "password321",
            }
    response = self.client.post("/api/v1/login/", data)
    self.assertEqual(response.status_code, status.HTTP_200_OK)
