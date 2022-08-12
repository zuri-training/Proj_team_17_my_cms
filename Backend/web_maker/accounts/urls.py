from django.urls import path, re_path
from . import views
from .views import RegisterView, LoginView, ProfileView, PasswordResetEmailView, PasswordResetView, ContactUsView, FeedbackView, CreateTemplate, EditTemplate, DeleteTemplate, TemplateDetail 

app_name = 'accounts'

urlpatterns = [
    # url to the index view 
    path('', views.index, name='index'),
    path('login', views.index),
    path('forgot', views.index),
    path('signup', views.index),
    path('contact-us', views.index),
    path('dashboard', views.index),
    path('about-us', views.index),
    path('feedback-hub', views.index),
    path('template1', views.index),
    path('posts', views.index),
    path('templates', views.index),
    path('accounts', views.index),
    path('pages', views.index),
    path('insight', views.index),
    path('view-page', views.index),
    path('settings', views.index),
    path('editor', views.index),
    path('blog', views.index),
    path('cms', views.index),
    path('faq', views.index),
    path('contact-us', views.index),
    path('docs', views.index),
    path('feedback-hub', views.index),
    path('terms-of-service', views.index),
    path('privacy-policy', views.index),
    path('twitter', views.index),
    path('facebook', views.index),
    path('linkedin', views.index),
    

    
    
    path('api/register', RegisterView.as_view(), name='register'),
    path('api/login', LoginView.as_view(), name='login'),
    path('api/profile', ProfileView.as_view(), name='profile'),
    path('api/reset-password-email', PasswordResetEmailView.as_view(), name='reset-password-email'),
    path('api/reset-password/<uid>/<token>', PasswordResetView.as_view(), name='reset-password'),
    path('api/contact-us', ContactUsView.as_view(), name='contact-us'),
    path('api/feedback', FeedbackView.as_view(),name='feedback'),
    path('api/createtemplate', CreateTemplate.as_view(), name="create_template"),
    path('api/deletetemplate/<int:pk>', DeleteTemplate.as_view(), name="create_template"),
    path('api/editTemplate/templatedetail/<int:pk>', TemplateDetail.as_view(), name="edittemplate_detail"),
    path('api/editTemplate/<int:pk>', EditTemplate.as_view(), name="edittemplate"),
]