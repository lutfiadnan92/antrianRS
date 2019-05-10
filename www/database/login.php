<?php
include "database.php";

$user = $_POST['user'];
$pass = $_POST['pass'];

$query = "select nama,password from pasiens where nama='$user' && password='$pass'";
$sql = $conn->query($query);
$row = $sql->fetch_object();

return json_encode(["nama" => $row->nama, "password" => $row->password]);
?>