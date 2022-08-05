from django.shortcuts import render
from django.http import request
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User
import jwt, datetime

# Create your views here.
# The index view, which is the view that leads to the first page of the site.
def index(request):
    return render(request, 'index.html')

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        user = User.objects.filter(username=username).first()

        if user is None:
            raise AuthenticationFailed('Username not found')

        if not user.check_password(password):
            raise AuthenticationFailed('Invalid password')

        payload = {
            'id': user.id, 
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithms='HS256').decode('utf-8')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response


        