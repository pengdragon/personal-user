// 工厂模式
// 批量生产, 优化代码, 每次返回一个新的对象
// 不能通过instanceof 找到属于哪一个工厂常见出来的

// function People() {
//     var friends = ['lilei', 'lihua'] 
//     var age = 18;
//     var obj = new Object();
//     obj.name = 'xxx';
//     obj.age = age;
//     obj.friends = friends;
//     return obj;
// }
// var _people = People()
// var _people2 = People()
// _people.friends === _people2.friends

function People() {
    //公有属性
    this.name = 'xxx';
    this.age = '18';
    this.eat = function(){
        console.log('我是吃')
    }
    this.friends = ['lihua'];
}
var _peopel = new People();
var _people2 = new People();
_peopel.eat = function() {

}
_people2.eat();

_peopel.friends === _people2.friends; //false



