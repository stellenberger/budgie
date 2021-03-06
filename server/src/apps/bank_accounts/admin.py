from django.contrib import admin
from .models import BankAccount

class BankAccountAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'user_id', 'created_at', 'updated_at') # change
  search_fields = ('name',) # change

admin.site.register(BankAccount, BankAccountAdmin) # change
