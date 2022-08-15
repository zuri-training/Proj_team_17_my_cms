from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Template)
admin.site.register(Website)
admin.site.register(ContactUs)
admin.site.register(Feedback)
