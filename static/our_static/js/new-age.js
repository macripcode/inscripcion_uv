$(document).ready(function(){
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

    /*desplegar programa academico*/
    $('.pa_desplegable').on('click', function(){
              var id_div_desplegable=$(this).attr("id");
              console.log(id_div_desplegable);
              var programa=id_div_desplegable.substring(2);
              console.log(programa);
             $('#div_des_'+programa).slideToggle();
    });

    /*fin desplegar programa academico*/
    //tooltips para campos de inscripcion//
    $('#codigo_pin').tooltip({title:"El código del pin es un valor numerico", animation:"true", delay:{show: 100, hide: 100} });
    $('#clave_pin').tooltip({title:"La clave del pin contiene numeros y letras minusculas. Debe tener 13 dígitos", animation:"true", delay:{show: 100, hide: 100} });
    //datos personales
    $('#nombre_fi_dp_up').tooltip({title:"Ingrese su nombre en letras mayusculas.", animation:"true", delay:{show: 100, hide: 100} });
    $('#apellido_fi_dp_up').tooltip({title:"Ingrese su apellido en letras mayusculas.", animation:"true", delay:{show: 100, hide: 100} });
    $('#direccion_fi_dp_up').tooltip({title:"Use CL: Calle,CRA: Carrera,TR: Transversal, DG: Diagona,AV: Avenida,AP: Autopista", animation:"true", delay:{show: 100, hide: 100} });
    $('#barrio_fi_dp_up').tooltip({title:"Seleccione de la lista.", animation:"true", delay:{show: 100, hide: 100} });
    $('#estrato_fi_dp_up').tooltip({title:"Seleccione de la lista.", animation:"true", delay:{show: 100, hide: 100} });
    $('#comuna_fi_dp_up').tooltip({title:"Seleccione de la lista.", animation:"true", delay:{show: 100, hide: 100} });
    $('#departamento_fi_dp_up').tooltip({title:"Seleccione de la lista.", animation:"true", delay:{show: 100, hide: 100} });
    $('#municipio_fi_dp_up').tooltip({title:"Seleccione de la lista.", animation:"true", delay:{show: 100, hide: 100} });
    $('#telefono_fi_dp_up').tooltip({title:"Ingrese Teléfono o celular sin guión.", animation:"true", delay:{show: 100, hide: 100} });
    $('#e-mail_fi_dp_up').tooltip({title:"Ingrese su correo electrónico.", animation:"true", delay:{show: 100, hide: 100} });
    $('#n_acudiente_fi_dp_up').tooltip({title:"Ingrese el nombre completo de su acudiente en letras mayusculas.", animation:"true", delay:{show: 100, hide: 100} });
    $('#t_acudiente_fi_dp_up').tooltip({title:"Ingrese Teléfono o celular de su acudiente sin guión.", animation:"true", delay:{show: 100, hide: 100} });
    $('#e_civil_fi_dp_up').tooltip({title:"Seleccione de la lista.", animation:"true", delay:{show: 100, hide: 100} });
    $('#n_hijos_fi_dp_up').tooltip({title:"Seleccione de la lista.", animation:"true", delay:{show: 100, hide: 100} });
    //colegio
    $('#nit_fi_dp_up').tooltip({title:"Es un numero de 12 dígitos.", animation:"true", delay:{show: 100, hide: 100} });
    //icfes
    $('#codigo_snies_fi_dp_up').tooltip({title:"Por ejemplo AC2016XXXXXXXXXX", animation:"true", delay:{show: 100, hide: 100} });
    $('#puntaje_global_fi_dp_up').tooltip({title:"Número de 0 a 500", animation:"true", delay:{show: 100, hide: 100} });
    $('#punt_mat_fi_dp_up').tooltip({title:"Número de 0 a 100.", animation:"true", delay:{show: 100, hide: 100} });
    $('#punt_lec_fi_dp_up').tooltip({title:"Número de 0 a 100.", animation:"true", delay:{show: 100, hide: 100} });
    $('#punt_soc_fi_dp_up').tooltip({title:"Número de 0 a 100.", animation:"true", delay:{show: 100, hide: 100} });
    $('#punt_nat_fi_dp_up').tooltip({title:"Número de 0 a 100.", animation:"true", delay:{show: 100, hide: 100} });
    $('#punt_ing_fi_dp_up').tooltip({title:"Número de 0 a 100.", animation:"true", delay:{show: 100, hide: 100} });
    $('#nombre_fi_ins_up').tooltip({title:"Ingrese la institución en letras mayusculas.", animation:"true", delay:{show: 100, hide: 100} });
    $('#valor_fi_ins_up').tooltip({title:"Ingrese el valor de la pensión en su ultimo año de bachillerato sin puntos o comas.", animation:"true", delay:{show: 100, hide: 100} });
    //$('#').tooltip({title:"", animation:"true", delay:{show: 100, hide: 100} });
    //$('#').tooltip({title:"", animation:"true", delay:{show: 100, hide: 100} });
    //$('#').tooltip({title:"", animation:"true", delay:{show: 100, hide: 100} });
    //$('#').tooltip({title:"", animation:"true", delay:{show: 100, hide: 100} });
    //$('#').tooltip({title:"", animation:"true", delay:{show: 100, hide: 100} });

    /*$("#nit_fi_ins_up").prop('disabled', true);
    $("#estamento_fi_ins_up").prop('disabled', true);
    $("#direccion_fi_ins_up").prop('disabled', true);
    $("#telefono_fi_ins_up").prop('disabled', true);*/



    //tooltips para campos de inscripcion//

    /*Validaciones formulario de inscripcion*/

    /*botones deshabilitados*/

    /*botones deshabilitados*/

    /*Variables para habilitar botones*/
    var codigo_lleno=false;
    var clave_lleno=false;
    var ingreso_clave=false;
    /*Variables para habilitar botones*/

    //Codigo de pin
    $('#codigo_pin').focusout( function(){
      var codigo = $('#codigo_pin').val();
      if(codigo.length == 0){
        $('#codigo_pin').addClass('sombra_gris-red');
        $('#error_input_codigo').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((codigo.length > 0) && (codigo.length < 9)){
        $('#codigo_pin').addClass('sombra_gris-red');
        $('#error_input_codigo').html("<p class='p_error'>**Debe tener 9 dígitos.</p>");
      }

      else if( parseInt(codigo) < 201600000){
        $('#codigo_pin').addClass('sombra_gris-red');
        $('#error_input_codigo').html("<p class='p_error'>**Ingrese un código valido.</p>");
      }

      else if ((codigo.length ==9) && ( parseInt(codigo) > 201600000) && ( parseInt(codigo) < 201800000) ) {
        $('#codigo_pin').addClass('sombra_gris-green');
        $('#error_input_codigo').html("<p class='p_valid'>**Valor valido.</p>");
        codigo_lleno=true;
      }
    });

    $('#codigo_pin').on('keyup',function() {
      var codigo=$("#codigo_pin").val();
      if( codigo.match(/^[0-9]+$/) == null ){
        $('#codigo_pin').addClass('sombra_gris-red');
        $('#error_input_codigo').html("<p class='p_error'>**Su valor es numerico</p>");
      }
    });
    //Codigo de pin
    //Clave de pin
    $('#clave_pin').focusout( function(){
      var clave = $('#clave_pin').val();
      if(clave.length == 0){
        $('#clave_pin').addClass('sombra_gris-red');
        $('#error_input_clave').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((clave.length > 0) && (clave.length < 13)){
        $('#clave_pin').addClass('sombra_gris-red');
        $('#error_input_clave').html("<p class='p_error'>**Debe tener 13 dígitos.</p>");
      }
      else if (clave.length == 13) {
        $('#clave_pin').addClass('sombra_gris-green');
        $('#error_input_clave').html("<p class='p_valid'>**Valor valido.</p>");
        clave_lleno=true;
      }

    });
    $('#clave_pin').on('keyup',function() {
      var clave=$("#clave_pin").val();
      if( clave.match(/^[0-9,a-z]+$/) == null ){
        $('#clave_pin').addClass('sombra_gris-red');
        $('#error_input_clave').html("<p class='p_error'>**Solo contiene letras minusculas y numeros</p>");
      }
    });
    /*/Clave de pin
    /*Formulario datos personales*/
    //btn_fi_dp_u
    /*Nombre*/
    $('#nombre_fi_dp_up').focusout( function(){
      var nombre=$("#nombre_fi_dp_up").val();
      if(nombre.length == 0){
        $('#nombre_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_nombre').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((nombre.length > 0) && (nombre.length < 2)){
        $('#nombre_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_nombre').html("<p class='p_error'>**Debe tener mínimo 2 dígitos.</p>");
      }
      else if( (nombre.length >= 2)  && (nombre.match(/^[A-Z]/) != null) ){
        $('#nombre_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_nombre').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });

    $('#nombre_fi_dp_up').on('keyup',function() {
      var nombre=$("#nombre_fi_dp_up").val();
      if( nombre.match(/^[A-Z]/) == null ){
        $('#nombre_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_nombre').html("<p class='p_error'>**Solo contiene letras mayusculas</p>");
      }
    });
    /*Nombre*/
    /*Apellido*/
    $('#apellido_fi_dp_up').focusout( function(){
      var apellido=$("#apellido_fi_dp_up").val();
      if(apellido.length == 0){
        $('#apellido_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_apellido').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((apellido.length > 0) && (apellido.length < 2)){
        $('#apellido_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_apellido').html("<p class='p_error'>**Debe tener mínimo 2 dígitos.</p>");
      }
      else if( (apellido.length >= 2) && ( apellido.match(/^[A-Z]/) != null )  ){
        $('#apellido_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_apellido').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });
    $('#apellido_fi_dp_up').on('keyup',function() {
      var apellido=$("#apellido_fi_dp_up").val();
      if( apellido.match(/^[A-Z]/) == null ){
        $('#apellido_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_apellido').html("<p class='p_error'>**Solo contiene letras mayusculas</p>");
      }
    });
    /*Apellido*/
    /*Direccion*/
    $('#direccion_fi_dp_up').focusout( function(){
      var direccion=$("#direccion_fi_dp_up").val();
      if(direccion.length == 0){
        $('#direccion_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_direccion').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((direccion.length > 0) && (direccion.length < 7)){
        $('#direccion_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_direccion').html("<p class='p_error'>**Debe tener mínimo 7 carácteres.</p>");
      }
      else if(direccion.length >= 7 ){
        $('#direccion_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_direccion').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });
    $('#direccion_fi_dp_up').on('keyup',function() {
      var direccion=$("#direccion_fi_dp_up").val();
      if( direccion.match(/^(CL|CRA|TR|DG|AV|AP)\s[0-9]{1,3}/) == null ){
        $('#direccion_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_direccion').html("<p class='p_error'>**Ingrese una dirección valida</p>");
      }
    });
    /*Direccion*/
    /*Barrio*/
    $('#barrio_fi_dp_up').focusout( function(){
      if( parseInt($('#barrio_fi_dp_up').val()) == 0){
        $('#barrio_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_barrio').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#barrio_fi_dp_up').val()) > 0){
        $('#barrio_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_barrio').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*Barrio*/
    /*estrato*/
    $('#estrato_fi_dp_up').focusout( function(){
      if( parseInt($('#estrato_fi_dp_up').val()) == 0){
        $('#estrato_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_estrato').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#estrato_fi_dp_up').val()) > 0){
        $('#estrato_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_estrato').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*estrato*/
    /*comuna*/
    $('#comuna_fi_dp_up').focusout( function(){
      if( parseInt($('#comuna_fi_dp_up').val()) == 0){
        $('#comuna_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_comuna').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#comuna_fi_dp_up').val()) > 0){
        $('#comuna_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_comuna').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*comuna*/
    /*Departamento*/
    $('#departamento_fi_dp_up').focusout( function(){
      if( parseInt($('#departamento_fi_dp_up').val()) == 0){
        $('#departamento_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_departamento').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#departamento_fi_dp_up').val()) > 0){
        $('#departamento_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_departamento').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*Departamento*/
    /*Municipio*/
    $('#municipio_fi_dp_up').focusout( function(){
      if( parseInt($('#municipio_fi_dp_up').val()) == 0){
        $('#municipio_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_municipio').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#municipio_fi_dp_up').val()) > 0){
        $('#municipio_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_municipio').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*Municipio*/
    /*telefono*/
    $('#telefono_fi_dp_up').focusout( function(){
      var telefono=$("#telefono_fi_dp_up").val();
      if(telefono.length == 0){
        $('#telefono_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_telefono').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((telefono.length > 0) && (telefono.length < 7)){
        $('#telefono_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_telefono').html("<p class='p_error'>**Debe tener mínimo 7 carácteres.</p>");
      }
      else if((telefono.length == 7)||(telefono.length == 10) ){
        $('#telefono_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_telefono').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });
    $('#telefono_fi_dp_up').on('keyup',function() {
      var telefono=$("#telefono_fi_dp_up").val();
      if( (telefono.match(/^\d{7}/) == null) || (telefono.match(/^\d{10}/) == null) ){
        $('#telefono_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_telefono').html("<p class='p_error'>**Ingrese un teléfono valido</p>");
      }
    });
    /*telefono*/
    /*e-mail*/
    $('#e-mail_fi_dp_up').focusout( function(){
      var  email=$("#e-mail_fi_dp_up").val();
      if( email.length == 0){
        $('#e-mail_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_email').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if(( email.length > 0) && ( email.length < 5)){
        $('#e-mail_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_email').html("<p class='p_error'>**Debe tener mínimo 5 carácteres.</p>");
      }
    });
    $('#e-mail_fi_dp_up').on('keyup',function() {
      var  email=$("#e-mail_fi_dp_up").val();
      if( email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) != null ){
        $('#e-mail_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_email').html("<p class='p_valid'>**Valor valido.</p>");
      }
      else{
        $('#e-mail_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_email').html("<p class='p_error'>**Ingrese un e-mail valido</p>");
      }
    });
    /*e-mail*/
    /*nombre acudiente*/
    $('#n_acudiente_fi_dp_up').focusout( function(){
      var nombre=$("#n_acudiente_fi_dp_up").val();
      if(nombre.length == 0){
        $('#n_acudiente_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_acudiente').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((nombre.length > 0) && (nombre.length < 2)){
        $('#n_acudiente_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_acudiente').html("<p class='p_error'>**Debe tener mínimo 2 dígitos.</p>");
      }
      else if((nombre.length >= 2) && ( nombre.match(/^[A-Z]/) != null ) ){
        $('#n_acudiente_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_acudiente').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });
    $('#n_acudiente_fi_dp_up').on('keyup',function() {
      var nombre=$("#n_acudiente_fi_dp_up").val();
      if( nombre.match(/^[A-Z]/) == null ){
        $('#n_acudiente_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_acudiente').html("<p class='p_error'>**Solo contiene letras mayusculas</p>");
      }
    });
    /*nombre acudiente*/
    /*telefono acudiente*/
    $('#t_acudiente_fi_dp_up').focusout( function(){
      var telefono=$("#t_acudiente_fi_dp_up").val();
      if(telefono.length == 0){
        $('#t_acudiente_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_t_acudiente').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((telefono.length > 0) && (telefono.length < 7)){
        $('#t_acudiente_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_t_acudiente').html("<p class='p_error'>**Debe tener mínimo 7 carácteres.</p>");
      }
      else if((telefono.length == 7)||(telefono.length == 10) ){
        $('#t_acudiente_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_t_acudiente').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });
    $('#t_acudiente_fi_dp_up').on('keyup',function() {
      var telefono=$("#t_acudiente_fi_dp_up").val();
      if( (telefono.match(/^\d{7}/) == null) || (telefono.match(/^\d{10}/) == null) ){
        $('#t_acudiente_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_t_acudiente').html("<p class='p_error'>**Ingrese un teléfono valido</p>");
      }
    });
    /*telefono acudiente*/
    /*Estado Civil*/
    $('#e_civil_fi_dp_up').focusout( function(){
      if( parseInt($('#e_civil_fi_dp_up').val()) == 0){
        $('#e_civil_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_e_civil').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#e_civil_fi_dp_up').val()) > 0){
        $('#e_civil_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_e_civil').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*Estado Civil*/
    /*Numero de hijos*/
    $('#n_hijos_fi_dp_up').focusout( function(){
      if( parseInt($('#n_hijos_fi_dp_up').val()) == 0){
        $('#n_hijos_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_n_hijos').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#n_hijos_fi_dp_up').val()) > 0){
        $('#n_hijos_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_n_hijos').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*Numero de hijos*/
    //Panel institucion
    /*codigo dane*/
    //#nit_fi_dp_up
    $('#nit_fi_dp_up').focusout( function(){
      var c_dane=$("#nit_fi_dp_up").val();
      if(c_dane.length == 0){
        $('#nit_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_c_dane').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((c_dane.length > 0) && (c_dane.length < 12)){
        $('#nit_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_c_dane').html("<p class='p_error'>**Debe tener 12 carácteres.</p>");
      }
      else if((c_dane.length == 12) && (c_dane.match(/^\d{12}/) != null) ){
        $('#nit_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_c_dane').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });
    $('#nit_fi_dp_up').on('keyup',function() {
      var c_dane=$("#nit_fi_dp_up").val();
      if(c_dane.match(/^\d{12}/) == null) {
        $('#nit_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_c_dane').html("<p class='p_error'>**Ingrese un código valido</p>");
      }
    });
    /*codigo dane*/
    //Panel icfes
    /*numero de registro*/
    $('#codigo_snies_fi_dp_up').focusout( function(){
      var n_registro=$("#codigo_snies_fi_dp_up").val();
      if(n_registro.length == 0){
        $('#codigo_snies_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_codigo_snies').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if((n_registro.length > 0) && (n_registro.length < 16)){
        $('#codigo_snies_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_codigo_snies').html("<p class='p_error'>**Debe tener 16 carácteres.</p>");
      }
      else if( (n_registro.length == 16) && ( n_registro.match(/^(AC2012|AC2013|AC2014|AC2015|AC2016|AC2017)\d{10}/) != null ) ){
        $('#codigo_snies_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_codigo_snies').html("<p class='p_valid'>**Valor valido.</p>");
      }

    });
    $('#codigo_snies_fi_dp_up').on('keyup',function() {
      var n_registro=$("#codigo_snies_fi_dp_up").val();
      if( n_registro.match(/^(AC2012|AC2013|AC2014|AC2015|AC2016|AC2017)\d{10}/) == null ){
        $('#codigo_snies_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_codigo_snies').html("<p class='p_error'>**Ingrese un numero de registro valido.</p>");
      }
    });
    /*numero de registro*/
    /*Puntaje Global*/
    $('#puntaje_global_fi_dp_up').focusout( function(){
      var puntaje_global=$("#puntaje_global_fi_dp_up").val();
      if(puntaje_global.length == 0){
        $('#puntaje_global_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_global').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if( parseInt(puntaje_global)>=0 && parseInt(puntaje_global)<=500 ){
        $('#puntaje_global_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_global').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    $('#puntaje_global_fi_dp_up').on('keyup',function() {
      var puntaje_global=$("#puntaje_global_fi_dp_up").val();
      if( puntaje_global.match(/^\d{3}/) == null ){
        $('#puntaje_global_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_global').html("<p class='p_error'>**Ingrese un puntaje global valido.</p>");
      }
    });
    /*Puntaje Global*/
    /*Puntajes matematicas icfes*/
    $('#punt_mat_fi_dp_up').focusout( function(){
      var puntaje=$("#punt_mat_fi_dp_up").val();
      if(puntaje.length == 0){
        $('#punt_mat_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_mat').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if( parseInt(puntaje)>=0 && parseInt(puntaje)<=100 ){
        $('#punt_mat_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_mat').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    $('#punt_mat_fi_dp_up').on('keyup',function() {
      var puntaje=$("#punt_mat_fi_dp_up").val();
      if( puntaje.match(/^\d{3}/) == null ){
        $('#punt_mat_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_mat').html("<p class='p_error'>**Ingrese un puntaje valido.</p>");
      }
    });
    /*Puntajes matematicas icfes*/
    /*Puntajes lectura icfes*/
    $('#punt_lec_fi_dp_up').focusout( function(){
      var puntaje=$("#punt_lec_fi_dp_up").val();
      if(puntaje.length == 0){
        $('#punt_lec_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_lec').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if( parseInt(puntaje)>=0 && parseInt(puntaje)<=100 ){
        $('#punt_lec_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_lec').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    $('#punt_lec_fi_dp_up').on('keyup',function() {
      var puntaje=$("#punt_lec_fi_dp_up").val();
      if( puntaje.match(/^\d{3}/) == null ){
        $('#punt_lec_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_lec').html("<p class='p_error'>**Ingrese un puntaje valido.</p>");
      }
    });
    /*Puntajes lectura icfes*/
    /*Puntajes sociales icfes*/
    $('#punt_soc_fi_dp_up').focusout( function(){
      var puntaje=$("#punt_soc_fi_dp_up").val();
      if(puntaje.length == 0){
        $('#punt_soc_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_soc').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if( parseInt(puntaje)>=0 && parseInt(puntaje)<=100 ){
        $('#punt_soc_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_soc').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    $('#punt_soc_fi_dp_up').on('keyup',function() {
      var puntaje=$("#punt_soc_fi_dp_up").val();
      if( puntaje.match(/^\d{3}/) == null ){
        $('#punt_soc_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_soc').html("<p class='p_error'>**Ingrese un puntaje valido.</p>");
      }
    });
    /*Puntajes sociales icfes*/
    /*Puntajes naturales icfes*/
    $('#punt_nat_fi_dp_up').focusout( function(){
      var puntaje=$("#punt_nat_fi_dp_up").val();
      if(puntaje.length == 0){
        $('#punt_nat_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_nat').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if( parseInt(puntaje)>=0 && parseInt(puntaje)<=100 ){
        $('#punt_nat_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_nat').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    $('#punt_nat_fi_dp_up').on('keyup',function() {
      var puntaje=$("#punt_nat_fi_dp_up").val();
      if( puntaje.match(/^\d{3}/) == null ){
        $('#punt_nat_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_nat').html("<p class='p_error'>**Ingrese un puntaje valido.</p>");
      }
    });
    /*Puntajes naturales icfes*/
    /*Puntajes ingles icfes*/
    $('#punt_ing_fi_dp_up').focusout( function(){
      var puntaje=$("#punt_ing_fi_dp_up").val();
      if(puntaje.length == 0){
        $('#punt_ing_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_ing').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if( parseInt(puntaje)>=0 && parseInt(puntaje)<=100 ){
        $('#punt_ing_fi_dp_up').addClass('sombra_gris-green');
        $('#error_input_ing').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    $('#punt_ing_fi_dp_up').on('keyup',function() {
      var puntaje=$("#punt_ing_fi_dp_up").val();
      if( puntaje.match(/^\d{3}/) == null ){
        $('#punt_ing_fi_dp_up').addClass('sombra_gris-red');
        $('#error_input_ing').html("<p class='p_error'>**Ingrese un puntaje valido.</p>");
      }
    });
    /*Puntajes ingles icfes*/
    //Panel Programa academico
    /*Programa Academico*/
    $('#p_academico_fi_dp_up').focusout( function(){
      if( parseInt($('#p_academico_fi_dp_up').val()) == 0){
        $('#p_academico_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_pa').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#p_academico_fi_dp_up').val()) > 0){
        $('#p_academico_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_pa').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*Programa Academico*/
    /*Sede*/
    $('#sede_fi_dp_up').focusout( function(){
      if( parseInt($('#sede_fi_dp_up').val()) == 0){
        $('#sede_fi_dp_up').addClass('sombra_red_select');
        $('#error_input_sede').html("<p class='p_error'>**Seleccione una opción valida</p>");
      }
      else if( parseInt($('#sede_fi_dp_up').val()) > 0){
        $('#sede_fi_dp_up').addClass('sombra_green_select');
        $('#error_input_sede').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });
    /*Sede*/
    //
    /*Panel Institucion*/
    $('#nombre_fi_ins_up').focusout( function(){
      var nombre_ins=$("#nombre_fi_ins_up").val();
      if(nombre_ins.length == 0){
        $('#nombre_fi_ins_up').addClass('sombra_gris-red');
        $('#error_input_nombre_colegio').html("<p class='p_error'>**Este campo es obligatorio.</p>");
      }
      else if( (nombre_ins.length >= 2) && ( nombre_ins.match(/^[A-Z]/) != null )  ){
        $('#nombre_fi_ins_up').addClass('sombra_gris-green');
        $('#error_input_nombre_colegio').html("<p class='p_valid'>**Valor valido.</p>");
      }
    });

    /*Panel Institucion*/

    /*autocomplete  lista de colegios*/

     $("#nombre_fi_ins_up").autocomplete({
         source:"lista_colegios/",
         mingLength:3,
     });

       $("#nombre_fi_ins_up").focusout( function(){
         var nombre_col=$("#nombre_fi_ins_up").val();

         $.ajax({
           data:{'nombre_col':nombre_col},
           url:"buscar_colegio/",
           type: "get",
           success:function(data){
             try {
               $('#nit_fi_ins_up').val(data[0].fields.codigo_colegio);
               $('#estamento_fi_ins_up').val(data[0].fields.estamento_colegio);
               $('#direccion_fi_ins_up').val(data[0].fields.direccion_colegio);
               $('#telefono_fi_ins_up').val(data[0].fields.telefono_colegio);

            } catch  (e)  {
               alert("Elija una Institucion de la lista de Sugerencias.")
            }
           },
         });

       });
       
       /*Funcion para cargar documentos*/
       $("#btn_consultar_doc_asp_op").on('click', function(){
         var codigo_asp=$("#codigo_asp_cd_op").val();

         $.ajax({
           data:{'codigo_asp':codigo_asp},
           url:"cargar_doc_asp/",
           type: "get",
           success:function(data){
             try {
               var cadena='';
               cadena+='<div class="col-sm-12"><p class="parrafo_form_operador">Documento de Identidad</p><iframe src="'+data.cedula_inscripcion+'" style="width:100%; height:500px;" frameborder="0"></iframe></div><br/>'
               cadena+='<div class="col-sm-12"><p class="parrafo_form_operador">Acta de Bachiller</p><iframe src="'+data.a_bachiller_inscripcion+'" style="width:100%; height:500px;" frameborder="0"></iframe></div><br/>'; 
               if (data.cer_votacion_inscripcion != 'empty'){
                cadena+='<div class="col-sm-12"><p class="parrafo_form_operador">Certificado de Votacion</p><iframe src="'+data.cer_votacion_inscripcion+'" style="width:100%; height:500px;" frameborder="0"></iframe></div><br/>';
               }
               cadena+='<form class="form-inline"><div class="form-group col-sm-12 text-center">'
               cadena+='<div class="espacio_formulario"></div>';
               cadena+='<a href="#" onclick="return false;" id="btn_deshabilitar_asp_op" class="col-sm-6 col-sm-offset-3 btn_pequeno btn btn-outline btn-sm">Deshabilitar Aspirante</a>';
               cadena+='</div></form>';
              
                $('#div_mostrar_documentos_asp').html(cadena);
              }catch  (e)  {
               alert("Hubo un error al cargar los documentos o no existen.")
              }
           },
         });

       });
       
        /*Termina funcion para cargar documentos*/
        
        
        /*Funcion para verificar ICFES*/
      $("#btn_consultar_icfes_asp_op").on('click', function(){
        var codigo_asp=$("#codigo_asp_icfes_cd_op").val();
        $.ajax({
          data:{'codigo_asp': codigo_asp},
          url:"cargar_icfes_asp/",
          type: "get",
          success:function(data){
            try{
               
              var respuesta = data.Answer;
              alert(respuesta);
               
              if(!respuesta.localeCompare("False")){
                 
                var cadena='';
                   
                cadena += '<table class="table table-hover table-responsive">' +
                              '<thead>' +
                              '<tr>' +
                                '<th scope="col">Materia</th> <th scope="col">Aplicacion Web</th> <th scope="col">Web Service</th>' +
                              '</tr>'+
                              '</thead>' +
                              '<tbody>' +
                              '<tr>' +
                                '<td>Puntaje Global:</td>  <td>'+ data.p_global_icfes_inscripcion + '</td>  <td>490</td>' +
                              '</tr>' +
                              '<tr>' +
                                '<td>Matematica:</td>  <td>'+ data.p_mat_icfes_inscripcion + '</td>  <td>231</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Lectura Critica:</td>  <td>'+ data.p_lec_icfes_inscripcion + '</td>  <td>231</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Sociales:</td>  <td>'+ data.p_soc_icfes_inscripcion + '</td>  <td>198</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Naturales:</td>  <td>'+ data.p_nat_icfes_inscripcion + '</td>  <td>' +data.p_nat_icfes_inscripcion+'</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Ingles:</td>  <td><strong>'+ data.p_ing_icfes_inscripcion + '</td>  <td>' + data.p_nat_icfes_inscripcion +'</td>' +
                              '</tr></tbody></table>'
              }
              else if(!respuesta.localeCompare("True")){
                
                var cadena='';
                   
                cadena += '<table class="table table-hover table-responsive">' +
                              '<thead>' +
                              '<tr>' +
                                '<th scope="col">Materia</th> <th scope="col">Aplicacion Web</th> <th scope="col">Web Service</th>' +
                              '</tr>'+
                              '</thead>' +
                              '<tbody>' +
                              '<tr>' +
                                '<td>Puntaje Global:</td>  <td>'+ data.p_global_icfes_inscripcion + '</td>  <td>'+ data.p_global_icfes_inscripcion + '</td>' +
                              '</tr>' +
                              '<tr>' +
                                '<td>Matematica:</td>  <td>'+ data.p_mat_icfes_inscripcion + '</td>  <td>'+ data.p_mat_icfes_inscripcion + '</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Lectura Critica:</td>  <td>'+ data.p_lec_icfes_inscripcion + '</td>  <td>' + data.p_lec_icfes_inscripcion + '</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Sociales:</td>  <td>' + data.p_soc_icfes_inscripcion + '</td>  <td>'+ data.p_soc_icfes_inscripcion + '</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Naturales:</td>  <td>' + data.p_nat_icfes_inscripcion + '</td>  <td>' +data.p_nat_icfes_inscripcion+'</td>' +
                              '</tr>'+
                              '<tr>' +
                                '<td>Ingles:</td>  <td><strong>'+ data.p_ing_icfes_inscripcion + '</td>  <td>' + data.p_ing_icfes_inscripcion + '</td>' +
                              '</tr></tbody></table>'
              
              }
                 
              $('#div_mostrar_icfes_asp').html(cadena);
                 
            }
               
            catch  (e)  {
              alert("Hubo un error al cargar la informacion del inscrito")
            }
            
           },
           
          error : function(xhr,errmsg,err) {
            alert("El codigo dado no corresponde a ningun inscrito");
          },

         });

       });
        
        /*Empieza funcion para deshabilitar aspirante*/
       
       
       
       
       
       $(document).on('click','#btn_deshabilitar_asp_op',function(){
         var codigo_asp=$("#codigo_asp_cd_op").val();
         //console.log(codigo_asp);

         $.ajax({
           data:{'codigo_asp':codigo_asp},
           url:"deshabilitar_asp/",
           type: "get",
           success:function(data){
             try {
               alert("El inscrito con código: "+data.codigo+" "+data.mensaje);
              }catch  (e)  {
               alert("Hubo un error al realizar la operación.")
              }
           },
         });

       });
       
        /*Termina funcion para deshabilitar aspirante*/
        
      /*Agregando clases al login*/
      $('#id_username').addClass('form-control');
      $('#id_username').attr("placeholder", "Ingrese usuario");
      
      $('#id_password').addClass('form-control');
      $('#id_password').attr("placeholder", "Ingrese Contraseña");
      /*Agregando clases al login*/
       
       
      
       
       
       
     $("#n_institucion_fi_dp_up").attr('autocomplete', 'on');
     /*Valor Pension*/
     $('#valor_fi_ins_up').focusout( function(){
       var valor_pension=$("#valor_fi_ins_up").val();
       if(valor_pension.length == 0){
         $('#valor_fi_ins_up').addClass('sombra_gris-red');
         $('#error_input_pension_colegio').html("<p class='p_error'>**Este campo es obligatorio.</p>");
       }
       else if( (parseInt(valor_pension)>=0) && (parseInt(valor_pension)<=10000000) ){
         $('#valor_fi_ins_up').addClass('sombra_gris-green');
         $('#error_input_pension_colegio').html("<p class='p_valid'>**Valor valido.</p>");
       }
     });
     $('#valor_fi_ins_up').on('keyup',function() {
       var valor_pension=$("#valor_fi_ins_up").val();
       if( valor_pension.match(/^\d{8}/) == null ){
         $('#valor_fi_ins_up').addClass('sombra_gris-red');
         $('#error_input_pension_colegio').html("<p class='p_error'>**Ingrese un valor valido.</p>");
       }
     });
     
     /*Deslizar Paneles de Inscripcion*/
     
     $('#panel_ic_ins').on('click', function(){
         $('#panel_ic_up').slideToggle();
     });
     
     $('#panel_da_ins').on('click', function(){
         $('#panel_dp_up').slideToggle();
     });
     
     $('#panel_institucion_ins').on('click', function(){
         $('#div_institucion').slideToggle();
     });
     
     $('#panel_icfes_ins').on('click', function(){
         $('#div_icfes').slideToggle();
     });
     
     $('#panel_pa_ins').on('click', function(){
         $('#div_programa_academico').slideToggle();
     });
     
     $('#panel_documentos_ins').on('click', function(){
         $('#div_documentos').slideToggle();
     });
     
     $('#panel_finalizar_ins').on('click', function(){
         $('#div_finalizar').slideToggle();
     });
     
     /*Deslizar panel recuperar contrasena login*/
     
     $('#a_olv_contrasena').on('click', function(){
         $('#div_rec_con').slideToggle();
     });
     
     /*Adiciones para las funciones de operador*/
     $(document).on('click','#des_ci_op',function(){
       $('#div_ci_op').slideToggle();
     });
     
     $(document).on('click','#btn_cerrar_ci_op',function(){
       $('#div_ci_op').slideToggle();
     });
     //funcion para deshabilitar aspirante por codigo o por cedula
     $(document).on('click','#tb_deshabilitar_ci_op',function(){
        var opcion=$('#consultar_ci_op').val();
        var parametro=$("#parametro_ci_op").val();
        
        $.ajax({
           data:{'opcion':opcion,'parametro':parametro},
           url:"deshabilitar_asp_opciones/",
           type: "get",
           success:function(data){
             try {
               alert("El inscrito con código: "+data.parametro+" "+data.mensaje);
              }catch  (e)  {
               alert("Hubo un error al realizar la operación.");
              }
           },
         });
     });

    /*operador*/
     
     /*Funcion para consultar un aspirante*/
     $("#btn_consultar_ci_op").on('click', function(){
        var opcion=$('#consultar_ci_op').val();
        var codigo_asp=$("#parametro_ci_op").val();
        
         $.ajax({
           data:{'opcion':opcion,'codigo_asp':codigo_asp },
           url:"consultar_asp/",
           type: "get",
           success:function(data){
             try {
               if (data.error == "1"){
                 alert("No hay inscritos con ese código o identificación.")
               }
               if (data.error == "0"){
                var cadena='';
                //Adicionando tabla
                cadena+='<table class="table table-hover table-responsive"><thead><tr><th>Código</th><th>Tipo ID</th><th>Número</th><th>Apellidos</th><th>Nombre</th><th>Perfíl</th><th>Deshabilitar</th></tr></thead>';
                cadena+='<tbody><tr><td><a href="#" onclick="return false;" id="des_ci_op">'+data.codigo_inscripcion+'</a></td>';
                cadena+='<td>'+data.tipo_id_inscripcion+'</td>';
                cadena+='<td><a href="#" onclick="return false;" id="des_ci_op">'+data.numero_id_inscripcion+'</a></td>';
                cadena+='<td>'+data.apellido_inscripcion+'</td>';
                cadena+='<td>'+data.nombre_inscripcion+'</td>';
                cadena+='<td><a href="#" onclick="return false;" id="des_ci_op" >Mostrar</a></td>';
                cadena+='<td><a href="#" onclick="return false;" id="tb_deshabilitar_ci_op" >Deshabilitar</a></td></tr></tbody></table>';
                
                //Desplegando Informacion de Inscrito
                
                //Panel Datos personales
                cadena+='<div id="div_ci_op"><div class="panel-primary col-sm-12 adiciones_panel"><div class="panel-heading"><h3>Datos Personales</h3></div>';
                cadena+='<div class="panel-body">';
                cadena+='<label class="col-sm-4">Código:</label>';
                cadena+='<label id="cod_as_ci_op" class="col-sm-8">'+data.codigo_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Nombre:</label>';
                cadena+='<label id="nom_as_ci_op" class="col-sm-8">'+data.nombre_inscripcion+' '+data.apellido_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Tipo ID:</label>';
                cadena+='<label id="tid_as_ci_op" class="col-sm-8">'+data.tipo_id_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Numero ID:</label>';
                cadena+='<label id="numid_as_ci_op" class="col-sm-8">'+data.numero_id_inscripcion +'</label>';
                cadena+='<label class="col-sm-4">Dirección</label>';
                cadena+='<label id="dir_as_ci_op" class="col-sm-8">'+data.direccion_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Barrio:</label>';
                cadena+='<label id="bar_as_ci_op" class="col-sm-8">'+data.barrio_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Estrato:</label>';
                cadena+='<label id="est_as_ci_op" class="col-sm-8">'+data.estrato_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Comuna:</label>';
                cadena+='<label id="com_as_ci_op" class="col-sm-8">'+data.comuna_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Departamento:</label>';
                cadena+='<label id="dep_as_ci_op" class="col-sm-8">'+data.departamento_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Municipio:</label>';
                cadena+='<label id="mun_as_ci_op" class="col-sm-8">'+data.municipio_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Teléfono:</label>';
                cadena+='<label id="tel_as_ci_op" class="col-sm-8">'+data.telefono_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">E-mail:</label>';
                cadena+='<label id="email_as_ci_op" class="col-sm-8">'+data.email_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Acudiente:</label>';
                cadena+='<label id="acud_as_ci_op" class="col-sm-8">'+data.n_acudiente_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Tel. Acudiente:</label>';
                cadena+='<label id="telacud_as_ci_op" class="col-sm-8">'+data.telefono_acudiente_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Estado Civíl:</label>';
                cadena+='<label id="ec_as_ci_op" class="col-sm-8">'+data.estado_civil_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Numero de hijos:</label>';
                cadena+='<label id="nh_as_ci_op" class="col-sm-8">'+data.n_hijos_inscripcion+'</label>';
                cadena+='</div></div>';
                
                //Panel Institucion
                cadena+='<div class="panel-primary col-sm-12 adiciones_panel"><div class="panel-heading"><h3>Institución</h3></div><div class="panel-body">';
                cadena+='<label class="col-sm-4">Código:</label>';
                cadena+='<label id="codcol_as_ci_op" class="col-sm-8">'+data.codigo_col_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Nombre:</label>';
                cadena+='<label id="nomcol_as_ci_op" class="col-sm-8">'+data.nombre_col_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Estamento:</label>';
                cadena+='<label id="estcol_as_ci_op" class="col-sm-8">'+data.estamento_col_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Valor Pensión:</label>';
                cadena+='<label id="valorcol_as_ci_op" class="col-sm-8">'+data.valor_p_col_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Dirección:</label>';
                cadena+='<label id="dircol_as_ci_op" class="col-sm-8">'+data.direccion_col_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Teléfono:</label>';
                cadena+='<label id="numcol_as_ci_op" class="col-sm-8">'+data.telefono_col_inscripcion+'</label>';
                cadena+='</div></div>';
                
                //Panel ICFES
                cadena+='<div class="panel-primary col-sm-12 adiciones_panel"><div class="panel-heading"><h3>ICFES</h3></div><div class="panel-body">';
                cadena+='<label class="col-sm-4">Registro ICFES:</label>';
                cadena+='<label id="regicf_as_ci_op" class="col-sm-8">'+data.registro_icfes_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Promedio Global:</label>';
                cadena+='<label id="promglo_as_ci_op" class="col-sm-8">'+data.p_global_icfes_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Matemática:</label>';
                cadena+='<label id="puntmat_as_ci_op" class="col-sm-8">'+data.p_mat_icfes_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Lectura Crítica:</label>';
                cadena+='<label id="puntlec_as_ci_op" class="col-sm-8">'+data.p_lec_icfes_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Ciencias Sociales:</label>';
                cadena+='<label id="puntsoc_as_ci_op" class="col-sm-8">'+data.p_soc_icfes_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Ciencias Naturales:</label>';
                cadena+='<label id="puntnat_as_ci_op" class="col-sm-8">'+data.p_nat_icfes_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Inglés:</label>';
                cadena+='<label id="punting_as_ci_op" class="col-sm-8">'+data.p_ing_icfes_inscripcion+'</label>';
                cadena+='</div></div>';
                
                //Panel Programa Academico
                cadena+='<div class="panel-primary col-sm-12 adiciones_panel"><div class="panel-heading"><h3>Programa Académico</h3></div><div class="panel-body">';
                cadena+='<label class="col-sm-4">Programa Académico:</label>';
                cadena+='<label id="regicf_as_ci_op" class="col-sm-8">'+data.p_academico_inscripcion+'</label>';
                cadena+='<label class="col-sm-4">Sede:</label>';
                cadena+='<label id="promglo_as_ci_op" class="col-sm-8">'+data.sede_p_inscripcion+'</label>';
                cadena+='</div></div>';
                
                //Adicionando boton cerrar
                
                cadena+='<form class="form-inline col-sm-12"><div class="form-group col-sm-12 text-center">';
                cadena+='<a href="#" onclick="return false;" id="btn_cerrar_ci_op" class="col-sm-6 col-sm-offset-3 btn_pequeno btn btn-outline btn-sm">Cerrar</a>';
                cadena+='</div></form></div>';
                
                $('#mostrar_resultado_inscrito').html(cadena);
                 
                 /*
                 
                 */
               }
               
               
               
              }catch  (e)  {
               alert("Hubo un error al consultar.");
              }
           }, 
         });

       });
       
       /*Funcion Generar admitidos*/
       
       $("#btn_generar_admitidos_ga_op").on('click', function(){
         
         var cod_pa=$("#select_programa_ga_op").val();
         
         $.ajax({
           data:{'cod_pa': cod_pa},
           url:"generar_admitidos_pa/",
           type: "get",
           success:function(data){
             try {
               if(data.error=='0'){
                 $('#mostrar_lista_admitidos').html(data.mensaje);
               }
               if(data.error=='1'){
                 alert(data.mensaje);
               }
                 
              }catch  (e)  {
               //alert("Hubo un error al cargar los datos.")
              }
           },
         });

       });
       
       /*Funcion Generar admitidos*/
       
       
       
       
       $('#btn_mostrar_admitidos_up_enlace').on('click', function(){
         $('#panel_mlis_up').slideToggle();
       });
       
       
       
       $('#btn_mostrar_admitidos_up').on('click', function(){
         var cod_plan=$('#select_programa_ga_up').val();
         
         $.ajax({
           data:{'cod_plan': cod_plan},
           url:"mostrar_admitidos/",
           type: "get",
           success:function(data){
             try {
               if(data.error=='0'){
                 $('#mostrar_lista_admitidos_up').html(data.mensaje);
               }
               if(data.error=='1'){
                 alert(data.mensaje);
               }
                 
              }catch  (e)  {
               //alert("Hubo un error al cargar los datos.")
              }
           },
         });
         
       });
       
       
       
       /*Funcion cambiar datos usuarios*/
       $('#btn_buscar_usuario_cdp_op').on('click', function(){
         
         var id_usuario=$('#id_usuario_cdp_op').val();
         
         $.ajax({
           data:{'id_usuario': id_usuario},
           url:"consultar_usuario/",
           type: "get",
           success:function(data){
             try {
               if(data.error=='0'){
                 alert(data.mensaje);
               }
               if(data.error=='1'){
                 //alert(data.mensaje);
               }
                 
              }catch  (e)  {
               //alert("Hubo un error al cargar los datos.")
              }
           },
         });
         
       });
       
       /*Funcion cambiar datos usuarios*/
       
       
       /*Funcion Generar admitidos*/
       
      
      // Funciones para las graficas // 
      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawTitleSubtitle);
      
      $(document).on('click','#btn_pro_materias_pa',function(){
         var programa=$("#select_programa_pro_materias").val();
         //console.log(codigo_asp);

         $.ajax({
           data:{'programa':programa},
           url:"promedio_asignaturas/",
           type: "get",
           
           success: function(data){
             
             try {
               
               var dataG = google.visualization.arrayToDataTable([
                  ['Materias', 'Inscritos', 'Admitidos'],
                  ['Lectura Critica', data.lectura_critica_inscrito, 0], 
                  ['Matematicas', data.matematica_inscrito, 0],
                  ['Sociales y Ciudadanas', data.sociales_inscrito, 0],
                  ['Ciencias Naturales', data.naturales_inscrito, 0],
                  ['Ingles', data.ingles_inscrito, 0]
                ]);
               
               var options = {
                  chart: {
                    title: 'Promedio de las asignaturas del icfes por programa',
                    //subtitle: 'Based on most recent and previous census data'
                  },
                  hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                  },
                  vAxis: {
                    title: 'Materias'
                  },
                  bars: 'horizontal'
                };
               
               var material = new google.charts.Bar(document.getElementById('promedio_asignaturas_chart_div'));
               material.draw(dataG, options);
               
              }catch(e){
                
               alert("Hubo un error al realizar la operación.")
              }
           },
         });
         
      }); 
         
      $("#btn_cantidad_inscritos_pa2").on('click', function(){
        
        var programa=$('#select_programa_cantidad_inscritos').val();
        
        $.ajax({
           data:{'programa':programa},
           url:"incritos_por_programas/",
           type: "get",
           success:function(data){
             try {
               
               var mensaje = '<br><br><br><label class="col-sm-6"> Se inscribieron un total de: </label> <input class="form-control input_alt col-sm-4" id="parametro_ci_op" value=' + data.mensaje + '>';
               
               $('#cantidad_de_inscritos_div').html(mensaje);
               
              }catch  (e)  {
               alert("Hubo un error al realizar la operación.");
              }
           },
         });
         
      });

      
      $("#btn_estrato_social_pa_2").on('click', function(){
        
        var programa=$('#select_programa_estrato_social_2').val();
        $.ajax({
           data:{'programa':programa},
           url:"estrato_social_por_programas/",
           type: "get",
           success:function(data){
             try {
               
               google.charts.load('current', {'packages':['corechart']});
               var dataG = google.visualization.arrayToDataTable([
                  ['Estrato', 'Cantidad Aspirantes'],
                  ['Estrato 1',     data.estrato_1],
                  ['Estrato 2',      data.estrato_2],
                  ['Estrato 3',  data.estrato_3],
                  ['Estrato 4', data.estrato_4],
                  ['Estrato 5',    data.estrato_5],
                  ['Estrato 6',    data.estrato_6]
                ]);
          
                var options = {
                  title: 'Estratos Sociales'
                };
          
                var chart = new google.visualization.PieChart(document.getElementById("piechart_estrato_social"));
          
                chart.draw(dataG, options);
               
              }catch  (e)  {
               alert(e.message);
              }
           },
         });
         
      });
      
      
      $("#btn_deshabilitados_pa_2").on('click', function(){
        
        var programa=$('#select_programa_deshabilitados_pa_2').val();
        $.ajax({
           data:{'programa':programa},
           url:"deshabilitados_pa/",
           type: "get",
           success:function(data){
             try {
               
               google.charts.load('current', {'packages':['corechart']});
               var dataG = google.visualization.arrayToDataTable([
                  ['Estado', 'Cantidad Aspirantes'],
                  ['Habilitados',     data.habilitados],
                  ['Deshabilitados',      data.deshabilitados]
                ]);
          
                var options = {
                  title: 'Estado aspirantes'
                };
          
                var chart = new google.visualization.PieChart(document.getElementById("piechart_deshabilitados_pa"));
          
                chart.draw(dataG, options);
               
              }catch  (e)  {
               alert("Hubo un error al realizar la operación.");
              }
           },
         });
         
      });
      
      
      $("#btn_dep_aspirantes_2").on('click', function(){
        
        var programa =$('#select_dep_aspirantes_2').val();
        $.ajax({
           data:{'programa': programa},
           url:"departamentos_aspirantes/",
           type: "get",
           success:function(data){
             try {
               
               google.charts.load('current', {'packages':['corechart']});
               var dataG = google.visualization.arrayToDataTable([
                  ['Departamento', 'Cantidad Aspirantes'],
                  ['Valle del Cauca',     data.valle_cauca],
                  ['Choco',      data.choco],
                  ['Antioquia',      data.antioquia],
                  ['Cundinamarca',      data.cundinamarca],
                  ['Narino',      data.narino],
                  ['Cauca',      data.cauca],
                  ['Otro',      data.otro]
                ]);
          
                var options = {
                  title: 'Departamentos'
                };
          
                var chart = new google.visualization.PieChart(document.getElementById("piechart_dep_aspirantes"));
          
                chart.draw(dataG, options);
               
              }catch  (e)  {
               alert("Hubo un error al realizar la operación.");
              }
           },
         });
         
      });

}); // End of use strict

var acc = document.getElementsByClassName("accordion");
     var i;
     for (i = 0; i < acc.length; i++) {
         acc[i].onclick = function(){
             this.classList.toggle("active");
             this.nextElementSibling.classList.toggle("show");
         }
}