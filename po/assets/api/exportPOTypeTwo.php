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
        'id',
        'mfgid',
        'name',
        'manufacturer',
        'categories',
        'cost',
        'price',
        'price2',
        'stock',
        'weight',
        'free_shipping',
        'date_created',
        'description',
        'extended_description',
        'keywords',
        'hide',
        'sorting',
        'thumbnail',
        'image1',
        'image2',
        'image3',
        'image4',
        'related',
        'distributor',
        'shipcost',
        'homespecial',
        'categoryspecial',
        'title',
        'metatags'
    );

    // $objPHPExcel->setActiveSheetIndex(0);
                
    for ($i=0; $i < 29; $i++){                        
        $alpha = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($i+1);
        $objPHPExcel->getActiveSheet()->setCellValue($alpha .'1', $header_row[$i]);
    }
    $objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(30);
    $objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(30);
    $objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(30);
    $objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(30);
    $objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(40);
    $objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(15);
    $objPHPExcel->getActiveSheet()->getColumnDimension('G')->setWidth(15);
    $objPHPExcel->getActiveSheet()->getColumnDimension('L')->setWidth(15);
    $objPHPExcel->getActiveSheet()->getColumnDimension('M')->setWidth(20);
    $objPHPExcel->getActiveSheet()->getColumnDimension('N')->setWidth(20);
    $objPHPExcel->getActiveSheet()->getColumnDimension('O')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('P')->setWidth(20);
    $objPHPExcel->getActiveSheet()->getColumnDimension('Q')->setWidth(20);

    $objPHPExcel->getActiveSheet()->getColumnDimension('J')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('K')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('S')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('T')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('U')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('V')->setWidth(25);
    $objPHPExcel->getActiveSheet()->getColumnDimension('W')->setWidth(25);
    // $objPHPExcel->getActiveSheet()->getColumnDimension('R')->setWidth(12);
    $objPHPExcel->getActiveSheet()->getStyle("F")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
    $objPHPExcel->getActiveSheet()->getStyle("G")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
    $objPHPExcel->getActiveSheet()->getStyle("F")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("G")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("J")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("K")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("L")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle("P")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
    

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
            // $selectedSizes = json_decode($r['AvailableSizes'], true);
            // $totalCols = sizeof($selectedSizes) + 1; // 1st col - used for widths
            //  $totalCols = 1;
            // $selectedWidths = json_decode($r['AvailableWidths']);
            // $totalRows = sizeof($selectedWidths) + 1; // row 0 is for sizes
            // $totalRows = 1;
            $size='';
            $quantity='';
            $multiple = false;           
            
            // $col = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($w);
                 
            $orderDate = $r['OrderDate'];
            
            $shipDate = $r['ShipDate'];

            // $cancelDate = explode('/',$r['CancelDate']);
            // $cancelDate = $cancelDate[0]. '/'. $cancelDate[1].'/'. substr($cancelDate[2],2,2);
            $cancelDate = $r['CancelDate'];

            $r['Cost'] = str_replace(",","",$r['Cost']);
            $r['Retail'] = str_replace(",","",$r['Retail']);


            $objPHPExcel->getActiveSheet()->setCellValue('A'.$iCount, $r['MfgSku']);
            $objPHPExcel->getActiveSheet()->setCellValue('B'.$iCount, $r['MfgSku']);
            $objPHPExcel->getActiveSheet()->setCellValue('C'.$iCount, $description);
            $objPHPExcel->getActiveSheet()->setCellValue('D'.$iCount, $bName);
            $objPHPExcel->getActiveSheet()->setCellValue('E'.$iCount, $r['FormulatedCategory']);
            $objPHPExcel->getActiveSheet()->setCellValue('F'.$iCount, $r['Cost'], \PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_NUMERIC);
            $objPHPExcel->getActiveSheet()->setCellValue('G'.$iCount, $r['Retail'], \PhpOffice\PhpSpreadsheet\Cell\DataType::TYPE_NUMERIC);
            $objPHPExcel->getActiveSheet()->setCellValue('H'.$iCount, ''); //price 2
            $objPHPExcel->getActiveSheet()->setCellValue('I'.$iCount, ''); //stock
            $objPHPExcel->getActiveSheet()->setCellValue('J'.$iCount, $r['WeightLbs']);
            $objPHPExcel->getActiveSheet()->setCellValue('K'.$iCount, "1");

            // $objPHPExcel->getActiveSheet()->getStyle('D'.$iCount)
            // ->getNumberFormat()->setFormatCode('mm/dd/yy'); 
            $objPHPExcel->getActiveSheet()->setCellValue('L'.$iCount, $orderDate);
            $objPHPExcel->getActiveSheet()->getStyle('L'.$iCount)
            ->getNumberFormat()->setFormatCode('m/d/yyyy');  

            $objPHPExcel->getActiveSheet()->setCellValue('M'.$iCount, $bName);

            $objPHPExcel->getActiveSheet()->setCellValue('N'.$iCount, $r['LongDescription']);
            $categories  = json_decode($r['Categories'], true);
            $catLength = sizeof($categories);
            //Column O / keywords – [Brand]”,” [Brand Category]”,” [Style Name]” “[Color Name]”,”[3D Cart Category 1]”,”[3D Cart Category 2] (if entered)”,” [3D Cart Category 3] (if entered)
            $keyWords = $r['BrandName'] . ',' . $r['TDCartExtra_field_2'] . ',' . $r['StyleName'] . ',' . $r['Color'];

            if($r['NewColorOfExistingStyle'] === 'Yes'){               
                // $tok = strtok( $r['FormulatedCategory'], "@");
                $ar = explode("@",$r['FormulatedCategory']);
                $strArrLen = sizeof($ar);
                for($iC=0; $iC < $strArrLen; $iC++) {                    
                    if(strpos($ar[$iC], 'Shoe Categories') !== false){
                      $token = explode("/",$ar[$iC]);
                      $category = $token[2];
                      $keyWords = $keyWords . "," . $category;                    
                    }
                }
            }
            else {
                for($iC=0; $iC<= $catLength; $iC++){
                    $keyWords = $keyWords . ',' . $categories[$iC];
                }
            }
            $keyWords = rtrim($keyWords,",");
            $objPHPExcel->getActiveSheet()->setCellValue('O'.$iCount, $keyWords); // keywords
            $objPHPExcel->getActiveSheet()->setCellValue('P'.$iCount, '1');
            $objPHPExcel->getActiveSheet()->setCellValue('Q'.$iCount, '');
            $thumbnail = "assets/images/product-sp-thumb/". $r['MfgSku'] ."_main.jpg";
            $objPHPExcel->getActiveSheet()->setCellValue('R'.$iCount, $thumbnail);

            $img1 = "assets/images/product-sp-large/". $r['MfgSku'] ."_main.jpg";
            $objPHPExcel->getActiveSheet()->setCellValue('S'.$iCount, $img1);

            $img2 = "assets/images/product-sp-large/". $r['MfgSku'] ."_2.jpg";
            $objPHPExcel->getActiveSheet()->setCellValue('T'.$iCount, $img2);

            $img3 = "assets/images/product-sp-large/". $r['MfgSku'] ."_3.jpg";
            $objPHPExcel->getActiveSheet()->setCellValue('U'.$iCount, $img3);

            $img4 = "assets/images/product-sp-large/". $r['MfgSku'] ."_4.jpg";
            $objPHPExcel->getActiveSheet()->setCellValue('V'.$iCount, $img4);

            $objPHPExcel->getActiveSheet()->setCellValue('W'.$iCount, '');
            $objPHPExcel->getActiveSheet()->setCellValue('X'.$iCount, '');
            $objPHPExcel->getActiveSheet()->setCellValue('Y'.$iCount, '');
            $objPHPExcel->getActiveSheet()->setCellValue('Z'.$iCount, '');
            $objPHPExcel->getActiveSheet()->setCellValue('AA'.$iCount, '');

            $mfg = $r['BrandName']. ' ' . $r['StyleName'] . ' ' .$r['Color'];

            $objPHPExcel->getActiveSheet()->setCellValue('AB'.$iCount, $mfg);
            $metaTag = '<META NAME="DESCRIPTION" CONTENT="' . $r['LongDescription'] . '"><META NAME="KEYWORDS" CONTENT=" ' . $keyWords . '">';            
            
            $objPHPExcel->getActiveSheet()->setCellValue('AC'.$iCount, $metaTag); //metatag
            $iCount++;
                    
            
            $j++;
            
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

// $objWriter = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter = IOFactory::createWriter($objPHPExcel, 'Xls');
$objWriter->save('php://output');

print "success";
// exit;
