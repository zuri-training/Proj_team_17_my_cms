from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from . serializers import TemplateSerializer, UserRegisterSerializer, UserLoginSerializer, UserProfileSerializer, PasswordResetEmailViewSerializer, PasswordResetSerializer, ContactUsSerializer, FeedbackSerializer
from django.contrib.auth import authenticate
from . renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from  .models import ContactUs, Template, Feedback





# Create your views here.
# The index view, which is the view that leads to the first page of the site.
def index(request):
    return render(request, 'index.html')

# Generate token manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

#Register user with all field values expected

class RegisterView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({'token':token, 'msg': 'Registration Successful'},status=status.HTTP_201_CREATED)

#Login authenticated user using password and username        
class LoginView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True) 
        username = serializer.data.get('username') 
        password = serializer.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response({'token':token, 'msg': 'Login Successful'},
            status=status.HTTP_200_OK)
        else: 
            return Response({'errors': {'non_field_errors': ['Username or Password is invalid']}}, status=status.HTTP_404_NOT_FOUND)

#get a the logged in user (name, username and email)
class ProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Change password
class PasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request):
        serializer = PasswordResetEmailViewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password Reset link sent. Please check your Email'}, status=status.HTTP_200_OK)
        

class PasswordResetView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, uid, token, format=None):
        serializer = PasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
        serializer.is_valid(raise_exception=True)
        return Response({'msg':'Password Reset Successful'}, status=status.HTTP_200_OK)


class ContactUsView(generics.ListCreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer
    
class FeedbackView(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer       

class CreateTemplate(generics.CreateAPIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer

class TemplateDetail(generics.RetrieveAPIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer

class EditTemplate(generics.UpdateAPIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer

class DeleteTemplate(generics.RetrieveDestroyAPIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer