<?php
// Datos de conexión
$servername = "127.0.0.1";
$database = "u582059653_ldelcaribe";
$username = "u582059653_userldc";
$password = "Oscar123";

// Crear la conexión
$conexion = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conexion) {
    
    die("Error al conectar con la base de datos: " . mysqli_connect_error());
}
 $tabla1="users";
 $tabla2="datos";
 
// consulta se comenta por si mas adelante se usa

$query = " 
SELECT
    CASE WHEN d.control = lag_control THEN ' ' ELSE u.correo END AS correo,
    COALESCE(CASE WHEN d.control = lag_control THEN ' ' ELSE u.razonsocial END, '') AS razonsocial,
    COALESCE(CASE WHEN d.control = lag_control THEN ' ' ELSE u.ciudad END, '') AS ciudad,
    COALESCE(CASE WHEN d.control = lag_control THEN ' ' ELSE u.whatsapp END, '') AS whatsapp,
    d.cod_producto,
    d.fechavisita,
    d.control
FROM (
    SELECT
        d.*,
        LAG(d.control) OVER (ORDER BY d.control, d.fechavisita) AS lag_control
    FROM datos d
) d
LEFT JOIN users u ON d.correo = u.correo
ORDER BY d.control, d.fechavisita;
";

$result = $conexion->query($query);


if ($result->num_rows > 0) {
    // Definir el nombre del archivo CSV
    $csv_file_path = 'datosOscar.csv';

    // Abrir el archivo en modo escritura
    $csv_file = fopen($csv_file_path, 'w');

    // Agregar encabezados al archivo CSV
    fputcsv($csv_file, ['Email', 'Razón Social', 'Ciudad', 'WhatsApp', 'Código', 'Fecha', 'Control']);

    // Agregar datos al archivo CSV
    while ($row_data = $result->fetch_assoc()) {
        fputcsv($csv_file, [
            $row_data["correo"],
            $row_data["razonsocial"],
            $row_data["ciudad"],
            $row_data["whatsapp"],
            $row_data["cod_producto"],
            $row_data["fechavisita"],
            $row_data["control"]
        ]);
    }
       
    // Cerrar el archivo
    
    fclose($csv_file);

    echo "Datos exportados a datosOscar.CSV ";
} else {
    echo "No se encontraron resultados.";
}

$conexion->close();

// enviar correo a Oscar

$correoDestino = 'josveco@gmail.com';

$msj = "De: Web Laboratorio del caribe sas <a href='mailto:$correoDestino'></a><br>";
$msj .= "Asunto: Envío información web <br><br>";
$msj .= "Cuerpo del mensaje:";
$msj .= "--<p>Este mensaje se ha enviado desde WEB laboratorio del caribe, visitas WEB</p>";
$msj .= '<h2>Datos Adjuntos al correo =  '. $correoDestino.'</h2>';
$msj .= "--<p>Este mensaje se ha enviado a solicitud en pagina www.laboratoriodelcaribe.com</p>";

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

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
    $mail->addAddress($correoDestino, 'Receptor');

    $mail->isHTML(true);
    $mail->Subject = 'Formulario de contacto';
    $mail->Body = $msj;

    // Agregar el archivo adjunto
    $archivoAdjunto = 'datosOscar.csv'; // Ruta completa al archivo
    $mail->addAttachment($archivoAdjunto);

    $mail->send();

    $mensaje = 'Archivo enviado a su correo ';
} catch (Exception $e) {
    $mensaje = 'Error de envío';
}

$response = array("mensaje" => $mensaje);
echo json_encode($response);
?>