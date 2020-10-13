from rest_framework import serializers, viewsets
from .models import BankAccount
import csv
from django.http import JsonResponse
from django.shortcuts import render 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BankAccountSerializer

# Get all bank account views
@api_view(['GET'])
def bankAccountList(request):
  bankAccount = BankAccount.objects.all()
  serializer = BankAccountSerializer(bankAccount, many=True)
  return Response(serializer.data)


# Get data from csv file of particular bank account
@api_view(['GET'])
def bankAccountDetailCSV(request, pk):
  bankAccount = BankAccount.objects.get(id=pk)
  serializer = BankAccountSerializer(bankAccount, many=False)
  print(bankAccount.records)
  csv_array = []
  with open(f'{bankAccount.records}', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    for line in csv_reader:
      csv_array.append(line)
  return Response(csv_array)

# Get a single bank account view
@api_view(['GET'])
def bankAccountDetail(request, pk):
  bankAccount = BankAccount.objects.get(id=pk)
  serializer = BankAccountSerializer(bankAccount, many=False)
  return Response(serializer.data)


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
  # print(queryset.first().records)
  # with open(f'{queryset.first().records}', 'r') as csv_file:
  #   csv_reader = csv.reader(csv_file)

  #   for line in csv_reader:
  #     print(line)
  serializer_class = BankAccountSerializer
  