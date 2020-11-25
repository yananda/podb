<?php

    require_once('connection.php'); 
    $post = file_get_contents('php://input');
    $objArray = json_decode($post,true);

    $action = $objArray['params']['action'];

    $swRangeObj = new SwRange();
    $swRangeObj->$action();
  //  

    class SwRange {
        public $table = 'SizeWidth';

        function getAllSWRange(){
            $table = $this->table;
            global $db;
            $sql="SELECT * FROM $table";
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
        function getSWRange(){
            $table = $this->table;
            global $db, $objArray;
            $swRangeID = $objArray['params']['swRangeID'];
            $sql="SELECT * FROM $table WHERE ID = $swRangeID";
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
        function getAllSWRangeForBrand(){
            global $objArray,$db;
            $table = $this->table;
            $swID = 0;
            $brandID = $objArray['params']['brandID'];

            $sql1 = "Select SizeWidthID as ID, SizeWidthName, SizeWidthAvailable as SizeWidth, RangeType 
                    From Brand
                    WHERE ID = $brandID && SizeWidthID != 0";
            
            $result = mysqli_query($db, $sql1);
            if($result == false){
                echo "Fail Query";
            }   
            $rows = array();
            if ($result->num_rows > 0){
                while($r = $result->fetch_assoc()) {
                    if($r['ID'] > 0 && $r['ID'] != null){
                        $rows[] = $r;
                        $swID = $r['ID'];
                    }
                }
                if($swID > 0){
                    $sql2="SELECT * FROM $table WHERE ID != $swID";
                }
                else {
                    $sql2="SELECT * FROM $table";
                }
                $result2 = mysqli_query($db, $sql2);
                if($result2 == false){
                    echo "Fail Query";
                }   
                
                if ($result2->num_rows > 0){
                    while($r2 = $result2->fetch_assoc()) {
                        $rows[] = $r2;
                    }
                    echo json_encode($rows);
                
                } 
                else {
                    echo json_encode($rows); // echo only one from brand;
                
                    //echo "no data found";
                } 
                
            } 
            else { // fix to load all remaining 
                $sql2="SELECT * FROM $table";
                //echo "no data found";
                $result2 = mysqli_query($db, $sql2);
                if($result2 == false){
                    echo "Fail Query";
                }   
                
                if ($result2->num_rows > 0){
                    while($r2 = $result2->fetch_assoc()) {
                        $rows[] = $r2;
                    }
                    echo json_encode($rows);
                
                } 
                else {
                    //echo "no data found";
                } 
            } 
        }
        function getAllSWRangeFromProduct(){
            global $objArray,$db;
            $table = $this->table;
            $swID = 0;
            $productID = $objArray['params']['productID'];

            $sql1 = "Select SizeWidthID as ID, SizeWidthName, SizeWidthValues as SizeWidth, RangeType 
                    From Product
                    WHERE ID = $productID";
            
            $result = mysqli_query($db, $sql1);
            if($result == false){
                echo "Fail Query";
            }   
            $rows = array();
            if ($result->num_rows > 0){
                while($r = $result->fetch_assoc()) {
                    if($r['ID'] > 0 && $r['ID'] != null){
                        $rows[] = $r;
                        $swID = $r['ID'];
                    }
                }
                if($swID > 0){
                    $sql2="SELECT * FROM $table WHERE ID != $swID";
                }
                else {
                    $sql2="SELECT * FROM $table";
                }
                $result2 = mysqli_query($db, $sql2);
                if($result2 == false){
                    echo "Fail Query";
                }   
                
                if ($result2->num_rows > 0){
                    while($r2 = $result2->fetch_assoc()) {
                        $rows[] = $r2;
                    }
                    echo json_encode($rows);
                } 
                else {
                    //echo "no data found";
                    echo json_encode($rows); // echo only one from product
                } 
                
            } 
            else {
                //echo "no data found";
            } 
        }
        function addNewSWRange(){
            $table = $this->table;
            global $objArray,$db;

            $swRangeObj = $objArray['params']['swRange'];
            $swRangeTable = json_encode($swRangeObj['SizeWidth']);


            // $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
            // fwrite($myfile, $swRangeTable);
           //  fclose($myfile);
           $swRangeObj['SizeWidthName']= mysqli_real_escape_string($db, $swRangeObj['SizeWidthName']);

            $sql="INSERT INTO $table ( SizeWidthName, SizeWidth, RangeType) VALUES ('" . $swRangeObj['SizeWidthName']. "','" . $swRangeTable. "','".$swRangeObj['RangeType']. "');";
            
            // $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
            //  fwrite($myfile, $sql);
            //  fclose($myfile);

            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "Add Success";
            }
            
        }
        function updateSWRange(){
            global $objArray,$db;
            $table = $this->table;
            $swRangeObj = $objArray['params']['swRange'];
            $swRangeTable = json_encode($swRangeObj['SizeWidth']);
            
            $swRangeObj['SizeWidthName']= mysqli_real_escape_string($db, $swRangeObj['SizeWidthName']);
            $sql="UPDATE $table SET 
            SizeWidthName ='" .$swRangeObj['SizeWidthName']. "', 
            SizeWidth = '".$swRangeTable . "', 
            RangeType = '". $swRangeObj['RangeType']. "' 
            where ID=".$swRangeObj['ID'].";";

            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }
        function deleteSWRange(){
            global $objArray,$db;
            $table = $this->table;
            $swRangeObj = $objArray['params']['swRange'];
            $sql ="Delete from $table Where ID =".$swRangeObj['ID'].";"; 
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