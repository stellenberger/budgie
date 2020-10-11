from rest_framework import serializers, viewsets
from .models import BankAccount

class BankAccountSerializer(serializers.ModelSerializer):
  class Meta: 
    model = BankAccount
    fields = ('id', 'name',)


class BankAccountViewSet(viewsets.ModelViewSet):
  queryset = BankAccount.objects.all()
  serializer_class = BankAccountSerializer