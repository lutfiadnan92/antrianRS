<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "rumah_sakit";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
	die('Connect Error('. $conn->connect_errno.') '. $conn->connect_error);
} 
// else {
// 	$sql = "SELECT no_rekam_medis,nama,tempat_lahir,tgl_lahir FROM pasiens";
// 	$result = $conn->query($sql);
// }

// $Pdata = array();
// while ($row = $result->fetch_array()) {
// 	$picture = array(
// 		"no_rekam_medis" => $row['no_rekam_medis'],
// 		"nama"			 => $row['nama'],
// 		"tempat_lahir"	 => $row['tempat_lahir'],
// 		"tgl_lahir"		 => $row['tgl_lahir']
// 	);
// 	$Pdata[] = $picture;
// }
// echo json_encode($Pdata);
?>