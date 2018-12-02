const phone = (function(){
    //在此声明的变量为私有属性，出了这个自执行函数就不能使用了，
    return {
    //在此声明的对象属性为公有属性，出了这个自执行函数还可以使用；
        init:function(ele){
            this.$iphone = document.getElementById(ele);
            this.$lock = this.$iphone.children[0];
            this.$hua = this.$lock.children[0];
            this.event();
        },
        event(){
            var _this = this;
            var maxX = this.$lock.clientWidth-this.$hua.offsetWidth;  
            this.$hua.onmousedown = e=>{
                let x =this.$iphone.offsetLeft+this.$lock.offsetLeft+ e.offsetX;                          
                this.$lock.onmousemove = ev=>{                   
                    //滑块定位的left
                     this.$hua.left = ev.pageX- x;
                    if(this.$hua.left<0)
                    this.$hua.left=0;
                    else if(this.$hua.left>maxX){
                        this.$hua.left = maxX;                       
                        this.$iphone.style.background = 'url(images/iphone2.jpg) no-repeat';
                        this.$hua.remove();
                        clearInterval(this.time);
                    } 
                    this.$hua.style.left =this.$hua.left+'px';  
                }
                console.log(x)
            }
            document.onmouseup = e=>{
                clearInterval(this.time);
                this.$lock.onmousemove=null;
               //如果滑动的距离大于最大定位的距离，则不执行以下下的定时器；小于时才执行
               if(this.$hua.left<maxX||this.$hua.left>0)
                this.time = setInterval(_=>{
                    let left = parseInt(this.$hua.style.left);
                    left-=10;
                    if(left<=0){
                    left=0; 
                    clearInterval(this.time);
                    }               
                    this.$hua.style.left = left+'px';
                    console.log('我是定时器')
                },10);           
            }
        }
    }
}())