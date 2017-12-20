# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 20:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Barrio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_barrio', models.CharField(max_length=100)),
                ('nombre_barrio', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='Colegio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_colegio', models.CharField(max_length=120)),
                ('nombre_colegio', models.CharField(max_length=120)),
                ('direccion_colegio', models.CharField(max_length=120)),
                ('telefono_colegio', models.CharField(max_length=120)),
                ('estamento_colegio', models.CharField(max_length=120)),
            ],
        ),
    ]
