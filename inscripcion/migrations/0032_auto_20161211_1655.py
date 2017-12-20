# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-12-11 16:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0031_auto_20161126_0110'),
    ]

    operations = [
        migrations.CreateModel(
            name='Admitidos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('posicion', models.IntegerField()),
                ('puntaje', models.IntegerField()),
                ('codigo_admitido', models.CharField(max_length=120)),
                ('nombre_admitido', models.CharField(max_length=120)),
                ('apellido_admitido', models.CharField(max_length=120)),
                ('plan_admitido', models.CharField(max_length=120)),
            ],
        ),
        migrations.AlterField(
            model_name='inscripcion',
            name='departamento_inscripcion',
            field=models.IntegerField(choices=[(0, 'Seleccione'), (1, 'Valle del Cauca'), (2, 'Cauca'), (3, 'Narino'), (4, 'Antioquia'), (5, 'Cundinamarca'), (6, 'Choco'), (7, 'Otro')], default=0),
        ),
        migrations.AlterField(
            model_name='inscripcion',
            name='p_academico_inscripcion',
            field=models.IntegerField(choices=[(0, 'Seleccione'), (3569, 'Fonoaudiologia'), (3744, 'Ingenieria Electronica'), (3660, 'Medicina y Cirugia'), (3743, 'Ingenieria de Sistemas')], default=0),
        ),
    ]
