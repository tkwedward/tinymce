# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2017-01-20 00:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('open_work', '0012_auto_20170119_1646'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobs',
            name='job',
            field=models.CharField(max_length=50),
        ),
    ]
