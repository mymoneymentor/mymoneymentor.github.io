<?php
$connection = mysqli_connect('localhost','root',"",'book_db');
if (isset($_POST['send'])){
   $name = $_post['name'];
   $phone = $_post['phone'];
//    $email = $_post['email'];
   
   $any = $_post['any'];
   $anys = $_post['anys'];
   $message = $_post['message'];
//    $arrivals = $_post['arrivals'];
//    $leaving = $_post['levaing'];

   $request = "insert into book_form(name,  phone, any, anys, message) values ('$name','$phone','$any','$anys','$message')";

   mysqli_query($connection, $request);

   header('location:book_php');
}else{
    echo 'somethink ';
}
?>