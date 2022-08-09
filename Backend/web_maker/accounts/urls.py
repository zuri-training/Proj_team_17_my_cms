from django.urls import path, re_path
from . import views
from .views import RegisterView, LoginView, ProfileView, PasswordResetEmailView, PasswordResetView

app_name = 'accounts'

urlpatterns = [
    # url to the index view
    path('', views.index, name='index'),
    re_path(r'^.*', views.index),
    path('api/register', RegisterView.as_view(), name='register'),
    path('api/login', LoginView.as_view(), name='login'),
    path('api/profile', ProfileView.as_view(), name='profile'),
    path('api/reset-password-email', PasswordResetEmailView.as_view(), name='reset-password-email'),
    path('api/reset-password/<uid>/<token>', PasswordResetView.as_view(), name='reset-password')
]