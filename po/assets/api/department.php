<?php

    require_once('connection.php'); 
    $post = file_get_contents('php://input');
    $objArray = json_decode($post,true);

    $action = $objArray['params']['action'];

    $Obj = new Department();
    $Obj->$action();
  //  

    class Department {
        
        function getAllDepartments(){
            global $db;
            $sql='SELECT * FROM Department';
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
        function getDepartment(){
            global $db,$objArray;
            $deptID = $objArray['params']['deptID'];
            $sql="SELECT * FROM Department WHERE ID=$deptID";
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
        function getTypes(){
            global $db,$objArray;
            $deptID = $objArray['params']['deptID'];

            $sql='SELECT * FROM DTypes where DepartmentID = '.$deptID;
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
        function getType(){
            global $db,$objArray;
            $typeID = $objArray['params']['typeID'];

            $sql='SELECT * FROM DTypes where ID = '.$typeID;
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
        function getSubTypes(){
            global $db, $objArray;
            $objID = $objArray['params']['typeID'];

            $sql='SELECT * FROM DSubType where TypeID = '.$objID;
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
        function getSubType(){
            global $db, $objArray;
            $objID = $objArray['params']['subTypeID'];

            $sql='SELECT * FROM DSubType where ID = '.$objID;
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
        function addNewDepartment(){
            global $objArray,$db;
            $obj = $objArray['params']['dept'];

            $obj['DepartmentName']= mysqli_real_escape_string($db, $obj['DepartmentName']);
            $obj['DepartmentDesc']= mysqli_real_escape_string($db, $obj['DepartmentDesc']);

            $sql="INSERT INTO Department ( DepartmentName, DepartmentDesc) 
            VALUES ('" . $obj['DepartmentName']. "','" . $obj['DepartmentDesc']. "');";
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                $sql2 = "SELECT * from Department where ID = (SELECT max(ID) as ID from Department)";
                $result2 = mysqli_query($db, $sql2);
                if($result2 == false){
                    echo "Fail Query";
                }   
                else {
                    $r = $result2->fetch_assoc();
                    echo json_encode($r);
                }
              //  print true;// "Add Success";
            }
        }

        function addNewType(){
            global $objArray,$db;
            $obj = $objArray['params']['dtype'];

            $obj['TypeName']= mysqli_real_escape_string($db, $obj['TypeName']);
            $obj['TypeDesc']= mysqli_real_escape_string($db, $obj['TypeDesc']);

            $sql="INSERT INTO DTypes ( DepartmentID, TypeName, TypeDesc) 
            VALUES ('" . $obj['DepartmentID']. "','" . $obj['TypeName']. "','" . $obj['TypeDesc']. "');";
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                $sql2 = "SELECT * from DTypes where ID = (SELECT max(ID) as ID from DTypes)";
                $result2 = mysqli_query($db, $sql2);
                if($result2 == false){
                    echo "Fail Query";
                }   
                else {
                    $r = $result2->fetch_assoc();
                    echo json_encode($r);
                }
            }
        }

        function addNewSubType(){
            global $objArray,$db;
            $obj = $objArray['params']['subType'];
            $obj['SubTypeName']= mysqli_real_escape_string($db, $obj['SubTypeName']);
            $obj['SubTypeDesc']= mysqli_real_escape_string($db, $obj['SubTypeDesc']);

            $sql="INSERT INTO DSubType ( TypeID, SubTypeName, SubTypeDesc) 
            VALUES ('" . $obj['TypeID']. "','" . $obj['SubTypeName']. "','" . $obj['SubTypeDesc']. "');";
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                $sql2 = "SELECT * from DSubType where ID = (SELECT max(ID) as ID from DSubType)";
                $result2 = mysqli_query($db, $sql2);
                if($result2 == false){
                    echo "Fail Query";
                }   
                else {
                    $r = $result2->fetch_assoc();
                    echo json_encode($r);
                }
            }
        }

        function updateDepartment(){
            global $objArray,$db;
            $obj = $objArray['params']['dept'];

            $obj['DepartmentName']= mysqli_real_escape_string($db, $obj['DepartmentName']);
            $obj['DepartmentDesc']= mysqli_real_escape_string($db, $obj['DepartmentDesc']);

            $sql="UPDATE Department SET DepartmentName ='" .$obj['DepartmentName']. "', 
            DepartmentDesc = '". $obj['DepartmentDesc']. "' where ID=".$obj['ID'].";";
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }
        function updateType(){
            global $objArray,$db;
            $obj = $objArray['params']['dtype'];
            $obj['TypeName']= mysqli_real_escape_string($db, $obj['TypeName']);
            $obj['TypeDesc']= mysqli_real_escape_string($db, $obj['TypeDesc']);
            $sql="UPDATE DTypes SET TypeName ='" .$obj['TypeName']. "', 
            TypeDesc = '". $obj['TypeDesc']. "' where ID=".$obj['ID'].";";
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }
        function updateSubType(){
            global $objArray,$db;
            $obj = $objArray['params']['subType'];
            $obj['SubTypeName']= mysqli_real_escape_string($db, $obj['SubTypeName']);
            $obj['SubTypeDesc']= mysqli_real_escape_string($db, $obj['SubTypeDesc']);
            $sql="UPDATE DSubType SET SubTypeName ='" .$obj['SubTypeName']. "', 
            SubTypeDesc = '". $obj['SubTypeDesc']. "' where ID=".$obj['ID'].";";
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }
        // check if used in PO
        // delete all types - may be just write a trigger
        function deleteDepartment(){
            global $objArray,$db;
            $obj = $objArray['params']['dept'];
            $sql ="Delete from Department Where ID =".$obj['ID'].";"; 
            $result = mysqli_query($db, $sql);
            if($result == false){
                print "Fail Query";
            }   
            else {
                print true; //delete success
            }
        }
        // delete all sub types - may be just write a trigger
        function deleteType(){
            global $objArray,$db;
            $objID = $objArray['params']['dtypeID'];
            $sql ="Delete from DTypes Where ID =".$objID.";"; 
            $result = mysqli_query($db, $sql);
            if($result == false){
                print "Fail Query";
            }   
            else {
                print true; //delete success
            }
        }
        
        function deleteSubType(){
            global $objArray,$db;
            $objID = $objArray['params']['subTypeID'];
            $sql ="Delete from DSubType Where ID =".$objID.";"; 
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