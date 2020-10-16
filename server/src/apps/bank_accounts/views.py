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
  with open(f'{bankAccount.records}', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    for line in csv_reader:
      csv_array.append(line)
  response = [csv_array, serializer.data]
  return Response(response)


# Get multiple bank account views
@api_view(['GET'])
def bankAccountDetailAll(request, pk):
  # print(request.COOKIES['sessionid'])
  # print(request.headers['Authorization'])
  bankAccounts = BankAccount.objects.filter(user_id=pk)
  serializer = BankAccountSerializer(bankAccounts, many=True)
  csv_array = []
  for account in bankAccounts: 
    csv_object = []
    with open(f'{account.records}', 'r') as csv_file:
      csv_reader = csv.reader(csv_file)
      for line in csv_reader:
        csv_object.append(line)
    csv_array.append(csv_object)

  accountData = []
  i = 0
  while i < len(csv_array):
    accountData.append([csv_array[i], serializer.data[i]])
    i += 1
  response = accountData
  return Response(response)


# Create a single bank account view
@api_view(['POST'])
def bankAccountCreate(request):
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
  