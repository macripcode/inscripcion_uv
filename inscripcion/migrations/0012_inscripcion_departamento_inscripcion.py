# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 20:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0011_inscripcion_comuna_inscripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='inscripcion',
            name='departamento_inscripcion',
            field=models.IntegerField(choices=[(0, 'Seleccione'), (1, 'Valle del Cauca')], default=0),
        ),
    ]
