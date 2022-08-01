from django.shortcuts import render
from django.http import request

# Create your views here.
# The index view, which is the view that leads to the first page of the site.
def index(request):
    return render(request, 'index.html')