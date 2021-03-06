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
        //console.log( obj.$el2)
        // dom对象
        this.$el = obj.$el;
        this.$el2 = obj.$el2;
        // x轴的速度
        this.speedX = obj.speedX;
        // y轴的速度
        this.speedY = obj.speedY;
        this.timeX = null;
        this.timeY = null;
        //console.log( this.$el);
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
        }, 1)
    }
    // 纵向移动
    moveY() {
        var _this = this;
        this.stopY();
        console.log()
        var maxY = this.$el2.offsetHeight - this.$el.offsetHeight
        this.timeY = setInterval(function() {
            var init = _this.$el.offsetTop;
            init += _this.speedY;
            if(init <= 0) {
                init = 0;
                _this.speedY = -_this.speedY;
            } else if(init >= maxY) {
                init = maxY;
                _this.speedY = - _this.speedY;
            }
            _this.$el.style.top = init + 'px';
        }, 1)
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