
function Menu(){
    this.first = document.querySelector('.first');
    this.second = document.querySelector('.second');
    this.thed = document.querySelector('.thed');
    this.four = document.querySelector('.four');
    console.log(this.second)
    this.firstChildAll =  this.first.children;
    console.log(this.forstChildAll);
}
Menu.prototype.init = function(){
    this.insertData();
    this.event();
}
Menu.prototype.event = function(){
    $('.first').on('click','li:has(ul)',function(){
        $(this).children('ul').toggle();
    })
}
Menu.prototype.insertData = function(){
    var _this =this;
    $.ajax('menu.json',{
        type:'POST',
        contentType:'application/json',
        data:JSON.stringify({}),
        success:function(data){
            console.log(data)
        for(var i=0;i<data.length;i++){
            console.log(1)
            console.log(  _this.firstChildAll[i].firstElementChild)
            _this.firstChildAll[i].firstElementChild.innerHTML=data[i].name;
            _this.firstChildAll[i].firstElementChild.nextElementSibling.innerHTML=data[i].content;
            console.log( _this.firstChildAll[i].lastElementChild.firstElementChild.children[0])
            for(var j=0;j<data[i].child.length;j++){
                console.log(data[i].child.length)
                _this.firstChildAll[i].lastElementChild.children[j].children[0].innerHTML=data[i].child[j].name;
                _this.firstChildAll[i].lastElementChild.children[j].children[1].innerHTML=data[i].child[j].content;
            }
        }

        }
    
        })
}

    