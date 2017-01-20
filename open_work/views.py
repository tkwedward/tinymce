# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from .models import Jobs

def home(request):
    return render(request,'home.html')

def home0(request):
    return render(request,'home0.html')


def index_page(request):
    return render(request, 'open.html', {'info': 'a'})

def form_union(request):
    return render(request, 'form_union.html', {'info': '一'})

def claim(request):
    mode = Jobs.objects.all().filter(tag='工傷')
    return render(request, 'claim.html', {'mode': mode})

def main_page(request):
    variables = { 'user': request.user }
    return render(request, 'logined_page.html')

def desktop(request):
    return render(request, 'combine_desktop.html')

def article_detail(request, pk, slug):
    post = Jobs.objects.get(pk=pk)
    return render(request, 'article_detail.html', {'post': post})

def labour_law(request):
    mode = Jobs.objects.all().filter(tag='工運史')
    return render(request, 'labour_law.html',{'mode': mode})
