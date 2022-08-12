from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.mail import send_mail
# Create your models here.
class User (AbstractUser):
    
    name = models.CharField(max_length=200, default='DEFAULT VALUE')
    email = models.CharField(max_length=200, default='DEFAULT VALUE')
    password = models.CharField(max_length=200, default='DEFAULT VALUE')
    username = models.CharField(max_length=200, unique=True, default='DEFAULT VALUE')
    
    REQUIRED_FIELDS = ['name', 'email', 'password']
    
    
class Template(models.Model):
    name = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to = 'img')
    html = models.TextField()
    css = models.TextField()
    description = models.CharField(max_length=200, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    
    def __str__(self):
        return self.name



class Website(models.Model):
    STATUS = (
        ('Incomplete', 'Incomplete'),
        ('Completed', 'Completed'),
        ('Hosted', 'Hosted')
    )
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    template = models.ForeignKey(Template, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.CharField(max_length=200, null=True, choices=STATUS)

    def __str__(self):
        return self.name


class ContactUs(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    def save(self, *args, **kwargs):
        send_mail(
            'Subject here',
            'Here is the message.',
            'noreply@tobilobaoduk.com',
            ['tobilobaoduk@gmail.com'],
            fail_silently=False,
            html_message=f'<h3>From: {self.first_name} {self.last_name}</h3><p><b>Message:</b> {self.message}</p>'
        )

        return super(ContactUs, self).save(*args, **kwargs)

    class Meta:
        ordering = ['-date_created']
        verbose_name_plural = 'Contacts'


class Feedback(models.Model):
    name = models.CharField(max_length = 200, help_text= 'Name of the sender')
    email = models.EmailField(max_length = 200)
    subject = models.CharField(max_length = 300)
    message = models.TextField()
    date_created  = models.DateTimeField(auto_now_add=True,null = True)
    
    def __str__(self):
        return self.name
