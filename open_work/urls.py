# -*- coding: utf-8 -*-

from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from django.shortcuts import render_to_response

import sys,urllib

from .views import index_page, form_union, claim, home, main_page, desktop, home0, article_detail, labour_law


urlpatterns = [
    url(r'^$', home, name="home"),
    url(r'^home0$', home0, name="home0"),
    # url(r'^login$', login, name="login"),
    url(r'^main_page$', main_page, name="main_page"),
    url(r'^open$', index_page, name="index_page"),
    url(r'^form_union$', form_union, name="form_union"),
    url(r'^claim$', claim, name="claim"),

    url(r'^labour_law$', labour_law, name="labour_law"),

    url(r'^desktop$', desktop, name="desktop"),
    url(r'^post/(?P<slug>[\w-]+)/(?P<pk>\d+)/$', article_detail, name='article_detail'),
    # url(r'^post/(?P<pk>\d+)/$', article_detail, name='article_detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root= settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
