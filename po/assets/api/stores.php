<?php
    error_reporting(0);
    require_once('connection.php'); 
    $post = file_get_contents('php://input');
    $objArray = json_decode($post,true);

    $action = $objArray['params']['action'];

    $storeObj = new Store();
    $storeObj->$action();
  //  

    class Store {
        
        function getAllStores(){
            global $db;
            $sql='SELECT * FROM Store_Numbers';
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
        function getStore(){
            global $db,$objArray;
            $storeID = $objArray['params']['storeID'];
            $sql="SELECT * FROM Store_Number WHERE ID = $storeID";
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

        function addNewStore(){
            
            global $objArray,$db;

            $storeObj = $objArray['params']['store'];
            $storeObj['StoreName']= mysqli_real_escape_string($db, $storeObj['StoreName']);

            $sql="INSERT INTO Stores ( StoreName, StoreNumber) VALUES ('" . $storeObj['StoreName']. "','" . $storeObj['StoreNumber']. "');";
            // $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
            // fwrite($myfile, $sql);
            // fclose($myfile);

            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "Add Success";
            }
            
        }
        function updateStore(){
            global $objArray,$db;
            
            $storeObj = $objArray['params']['store'];
            $storeObj['StoreName']= mysqli_real_escape_string($db, $storeObj['StoreName']);
            
            $sql="UPDATE Stores SET StoreName ='" .$storeObj['StoreName']. "', StoreNumber = '". $storeObj['StoreNumber']. "' where ID=".$storeObj['ID'].";";
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }
        // check if used in PO
        function deleteStore(){
            global $objArray,$db;
            $storeObj = $objArray['params']['store'];
            $sql ="Delete from Stores Where ID =".$storeObj['ID'].";"; 
            $result = mysqli_query($db, $sql);
            if($result == false){
                print "Fail Query";
            }   
            else {
                print true; //delete success
            }
        }

    }
   
        
    $db->close();

?>