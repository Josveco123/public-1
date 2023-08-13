<?php
$mensaje = ""; // Initialize the variable

// Include the database connection script
include("../src/abrirBDusers.php"); // Adjust the path based on your file structure

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $datosI = json_decode($json);

    // Verify that the required data properties exist
    if (
        isset($datosI->correo) &&
        isset($datosI->clave) &&
        isset($datosI->razonsocial) &&
        isset($datosI->ciudad) &&
        isset($datosI->whatsapp)
    ) {
        $correo = $datosI->correo;
        $clave = $datosI->clave;
        $razonsocial = $datosI->razonsocial;
        $ciudad = $datosI->ciudad;
        $whatsapp = $datosI->whatsapp;

        $query = "INSERT INTO $tabla_db1 (correo, clave, razonsocial, ciudad, whatsapp) VALUES (?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conexion, $query);

        mysqli_stmt_bind_param($stmt, "sssss", $correo, $clave, $razonsocial, $ciudad, $whatsapp);

        // Check if there was an error preparing the statement
        if (mysqli_stmt_execute($stmt)) {
            $mensaje = "insertado";
        } else {
            // Check if the error is due to duplicate key (Error code 1062 for duplication)
            if (mysqli_errno($conexion) === 1062) {
                $mensaje = "duplicado";
            } else {
                $mensaje = "error: " . mysqli_error($conexion); // Include the error message
            }
        }

        // Close the statement
        mysqli_stmt_close($stmt);
    } else {
        $mensaje = "InvalidoDatosI";
    }
}

// Close the database connection
include("cerrarconexion.php");

// Set the response content-type to JSON
header('Content-Type: application/json');

// Create an associative array with the "mensaje" property
$response = array("mensaje" => $mensaje);

// Encode the response as JSON and send it back to the client
echo json_encode($response);
?>