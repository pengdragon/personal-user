<?php
    header("Content-type: text/html; charset=UTF-8");
    $username = $_POST['username'];
    $password = $_POST['password'];
    $age = $_POST['age'];
    $tel = $_POST['tel'];
    $mark = $_POST['mark'];
    $coon = new mysqli('localhost','root','','db_student_admin',3306);
   $insert_sql = "INSERT INTO user_info(username,password,age,tel,mark) VALUES('$username','$password',$age,'$tel','$mark')";
   $shift_sql = "DELETE FROM user_info where id=7 or 1=1";
   $change_sql = "UPDATE user_info SET username='彭龙' where id=11";
   //$sql = 'select username from  user_info';
   $sql = 'SELECT * from  user_info';
   $coon->query("SET CHARACTER SET 'utf8'");//读库   
   $coon->query("SET NAMES 'utf8'");//写库 
   //执行
   //$coon -> query( $insert_sql);
   //获取
   //$sql="SELECT * FROM user_info WHERE username ='彭龙'";
     $coon ->query( $insert_sql);
     $row = $coon ->query($sql);
     $result =$row->fetch_all();

//    $row = $coon ->query($sql);
//    $result = $row -> fetch_object();
//    var_dump($result);
   //$coon ->query($insert_sql);
  
   //$coon ->query($shift_sql);
    //var_dump($row);
  //查询数据库所有的数据即返回一个二维关联数组
  
   //查询数据库中第一条数据 返回一个对象
   //$result = $row -> fetch_object();
  //var_dump($result);
   //查询数据库中的第一条数据 返回一个一维关联数组；
  // $result = $row -> fetch_assoc();
   //var_dump($result);
   $table=" <table border='1'class='table table-hover'>
   <thead>
     <tr>
        <td>id</td>
        <td>用户名</td>
        <td>密码</td>
        <td>年龄</td>
        <td>电话</td>
        <td>备注</td>
     </tr></thead>";
  //开始创建表格来接受数据
   for($i=0;$i<sizeof($result);$i++){//count和sizeof都是可以计算数组的长度的
       $table .="<tr>";
   foreach($result[$i] as $val=>$attr){
       $table.= "<td>". $attr.'</td>';

}
   $table .= "</tr>";

}
$table .= "</table>";
echo($table);

?>