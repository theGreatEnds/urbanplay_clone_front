from django.shortcuts import render

# Create your views here.
def index(request): # react index.js rendering
    return render(request, 'frontend/index.html', context=None)