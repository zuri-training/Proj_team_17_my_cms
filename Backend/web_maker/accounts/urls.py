from django.urls import path
from . import views
from .views import RegisterView, LoginView, UserView, LogoutView

app_name = 'accounts'

urlpatterns = [
    # url to the index view
    path('', views.index),
    path('api/register', RegisterView.as_view()),
    path('api/login', LoginView.as_view()),
    path('api/user', UserView.as_view()),
    path('api/logout', LogoutView.as_view()),
]