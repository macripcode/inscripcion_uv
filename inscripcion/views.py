from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def whoami(request):

    sex = request.GET['sex']
    name = request.GET['name']

    response = 'You are ' + name + ' and of sex ' + sex

    return HttpResponse(response)