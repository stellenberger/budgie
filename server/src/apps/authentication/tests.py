import json
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status
# from profiles.models import profiles
# from profiles.api.serializers import ProfileSerializer


class RegistrationTestCase(APITestCase):

  def test_registration(self):
    data = {"username": "testcase", 
            "email": "test@test.com",
            "password": "password",
            }
    response = self.client.post("/api/v1/authentication/users/", data)
    self.assertEqual(response.status_code, status.HTTP_201_CREATED)