<?php
    error_reporting(0);
    // header("Access-Control-Allow-Origin: *");
    // header("Access-Control-Allow-Methods: PUT, GET, POST");
    // header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");

    require 'vendor/phpoffice/vendor/autoload.php';
    require_once('connection.php'); 
    use PhpOffice\PhpSpreadsheet\IOFactory;
    use PhpOffice\PhpSpreadsheet\Spreadsheet;

    use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
    /** Error reporting */
    error_reporting(E_ALL);
    error_reporting(E_ERROR | E_WARNING | E_PARSE);
    ini_set('display_errors', TRUE);
    ini_set('display_startup_errors', TRUE);
    date_default_timezone_set('Europe/London');

    if (PHP_SAPI == 'cli')
        die('This example should only be run from a Web Browser');
 
   
    $upload_dir = 'uploads/';
    $server_url = 'http://127.0.0.1:8000';

    // $post = file_get_contents('php://input');
    // $objArray = json_decode($post,true);

    // $action = $objArray['params']['action'];
    $myfile = fopen("newfile1.txt", "w") or die("Unable to open file!");    
    
    fwrite($myfile, $_POST['poID']);
    fwrite($myfile, $_POST['action']);
    fclose($myfile);

    $poID = $_POST['poID'];
    $action =  $_POST['action'];  

    $ioObj = new FileIO();
    $ioObj->$action($poID);

    $brandCategoryRelated = array();
   
class FileIO {
    public $brandCategoryArray = array();

    function ImportTDCartExportOne($poID){
        global $upload_dir;
        global $server_url, $brandCategoryArray;
        global $db;        
        $response = array();
        $retData = array();       
        if($_FILES['inputFile']) {
            $allowed_extension = array('xls', 'csv', 'xlsx');
            $file_array = explode(".", $_FILES["inputFile"]["name"]);
            $file_extension = end($file_array);
            
            if(in_array($file_extension, $allowed_extension)) {

                $inputFile_name = $_FILES["inputFile"]["name"];
                $inputFile_tmp_name = $_FILES["inputFile"]["tmp_name"];
                $error = $_FILES["inputFile"]["error"];
                if($error > 0){
                    $response = array(
                        "status" => "error",
                        "error" => true,
                        "message" => "Error uploading the file!"
                    );
                }
                else {
                    $random_name =  date("YmdHis")  ."-".$inputFile_name;
                    $upload_name = $upload_dir.strtolower($random_name);
                    $upload_name = preg_replace('/\s+/', '-', $upload_name);
                
                    if(move_uploaded_file($inputFile_tmp_name , $upload_name)) {

                        $file_type = \PhpOffice\PhpSpreadsheet\IOFactory::identify($upload_name);
                        $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($file_type);
                        $spreadsheet = $reader->load($upload_name);
                        unlink($upload_name);

                        $data = $spreadsheet->getActiveSheet()->toArray();                        

                        $sizeOfData = sizeof($data);
                        $iCount = 0;
                        for($iC=0;$iC<$sizeOfData; $iC++){
                            if($iC != 0) {
                                $Col_BE = $data[$iC][56];
                                if($Col_BE == "" || $Col_BE == null){                                        
                                    // check db for match and populate. the missing fields
                                    $id = $data[$iC][1];
                                    $sql = "Select * from PurchaseOrder left join PO_Products on (PurchaseOrder.ID = PO_Products.PurchaseOrderID ) where PurchaseOrder.ID = $poID and PO_Products.MfgSku = '$id'";                                        
                                    $result = mysqli_query($db, $sql);
                                    if($result == false){
                                        // fail query
                                    }
                                    else{
                                        if ($result->num_rows > 0){
                                            $retData[$iCount] = $data[$iC];
                                            $r = $result->fetch_assoc();                                                
                                            $brandCategory = $r['TDCartExtra_field_2'];
                                            $colorCategory = $r['ColorGroupName'];
                                            $colorName = $r['Color'];

                                            $retData[$iCount][56] = $brandCategory;
                                            $retData[$iCount][57] = $colorCategory;
                                            $retData[$iCount][58] = $colorName;
                                            

                                            $bpArray = json_decode($r['BulletPoints']);
                                            
                                            if($r['BulletPoints'] != '' || $r['BulletPoints'] != null) {
                                                $bpString = '<ul class="list">';
                                                foreach($bpArray as $bp){                                              
                                                    if($bp->text !=""){
                                                        $bpString = $bpString . '<li>' . $bp->text . '</li>';
                                                    }
                                                }
                                                $bpString = $bpString . '</ul>';
                                                $retData[$iCount][61] = $bpString;
                                            }
                                            if($r['ProductType'] == "Womens Shoes"){
                                                $Col_BK = "Female";
                                            }
                                            else if($r['ProductType'] == "Mens Shoes"){
                                                $Col_BK = "Male";
                                            }
                                            else {
                                                $Col_BK = "Unisex";
                                            }
                                            $retData[$iCount][62] = $Col_BK;
                                            //k = 62, l=63, m=64, n=65
                                            $retData[$iCount][65] = "assets/images/product-sp-large/".$r['MfgSku']."_5.jpg";
                                            $retData[$iCount][67] = "pm";
                                            $clrName = str_replace("/","",$r['Color']);
                                            $retData[$iCount][111] =$r['BrandName']. '_' . $r['TDCartExtra_field_2']. '_'. $clrName. '.html' ;
                                            self::addBrandCategoryToList($brandCategory);                                    
                                            $iCount++;
                                        }
                                    }                                       
                                }
                                else {                                      
                                }                                    
                            }
                            else {
                                $header_row = $data[$iC];
                            }
                        }
                        $sizeOfRetData = sizeof($retData);
                        $sizeOfBEArray = sizeof($this->brandCategoryArray);                        
                        //$iCount = $sizeOfRetData-1;
                        // for($iD=0;$iD<$sizeOfBEArray; $iD++){
                        //     for($iC=0;$iC < $sizeOfData; $iC++ ){
                        //         if($this->brandCategoryArray[$iD] == $data[$iC][56]){
                        //             $retData[$iCount] = $data[$iC];
                        //             $iCount++;
                        //         }
                        //     }                            
                        // }
                        
                        for($iD=0;$iD<$sizeOfRetData; $iD++){
                            for($iC=0;$iC < $sizeOfData; $iC++ ){
                                if($retData[$iD][56] == $data[$iC][56] && $retData[$iD][62] == $data[$iC][62]){
                                    $retData[$iCount] = $data[$iC];
                                    $iCount++;
                                }
                            }
                        }
                        $sizeOfRetData = sizeof($retData);                        
                        for($iD=0;$iD<$sizeOfRetData; $iD++){                            
                            $Col_AE = self::GenerateColumnAE($retData, $iD);
                            $retData[$iD][30] = $Col_AE;                            
                        }

                        $outSpreadsheet = new Spreadsheet();

                        // Set document properties
                        $outSpreadsheet->getProperties()->setCreator("Export Purchase Order")
                                                    ->setLastModifiedBy("Export Purchase Order")
                                                    ->setTitle("Office 2007 XLSX Test Document")
                                                    ->setSubject("Office 2007 XLSX Test Document")
                                                    ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
                                                    ->setKeywords("office 2007 openxml php")
                                                    ->setCategory("result file");
                                                    
                        for ($i=0; $i < 116; $i++){                        
                            $alpha = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($i+1);
                            $outSpreadsheet->getActiveSheet()->setCellValue($alpha .'1', $header_row[$i]);
                        }
                        $iCC=2;
                        for($iD=0;$iD<$sizeOfRetData; $iD++){                            
                            for ($i=0; $i < 116; $i++){
                                $alpha = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($i+1);
                                $outSpreadsheet->getActiveSheet()->setCellValue($alpha."$iCC", $retData[$iD][$i]);
                            }
                            $iCC++;
                        }

                        for ($i=0; $i < 116; $i++){                        
                            $alpha = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($i+1);
                            $outSpreadsheet->getActiveSheet()->getColumnDimension($alpha)->setWidth(15);
                            
                        }
                        $outSpreadsheet->getActiveSheet()->getStyle("H")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
                        $outSpreadsheet->getActiveSheet()->getStyle("I")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
                        $outSpreadsheet->getActiveSheet()->getStyle("L")->getNumberFormat()->setFormatCode(\PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_00);
                        
                        $outSpreadsheet->getActiveSheet()->getStyle("A")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("H")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("I")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("J")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("K")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("L")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("M")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("N")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("O")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("P")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("Q")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("R")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("S")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("T")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("X")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);

                        $outSpreadsheet->getActiveSheet()->getStyle("AG")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AP")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AQ")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AS")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AU")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AV")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AW")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AX")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AY")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("AZ")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);

                        $outSpreadsheet->getActiveSheet()->getStyle("BA")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BC")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BQ")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BS")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BT")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BU")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BV")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BW")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BX")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BY")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("BZ")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);

                        $outSpreadsheet->getActiveSheet()->getStyle("CA")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CB")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CC")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CD")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CE")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CF")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CG")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CH")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CI")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CJ")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CK")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CL")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CM")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CN")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CO")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CP")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CQ")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CR")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CU")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CW")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("CX")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);

                        $outSpreadsheet->getActiveSheet()->getStyle("DB")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("DC")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("DD")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("DE")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("DF")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("DG")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);
                        $outSpreadsheet->getActiveSheet()->getStyle("DI")->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT);




                       

                        $outSpreadsheet->setActiveSheetIndex(0);

                        // $fileName ="TestTemplate2Out.xlsx";
                        
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

                        $fileName = "Product_Import_Template_2_".$inputFile_name;
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


                        // $objWriter = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($outSpreadsheet, 'Excel5');
                        $objWriter = IOFactory::createWriter($outSpreadsheet, 'Xls');
                        // $objWriter =   new Xlsx($outSpreadsheet);                        
                        $objWriter->save('php://output');    
                        // $fileDir ="uploads/";
                        // $objWriter->save($fileDir.$fileName);   
                    
                        $response = array(
                            "status" => "success",
                            "error" => false,
                            "message" => "File uploaded successfully",
                            "url" => $server_url."/".$upload_name
                        );
                    }
                    else{
                        $response = array(
                            "status" => "error",
                            "error" => true,
                            "message" => "Error uploading the file!"
                        );
                    }
                }
            }
            else {
                $response = array(
                    "status" => "error",
                    "error" => true,
                    "message" => "Only .xls .csv or .xlsx file allowed"
                );
            }
        }
        else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "No file was sent!"
            );
        }

        echo json_encode($response);
    }
    function GenerateColumnAE($retData, $iIndex){
        global $brandCategoryRelated;
        $sizeOfData = sizeof($retData);       
        $aeVal = "";        
        for($iC=0;$iC<$sizeOfData; $iC++){
            // if($retData[$iC][56] == $retData[$iIndex][56] && $iC != $iIndex){
                // added additional gender check
            if($retData[$iC][56] == $retData[$iIndex][56] && $retData[$iC][62] == $retData[$iIndex][62] && $iC != $iIndex){
                $aeVal = $aeVal . $retData[$iC][1] . ',';
            }
        }
        $aeVal = rtrim($aeVal, ',');        
        return $aeVal;
    }

    function addBrandCategoryToList($bc) {        
        if (in_array($bc, $this->brandCategoryArray)) { 
            
        } 
        else {
            array_push($this->brandCategoryArray, $bc);
        }
         
    }
  
}
$db->close();


?>