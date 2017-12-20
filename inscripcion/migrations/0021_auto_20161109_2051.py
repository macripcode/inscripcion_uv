# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 20:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0020_auto_20161109_2051'),
    ]

    operations = [
        migrations.AddField(
            model_name='inscripcion',
            name='codigo_col_inscripcion',
            field=models.CharField(default='', max_length=120),
        ),
        migrations.AddField(
            model_name='inscripcion',
            name='direccion_col_inscripcion',
            field=models.CharField(default='', max_length=120),
        ),
        migrations.AddField(
            model_name='inscripcion',
            name='estamento_col_inscripcion',
            field=models.CharField(default='', max_length=120),
        ),
        migrations.AddField(
            model_name='inscripcion',
            name='nombre_col_inscripcion',
            field=models.CharField(default='', max_length=120),
        ),
        migrations.AddField(
            model_name='inscripcion',
            name='telefono_col_inscripcion',
            field=models.CharField(default='', max_length=120),
        ),
        migrations.AddField(
            model_name='inscripcion',
            name='valor_p_col_inscripcion',
            field=models.CharField(default='', max_length=120),
        ),
    ]
