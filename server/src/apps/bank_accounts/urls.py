from django.urls import path, include
from . import views

urlpatterns = [
  path('list/', views.bankAccountList, name='bank-account-list'),
  path('detail/<str:pk>/', views.bankAccountDetail, name='bank-account-detail'),
  path('detailAll/', views.bankAccountDetailAll, name='bank-account-detail-all'),
  path('create/', views.bankAccountCreate, name='bank-account-create'),
  path('update/<str:pk>/', views.bankAccountUpdate, name='bank-account-update'),
  path('delete/<str:pk>/', views.bankAccountDelete, name='bank-account-delete'),
]