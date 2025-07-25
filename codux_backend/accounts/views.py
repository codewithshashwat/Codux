from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import status


@api_view(['POST'])
def signup_view(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:
        return Response({"error": "All fields required"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    token = Token.objects.create(user=user)
    return Response({"token": token.key, "username": user.username})


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user is None:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "username": user.username})
