<?php


include "dbConnect.php";

$name=$_POST['name'];
$user_id=$_POST['new_id'];
$user_pw=$_POST['new_pw'];
$user_pw2=$_POST['checkpw'];

if($user_pw ==$user_pw2) {
    $sql= "insert into person (name,user_id,user_pw)";
    $sql= $sql."values('$name','$user_id','$user_pw')";
}
if($mysqli->query($sql)){
    echo "<script>alert('Success); location.href='index.html';</script>";
    ​
}else{
    echo "<script>alert('Failed');location.href='index.html';</script>";
}
else {
echo "<script>alert('no match');location.href='index.html';</script>";
}
?>