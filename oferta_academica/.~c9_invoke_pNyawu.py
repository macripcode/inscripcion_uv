# -*- coding: utf-8 -*-
from django.shortcuts import render, render_to_response
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseForbidden
from django.template import loader,  RequestContext
from calendario.models import Calendario
from .models import Facultad,Programa_Academico
from inscripcion.forms import Inscripcion_Form,FormWithCaptcha
from inscripcion.models import Barrio
from inscripcion.models import Colegio
from inscripcion.models import Inscripcion
from django import forms
import json
from django.core import serializers
from django.core.urlresolvers import reverse



def index(request):
    
    #Consultas a la base de datos: 
    
    #Trae el Calendario
    calendario = Calendario.objects.all()[0]
    
    #Trae los Programas Academicos y Facultades
    all_facultad=Facultad.objects.all()
    all_pa=Programa_Academico.objects.all()
    
    #Formularios
    
    form_inscripcion = Inscripcion_Form(request.POST or None, request.FILES)
    captcha = FormWithCaptcha()
    
    #Informacion Pin
    form_inscripcion.fields['codigo_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'codigo_pin','placeholder':'Ingrese el código de su pin'}
    form_inscripcion.fields['clave_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'clave_pin','placeholder':'Ingrese la clave de su pin'}
    #Informacion Personal
    form_inscripcion.fields['tipo_id_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'tipo_id_fi_dp_up'}
    form_inscripcion.fields['numero_id_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'n_identificacion_fi_dp_up','placeholder':'Identificación '}
    form_inscripcion.fields['nombre_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'nombre_fi_dp_up','placeholder':'Ingrese su nombre'}
    form_inscripcion.fields['apellido_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'apellido_fi_dp_up','placeholder':'Ingrese su apellido'}
    form_inscripcion.fields['direccion_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'direccion_fi_dp_up','placeholder':'Ingrese su dirección'}
    form_inscripcion.fields['barrio_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'barrio_fi_dp_up'}
    form_inscripcion.fields['estrato_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'estrato_fi_dp_up'}
    form_inscripcion.fields['comuna_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'comuna_fi_dp_up'}
    form_inscripcion.fields['departamento_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'departamento_fi_dp_up'}
    form_inscripcion.fields['municipio_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'municipio_fi_dp_up'}
    form_inscripcion.fields['telefono_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'telefono_fi_dp_up','placeholder':'Teléfono'}
    form_inscripcion.fields['email_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'e-mail_fi_dp_up','placeholder':'Ingrese su e-mail'}
    form_inscripcion.fields['n_acudiente_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'n_acudiente_fi_dp_up','placeholder':'Acudiente'}
    form_inscripcion.fields['telefono_acudiente_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'t_acudiente_fi_dp_up','placeholder':'Teléfono Acudiente'}
    form_inscripcion.fields['estado_civil_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'e_civil_fi_dp_up'}
    form_inscripcion.fields['n_hijos_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'n_hijos_fi_dp_up'}
    #Colegio
    form_inscripcion.fields['codigo_col_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'nit_fi_ins_up','placeholder':'Código DANE'}
    form_inscripcion.fields['nombre_col_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'nombre_fi_ins_up','placeholder':'Nombre Institución'}
    form_inscripcion.fields['estamento_col_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'estamento_fi_ins_up','placeholder':'Estamento Institución'}
    form_inscripcion.fields['valor_p_col_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'valor_fi_ins_up','placeholder':'Valor Pensión'}
    form_inscripcion.fields['direccion_col_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'direccion_fi_ins_up','placeholder':'Dirección'}
    form_inscripcion.fields['telefono_col_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'telefono_fi_ins_up','placeholder':'Teléfono'}
    #ICFES
    form_inscripcion.fields['registro_icfes_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'codigo_snies_fi_dp_up','placeholder':'Código SNIES'}
    form_inscripcion.fields['p_global_icfes_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'puntaje_global_fi_dp_up','placeholder':'Puntaje Global'}
    form_inscripcion.fields['p_mat_icfes_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'punt_mat_fi_dp_up','placeholder':'Puntaje Matemáticas'}
    form_inscripcion.fields['p_lec_icfes_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'punt_lec_fi_dp_up','placeholder':'Puntaje Lectura Crítica'}
    form_inscripcion.fields['p_soc_icfes_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'punt_soc_fi_dp_up','placeholder':'Puntaje Sociales y Ciudadanas'}
    form_inscripcion.fields['p_nat_icfes_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'punt_nat_fi_dp_up','placeholder':'Puntaje Ciencias Naturales'}
    form_inscripcion.fields['p_ing_icfes_inscripcion'].widget.attrs = {'class':'form-control sombra_gris','id':'punt_ing_fi_dp_up','placeholder':'Puntaje Inglés'}
    #Programa Academico
    form_inscripcion.fields['p_academico_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'p_academico_fi_dp_up'}
    form_inscripcion.fields['sede_p_inscripcion'].widget.attrs = {'class':'form-control sombra_gris_select','id':'sede_fi_dp_up'}
    #Documentos
    form_inscripcion.fields['cedula_inscripcion'].widget.attrs = {'id':'subir_cc'}
    form_inscripcion.fields['a_bachiller_inscripcion'].widget.attrs = {'id':'subir_acta'}
    form_inscripcion.fields['cer_votacion_inscripcion'].widget.attrs = {'id':'subir_c_votacion'}
   
    context = {
        
        #Informacion Calendario
        "inicioPin" : calendario.inicioPin,
        "finPin" : calendario.finPin,
        "lugarPin" : calendario.lugarPin,
        "limiteInscripcion" : calendario.limiteInscripcion,
        "entregaDocumentos" : calendario.entregaDocumentos,
        "resultadosAdmitidos" : calendario.resultadosAdmitidos,
        
        #Programas Academicos
        'all_facultad': all_facultad,
        'all_pa': all_pa,
        
        #Formulario
        "form_inscripcion" : form_inscripcion,
        "captcha":captcha,
    }
    
    return render(request,"base.html", context)
    
    
def buscar_colegio(request):
    
    nombre_colegio=request.GET['nombre_col']
    colegio=Colegio.objects.filter(nombre_colegio=nombre_colegio)
    data = serializers.serialize('json', colegio,fields=('codigo_colegio','nombre_colegio','estamento_colegio','direccion_colegio','telefono_colegio'))
    mimetype="application/json"
    
    return HttpResponse(data,mimetype)
    
    
def lista_colegios(request):
    
    if request.is_ajax():
        palabra=request.GET.get('term','')
        colegios=Colegio.objects.filter(nombre_colegio__contains=palabra)
        results=[]
        for colegio in colegios:
            colegio_json={}
            colegio_json['label']=colegio.nombre_colegio
            colegio_json['value']=colegio.nombre_colegio
            #colegio_json['value']=colegio.direccion_colegio
            #colegio_json['telefono']=colegio.telefono_colegio
            #colegio_json['estamento']=colegio.estamento_colegio
            results.append(colegio_json)
        data_json=json.dumps(results)
    else:
        data_json = 'fail'
    mimetype="application/json"
    return HttpResponse(data_json,mimetype)
    
        
        
#---Queda pendiente que no se salga de la pagina pero saque el alert---- 
def realizar_inscripcion(request):
    captcha=FormWithCaptcha(request.POST)
    formulario_Inscrito = Inscripcion_Form(request.POST, request.FILES)
    mensaje=""
    if captcha['captcha_field'].value()[0]=='':
        mensaje="Por Favor verifique que es un humano."
    else:
        if formulario_Inscrito.is_valid():
            formulario_Inscrito.save()
            mensaje="Usted se ha inscrito exitosamente"
        else:
            mensaje="El formulario no ha sido llenado correctamente"
            
        
    return render_to_response('popup_inscripcion.html', { 'mensaje' : mensaje})