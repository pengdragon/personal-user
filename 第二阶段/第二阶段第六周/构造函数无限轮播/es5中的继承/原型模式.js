function People() {
    //公有属性
    // 增加一个安全机制, 如果使用者忘记使用new
    if(this instanceof People) {
        this.name = 'xxx';
        this.age = '18';
        this.friends = ['lihua'];
    } else {
        return new People();
    }
}
People.prototype.eat = function() {
    console.log('我会吃')
}
// People.prototype.friends = ['lihua']



var _peopel = new People();
var _people2 = new People();
// 无论_peopel.friends有没有, 都给他加一个新的属性, 跟原型没有关系
// _peopel.friends = [];
// 首先_people里面没有friends这个属性, 从__proto__里面查找, 找到后, 给加上'张三'
_peopel.friends.push('张三');
console.log(_peopel)
console.log(_people2.friends);

var people3 = People();
console.log(people3);