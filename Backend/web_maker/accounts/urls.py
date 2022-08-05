from django.urls import path
from . import views
from .views import RegisterView, LoginView

app_name = 'accounts'

urlpatterns = [
    # url to the pages
    path('', views.index), # index page
    path('login/', views.index), # login page
    path('signup/', views.index), # signup page

    # url to the api
    path('api/signup', RegisterView.as_view()), # signup api
    path('api/login', LoginView.as_view()) # login api
]