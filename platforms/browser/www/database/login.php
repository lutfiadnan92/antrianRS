<?php
include "database.php";

$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];
// $user = "Admin";
// $pass = "123";

$query = "select nama,password from pasiens where nama='$user' && password='$pass'";
$sql = $conn->query($query);
$row = $sql->fetch_object();

// echo json_encode(["nama" => $row->nama, "password" => $row->password]);

if($sql->num_rows == 0){
	echo 'Cek kembali username dan password anda!';
}
else{
	echo 'ok';
}
?>