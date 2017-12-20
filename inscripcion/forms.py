from django import forms
from .models import Barrio, Colegio, Inscripcion
from captcha.fields import ReCaptchaField
from django.http import HttpResponse
import json
import urllib2


class FormWithCaptcha(forms.Form):
    captcha_field = ReCaptchaField(
        public_key='6LeA3QoUAAAAAMZcQEiqSuKivtecER64Mve2xPJe',
        private_key='6LeA3QoUAAAAACIjrQ8p1pcqMY6hszx_jpPi7TNX',
        use_ssl=True,
        attrs={'theme' : 'light'},
    )


class Inscripcion_Form(forms.ModelForm):
    
    class Meta:
        model = Inscripcion
        fields=["codigo_inscripcion",
                "clave_inscripcion",
                "tipo_id_inscripcion",
                "numero_id_inscripcion",
                "nombre_inscripcion",
                "apellido_inscripcion",
                "direccion_inscripcion",
                "barrio_inscripcion",
                "estrato_inscripcion",
                "comuna_inscripcion",
                "departamento_inscripcion",
                "municipio_inscripcion",
                "telefono_inscripcion",
                "email_inscripcion",
                "n_acudiente_inscripcion",
                "telefono_acudiente_inscripcion",
                "estado_civil_inscripcion",
                "n_hijos_inscripcion",
                "codigo_col_inscripcion",
                "nombre_col_inscripcion",
                "estamento_col_inscripcion",
                "valor_p_col_inscripcion",
                "direccion_col_inscripcion",
                "telefono_col_inscripcion",
                "registro_icfes_inscripcion",
                "p_global_icfes_inscripcion",
                "p_mat_icfes_inscripcion",
                "p_lec_icfes_inscripcion",
                "p_soc_icfes_inscripcion",
                "p_nat_icfes_inscripcion",
                "p_ing_icfes_inscripcion" ,
                "p_academico_inscripcion",
                "sede_p_inscripcion",
                "cedula_inscripcion",
                "a_bachiller_inscripcion",
                "cer_votacion_inscripcion"]
                
                
    def clean_codigo_inscripcion(self):

        codigo = self.cleaned_data.get('codigo_inscripcion')
        
        #Web Service
        url = 'http://wwwproyecto-redes2016.rhcloud.com/banco/' + codigo
        serialized_data = urllib2.urlopen(url).read()
        dataWebService = json.loads(serialized_data)
        
        if dataWebService["Answer"] is "True":
            
            return codigo
            
        else:
            
            raise forms.ValidationError("El codigo pin no ha sido comprado")
            