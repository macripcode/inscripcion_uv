# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 20:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0004_inscripcion_clave_inscripcion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='inscripcion',
            name='cedula',
        ),
        migrations.AddField(
            model_name='inscripcion',
            name='numero_id_inscripcion',
            field=models.CharField(default='', max_length=120),
        ),
    ]
