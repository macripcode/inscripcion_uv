from django.contrib import admin

# Register your models here.


from oferta_academica.models import Programa_Academico 
from oferta_academica.models import Facultad


admin.site.register(Programa_Academico)
admin.site.register(Facultad)