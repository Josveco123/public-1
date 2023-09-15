<?php

namespace public;

$mensaje = "";
$debugMessages = array(); // Arreglo para almacenar mensajes de depuración

use PHPMailer\PHPMailer\{PHPMailer, SMTP, Exception};

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $debugMessages[] = "POST request received"; // Agregar mensaje al arreglo

    $jsonContent = file_get_contents('php://input');
    $data = json_decode($jsonContent);
    if ($data !== null) {
        $debugMessages[] = "JSON data decoded"; // Agregar mensaje al arreglo

        // Acceder a los valores del objeto
        $correo = $data->correo;
        $clave = $data->clave;

        $msj = "De: Web Laboratorio del caribe sas <a href='mailto:$correo'></a><br>";
        $msj .= "Asunto: recuperacion Contraseña <br><br>";
        $msj .= "Cuerpo del mensaje:";
        $msj .= "--<p>Este mensaje se ha enviado desde WEB laboratorio del caribe, para recupera contraseña</p>";
        $msj .= '<h2>Clave para correo =  ' . $correo . ',  Clave = ' . $clave . '</h2>';
        $msj .= "--<p>Este mensaje se ha enviado a solicitud en pagina www.laboratoriodelcaribe.com</p>";

        $mail = new PHPMailer(true);

        try {
            $debugMessages[] = "Inside try block"; // Agregar mensaje al arreglo

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
        } catch (Exception $e) {
            $debugMessages[] = "Exception caught: " . $e->getMessage(); // Agregar mensaje al arreglo
            $mensaje = 'Error de envio';
        }
    } else {
        
        $debugMessages[] = "JSON decoding error"; // Agregar mensaje al arreglo
        $mensaje = "Error al decodificar los datos JSON.";
    }

    // Preparar la respuesta JSON combinando mensajes de depuración y el mensaje final
    $response = array("mensaje" => $mensaje, "debug" => $debugMessages);
    echo json_encode($response);
}
?>