from django.contrib import admin
from django.urls import path,include,re_path
from django.contrib.auth.views import LoginView,LogoutView
from . import views

urlpatterns = [
    path('sentiment/', views.sentiment,name="sentiment"),
    
]




