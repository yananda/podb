<?php

    $mysqli_hostname = "localhost";
    $mysqli_user = "root";
    $mysqli_password = '';
    $mysqli_database = "podb";
    
    // Create connection
    $db = new mysqli($mysqli_hostname, $mysqli_user, $mysqli_password, $mysqli_database);
    // Check connection
    if ($db->connect_error) {
        echo "Fail to connect DB";
        die("Connection failed: " . $db->connect_error);
    } 
    else {
      //  echo "Success connected to DB";
    }
    
?>