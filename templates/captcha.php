<?php
$recaptcha =$_POST['g-recaptcha_response'];
if (recaptcha!="")
{
    $secret ="6LeA3QoUAAAAACIjrQ8p1pcqMY6hszx_jpPi7TNX";
    $ip = $_SERVER['REMOTE_ADDR'];
    $var = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remote=$ip");
    $array = json_decode($var,true);
    if ($array['success']==true)
    {
        /*echo "soy un humano";*/
    }
    else
    {
        /*echo "soy un robot";*/
    }
}
else
{
    echo "rellene todos los datos por favor";
}
?>