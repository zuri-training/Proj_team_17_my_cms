from django.db import models

# Create your models here.
class User (models.Model):
    username = models.CharField(max_length=200,null = True)
    name = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    email = models.EmailField(max_length=200, null=True)
    profile_pic = models.ImageField(default='profilepic2.png',null=True, blank=True)
    
    def __str__(self):
        return self.name
    
class Template(models.Model):
    name = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to = 'img')
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

    