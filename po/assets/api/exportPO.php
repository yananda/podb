<?php

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
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$poID = $_REQUEST['poID'];
// Create new PHPExcel object
$objPHPExcel = new Spreadsheet();

// Set document properties
$objPHPExcel->getProperties()->setCreator("Export Purchase Order")
							 ->setLastModifiedBy("Export Purchase Order")
							 ->setTitle("Office 2007 XLSX Test Document")
							 ->setSubject("Office 2007 XLSX Test Document")
							 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
							 ->setKeywords("office 2007 openxml php")
							 ->setCategory("result file");

    $header_row = Array (
        'vendor',
        'contact#',
        'po#',
        'order date',
        'ship date',
        'cancel date',
        'store#',
        'barcode',
        'brand',
        'style',
        'description',
        'size',
        'Attr2/width',
        'cost',
        'price',
        'First Price',
        'Sugg Price',
        'qty',
        'STOCK_NUM',
        'SKU_OF4',
        'SKU_OF6',
        'SKU_OF7',
        'Department',
        'Type',
        'SubType',
        'SubType2',
        'SubType3',
        'Location',
        'Weight',
        'PO_TYPE'
    );

    // $objPHPExcel->setActiveSheetIndex(0);
                
    for ($i=0; $i < 30; $i++){                        
        $alpha = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($i+1);
        $objPHPExcel->getActiveSheet()->setCellValue($alpha .'1', $header_row[$i]);
    }
    $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(15);
    $objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(15);
    $objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(14);
    $objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(14);
    $objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(14);
    $objPHPExcel->getActiveSheet()->getColumnDimension('G')->setWidth(14);

    $objPHPExcel->getActiveSheet()->getColumnDimension('M')->setWidth(14);
    $objPHPExcel->getActiveSheet()->getColumnDimension('N')->setWidth(14);
    $objPHPExcel->getActiveSheet()->getColumnDimension('O')->setWidth(14);
    $objPHPExcel->getActiveSheet()->getColumnDimension('P')->setWidth(14);
    $objPHPExcel->getActiveSheet()->getColumnDimension('Q')->setWidth(14);

    $objPHPExcel->getActiveSheet()->getColumnDimension('J')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('K')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('S')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('T')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('U')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('V')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('W')->setWidth(25);
    // $objPHPExcel->getActiveSheet()->getColumnDimension('R')->setWidth(12);
    $objPHPExcel->getActiveSheet()->getStyle("N")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);

    $objPHPExcel->getActiveSheet()->getStyle("D")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("E")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("F")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("G")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("L")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("N")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("O")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
    $objPHPExcel->getActiveSheet()->getStyle("P")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
    $objPHPExcel->getActiveSheet()->getStyle("Q")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
    $objPHPExcel->getActiveSheet()->getStyle("R")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);

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
            $poType = $r['POType'];
            $sizeWidth = $r['SizeWidthValues'];
            $sizeW = json_decode($sizeWidth,true);
            $description = $r['StyleName'] . ' ' . $r['Color'];
            // $selectedSizes = $r['AvailableSizes'];
            $selectedSizes = json_decode($r['AvailableSizes'], true);
            $totalCols = sizeof($selectedSizes) + 1; // 1st col - used for widths
            $selectedWidths = json_decode($r['AvailableWidths']);
            $totalRows = sizeof($selectedWidths) + 1; // row 0 is for sizes
            $size='';
            $quantity='';
            $multiple = false;
            
            for($w=1; $w <= $totalCols ; $w++){
                // var_dump(\PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex('$w'));
                $col = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($w);

                for ($h=0; $h < $totalRows; $h++){
                    // remove spaces
                    $value  = preg_replace('/\s+/', '', $sizeW[$h]["$col"]);
                    // $value = $sizeW[$h][$col];
                    // fwrite($myfile, $value);
                    if($w == 1){ // W/M kinds value
                        if($h!=0){
                            // if($r['RangeType'] =='Accessory'){
                            //     if($h == 1){
                            //         $attr2Width[$h] = 'M';
                            //     }
                            //     else {
                            //         $attr2Width[$h] = '';
                            //     }
                            //     $multiple=false;
                            // }
                            // else
                             {
                                if($value !=''){
                                    if($h!=1){
                                        $multiple = true;
                                    }
                                    $attr2Width[$h] = $value ;
                                }
                                else {
                                    if($h==1){
                                        $attr2Width[$h] = 'M';
                                        $multiple = false;
                                    }
                                    else {
                                        $attr2Width[$h] = '';
                                    }
                                }
                            }
                           // fwrite($myfile, $attr2Width[$h]);
                           // fwrite($myfile, $multiple);
                        }
                        
                    }
                    else {
                        if($h==0){
                            if($value != ''){
                               $size = $value ;
                            //    fwrite($myfile, $size);
                            //    fwrite($myfile, " --- ");
                            }
                            else {
                                $size='';
                            }
                        }
                        else {
                            if($attr2Width[$h] != '' && $size != '') {

                                if($value != 'X' && $value  != 'x'){
                                // add row row to excel
                                    if($value == '' || $value =='0'){
                                        $quantity = '';
                                    }
                                    else {
                                        $quantity = (int)$value ;
                                    }
                                    // $zise = float($size);
                                    if($r['RangeType'] == 'US' || $r['RangeType'] == 'US Full Sizes' ||$r['RangeType'] == 'US Half Sizes' || $r['RangeType']== 'UK' || $r['RangeType'] == 'US Child' ||$r['RangeType'] == 'US Youth' || $r['RangeType'] == 'US Half Sizes' || $r['RangeType'] == 'Mens' || $r['RangeType'] == 'Womens'){
                                        $t = (float)$size * 10;
                                        $temp = (int)$t;
                                        if($multiple){
                                            if($temp > 99){
                                                $stock_num = $r['Style']. "-" . $temp . $attr2Width[$h];
                                            }
                                            else {
                                                $stock_num = $r['Style']. "-0" . $temp . $attr2Width[$h];
                                            }
                                        }
                                        else {
                                            if($temp > 99) {
                                                $stock_num = $r['Style']. "-" .$temp;
                                            }
                                            else {
                                                $stock_num = $r['Style']. "-0" . $temp;
                                            }
                                        }
                                    }
                                    else if ($r['RangeType']=='EU' || $r['RangeType']=='EU Full Sizes' || $r['RangeType']=='EU Half Sizes'){
                                        $t = (float)$size * 10;
                                        $temp = (int)$t;
                                        if($multiple){
                                            $stock_num = $r['Style']. "-" . $temp . $attr2Width[$h];
                                        }
                                        else {
                                            $stock_num = $r['Style']. "-" . $temp;
                                        }
                                    }
                                    // else if($r['RangeType'] == 'Accessory'){
                                    else{ // all types Accessory, one size, multi size, limited, etc
                                        
                                        $stock_num = $r['Style'] . "-" . $size;
                                        // fwrite($myfile, $stock_num);
                                    }
                                    $sku_of4 = $stock_num;
                                    $sku_of6 = $stock_num.'_loc';
                                    $sku_of7 = $stock_num.'_usf';

                                    // $orderDate = explode('/',$r['OrderDate']);
                                    $orderDate = $r['OrderDate'];
                                    // $orderDate = $orderDate[0]. '/'. $orderDate[1].'/'. substr($orderDate[2],2,2);
                                    //$time = strtotime($orderDate);
                                    //$orderDate = date('m/d/Y',$time);
                                    // $orderDate = DateTime::createFromFormat('m-d-Y', $orderDate)->format('Y-m-d');
                                    // $date = date_create_from_format('mm/dd/yy', $orderDate);
                                    // $orderDate =  date_format($date, 'mm/dd/yy');

                                    // $shipDate = explode('/',$r['ShipDate']);
                                    // $shipDate = $shipDate[0]. '/'. $shipDate[1].'/'. substr($shipDate[2],2,2);
                                    $shipDate = $r['ShipDate'];

                                    // $cancelDate = explode('/',$r['CancelDate']);
                                    // $cancelDate = $cancelDate[0]. '/'. $cancelDate[1].'/'. substr($cancelDate[2],2,2);
                                    $cancelDate = $r['CancelDate'];

                                    $r['Cost'] = str_replace(",","",$r['Cost']);
                                    $r['Retail'] = str_replace(",","",$r['Retail']);


                                    $objPHPExcel->getActiveSheet()->setCellValue('A'.$iCount, $r['VendorName']);
                                    $objPHPExcel->getActiveSheet()->setCellValue('B'.$iCount, '');//contact#
                                    $objPHPExcel->getActiveSheet()->setCellValue('C'.$iCount, $r['PurchaseOrderNumber']);
                                   
                                    
                                    
                                    // $objPHPExcel->getActiveSheet()->getStyle('D'.$iCount)
                                    // ->getNumberFormat()->setFormatCode('mm/dd/yy'); 
                                    $objPHPExcel->getActiveSheet()->setCellValue('D'.$iCount, $orderDate);
                                    $objPHPExcel->getActiveSheet()->getStyle('D'.$iCount)
                                    ->getNumberFormat()->setFormatCode('m/d/yy');  

                                    $objPHPExcel->getActiveSheet()->setCellValue('E'.$iCount, $shipDate);
                                    $objPHPExcel->getActiveSheet()->getStyle('E'.$iCount)
                                    ->getNumberFormat()->setFormatCode('m/d/yy'); 
                                    
                                    $objPHPExcel->getActiveSheet()->setCellValue('F'.$iCount, $cancelDate);
                                    $objPHPExcel->getActiveSheet()->getStyle('F'.$iCount)
                                    ->getNumberFormat()->setFormatCode('m/d/yy');

                                    $objPHPExcel->getActiveSheet()->setCellValue('G'.$iCount, $r['StoreNumber']);
                                    $objPHPExcel->getActiveSheet()->setCellValue('H'.$iCount, ''); //barcode
                                    $objPHPExcel->getActiveSheet()->setCellValue('I'.$iCount, $r['BrandName']);
                                    $objPHPExcel->getActiveSheet()->setCellValue('J'.$iCount, $r['Style']);
                                    $objPHPExcel->getActiveSheet()->setCellValue('K'.$iCount, $description);
                                    $objPHPExcel->getActiveSheet()->setCellValue('L'.$iCount, $size);
                                    if($r['RangeType']=='Accessory'){
                                        $objPHPExcel->getActiveSheet()->setCellValue('M'.$iCount,'');
                                    }
                                    else{
                                        $objPHPExcel->getActiveSheet()->setCellValue('M'.$iCount, $attr2Width[$h]);
                                    }
                                    $objPHPExcel->getActiveSheet()->setCellValue('N'.$iCount, $r['Cost'], \PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_NUMERIC);
                                    $objPHPExcel->getActiveSheet()->setCellValue('O'.$iCount, $r['Retail'], \PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_NUMERIC);
                                    $objPHPExcel->getActiveSheet()->setCellValue('P'.$iCount, $r['Retail'], \PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_NUMERIC);
                                    $objPHPExcel->getActiveSheet()->setCellValue('Q'.$iCount, $r['Retail'], \PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_NUMERIC);
                                    $objPHPExcel->getActiveSheet()->setCellValue('R'.$iCount, $quantity);
                                    $objPHPExcel->getActiveSheet()->setCellValue('S'.$iCount, $stock_num);
                                    $objPHPExcel->getActiveSheet()->setCellValue('T'.$iCount, $sku_of4);
                                    $objPHPExcel->getActiveSheet()->setCellValue('U'.$iCount, $sku_of6);
                                    $objPHPExcel->getActiveSheet()->setCellValue('V'.$iCount, $sku_of7);
                                    $objPHPExcel->getActiveSheet()->setCellValue('W'.$iCount, $r['StratusProductType']);
                                    $objPHPExcel->getActiveSheet()->setCellValue('X'.$iCount, $r['StratusSubType1']);
                                    $objPHPExcel->getActiveSheet()->setCellValue('Y'.$iCount, $r['StratusSubType2']);
                                    $objPHPExcel->getActiveSheet()->setCellValue('Z'.$iCount, '');//subtype2
                                    $objPHPExcel->getActiveSheet()->setCellValue('AA'.$iCount, '');//subtype3
                                    $objPHPExcel->getActiveSheet()->setCellValue('AB'.$iCount, '');//location
                                    $objPHPExcel->getActiveSheet()->setCellValue('AC'.$iCount, '');//weight
                                    $objPHPExcel->getActiveSheet()->setCellValue('AD'.$iCount, $poType);//PO_TYPE
                                    $objPHPExcel->getActiveSheet()->setCellValue('T'.$iCount, $stock_num);
                                    
                                    
                                    $iCount++;
                                  //  fwrite($myfile, $quantity);
                                    // fwrite($myfile, " || ");
                                    // fwrite($myfile, $stock_num);
                                    // fwrite($myfile, " || ");
                                    //$stock_num = $r['Style'].
                                    // add row to sheet
                                } 
                            }
                        }
                    }


                }
                
                // $sw = $sizeW[$j][$col];
                
                // $z = $y[$col];
                // fwrite($myfile, $y);
                // fwrite($myfile, ' || ');
                // fwrite($myfile, $col);
                // $alpha = PHPExcel_Cell::stringFromColumnIndex($j);
                // $objPHPExcel->getActiveSheet()->setCellValue($alpha .'2', $sw);
                
            }
            $j++;
            
        }

           // fclose($myfile);
// Rename worksheet
// $objPHPExcel->getActiveSheet()->setTitle('Simple');


// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);

$fileName = $poNumber . "-" . $vName . "-" . $bName . "-" . $oDate .".xls";
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


// header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
// header("Content-Disposition: attachment;filename=$fileName");
// header('Cache-Control: max-age=0');
// // If you're serving to IE 9, then the following may be needed
// header('Cache-Control: max-age=1');

// // If you're serving to IE over SSL, then the following may be needed
// header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
// header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT'); // always modified
// header('Cache-Control: cache, must-revalidate'); // HTTP/1.1
// header('Pragma: public'); // HTTP/1.0


// $objWriter = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter = IOFactory::createWriter($objPHPExcel, 'Xls');
// $objWriter =   new Xlsx($objPHPExcel);
// $objWriter = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, "Xlsx");
$objWriter->save('php://output');

print "success";
// exit;

    }
    else {
        // no items
    }
 