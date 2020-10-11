from django.urls import path, include
from rest_framework import routers
from .views import BankAccountViewSet

router = routers.DefaultRouter()
router.register(r'', BankAccountViewSet)

urlpatterns = [
  path('', include(router.urls)),
]