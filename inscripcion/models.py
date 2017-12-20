from __future__ import unicode_literals
from django.db import models
from oferta_academica.models import Programa_Academico

# Create your models here.

class Barrio(models.Model):
    codigo_barrio = models.CharField(max_length=100)
    nombre_barrio = models.CharField(max_length=120)

    def __str__(self):
        return self.codigo_barrio + ' - ' + self.nombre_barrio

class Colegio(models.Model):
    codigo_colegio = models.CharField(max_length=120)
    nombre_colegio = models.CharField(max_length=120)
    direccion_colegio = models.CharField(max_length=120)
    telefono_colegio = models.CharField(max_length=120)
    estamento_colegio = models.CharField(max_length=120)

    def __str__(self):
        return self.nombre_colegio

class Admitidos(models.Model):
    posicion = models.IntegerField()
    puntaje = models.FloatField()
    codigo_admitido = models.CharField(max_length=120)
    nombre_admitido = models.CharField(max_length=120)
    apellido_admitido = models.CharField(max_length=120)
    plan_admitido = models.CharField(max_length=120)
    
    def __str__(self):
        return 'posicion: '+str(self.posicion)+' puntaje: '+str(self.puntaje)+' codigo: '+self.codigo_admitido+' nombre: '+self.nombre_admitido+' apellido: '+self.apellido_admitido+' plan: '+self.plan_admitido
        
class Inscripcion(models.Model):
    
    #cargar datos para input select
    ID_TDOCUMENTO = ((0, "Seleccione"),(1, "TI"),(2, "CC"),(3, "CE"),)
    ID_BARRIOS = [(0, "Seleccione")]
    all_barrio=Barrio.objects.all()
    for barrio in all_barrio:
        ID_BARRIOS.append( (int(barrio.codigo_barrio), barrio.nombre_barrio) )
    ID_ESTRATO=( (0, "Seleccione"),(1, "1"),(2, "2"),(3, "3"),(4, "4"),(5, "5"),(6, "6"),)
    ID_COMUNA=[(0, "Seleccione")]
    for i in range(1,23):
        ID_COMUNA.append( (i, str(i) ) )
    ID_DEPARTAMENTO=( (0,"Seleccione"),(1,"Valle del Cauca"), (2,"Cauca"), (3,"Narino"), (4,"Antioquia"), (5,"Cundinamarca"),(6,"Choco"),(7,"Otro"))
    ID_MUNICIPIO=( (0,"Seleccione"),(1,"Cali"), )
    ID_ECIVIL=( (0,"Seleccione"),(1,"Soltero"),(2,"Casado"),(3,"Viudo"),(3,"Divorciado"),)
    ID_NHIJOS=( (0,"Seleccione"),(1,"0"),(2,"1"),(3,"2"),(4,"Mas"),)
    ID_PACADEMICO=[(0, "Seleccione")]
    all_pa=Programa_Academico.objects.all()
    for pa in all_pa:
        ID_PACADEMICO.append( (int(pa.codigo_pa), pa.nombre_pa) )
    ID_SEDE=( (0,"Seleccione"),(1,"Cali"), )
    
    #Ingreso de Pin
    codigo_inscripcion = models.CharField(max_length = 120, blank=False, default='', unique=True)
    clave_inscripcion = models.CharField(max_length = 120,blank=False, default='')
    
    #Datos personales
    tipo_id_inscripcion=models.IntegerField(default=0, choices=ID_TDOCUMENTO, blank=False)
    numero_id_inscripcion=models.CharField(max_length=120, blank=False, default='', unique=True)
    
    nombre_inscripcion=models.CharField(max_length = 120, default='')
    apellido_inscripcion=models.CharField(max_length = 120, default='')
    direccion_inscripcion=models.CharField(max_length = 120)
    barrio_inscripcion=models.IntegerField(default=0, choices=ID_BARRIOS)
    estrato_inscripcion=models.IntegerField(default=0, choices=ID_ESTRATO)
    comuna_inscripcion=models.IntegerField(default=0, choices=ID_COMUNA)
    departamento_inscripcion=models.IntegerField(default=0, choices=ID_DEPARTAMENTO)
    municipio_inscripcion=models.IntegerField(default=0, choices=ID_MUNICIPIO)
    telefono_inscripcion=models.CharField(max_length = 120)
    email_inscripcion=models.CharField(max_length = 120,default='')
    n_acudiente_inscripcion=models.CharField(max_length = 120,default='')
    telefono_acudiente_inscripcion= models.CharField(max_length = 120,default='')
    estado_civil_inscripcion=models.IntegerField(default=0, choices=ID_ECIVIL)
    n_hijos_inscripcion=models.IntegerField(default=0, choices=ID_NHIJOS)
    
    #Institucion
    codigo_col_inscripcion= models.CharField(max_length = 120,default='')
    nombre_col_inscripcion= models.CharField(max_length = 120,default='')
    estamento_col_inscripcion= models.CharField(max_length = 120,default='')
    valor_p_col_inscripcion= models.CharField(max_length = 120,default='')
    direccion_col_inscripcion= models.CharField(max_length = 120,default='')
    telefono_col_inscripcion= models.CharField(max_length = 120,default='')
    
    #ICFES
    registro_icfes_inscripcion= models.CharField(max_length = 120,default='')
    p_global_icfes_inscripcion= models.CharField(max_length = 120,default='')
    p_mat_icfes_inscripcion= models.CharField(max_length = 120,default='')
    p_lec_icfes_inscripcion= models.CharField(max_length = 120,default='')
    p_soc_icfes_inscripcion= models.CharField(max_length = 120,default='')
    p_nat_icfes_inscripcion= models.CharField(max_length = 120,default='')
    p_ing_icfes_inscripcion= models.CharField(max_length = 120,default='')
    
    #Programa Academico
    p_academico_inscripcion=models.IntegerField(default=0, choices=ID_PACADEMICO)
    sede_p_inscripcion=models.IntegerField(default=0, choices=ID_SEDE)
    
    #Documentos
    cedula_inscripcion=models.FileField(upload_to='id/', default='')
    a_bachiller_inscripcion=models.FileField(upload_to='acta/', default='')
    cer_votacion_inscripcion=models.FileField(upload_to='certificado/', default='',blank=True,null=True)
    
    habilitado_inscripcion=models.BooleanField(default=True)
    mot_deshabilitacion=models.CharField(max_length = 200,default='',blank=True,null=True)
    
    
    
    def __unicode__(self):
        return self.codigo_inscripcion
        
    def __str__(self):
        return self.codigo_inscripcion