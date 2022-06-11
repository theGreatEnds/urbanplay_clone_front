from django.contrib import admin
from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),  # for the empty url
    path(r'.*/', index)  # for all other urls
]
