<?php

    require_once('connection.php'); 
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata)) {
        global $db;
        $pwd = mysqli_real_escape_string($db, trim($request->password));
        $email = mysqli_real_escape_string($db, trim($request->username));
        $sql='';
        $sql = "SELECT * FROM users where email='$email' and pwd='$pwd'";
        if($result = mysqli_query($db,$sql)) {
            $rows = array();
            while($row = mysqli_fetch_assoc($result)) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else{
            http_response_code(404);
        }
    }

?>