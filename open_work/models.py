#coding=utf-8

from __future__ import unicode_literals

from django.db import models
from django.core.files.storage import FileSystemStorage
from redactor.fields import RedactorField

class Jobs(models.Model):
    job = models.CharField(max_length=50)
    body = RedactorField(default="")
    image = models.ImageField(null=True, blank=True)
    tag = models.CharField(max_length=20, default="工運史")

    def __unicode__(self):
        return self.job
