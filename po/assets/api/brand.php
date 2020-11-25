<?php
    error_reporting(0);
    require_once('connection.php'); 
    $post = file_get_contents('php://input');
    $objArray = json_decode($post,true);

    $action = $objArray['params']['action'];

    $brandObj = new Brand();
    $brandObj->$action();

    class Brand {

        // function getAllBrands(){
        //     global $db;
        //     $sql='SELECT *, Brand.ID as ID, Brand.SizeWidthID as SizeWidthID, 
        //     Brand.SizeWidthName as SizeWidthName, Brand.RangeType as RangeType 
        //     FROM Brand 
        //     LEFT JOIN Vendor on Brand.VendorID = Vendor.ID 
        //     LEFT JOIN SizeWidth on Brand.SizeWidthID = SizeWidth.ID';
        //     $result = mysqli_query($db, $sql);
        //     if($result == false){
        //         echo "Fail Query";
        //     }   
        //     $rows = array();
        //     if ($result->num_rows > 0){
        //         while($r = $result->fetch_assoc()) {
        //             $rows[] = $r;
        //         }
        //         echo json_encode($rows);
        //     } 
        //     else {
        //         //echo "no data found";
        //     } 
        // }
        function getAllBrands(){
            global $db;
            $sql='SELECT * FROM Brands';
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
        function getBrand(){
            global $db,$objArray;
            $brandID = $objArray['params']['brandID'];
            
            $sql='SELECT *, Brand.ID as ID, Brand.SizeWidthID as SizeWidthID, 
            Brand.SizeWidthName as SizeWidthName, Brand.RangeType as RangeType 
            FROM Brand 
            LEFT JOIN Vendor on Brand.VendorID = Vendor.ID 
            LEFT JOIN SizeWidth on Brand.SizeWidthID = SizeWidth.ID
            WHERE Brand.ID = '.$brandID;
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
        function getAllBrandsForVID(){
            global $db,$objArray;
            $vendorID = $objArray['params']['vid'];
            $sql='SELECT *, Brand.ID as ID, Brand.SizeWidthID as SizeWidthID, 
            Brand.SizeWidthName as SizeWidthName, Brand.RangeType as RangeType 
            FROM Brand 
            LEFT JOIN Vendor on Brand.VendorID = Vendor.ID 
            LEFT JOIN SizeWidth on Brand.SizeWidthID = SizeWidth.ID
            WHERE VendorID = '.$vendorID;
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

        function getAllVendors(){
            global $db;
            $sql='SELECT * FROM vendor_brand_names';
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

        function addNewBrand(){
            
            global $objArray,$db;

            $obj = $objArray['params']['brand'];
            $obj['VendorName']= mysqli_real_escape_string($db, $obj['VendorName']);
            $obj['VendorDescription']= mysqli_real_escape_string($db, $obj['VendorDescription']);
            $obj['SizeWidthName']= mysqli_real_escape_string($db, $obj['SizeWidthName']);
            $obj['BrandName']= mysqli_real_escape_string($db, $obj['BrandName']);
            $obj['BrandDescription']= mysqli_real_escape_string($db, $obj['BrandDescription']);
            

            $swRangeAvailable = json_encode($obj['SizeWidthAvailable']);

            if($obj['VendorID'] == 0){
                $sql = "INSERT INTO Vendor (VendorName, VendorDescription) 
                VALUES ('". $obj['VendorName']. "','". $obj['VendorDescription']. "');"; 
                $result = mysqli_query($db, $sql);
                if($result == false){
                    echo "Fail Query";
                }   
                else {
                    // print true;// "Add Success";
                    $sql2 = "SELECT * from Vendor where ID = (SELECT max(ID) as ID from Vendor)";
                    $result2 = mysqli_query($db, $sql2);
                    if($result2 == false){
                        echo "Fail Query";
                    }   
                    else {
                        $r = $result2->fetch_assoc();
                        $vendorID = $r['ID'];
                        $sql3="INSERT INTO 
                        Brand ( VendorID, SizeWidthID , SizeWidthName, RangeType, SizeWidthAvailable, BrandName, BrandDescription) 
                        VALUES (
                        '" . $vendorID . "',
                        '" .$obj['SizeWidthID'] ."',
                        '" .$obj['SizeWidthName'] ."',
                        '" .$obj['RangeType'] ."',
                        '". $swRangeAvailable ."',
                        '". $obj['BrandName']. "','" . $obj['BrandDescription']. "');";
                        $result3 = mysqli_query($db, $sql3);
                        if($result3 == false){
                            echo "Fail Query";
                        }   
                        else {
                            print true;
                        }
            
                        // echo json_encode($r);
                    }
                }
            }
            else {
                $vendorID = $obj['VendorID'];
                $sql3="INSERT INTO 
                Brand ( VendorID, SizeWidthID , SizeWidthName, RangeType, SizeWidthAvailable, BrandName, BrandDescription) 
                VALUES (
                    '" . $vendorID . "',
                    '" .$obj['SizeWidthID'] ."',
                    '" .$obj['SizeWidthName'] ."',
                    '" .$obj['RangeType'] ."',
                    '". $swRangeAvailable ."',
                    '". $obj['BrandName']. "',
                    '" . $obj['BrandDescription']. "');";
                $result3 = mysqli_query($db, $sql3);
                if($result3 == false){
                    echo "Fail Query";
                }   
                else {
                    print true;
                }
            }
            
        }
    
        function updateBrand(){
            global $objArray,$db;
            // $table = $this->table;
            $obj = $objArray['params']['brand'];
            $swRangeAvailable = json_encode($obj['SizeWidthAvailable']);
            
            $obj['VendorName']= mysqli_real_escape_string($db, $obj['VendorName']);
            $obj['VendorDescription']= mysqli_real_escape_string($db, $obj['VendorDescription']);
            $obj['SizeWidthName']= mysqli_real_escape_string($db, $obj['SizeWidthName']);
            $obj['BrandName']= mysqli_real_escape_string($db, $obj['BrandName']);
            $obj['BrandDescription']= mysqli_real_escape_string($db, $obj['BrandDescription']);
            
            $sql="UPDATE Vendor SET 
            VendorName ='" .$obj['VendorName']. "', 
            VendorDescription ='" .$obj['VendorDescription']. "'        
            where ID=".$obj['VendorID'].";";

            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                $sql2="UPDATE Brand SET 
                BrandName ='" .$obj['BrandName']. "', 
                BrandDescription ='" .$obj['BrandDescription']. "',
                SizeWidthID ='" .$obj['SizeWidthID']. "',
                SizeWidthName ='" .$obj['SizeWidthName']. "',
                RangeType ='" .$obj['RangeType']. "', 
                SizeWidthAvailable ='" .$swRangeAvailable. "'
                where ID=".$obj['ID'].";";
                
                $result2 = mysqli_query($db, $sql2);
                if($result2 == false){
                    echo "Fail Query";
                }   
                else {
                    print true;
                }
            }
        }

        function deleteBrand(){
            // check if brand used in PO
            // check if there is other brands using this vendor 
            // if no other brand is from this vendor - delete the vendor too.
            global $objArray,$db;
           
            $obj = $objArray['params']['brand'];

            $sql2 = "SELECT * from Brand WHERE VendorID =".$obj['VendorID'];
            $result2 = mysqli_query($db, $sql2);
            if($result2 == false){
                echo "Fail Query";
            }   
            $rows = array();
            if ($result2->num_rows == 1){
               // only one brand with vendor - so delete vendor
               $sql3= "DELETE from Vendor Where ID = ".$obj['VendorID']; 
               $result3 = mysqli_query($db, $sql3);
                if($result3 == false){
                    print "Fail Query";
                }   
                else {
                  //  print true; //delete success
                }
            } 
            

            $sql ="Delete from Brand Where ID =".$obj['ID'].";"; 
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