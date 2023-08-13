<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GereraDatos</title>
   <style>
        .contenedor {
            margin-top: 5vw;
            display: flex;
            flex-direction: column;
            padding: 15px;
            width: 30vw;
            height: 20vh;
            margin-left: 30px;
            background-color: rgb(224, 217, 217);
        }

        h1 {
            margin-top: 0;
            width: 100%;
            color: red;
            font-size: 40px;
            align-items: center;
            text-align: center;
            border: 2px solid white;
        }

        form {
            margin-top: 0;
            width: 100%;
            height: 90%;
            align-items: center;
            text-align: center;
            justify-content: center;
            border: 1px solid rgb(252, 247, 247);
            background-color: rgb(221, 218, 218);
        }

        .seleccion {
            font-size: 20px;
        }

        input {
            margin-left: 20px;
            width: 120px;
            height: 20px;
            font-size: 15px;
        }

        button {
            padding: 6px;
            margin-top: 15px;
            border-radius: 25px;
            font-size: 15px;
            background-color: red;
            color: white;
            font-weight: bold;
        }
        button:hover {
            background-color: rgb(243, 191, 191);
            color: rgb(71, 13, 233);
            border-color: blue;
        }

    </style>
</head>

<body>
    <div class="contenedor">
        <h1>Generar Reporte</h1>
        <form action="" method="post">
            <label class="seleccion" for="fecha">Selecciona una fecha a extraer:</label>
            <input type="date" id="fecha" name="fecha" required> <br />
            <button type="submit">Generar Reporte</button>
        </form>
    </div>

 <?php
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

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


// Crear archivo adjunto

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fechaSeleccionada = $_POST["fecha"];
    $añoDeseado = date("Y", strtotime($fechaSeleccionada));
    $mesDeseado = date("m", strtotime($fechaSeleccionada));
    
$mensaje ="";
$query = "
SELECT
    u.correo,
    u.razonsocial,
    u.ciudad,
    u.whatsapp,
    d.cod_producto,
    STR_TO_DATE(d.fechavisita, '%d/%m/%Y, %h:%i:%s %p') AS fechavisita,
    d.control
FROM datos d
LEFT JOIN users u ON d.correo = u.correo
WHERE YEAR(STR_TO_DATE(d.fechavisita, '%d/%m/%Y, %h:%i:%s %p')) = $añoDeseado
    AND MONTH(STR_TO_DATE(d.fechavisita, '%d/%m/%Y, %h:%i:%s %p')) = $mesDeseado
ORDER BY d.control, d.cod_producto;
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

   $mensaje .= "Datos CSV generados. y ";

 } else {
    $mensaje .= "No se encontraron resultados ";
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

    $mensaje .= 'Archivo enviado a su correo ';
    
} catch (Exception $e) {
    $mensaje .= 'Error de envío';
}

$response = array("mensaje" => $mensaje);
//echo json_encode($response);
echo "<script>alert('¡Su informacion fue enviada al correo!');</script>";
}
?>
</body>
</html>