<?php
    error_reporting(0);
    require_once('connection.php'); 
    $post = file_get_contents('php://input');
    $objArray = json_decode($post,true);

    $action = $objArray['params']['action'];

    $Obj = new PurchaseOrder();
    $Obj->$action();
    
    class PurchaseOrder {
        
        function getAllPurchaseOrders(){
            global $db;
            

            $sql='SELECT * FROM PurchaseOrder Order By OrderDate Desc';
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            $rows = array();
            if ($result->num_rows > 0){
                while($r = $result->fetch_assoc()) {
                    
                    $totalQuantity =0;
                    $totalCost =0;
                    $sql1='SELECT * FROM Po_Products where PurchaseOrderID = '.$r['ID'];
                    $result1 = mysqli_query($db, $sql1);
                    if($result1 == false){
                        echo "Fail Query";
                    }   
                    $prows = array();
                    if ($result1->num_rows > 0){
                        while($pr = $result1->fetch_assoc()) {
                            $totalQuantity = $totalQuantity + $pr['Quantity'];
                            $tempC = $pr['Cost'];
                            $totalCost = $totalCost  + (double)filter_var($tempC, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                        }
                        // echo json_encode($prows);
                    } 
                    else {
                        //echo "no data found";
                    } 
                    $r['TotalQuantity'] = $totalQuantity;
                    $r['TotalCost'] = $totalCost;
                    $rows[] = $r;

                }
                echo json_encode($rows);
            } 
            else {
                //echo "no data found";
            } 
        }
        function getPurchaseOrder(){
            global $db,$objArray;
            $poID = $objArray['params']['poID'];
            $sql="SELECT * FROM PurchaseOrder WHERE ID = $poID";
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
        function getProducts(){
            global $db,$objArray;
            $poID = $objArray['params']['poID'];

            $sql='SELECT * FROM Po_Products where PurchaseOrderID = '.$poID;
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
        function getProductsOld(){
            global $db,$objArray;
            $poID = $objArray['params']['poID'];

            $sql='SELECT * FROM Product where PurchaseOrderID = '.$poID;
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
        function getProduct(){
            global $db,$objArray;
            $productID = $objArray['params']['productID'];

            $sql='SELECT *, AvailableSizes as selectedSizes, AvailableWidths as selectedAvailableWidths, Categories as selectedCategories, FormulatedCategory as formulatedCategory, Color as ColorName FROM Po_Products where ID = '.$productID;
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
        function getProductOld(){
            global $db,$objArray;
            $productID = $objArray['params']['productID'];

            $sql='SELECT * FROM Product where ID = '.$productID;
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
        function addNewPurchaseOrder(){
            global $objArray,$db;
            $obj = $objArray['params']['po'];
            $userID = $objArray['params']['userID'];            
            date_default_timezone_set("America/New_York");
            $createdDate = date("Y-m-d h:i:sa");            
           
            $obj['StoreName']= mysqli_real_escape_string($db, $obj['StoreName']);
            $obj['VendorName']= mysqli_real_escape_string($db, $obj['VendorName']);
            $obj['BrandName']= mysqli_real_escape_string($db, $obj['BrandName']);

            $sql="INSERT INTO PurchaseOrder (POType,
                 PurchaseOrderNumber, VendorID, VendorName, BrandID, BrandName,
                 OrderDate, ShipDate, CancelDate, StoreID, StoreNumber,
                 Notes, CreatedByID, CreatedDate, LastModifiedByID, LastModifiedDate
                 ) 
            VALUES (
                '".$obj['POType']."','".$obj['PurchaseOrderNumber']."','". $obj['VendorID'] ."','".$obj['VendorName'] ."',
                '". $obj['BrandID'] ."','". $obj['BrandName'] ."',
                '". $obj['OrderDate']."','". $obj['ShipDate'] ."','". $obj['CancelDate'] ."',
                '". $obj['StoreID'] ."','". $obj['StoreNumber']."','". $obj['Notes']."','".$userID."','". $createdDate."','".$userID."','". $createdDate."'
            );";            
            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                $sql2 = "SELECT * from PurchaseOrder where ID = (SELECT max(ID) as ID from PurchaseOrder)";
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
        function addNewProduct(){
            global $objArray,$db;
            $obj = $objArray['params']['product'];
            $userID = $objArray['params']['userID'];
            date_default_timezone_set("America/New_York");
            $createdDate = date("Y-m-d h:i:sa");
            $swValues = json_encode($obj['SizeWidthValues']);
            $UPCValues = json_encode($obj['UPCValues']);
            $availableWidths = json_encode($obj['selectedAvailableWidths']);
            $availableSizes = json_encode($obj['selectedSizes']);
            $selectedCategories = json_encode($obj['selectedCategories']);
            $bulletPoints = json_encode($obj['BulletPoints']);

            $obj['MfgSku']= mysqli_real_escape_string($db, $obj['MfgSku']);
            $poID = $obj['PurchaseOrderID'];
            $mfgsku = $obj['MfgSku'];
            $preSql = "SELECT * FROM Po_Products WHERE  PurchaseOrderID = $poID and MfgSku = '$mfgsku'";
            $result = mysqli_query($db, $preSql);
            if($result == false){
                echo "Fail Query 111";
            }   
            else {
                if ($result->num_rows > 0){                   
                //    print "Product With MfgSku '$mfgsku' Already Exists "; // found 
                   $response = array(
                    "status" => "error",
                    "error" => true,
                    "message" => "Product With MfgSku '$mfgsku' Already Exists in this PO "
                    );
                    print json_encode($response);
                   return;
                } 
                else {
                    //echo "no data found";
                }
            }

            $obj['StyleName']= mysqli_real_escape_string($db, $obj['StyleName']);
            $obj['ColorName']= mysqli_real_escape_string($db, $obj['ColorName']);
            $obj['Cost']= mysqli_real_escape_string($db, $obj['Cost']);
            $obj['Retail']= mysqli_real_escape_string($db, $obj['Retail']);
            $obj['LongDescription']= mysqli_real_escape_string($db, $obj['LongDescription']);
            $obj['TDCartExtra_field_2']= mysqli_real_escape_string($db, $obj['TDCartExtra_field_2']);
            $obj['formulatedCategory']= mysqli_real_escape_string($db, $obj['formulatedCategory']);
            $swValues = mysqli_real_escape_string($db, $swValues);
            $selectedCategories =  mysqli_real_escape_string($db, $selectedCategories);
            $UPCValues = mysqli_real_escape_string($db, $UPCValues);
            $productName = $obj['StyleName'] . ' '. $obj['ColorName'];

            $sql = "INSERT INTO Po_Products ( PurchaseOrderID, ProductType, ProductTypeID, MfgSku, StyleName, Color, Cost, Retail, ColorGroupName, ColorGroupID,
            WeightLbs, StratusProductType, StratusProductTypeID, StratusSubType1, StratusSubType1ID, StratusSubType2, StratusSubType2ID, 
            SizeRangeType, SizeRangeTypeID, SmallestAvailableSize, SmallestAvailableSizeID, LargestAvailableSize, LargestAvailableSizeID, AvailableSizes, pWidth, 
            WidthType, WidthTypeID, AvailableWidths,
            SizeWidthValues, Quantity, UPCValues, LongDescription, BulletPoints, NewColorOfExistingStyle, Categories, TDCartExtra_field_2, FormulatedCategory, Sale, ProductName, 
            ProductCreatedByID, ProductCreatedDate, ProductLastModifiedByID, ProductLastModifiedDate)
            VALUES (
                '" . $obj['PurchaseOrderID']  ."',
                '" . $obj['ProductType'] ."',
                '" . $obj['ProductTypeID'] ."',
                '" . $obj['MfgSku'] ."',
                '" . $obj['StyleName'] ."',
                '" . $obj['ColorName'] ."',
                '" . $obj['Cost'] ."',
                '" . $obj['Retail'] ."',
                '" . $obj['ColorGroupName'] ."',
                '" . $obj['ColorGroupID'] ."',
                '" . $obj['WeightLbs'] ."',
                '" . $obj['StratusProductType']."',
                '" . $obj['StratusProductTypeID']."',
                '" . $obj['StratusSubType1']."',
                '" . $obj['StratusSubType1ID']."',
                '" . $obj['StratusSubType2']."',
                '" . $obj['StratusSubType2ID']."',
                '" . $obj['SizeRangeType']."',
                '" . $obj['SizeRangeTypeID']."',
                '" . $obj['SmallestAvailableSize']."',
                '" . $obj['SmallestAvailableSizeID']."',
                '" . $obj['LargestAvailableSize']."',
                '" . $obj['LargestAvailableSizeID']."',
                '" . $availableSizes ."',
                '" . $obj['pWidth'] ."',
                '" . $obj['WidthType'] ."',
                '" . $obj['WidthTypeID'] ."',
                '" . $availableWidths ."',
                '" . $swValues ."',
                '" . $obj['Quantity']."',
                '" . $UPCValues ."',
                '" . $obj['LongDescription']."',
                '" . $bulletPoints ."',
                '" . $obj['NewColorOfExistingStyle']."',
                '" . $selectedCategories ."',
                '" . $obj['TDCartExtra_field_2']."',
                '" . $obj['formulatedCategory']."',
                '" . $obj['Sale']."',
                '" . $productName ."',
                '" .$userID."',
                '" . $createdDate."',
                '" .$userID."',
                '" . $createdDate."'               
                );";
                // $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
                // fwrite($myfile, $sql);
                // fclose($myfile);
                $result = mysqli_query($db, $sql);
                if($result == false){
                    echo "Fail Query";
                }   
                else {
                    $response = array(
                        "status" => "success",
                        "error" => false,
                        "message" => "Product Added successfully",                       
                    );
                    print json_encode($response);
                    // return;
                    // print true;// "Add Success";
                }
            
            
        }
        function addNewProductOld(){
            global $objArray,$db;
            $obj = $objArray['params']['product'];
            $swValues = json_encode($obj['SizeWidthValues']);

            $obj['Style']= mysqli_real_escape_string($db, $obj['Style']);
            $obj['ProductDescription']= mysqli_real_escape_string($db, $obj['ProductDescription']);
            $obj['SizeWidthName']= mysqli_real_escape_string($db, $obj['SizeWidthName']);
            $obj['DepartmentName']= mysqli_real_escape_string($db, $obj['DepartmentName']);
            $obj['TypeName']= mysqli_real_escape_string($db, $obj['TypeName']);
            $obj['SubTypeName']= mysqli_real_escape_string($db, $obj['SubTypeName']);

            $sql = "INSERT INTO Product 
            (PurchaseOrderID, Style, ProductDescription, 
            SizeWidthID, SizeWidthName, RangeType, SizeWidthValues,
            DepartmentID, DepartmentName, TypeID, TypeName, SubTypeID, SubTypeName, 
            Cost, Retail, Quantity )  
            VALUES (
                '". $obj['PurchaseOrderID']."',
               '". $obj['Style']."',
               '". $obj['ProductDescription'] ."',
               '". $obj['SizeWidthID'] ."',
               '". $obj['SizeWidthName'] ."',
               '". $obj['RangeType'] ."',
               '". $swValues."',
               '". $obj['DepartmentID'] ."',
               '". $obj['DepartmentName'] ."',
               '". $obj['TypeID'] ."',
               '". $obj['TypeName'] ."',
               '". $obj['SubTypeID']."',
               '". $obj['SubTypeName'] ."',
               '". $obj['Cost'] ."',
               '". $obj['Retail']."',
               '". $obj['Quantity']."'
               
            );";

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

        function updatePurchaseOrder(){
            global $objArray,$db;
            $obj = $objArray['params']['po'];
            $userID = $objArray['params']['userID']; 
            date_default_timezone_set("America/New_York");           
            $modifyDate = date("Y-m-d h:i:sa");

            $obj['VendorName']= mysqli_real_escape_string($db, $obj['VendorName']);
            $obj['BrandName']= mysqli_real_escape_string($db, $obj['BrandName']);
            
            $sql="UPDATE PurchaseOrder SET 
            POType ='" .$obj['POType']. "', 
            PurchaseOrderNumber ='" .$obj['PurchaseOrderNumber']. "', 
            VendorID = '". $obj['VendorID']. "',
            VendorName = '". $obj['VendorName']. "',
            BrandID = '". $obj['BrandID']. "',
            BrandName = '". $obj['BrandName']. "',
            OrderDate = '". $obj['OrderDate']. "',
            ShipDate = '". $obj['ShipDate']. "',
            CancelDate = '". $obj['CancelDate']. "',
            StoreID = '". $obj['StoreID']. "',           
            StoreNumber = '". $obj['StoreNumber']. "',
            Notes = '". $obj['Notes']. "',
            LastModifiedByID = '". $userID. "',
            LastModifiedDate = '". $modifyDate . "'
            where ID=".$obj['ID'].";";
            //  $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
            //  fwrite($myfile, $sql);
            //  fclose($myfile);

            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }
        function updateProduct(){
            global $objArray,$db;
            $obj = $objArray['params']['product'];
            $userID = $objArray['params']['userID'];  
            date_default_timezone_set("America/New_York");          
            $modifyDate = date("Y-m-d h:i:sa");

            $swValues = json_encode($obj['SizeWidthValues']);
            $UPCValues = json_encode($obj['UPCValues']);
            $availableWidths = json_encode($obj['selectedAvailableWidths']);
            $availableSizes = json_encode($obj['selectedSizes']);
            $selectedCategories = json_encode($obj['selectedCategories']);
            $bulletPoints = json_encode($obj['BulletPoints']);

            $obj['MfgSku']= mysqli_real_escape_string($db, $obj['MfgSku']);
            $obj['StyleName']= mysqli_real_escape_string($db, $obj['StyleName']);
            $obj['ColorName']= mysqli_real_escape_string($db, $obj['ColorName']);
            $obj['Cost']= mysqli_real_escape_string($db, $obj['Cost']);
            $obj['Retail']= mysqli_real_escape_string($db, $obj['Retail']);
            $obj['LongDescription']= mysqli_real_escape_string($db, $obj['LongDescription']);
            $obj['TDCartExtra_field_2']= mysqli_real_escape_string($db, $obj['TDCartExtra_field_2']);
            $obj['formulatedCategory']= mysqli_real_escape_string($db, $obj['formulatedCategory']);
            $swValues = mysqli_real_escape_string($db, $swValues);
            $selectedCategories =  mysqli_real_escape_string($db, $selectedCategories);
            $UPCValues = mysqli_real_escape_string($db, $UPCValues);
            $productName = $obj['StyleName'] . ' '. $obj['ColorName'];
            // TDCartExtra_field_2 = Brand Category
            
            // PurchaseOrderID, ProductType, ProductTypeID, MfgSku, StyleName, Color, Cost, Retail, ColorGroupName, ColorGroupID,
            // WeightLbs, StratusProductType, StratusProductTypeID, StratusSubType1, StratusSubType1ID, StratusSubType2, StratusSubType2ID, 
            // SizeRangeType, SizeRangeTypeID, SmallestAvailableSize, SmallestAvailableSizeID, LargestAvailableSize, LargestAvailableSizeID, AvailableSizes, pWidth, 
            // WidthType, WidthTypeID, AvailableWidths,
            // SizeWidthValues, Quantity, UPCValues, LongDescription, BulletPoints, NewColorOfExistingStyle, Categories, TDCartExtra_field_2, FormulatedCategory, Sale

            $sql="UPDATE Po_Products SET 
            ProductType = '" .$obj['ProductType']. "', 
            ProductTypeID = '" .$obj['ProductTypeID']. "', 
            MfgSku = '" . $obj['MfgSku'] ."',
            StyleName = '" . $obj['StyleName'] ."',
                Color = '" . $obj['ColorName'] ."',
                Cost = '" . $obj['Cost'] ."',
                Retail = '" . $obj['Retail'] ."',
                ColorGroupName = '" . $obj['ColorGroupName'] ."',
                ColorGroupID = '" . $obj['ColorGroupID'] ."',
                WeightLbs = '" . $obj['WeightLbs'] ."',
                StratusProductType = '" . $obj['StratusProductType']."',
                StratusProductTypeID = '" . $obj['StratusProductTypeID']."',
                StratusSubType1 = '" . $obj['StratusSubType1']."',
                StratusSubType1ID = '" . $obj['StratusSubType1ID']."',
                StratusSubType2 = '" . $obj['StratusSubType2']."',
                StratusSubType2ID = '" . $obj['StratusSubType2ID']."',
                SizeRangeType = '" . $obj['SizeRangeType']."',
                SizeRangeTypeID = '" . $obj['SizeRangeTypeID']."',
                SmallestAvailableSize = '" . $obj['SmallestAvailableSize']."',
                SmallestAvailableSizeID = '" . $obj['SmallestAvailableSizeID']."',
                LargestAvailableSize = '" . $obj['LargestAvailableSize']."',
                LargestAvailableSizeID = '" . $obj['LargestAvailableSizeID']."',
                AvailableSizes = '" . $availableSizes ."',
                pWidth = '" . $obj['pWidth'] ."',
                WidthType = '" . $obj['WidthType'] ."',
                WidthTypeID = '" . $obj['WidthTypeID'] ."',
                AvailableWidths = '" . $availableWidths ."',
                SizeWidthValues = '" . $swValues ."',
                Quantity = '" . $obj['Quantity']."',
                UPCValues = '" . $UPCValues ."',
                LongDescription = '" . $obj['LongDescription']."',
                BulletPoints = '" . $bulletPoints ."',
                NewColorOfExistingStyle = '" . $obj['NewColorOfExistingStyle']."',
                Categories = '" . $selectedCategories ."',
                TDCartExtra_field_2 = '" . $obj['TDCartExtra_field_2']."',
                FormulatedCategory = '" . $obj['formulatedCategory']."',
                Sale = '" . $obj['Sale']."',
                ProductName = '" . $productName."',
                ProductLastModifiedByID = '" . $userID."',
                ProductLastModifiedDate = '" . $modifyDate."'            
            where ID=".$obj['ID'].";";
            //  $myfile = fopen("newfileUpdate.txt", "w") or die("Unable to open file!");
            //  fwrite($myfile, $sql);
            //  fclose($myfile);

            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }
        function updateProductold(){
            global $objArray,$db;
            $obj = $objArray['params']['product'];
            $sizeWidthValues = json_encode($obj['SizeWidthValues']);

            $obj['Style']= mysqli_real_escape_string($db, $obj['Style']);
            $obj['ProductDescription']= mysqli_real_escape_string($db, $obj['ProductDescription']);
            $obj['SizeWidthName']= mysqli_real_escape_string($db, $obj['SizeWidthName']);
            $obj['DepartmentName']= mysqli_real_escape_string($db, $obj['DepartmentName']);
            $obj['TypeName']= mysqli_real_escape_string($db, $obj['TypeName']);
            $obj['SubTypeName']= mysqli_real_escape_string($db, $obj['SubTypeName']);

            $sql="UPDATE Product SET 
            Style ='" .$obj['Style']. "', 
            ProductDescription = '". $obj['ProductDescription']. "',
            SizeWidthID = '". $obj['SizeWidthID']. "',
            SizeWidthName = '". $obj['SizeWidthName']. "',
            RangeType = '". $obj['RangeType']. "',
            SizeWidthValues = '". $sizeWidthValues. "',
            DepartmentID = '". $obj['DepartmentID']. "',
            DepartmentName = '". $obj['DepartmentName']. "',
            TypeID = '". $obj['TypeID']. "',
            TypeName = '". $obj['TypeName']. "',
            SubTypeID = '". $obj['SubTypeID']. "',
            SubTypeName = '". $obj['SubTypeName']. "',
            Cost = '". $obj['Cost']. "',
            Retail = '". $obj['Retail']. "',
            Quantity = '". $obj['Quantity']. "'
            where ID=".$obj['ID'].";";
            //  $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
            //  fwrite($myfile, $sql);
            //  fclose($myfile);

            $result = mysqli_query($db, $sql);
            if($result == false){
                echo "Fail Query";
            }   
            else {
                print true;// "update Success";
            }
        }

        // delete all proucts from PO too
        function deletePurchaseOrder(){
            global $objArray,$db;
            $obj = $objArray['params']['po'];
            $sql ="Delete from PurchaseOrder Where ID =".$obj['ID'].";"; 
            $result = mysqli_query($db, $sql);
            if($result == false){
                print "Fail Query";
            }   
            else {
                print true; //delete success
            }
        }
        // delete all sub types - may be just write a trigger
        function deleteProduct(){
            global $objArray,$db;
            $obj = $objArray['params']['product'];
            $sql ="Delete from Po_Products Where ID =".$obj['ID'].";"; 
            $result = mysqli_query($db, $sql);
            if($result == false){
                print "Fail Query";
            }   
            else {
                print true; //delete success
            }
        }
        // delete all sub types - may be just write a trigger
        function deleteProductOld(){
            global $objArray,$db;
            $obj = $objArray['params']['product'];
            $sql ="Delete from Product Where ID =".$obj['ID'].";"; 
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