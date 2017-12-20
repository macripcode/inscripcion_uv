from __future__ import unicode_literals

from django.db import models


class Facultad(models.Model):
    codigo_facultad=models.CharField(max_length = 20)
    nombre_facultad=models.CharField(max_length = 120)

    def __str__(self):
        return self.nombre_facultad

class Programa_Academico(models.Model):
    
    codigo_pa=models.CharField(max_length = 20)
    nombre_pa=models.CharField(max_length = 120)
    dedicacion_pa=models.CharField(max_length = 120)
    jornada_pa=models.CharField(max_length = 120)
    descripcion_pa=models.CharField(max_length = 2000)
    disponibilidad_pa=models.BooleanField()
    pruebat_pa=models.BooleanField()
    cupos = models.IntegerField()
    #Aqui la idea era hacer una tabla aparte, pero como habia
    #algo asi como un deadlock entonces mejor la deje asi
    #ya en q programa habia una foreign key hacia icfes y en icfes una hacia programa
    puntaje_global_pa=models.IntegerField()
    icfes_mat_pa=models.IntegerField()
    icfes_lec_pa=models.IntegerField()
    icfes_soc_pa=models.IntegerField()
    icfes_nat_pa=models.IntegerField()
    icfes_ing_pa=models.IntegerField()
    facultad_pa=models.ForeignKey(Facultad, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre_pa