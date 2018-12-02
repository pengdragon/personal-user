<?php 
$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}'; 
$arr = array('xiao'=>11,'aa'=>44);
// $obj=json_decode($json);
// var_dump($obj); 
// foreach($obj as $key=>$val){
//    echo($obj->$key);
// }
var_dump(json_encode($arr,false)); //对象可以转
?>