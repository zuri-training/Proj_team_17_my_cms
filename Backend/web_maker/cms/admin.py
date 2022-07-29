from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Customer)
admin.site.register(Category)
admin.site.register(Template)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Website)
