from rest_framework import serializers
from .models import BankAccount

class BankAccountSerializer(serializers.ModelSerializer):
  class Meta: 
    model = BankAccount
    fields = ('id', 'name', 'records', 'user_id')