# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 15:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Facultad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_facultad', models.CharField(max_length=20)),
                ('nombre_facultad', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='Programa_Academico',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo_pa', models.CharField(max_length=20)),
                ('nombre_pa', models.CharField(max_length=120)),
                ('dedicacion_pa', models.CharField(max_length=120)),
                ('jornada_pa', models.CharField(max_length=120)),
                ('descripcion_pa', models.CharField(max_length=2000)),
                ('disponibilidad_pa', models.BooleanField()),
                ('pruebat_pa', models.BooleanField()),
                ('cupos', models.IntegerField()),
                ('puntaje_global_pa', models.IntegerField()),
                ('icfes_mat_pa', models.IntegerField()),
                ('icfes_lec_pa', models.IntegerField()),
                ('icfes_soc_pa', models.IntegerField()),
                ('icfes_nat_pa', models.IntegerField()),
                ('icfes_ing_pa', models.IntegerField()),
                ('facultad_pa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='oferta_academica.Facultad')),
            ],
        ),
    ]
