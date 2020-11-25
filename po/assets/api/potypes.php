<?php
    error_reporting(0);
    require_once('connection.php'); 
    $post = file_get_contents('php://input');
    $objArray = json_decode($post,true);

    $action = $objArray['params']['action'];

    $potypeObj = new POType();
    $potypeObj->$action();


    $db->close();

    class POType {
                
        function getAllPOTypes(){
            global $db;
            $sql='SELECT * FROM po_types';            
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            $rows = array();
            if ($result->num_rows > 0){
                while($r = $result->fetch_assoc()) {
                    $rows[] = $r;
                }
                echo json_encode($rows);
            } 
            else {
                //echo "no data found";
            } 
        }
        function getPOType(){
            global $db,$objArray;           
        }
        function addNewPOType(){            
        }
    
        function updatePOType(){           
        }

        function deletePOType(){           
        }
    }
    ?>