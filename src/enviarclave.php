<?php

namespace public;

$mensaje = ""; 

use  PHPMailer\PHPMailer\{PHPMailer, SMTP, Exception};

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonContent = file_get_contents('php://input');
    $data = json_decode($jsonContent);
    if ($data !== null) {
        // Acceder a los valores del objeto
        $correo = $data->correo;
        $clave = $data->clave;
        
        $msj = "De: Web Laboratorio del caribe sas <a href='mailto:$correo'></a><br>";
        $msj .= "Asunto: recuperacion Contraseña <br><br>";
        $msj .= "Cuerpo del mensaje:";
        $msj .= "--<p>Este mensaje se ha enviado desde WEB laboratorio del caribe, para recupera contraseña</p>";
        $msj .= '<h2>Clave para correo =  '. $correo.',  Clave = ' . $clave . '</h2>';
        $msj .= "--<p>Este mensaje se ha enviado a solicitud en pagina www.laboratoriodelcaribe.com</p>";

      
        $mail = new PHPMailer(true);

        try {
            $mail->SMTPDebug = SMTP::DEBUG_OFF;
            $mail->isSMTP();
            $mail->Host = 'smtp.serviciodecorreo.es';
            $mail->SMTPAuth = true;
            $mail->Username = 'sincelejo@laboratoriodelcaribe.com';
            $mail->Password = 'Mail2023+';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;



            $mail->CharSet = 'UTF-8'; 

            $mail->setFrom('sincelejo@laboratoriodelcaribe.com', 'Emisor');
            $mail->addAddress($correo, 'Receptor');

            $mail->isHTML(true);
            $mail->Subject = 'Formulario de contacto';
            $mail->Body = $msj;

            $mail->send();

            $mensaje = 'enviado';
        }   
        catch (Exception $e) {
            $mensaje = 'Error de envio';
        }
    } else {
        $mensaje = "Error al decodificar los datos JSON.";
    }

    $response = array("mensaje" => $mensaje);
    echo json_encode($response);
}