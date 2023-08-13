<?php

$mensaje = ""; // Inicializar la variable

include("../src/abrirBDusers.php"); // Mover la declaración include fuera del bloque if para establecer la conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $datosI = json_decode($json);

    // Verifica que los datos sean válidos y existan las propiedades requeridas
    if (
        isset($datosI->correo) &&
        isset($datosI->clave) 
    ) {
        $correo = $datosI->correo;
        $clave = $datosI->clave;

        // Modificar la consulta SQL para buscar por correo y clave
        $query = "SELECT * FROM $tabla_db1 WHERE correo = ? AND clave = ?";
        $stmt = mysqli_prepare($conexion, $query);

        // Enlazar los valores de correo y clave de manera segura
        mysqli_stmt_bind_param($stmt, "ss", $correo, $clave);

        // Ejecutar la consulta preparada
        mysqli_stmt_execute($stmt);

        // Obtener el resultado de la consulta
        $resultados = mysqli_stmt_get_result($stmt);

        // Verificar si se encontraron resultados
        if (mysqli_num_rows($resultados) > 0) {
            // Usuario y clave válidos
            $mensaje = "valido";
        } else {
            // No se encontró el usuario o clave no coincide
            $mensaje = "invalido";
        }

        // Cerrar el statement
        mysqli_stmt_close($stmt);
    } else {
        $mensaje = "InvalidoDatosI";
    }
}

// Cerrar la conexión a la base de datos después del bloque if
include("cerrarconexion.php");

// Crear un array asociativo con la propiedad "mensaje"
$response = array("mensaje" => $mensaje);

// Codificar la respuesta en JSON y enviarla de vuelta al cliente
echo json_encode($response);
?>