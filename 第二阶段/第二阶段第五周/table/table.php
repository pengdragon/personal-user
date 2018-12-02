<?php
$json = file_get_contents("table.json");//获取json中的数据
//echo($json[40]);此处是字符串单个输出
$json  = json_decode($json);//将所获取的数据转换为对象
$username = $_POST['username'];//获取输入的值
$pass = $_POST['password'];//获取输入的值
// $array = array("name"=>"wangjin");//关联数组
// foreach($array as $key=>$val){
//     echo($val);
//     echo($key);
// }
$table = "";
if($username=='penglong'){
    if($pass=="123456"){ 
        $table= " <table border='1'class='table table-hover'>
        <thead>
          <tr>
             <td>id</td>
             <td>姓名</td>
             <td>性别</td>
             <td>年龄</td>
             <td>班级</td>
             <td>分数</td>
          </tr></thead>";
       //开始创建表格来接受数据
        for($i=0;$i<sizeof($json);$i++){//count和sizeof都是可以计算数组的长度的
            $table .="<tr>";
        foreach($json[$i] as $val=>$attr){
            $table.= "<td>". $attr.'</td>';
           //echo($json[$i]->$val);
    }
        $table .= "</tr>";
        //echo(count($json[$i]));
    }
   $table .= "</table>";
   echo($table);
    }
    else
    echo('pass error');
}else{
    echo('username error');
}
?>
