from django.urls import path
from . import views
from .views import RegisterView, LoginView

app_name = 'accounts'

urlpatterns = [
    # url to the index view
    path('', views.index),
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view())
]