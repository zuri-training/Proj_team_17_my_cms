from xml.dom import ValidationErr
from django.forms import ValidationError
from rest_framework import serializers
from  .models import Template, User, ContactUs, Feedback
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Util


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','name','username','email','password']
        extra_kwargs = {
            'password':{'write_only':True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=200)
    class Meta:
        model = User
        fields = ['username', 'password']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'name', 'email']

class PasswordResetEmailViewSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=200)
    class Meta:
        model = User
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email')
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            print('Encoded UID', uid)
            token = PasswordResetTokenGenerator().make_token(user)
            print('Password Reset Token', token)
            link = 'http://localhost:3000/api/reset/'+uid+'/'+token
            print('Password Reset Link', link)
            # Send Email
            body = 'Click the link to reset your password '+link
            data = {
                'subject': 'Reset Your Password',
                'body': body,
                'to_email': user.email
            }
            Util.send_email(data)
            return attrs
        else:
            raise ValidationError('You are not a Registered User')

class PasswordResetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=200, style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['password']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            uid = self.context.get('uid')
            token = self.context.get('token')
            if password is not None:
                id = smart_str(urlsafe_base64_decode(uid))
                user = User.objects.get(id=id)
                if not PasswordResetTokenGenerator().check_token(user, token):
                    raise ValidationError('Token is not valid or expired')
                user.set_password(password) 
                user.save()
                return attrs
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user, token)
            raise ValidationError('Token is not valid or expired')


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ['id', 'first_name', 'last_name', 'email', 'message']
        
        
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['name', 'email', 'subject', 'message']        
        
class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = ['html','css','name','description']