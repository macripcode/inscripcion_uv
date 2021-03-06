# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 15:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('programa_academico', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Inscripcion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pin', models.CharField(default='', max_length=120)),
                ('cedula', models.IntegerField()),
                ('nombre', models.CharField(max_length=120)),
                ('direccion', models.CharField(max_length=120)),
                ('barrio', models.CharField(max_length=120)),
                ('celular', models.CharField(max_length=120)),
                ('email', models.EmailField(max_length=254)),
                ('estrato', models.IntegerField()),
                ('departamento', models.CharField(max_length=120)),
                ('municipio', models.CharField(max_length=120)),
                ('nombreAcudiente', models.CharField(max_length=120)),
                ('telefonoAcudiente', models.CharField(max_length=120)),
                ('estadoCivil', models.CharField(max_length=120)),
                ('numeroHijos', models.IntegerField()),
                ('puntajeGlobal', models.IntegerField()),
                ('codigoSINIES', models.IntegerField()),
                ('lecturaCritica', models.IntegerField()),
                ('matematica', models.IntegerField()),
                ('socialesCiudadanas', models.IntegerField()),
                ('cienciasNaturales', models.IntegerField()),
                ('ingles', models.IntegerField()),
                ('cedulaEscaneada', models.ImageField(upload_to=b'')),
                ('actaBachiller', models.ImageField(upload_to=b'')),
                ('certificadoMatricula', models.ImageField(upload_to=b'')),
                ('estado', models.IntegerField(default=0)),
                ('notas', models.TextField(null=True)),
                ('programaAcademico', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programa_academico.ProgramaAcademico')),
            ],
        ),
    ]
