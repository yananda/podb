<?php
    error_reporting(0);
    require_once('connection.php'); 
    $post = file_get_contents('php://input');
    $objArray = json_decode($post,true);

    $action = $objArray['params']['action'];

    $productTypeObj = new ProductForm();
    $productTypeObj->$action();


    $db->close();

    class ProductForm {
                
        function getAllProductTypes(){
            global $db;
            $sql='SELECT * FROM product_types';            
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
        function getProductType(){
            global $db,$objArray;           
        }
        function addNewProductType(){            
        }
    
        function updateProductType(){           
        }

        function deleteProductType(){           
        }

        /* Color Groups */
        function getAllColorGroups(){
            global $db;
            $sql='SELECT * FROM color_groups';            
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

        /* Stratus Type for Product Type */
        function  getStratusTypesForProduct(){
            global $db,$objArray;
            $productTypeID = $objArray['params']['productTypeID'];

            $sql='SELECT * FROM stratus_types where ProductTypeID = '.$productTypeID;
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
        /* Stratus Sub Type1 for Stratus Type */
        function  getStratusSubType1ForST(){
            global $db,$objArray;
            $stratusTypeID = $objArray['params']['stratusTypeID'];

            $sql='SELECT * FROM stratus_subtypes_1 where StratusTypeID = '.$stratusTypeID;
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
        /* Stratus Sub Type 2 for Stratus Type 1*/
        function  getStratusSubType2ForType1(){
            global $db,$objArray;
            $stratusSubType1ID = $objArray['params']['stratusSubType1ID'];

            $sql='SELECT * FROM stratus_subtypes_2 where StratusSubType1ID = '.$stratusSubType1ID;
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

        /* Size Range for Product ID */
        function getSizeRangeTypeForProduct(){
            global $db,$objArray;
            $productTypeID = $objArray['params']['productTypeID'];

            $sql='SELECT * FROM size_range_types where ProductTypeID = '. $productTypeID . ' order by DisplayOrder';
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
        /* small and large size for size range id */
        function getSmallSizeForSizeRange(){
            global $db,$objArray;
            $SizeRangeTypeID = $objArray['params']['SizeRangeTypeID'];

            $sql='SELECT * FROM srt_small_sizes where SRTID = '.$SizeRangeTypeID;
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
        function getLargeSizeForSizeRange(){
            global $db,$objArray;
            $SizeRangeTypeID = $objArray['params']['SizeRangeTypeID'];

            $sql='SELECT * FROM srt_large_sizes where SRTID = '.$SizeRangeTypeID;
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
        function getAllSizesForSizeRange(){
            global $db,$objArray;
            $SizeRangeTypeID = $objArray['params']['SizeRangeTypeID'];

            $sql='SELECT * FROM srt_all_sizes where SRTID = '.$SizeRangeTypeID;
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
        function getWidthTypeOptions(){
            global $db,$objArray;
            $sql='SELECT * FROM width_types';
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
        function getAvailableWidthsForWidthType(){
            global $db,$objArray;
            $WidthTypeID = $objArray['params']['WidthTypeID'];
            $sql='SELECT * FROM available_widths WHERE WidthTypeID = '.$WidthTypeID;
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

        function getCategoriesFrom3DCartInventory(){
            global $db,$objArray;
            $VendorName = $objArray['params']['VendorName'];
            $productType = $objArray['params']['ProductType'];
            if($productType == "Womens Shoes") {
                $gender ="Female";
            }
            else if($productType == "Mens Shoes") {
                $gender ="Male";
            }
            else if($productType == "Kids Shoes") {
                $gender ="Kids";
            }
            else if($productType == "Unisex") {
                $gender ="Unisex";
            }
            else {
                $gender = "other";
            }
            if($gender != "other"){
                $sql='SELECT DISTINCT extra_field_2, extra_field_8, categories , hide, manufacturer FROM 3dcart_inventoryexport WHERE manufacturer ="' .$VendorName.'" and extra_field_8 = "'. $gender . '" and hide ="0";';
            }
            else {
                $sql='SELECT DISTINCT extra_field_2, categories , hide, manufacturer FROM 3dcart_inventoryexport WHERE manufacturer ="' .$VendorName.'" and hide ="0";';
            }
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
        function get3DCartCategories(){
            global $db,$objArray;
            // $VendorName = $objArray['params']['VendorName'];
            $sql='SELECT 3dCartCategory as cartCategory, ID FROM 3d_cart_categories';
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
    }
    ?>