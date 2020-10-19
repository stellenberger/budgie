from rest_framework import serializers, viewsets
from .models import BankAccount
import csv
from django.http import JsonResponse
from django.shortcuts import render 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BankAccountSerializer
from django.contrib.auth.models import User

# Get all bank account views
@api_view(['GET'])
def bankAccountList(request):
  bankAccount = BankAccount.objects.all()
  serializer = BankAccountSerializer(bankAccount, many=True)
  return Response(serializer.data)


# Get a single bank account view
@api_view(['GET'])
def bankAccountDetail(request, pk):
  bankAccount = BankAccount.objects.get(id=pk)
  serializer = BankAccountSerializer(bankAccount, many=False)
  csv_array = []
  BankAccount.csv_to_array(bankAccount, csv_array)
  response = [csv_array, serializer.data]
  return Response(response)


# Get multiple bank account views
@api_view(['GET'])
def bankAccountDetailAll(request):
  user_id = request.user.id
  bankAccounts = BankAccount.objects.filter(user_id=user_id)
  serializer = BankAccountSerializer(bankAccounts, many=True)
  csv_array = BankAccount.sort_csv_data(bankAccounts)
  response = BankAccount.sort_account_data(csv_array, serializer)
  return Response(response)


# Create a single bank account view
@api_view(['POST'])
def bankAccountCreate(request):
  request.data['user_id'] = request.user.id
  serializer = BankAccountSerializer(data=request.data)
  
  if serializer.is_valid():
    serializer.save()

  return Response(serializer.data)


# Update a single bank account view
@api_view(['POST'])
def bankAccountUpdate(request, pk):
  bankAccount = BankAccount.objects.get(id=pk)
  serializer = BankAccountSerializer(instance=bankAccount, data=request.data)
  if serializer.is_valid():
    serializer.save()

  return Response(serializer.data)


# Delete a single bank account view
@api_view(['DELETE'])
def bankAccountDelete(request, pk):
  bankAccount = BankAccount.objects.get(id=pk)
  bankAccount.delete()

class BankAccountViewSet(viewsets.ModelViewSet):
  queryset = BankAccount.objects.all()
  serializer_class = BankAccountSerializer
  