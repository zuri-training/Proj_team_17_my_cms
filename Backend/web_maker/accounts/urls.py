from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    # url to the index view
    path('', views.index),
]