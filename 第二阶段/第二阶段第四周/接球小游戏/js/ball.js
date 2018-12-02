// 在指定范围移动
// 在浏览器改变尺寸时, 改变最大值
class Ball {
    // 参数设置成对象, 优点:参数不需要一一对应, 需要就传, 不需要就不用传参
    constructor(obj) {
        if(typeof obj.$el === 'string') {
            obj.$el = document.querySelector(obj.$el);
        }
        if(typeof obj.$el2 === 'string') {
            obj.$el2 = document.querySelector(obj.$el2);
        }
        if(typeof obj.$el3 === 'string') {
            obj.$el2 = document.querySelector(obj.$el3);
        }
        if(typeof obj.$el4 === 'string') {
            obj.$el4 = document.querySelector(obj.$el4);
        }
        //console.log( obj.$el2)
        // dom对象
        this.$el = obj.$el;
        this.$el2 = obj.$el2;
        this.$el3 = obj.$el3;
        this.$el4 = obj.$el4;
        this.timer2 = obj.timer2;
        // x轴的速度
        this.speedX = obj.speedX;
        // y轴的速度
        this.speedY = obj.speedY;
        this.timeX = null;
        this.timeY = null;
        //
    }
    // 横向移动
    moveX() {
        var _this = this;
        this.stopX()
        var maxX =this.$el2.offsetWidth - this.$el.offsetWidth
        this.timeX = setInterval(function() {
            var init = _this.$el.offsetLeft;
            init += _this.speedX;
            if(init <= 0) {
                init = 0;
                _this.speedX = -_this.speedX;
            } else if(init >= maxX) {
                init = maxX;
                _this.speedX = - _this.speedX;
            }
            _this.$el.style.left = init + 'px';
            return init;
           
        }, 10)
      
    }
    // 纵向移动
    moveY() {
        var _this = this;
        this.stopY();
        var maxY = this.$el2.offsetHeight - this.$el.offsetHeight
        var val = 0;
        var reg = /\d+/;
        this.timeY = setInterval(function() {
            var shijian =  $time.innerHTML;
            var init = _this.$el.offsetTop;
            init += _this.speedY;
           var rm= boom(_this.$el,_this.$el3);
           if(!rm){
                val =_this.$el4.innerHTML;
                val = reg.exec(val);
                val++;           
            _this.$el.remove();
            _this.$el4.innerHTML = '成绩:'+val;
           }
           if(shijian<=0&&val<40){
            clearInterval($time.time);//清除时间显示的定时器
            clearInterval(_this.timer2);//清除产生小球的定时器
            var $li = document.createElement('li');
            $li.innerHTML="失败";
            _this.$el2.appendChild($li);
            $li.className ='suc';
            var newMove = new  StartMove('.suc');
            //console.log(newMove)
            newMove.animateTo({height:600,'line-height':600,'font-size':280},500,($this,ele)=>{
                setInterval( _=>{
                    ele.style.background = getColor();
                    ele.style.color = getColor();
                },100)
            })
            _this.stopY();//清除小球运动的定时器
            console.log(hhhhhhhhh)
           }
           if(val==40&&shijian>=0){
            clearInterval($time.time);
            clearInterval(_this.timer2);
            var $li = document.createElement('li');
            $li.innerHTML="恭喜";
            _this.$el2.appendChild($li);
            $li.className ='suc';
            var newMove = new  StartMove('.suc');
            //console.log(newMove)
            newMove.animateTo({height:600,'line-height':600,'font-size':280},500,($this,ele)=>{
                setInterval( _=>{
                    ele.style.background = getColor();
                    ele.style.color = getColor();
                },100)
            })
            _this.stopY();
        }
            if(init <= 0) {
                init = 0;
                _this.speedY = -_this.speedY;
            } else if(init >= maxY) {
                init = maxY;
                _this.speedY = - _this.speedY;
                _this.$el.remove();
            }
            _this.$el.style.top = init + 'px';
           
        }, 10)
    }
    move() {
        this.moveX();
        this.moveY();
    }
    stopX() {
        clearInterval(this.timeX);
    }
    stopY() {
        clearInterval(this.timeY);
    }
    stop() {
        clearInterval(this.timeX);
        clearInterval(this.timeY);
    }
}
