from django.db import models

# Create your models here.

class Customer (models.Model):
    username = models.CharField(max_length=200,null = True)
    name = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    email = models.EmailField(max_length=200, null=True)
    profile_pic = models.ImageField(default='profilepic2.png',null=True, blank=True)
    
    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name
    
    
class Template(models.Model):
    name = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to = 'img')
    description = models.CharField(max_length=200, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    category = models.ManyToManyField(Category)
    


    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=500)
    slug = models.SlugField()
    image = models.ImageField(upload_to= 'img')
    body = models.TextField()
    date_created = models.DateTimeField(auto_now_add =True, null=True)
    date_modified = models.DateTimeField(auto_now_add=True, null = True)
    date_published = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField()
    
    def __str__(self):
        return self.name

class Comment(models.Model):
    post = models.ForeignKey(Post,related_name = 'comments', on_delete= models.CASCADE)
    name = models.CharField(max_length = 200)
    email= models.EmailField()
    body= models.TextField()
    date_created = models.DateTimeField(auto_now_add =True, null=True)
    
     
    def __str__(self):
        return self.name


class Website(models.Model):
    STATUS = (
        ('Incomplete', 'Incomplete'),
        ('Completed', 'Completed'),
        ('Hosted', 'Hosted')
    )
    customer = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    template = models.ForeignKey(Template, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.CharField(max_length=200, null=True, choices=STATUS)

    def __str__(self):
        return self.name

    
