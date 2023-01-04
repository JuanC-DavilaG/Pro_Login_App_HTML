<?php

    $ususario = $_POST["user"];
    $contraseña = $_POST["pass"];

    if($ususario=="juan" && $contraseña=="12345678"){
        echo json_encode(array('success' => 1));
    }

    else{
        echo json_encode(array('success' => 0));

    }

?>

