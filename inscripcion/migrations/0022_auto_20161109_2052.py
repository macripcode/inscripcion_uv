# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 20:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0021_auto_20161109_2051'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='inscripcion',
            name='actaBachiller',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='cedulaEscaneada',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='certificadoMatricula',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='cienciasNaturales',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='codigoSINIES',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='ingles',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='lecturaCritica',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='matematica',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='programaAcademico',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='puntajeGlobal',
        ),
        migrations.RemoveField(
            model_name='inscripcion',
            name='socialesCiudadanas',
        ),
    ]
