# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-09 20:44
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inscripcion', '0007_auto_20161109_2043'),
    ]

    operations = [
        migrations.RenameField(
            model_name='inscripcion',
            old_name='direccion',
            new_name='direccion_inscripcion',
        ),
    ]