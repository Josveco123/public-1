<?php
$mensaje = ""; // Inicializar la variable

include("../src/abrirBDdatos.php"); // Mover la declaración include fuera del bloque if para establecer la conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $datosI = json_decode($json);

    // Verifica que los datos sean válidos y existan las propiedades requeridas
    if (
        isset($datosI->correo) &&
        isset($datosI->codigo) &&
        isset($datosI->fecha) &&
        isset($datosI->control)
    ) {
        $correo = $datosI->correo;
        $codigo = $datosI->codigo;
        $fecha = $datosI->fecha;
        $control = $datosI->control;

        $query = "INSERT INTO $tabla_db1 (correo, cod_producto, fechavisita, control) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($conexion, $query);

        mysqli_stmt_bind_param($stmt, "ssss", $correo, $codigo, $fecha, $control);

        // Verificar si hubo un error al preparar el statement
        if (mysqli_stmt_execute($stmt)) {
            $mensaje = "insertado";
        } else {
            $mensaje = "error";
        }
    }

    // Cerrar el statement
    mysqli_stmt_close($stmt);
} else {
    $mensaje = "InvalidoDatosI";
}


// Cerrar la conexión a la base de datos después del bloque if
include("cerrarconexion.php");

// Crear un array asociativo con la propiedad "mensaje"
$response = array("mensaje" => $mensaje);

// Codificar la respuesta en JSON y enviarla de vuelta al cliente
echo json_encode($response);
?>