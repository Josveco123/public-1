<?php

namespace phpldc;

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
        $nombre = $data->name;
        $email = $data->email;
        $asunto = $data->phone;
        $mensaje = $data->message;
        
        $msj = "De: $nombre <a href='mailto:$email'>$email</a><br>";
        $msj .= "Asunto: $asunto<br><br>";
        $msj .= "Cuerpo del mensaje:";
        $msj .= '<p>' . $mensaje . '</p>';
        $msj .= "--<p>Este mensaje se ha enviado desde un formulario de contacto de Código de programación.</p>";

      
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
            $mail->addAddress('comercial@laboratoriodelcaribe.com', 'Receptor');

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