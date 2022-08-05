from django.urls import path
from . import views
from .views import RegisterView, LoginView, UserView, LogoutView

app_name = 'accounts'

urlpatterns = [
    # url to the index view
    path('', views.index),
    path('registeruser', RegisterView.as_view()),
    path('loginuser', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logoutuser', LogoutView.as_view()),
]