
<?php
$servername = "127.0.0.1";
$database = "u582059653_ldelcaribe";
$username = "u582059653_userldc";
$password = "Oscar123";

// Create connection
$conexion = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conexion) {
    die("Error al conectar con la base de datos: " . mysqli_connect_error());
}

    $tabla_db1 = "users";
?>
