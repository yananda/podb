<?php
use PhpOffice\PhpSpreadsheet\IOFactory;
/** Error reporting */
error_reporting(E_ALL);
error_reporting(E_ERROR | E_WARNING | E_PARSE);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
date_default_timezone_set('Europe/London');

if (PHP_SAPI == 'cli')
	die('This example should only be run from a Web Browser');

/** Include PHPExcel */
// require_once dirname(__FILE__) . '/Vendor/PHPExcel.php';
require 'vendor/phpoffice/vendor/autoload.php';
require_once('connection.php'); 

$poID = $_REQUEST['poID'];
// Create new PHPExcel object
$objPHPExcel = new \PhpOffice\PhpSpreadsheet\Spreadsheet();

// Set document properties
$objPHPExcel->getProperties()->setCreator("Export Purchase Order")
							 ->setLastModifiedBy("Export Purchase Order")
							 ->setTitle("Office 2007 XLSX Test Document")
							 ->setSubject("Office 2007 XLSX Test Document")
							 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
							 ->setKeywords("office 2007 openxml php")
							 ->setCategory("result file");

    $header_row = Array (
        'catalogid',
        'id',
        'optiontemplate'
    );

    // $objPHPExcel->setActiveSheetIndex(0);
                
    for ($i=0; $i < 3; $i++){                        
        $alpha = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($i+1);
        $objPHPExcel->getActiveSheet()->setCellValue($alpha .'1', $header_row[$i]);
    }
    $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(30);
    $objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(30);
    $objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(30);
   

    $preSql = "SELECT * From Po_Products WHERE PurchaseOrderID = $poID";
    $preResult = mysqli_query($db, $preSql);
    if($preResult == false){
        echo "Fail Query";
    } 
    if ($preResult->num_rows == 0){  
        echo "NO DATA";
        return;
    }

    $sql = "SELECT *, StyleName as Style, SizeRangeType as RangeType FROM PurchaseOrder 
    Left JOIN Po_Products on PurchaseOrder.ID = Po_Products.PurchaseOrderID 
    WHERE PurchaseOrder.ID = $poID";

    $result = mysqli_query($db, $sql);
    if($result == false){
        echo "Fail Query";
    }
    $rows = array();
    // $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
            // fwrite($myfile, $sql);

    $poNumber = 'PO-';
    $vName='V';
    $bName='';
    $oDate='';
    // [{"A":"--","B":"6","C":"7","D":"8","E":"9","F":"10","G":"11.5","H":"12","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":""},{"A":"","B":"X","C":"3","D":"2","E":"4","F":"1","G":"3","H":"1","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":""},{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":""},{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":""},{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":""},{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":""}]
    if ($result->num_rows > 0){
        $j=0;
        $iCount = 2;
        while($r = $result->fetch_assoc()) {
            $poNumber = $r['PurchaseOrderNumber'];
            $vName = $r['VendorName'];
            $bName = $r['BrandName'];
            $oDate = $r['OrderDate'];
            $rangeType = $r['RangeType'];
            $smallestAvailableSize = $r['SmallestAvailableSize'];
            $largestAvailableSize = $r['LargestAvailableSize'];            
            $availableSizes = json_decode($r['AvailableSizes'], true);
            
            $pWidth = $r['pWidth'];

            $mfgsku = $r['MfgSku'];
            $catalogID = $r['CatalogID'];
            if($r['ProductType'] == "Womens Shoes") {
                if($r['RangeType'] == "US Half Sizes"){
                    $part1 = "US Women's";
                    $part2 = "4-13";
                    $part3 = "Half Sizes";                    
                    
                    if($r['pWidth'] == "Yes"){
                        if($r['WidthType'] == "Med/Wide"){
                            $part4 = "SS-XXXW";
                        }
                        else if ($r['WidthType'] == "B/D/E"){
                            $part4 = "AAA-4E";
                        }
                        else{
                            $part4 = "";
                        }
                    }
                    else{
                        $part4 = "";
                    }
                }
                else if ($r['RangeType'] == "US Full Sizes") {
                    $part3 = "Full Sizes";
                    $part1 = "US Women's";
                    $part2 = "4-13";
                    if($r['pWidth'] == "Yes"){
                        if($r['WidthType'] == "Med/Wide"){
                            $part4 = "SS-XXXW";
                        }
                        else if ($r['WidthType'] == "B/D/E"){
                            $part4 = "AAA-4E";
                        }
                        else{
                            $part4 = "";
                        }
                    }
                    else{
                        $part4 = "";
                    }
                }
                else if ($r['RangeType'] == "UK") {
                    $part3 = "Half Sizes";
                    $part1 = "UK Women's";
                    $part2 = "2.5-10.5";
                    $part4 = "";
                }
                else if ($r['RangeType'] == "EU Full Sizes") {
                    $part3 = "Full Sizes";
                    $part1 = "EU Women's";
                    $part2 = "34-44";
                    if($r['pWidth'] == "Yes"){
                        if($r['WidthType'] == "Med/Wide"){
                            $part4 = "M-W";
                        }                        
                        else{
                            $part4 = "";
                        }
                    }
                    else{
                        $part4 = "";
                    }
                }
                else if ($r['RangeType'] == "EU Half Sizes") {
                    $part3 = "Half Sizes";
                    $part1 = "EU Women's";
                    $part2 = "34-44";
                    if($r['pWidth'] == "Yes"){
                        if($r['WidthType'] == "Med/Wide"){
                            $part4 = "M-W";
                        }                        
                        else{
                            $part4 = "";
                        }
                    }
                    else{
                        $part4 = "";
                    }
                }
                else if ($r['RangeType'] == "Limited") {
                    $part3 = "";
                    $part1 = "";
                    $part2 = "XS-XXL";
                    $part4 = "";
                }
               
                if($part1 ==""){
                    $optionTemplateStr = $part2;
                }
                else if($part3 ==""){
                    $optionTemplateStr = $part1 .' '.$part2;
                }
                else if($part4 == ""){
                    $optionTemplateStr = $part1 .' '.$part2 .' '.$part3;
                }
                else{
                    $optionTemplateStr = $part1 .' '.$part2 .' '.$part3.' '.$part4;
                }
            }
            else if($r['ProductType'] == "Mens Shoes") {
                if($r['RangeType'] == "US Half Sizes"){
                    $part3 = "Half Sizes";
                    $part1 = "US Men's";
                    $part2 = "6-15";
                    if($r['pWidth'] == "Yes"){
                        if($r['WidthType'] == "Med/Wide"){
                            $part4 = "N-XXXW";
                        }
                        else if ($r['WidthType'] == "B/D/E"){
                            $part4 = "B-6E";
                        }
                        else{
                            $part4 = "";
                        }
                    }
                    else{
                        $part4 = "";
                    }
                }
                else if ($r['RangeType'] == "US Full Sizes") {
                    $part3 = "Full Sizes";
                    $part1 = "US Men's";
                    $part2 = "6-15";
                    if($r['pWidth'] == "Yes"){
                        if($r['WidthType'] == "Med/Wide"){
                            $part4 = "N-XXXW";
                        }
                        else if ($r['WidthType'] == "B/D/E"){
                            $part4 = "B-6E";
                        }
                        else{
                            $part4 = "";
                        }
                    }
                    else{
                        $part4 = "";
                    }
                }
                else if ($r['RangeType'] == "UK") {
                    $part3 = "Half Sizes";
                    $part1 = "UK Men's";
                    $part4 = "";
                    $part2 = "6-13";
                }
                else if ($r['RangeType'] == "EU") {
                    $part3 = "Full Sizes";
                    $part1 = "EU Men's";
                    $part2 = "39-50";
                    if($r['pWidth'] == "Yes"){
                        if($r['WidthType'] == "Med/Wide"){
                            $part4 = "M-W";
                        }                        
                        else{
                            $part4 = "";
                        }
                    }
                    else{
                        $part4 = "";
                    }
                }                
                else if ($r['RangeType'] == "Limited") {
                    $part3 = "";
                    $part1 = "";
                    $part4 = "";
                    $part2 = "XS-XXL";
                }                
                // $avsLength = sizeof($largestAvailableSize);
                // $minSize = $smallestAvailableSize[0];
                // $maxSize = $largestAvailableSize[$avsLength-1];
                // $part2 = $minSize . '-' . $maxSize;
                if($part1 ==""){
                    $optionTemplateStr = $part2;
                }
                else if($part3 ==""){
                    $optionTemplateStr = $part1 .' '.$part2;
                }
                else if($part4 == ""){
                    $optionTemplateStr = $part1 .' '.$part2 .' '.$part3;
                }
                else{
                    $optionTemplateStr = $part1 .' '.$part2 .' '.$part3.' '.$part4;
                }
            }
            else if($r['ProductType'] == "Kids Shoes") {
                if($r['RangeType'] == "US Child"){
                    $part3 = "Half Sizes";
                    $part1 = "US Child Sizes";
                    $part2 = "3-13.5";
                }
                else if ($r['RangeType'] == "US Youth") {
                    $part3 = "Full Sizes";
                    $part1 = "US Youth Sizes";
                    $part2 = "1-7";
                }
                else if ($r['RangeType'] == "EU") {
                    $part3 = "Full Sizes";
                    $part1 = "EU Kid's";
                    $part2 = "19-36";
                }                
                else if ($r['RangeType'] == "Limited") {
                    $part3 = "";
                    $part1 = "";
                    $part2 = "XS-XXL";
                }                
                // $avsLength = sizeof($largestAvailableSize);
                // $minSize = $smallestAvailableSize[0];
                // $maxSize = $largestAvailableSize[$avsLength-1];
                // $part2 = $minSize . '-' . $maxSize;
                if($part1 ==""){
                    $optionTemplateStr = $part2;
                }
                else if($part3 ==""){
                    $optionTemplateStr = $part1 .' '.$part2;
                }
                else{
                    $optionTemplateStr = $part1 .' '.$part2 .' '.$part3;
                }
            }
            else if($r['ProductType'] == "Unisex") {
                if($r['RangeType'] == "US"){
                    $part3 = "Full Sizes";
                    $part1 = "US Unisex";
                    $part2 = "4-15";
                }
                else if ($r['RangeType'] == "US Half Sizes") {
                    $part3 = "Half Sizes";
                    $part1 = "US Unisex";
                    $part2 = "4-15";
                }
                else if ($r['RangeType'] == "UK") {
                    $part3 = "Half Sizes";
                    $part1 = "UK Unisex";
                    $part2 = "2.5-13";
                }
                else if ($r['RangeType'] == "EU") {
                    $part3 = "Full Sizes";
                    $part1 = "EU Unisex";
                    $part2 = "34-50";
                }              
                else if ($r['RangeType'] == "Limited") {
                    $part3 = "";
                    $part1 = "";
                    $part2 = "XS-XXL";
                }                
                // $avsLength = sizeof($largestAvailableSize);
                // $minSize = $smallestAvailableSize[0];
                // $maxSize = $largestAvailableSize[$avsLength-1];
                // $part2 = $minSize . '-' . $maxSize;
                if($part1 ==""){
                    $optionTemplateStr = $part2;
                }
                if($part3 ==""){
                    $optionTemplateStr = $part1 .' '.$part2;
                }
                else{
                    $optionTemplateStr = $part1 .' '.$part2 .' '.$part3;
                }
            }
            else if($r['ProductType'] == "Socks" || $r['ProductType'] == "Accessories") {
                if($r['RangeType'] == "Multi Size"){
                    $optionTemplateStr ="XS-XXL";
                }
                else if ($r['RangeType'] == "OS") {
                    $optionTemplateStr ="One Size Fits Most";
                }
            }
            else if($r['ProductType'] == "Wellness" ) {
                if($r['RangeType'] == "Multi Size"){
                    $optionTemplateStr ="XS-XXL";
                }
                else if ($r['RangeType'] == "OS") {
                    $optionTemplateStr ="One Size Fits Most";
                }
                else if ($r['RangeType'] == "Mens") {
                    $optionTemplateStr = "Men's 6-15 Full Sizes";
                }
                else if ($r['RangeType'] == "Womens") {
                    $optionTemplateStr = "Women's 4-13 Half Sizes";
                }
            }

            
            $objPHPExcel->getActiveSheet()->setCellValue('A'.$iCount,"");
            $objPHPExcel->getActiveSheet()->setCellValue('B'.$iCount, $mfgsku);
            $objPHPExcel->getActiveSheet()->setCellValue('C'.$iCount, $optionTemplateStr);
            $iCount++;
        }
    }
    else {
        // no items
    }
    // fclose($myfile);
// Rename worksheet
// $objPHPExcel->getActiveSheet()->setTitle('Simple');


// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);

$fileName = $poNumber . "-" . $vName . "-" . $bName . "-" . $oDate . "-OFT.xls";
// Redirect output to a client’s web browser (Excel5)
header('Content-Type: application/vnd.ms-excel');
header("Content-Disposition: attachment;filename=$fileName");
header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
header('Cache-Control: max-age=1');

// If you're serving to IE over SSL, then the following may be needed
header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
header ('Pragma: public'); // HTTP/1.0

// $objWriter = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter = IOFactory::createWriter($objPHPExcel, 'Xls');
$objWriter->save('php://output');

print "success";
// exit;
