# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-12-11 18:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0032_auto_20161211_1655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='admitidos',
            name='puntaje',
            field=models.FloatField(),
        ),
    ]