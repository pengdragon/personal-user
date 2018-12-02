<?php
 $username = $_COOKIE["username"];
 $password = $_COOKIE["password"];
 $u = $_GET["username"];
 $coon = new mysqli('localhost', 'root', '', 'db_student_admin');
 $sql = "select * from user_info where username='$username' and password='$password'";
//$sql2 = "select * from user_info where username='$username' and password='$password'";
 // 用户名称如果可以是中文,要设置字符集
 $coon -> query("SET NAMES 'utf8'");//写库 

 $result = $coon -> query($sql);
 $row = $result -> fetch_assoc();

 if($row){
    $arr = array("code" => "10000", "data" => ""); 
 }else{
    $arr = array("code" => "0", "data" => ""); 
 }
 echo json_encode($arr);
//  $result2 = $coon -> query($sql2);
//  $pass = $result2 -> fetch_assoc();
 
//  if($name){
//      if($password==""){
//         $arr = array("code" => "0", "data" => "");
//      }else{
//          if($pass){
//             $arr = array("code" => "10000", "data" => ""); 
//          }else{
//             $arr = array("code" => "0", "data" => "");
//          }
//      }

//  }else{
//     $arr = array("code" => "0", "data" => "");
//  }
//  echo json_encode($arr);
 // 如果查询到数据, 返回一个对象, 为关联数据
 // 查不到数据返回null
//  if($name){
//     if()
//  }
//  if( $name) {
//      //  查到数据
//      $arr = array("code" => "10000", "data" => "");
//  } else {
//      // 没有查询到
//      $arr = array("code" => "0", "data" => "");
//  }
//  echo json_encode($arr);

?>

