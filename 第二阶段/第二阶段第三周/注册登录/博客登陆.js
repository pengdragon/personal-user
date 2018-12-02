const login = (function(){
//访问不了h't'm'l里的css样式
    return {
        init:function(ele){
            this.$box = document.querySelector(ele);              
            this.$user = this.$box.children[2];
            this.$userError =  this.$user.nextElementSibling;
            this.$iphone = this.$box.children[5];
            this.$iphoneError =  this.$iphone.nextElementSibling;
            this.$passw = this.$box.children[8];
            this.$passwError = this.$passw.nextElementSibling;
            this.$repassw = this.$box.children[11];
            this.$repasswError = this.$repassw.nextElementSibling;     
            this.arr = [this.$user,this.$iphone,this.$passw,this.$repassw];
            console.log(this.$user)
            this.$btn = this.$box.children[this.$box.children.length-1];
            console.log(this.$btn)
            this.event();
        },
        event(){
            let _this = this;
            //聚焦时都是没有背景颜色即背景颜色为白色
            for(let i =0;i<this.arr.length;i++){//let开辟块级作用域
                this.arr[i].onfocus = function(){
                   this.style.border='2px solid white';
                   //console.log(i)//let定义开辟了块级作用域所以在此的i是块级作用域里的自变量，会向块级作用域查找i的
                }
            }//用户名输入
            this.$user.onblur = function(e){
                console.log(1144444411)
                let reg = /^[a-zA-Z][a-zA-Z\d_-]{7,11}$/;
                let val = this.value   
                if(reg.test(val)){
                    this.style.border='2px solid greenyellow';
                    _this.$userError.style.display='none';
                   
                }
                else{
                    this.style.border =' border: 2px solid red';
                    _this.$userError.style.display='block';
                }  

            }//手机号输入
            this.$iphone.onblur = function(ev){
               let reg = /^[1][35789]\d{9}$/;
                let val =  this.value;
                if(reg.test(val)){
                    this.style.border='2px solid greenyellow';
                    _this.$iphoneError.style.display='none';
                }
                
                else{
                    this.style.border =' border: 2px solid red';
                    _this.$iphoneError.style.display='block';
                }    
            }//密码输入
            this.$passw.onblur = function(eve){
                let reg = /^[a-zA-Z\d_]{8,}$/;
                let val = this.value;
                if(reg.test(val)){
                    this.style.border='2px solid greenyellow';
                    _this.$passwError.style.display='none';
                }   
                else{
                    this.style.border =' border: 2px solid red';
                    _this.$passwError.style.display='block';
                }
            }//密码再次输入
            this.$repassw.onblur = function(even){
                let reg = /^[a-zA-Z\d_]{8,}$/;
                let val = this.value;
                if(reg.test(val)){
                    this.style.border='2px solid greenyellow';
                    _this.$repasswError.style.display='none';
                }  
                else{
                    this.style.border =' border: 2px solid red';
                    _this.$repasswError.style.display='block';
                }
            }//登陆
            this.$btn.onclick = function(){                                       
                    for(var i = 0;i<_this.arr.length;i++){
                        if(_this.arr[i].className=='error'||_this.arr[i].className==''){
                        _this.arr[i].focus();
                        break;
                         }             
                    }
                    if(i==_this.arr.length)
                   alert('注册成功'); 
                }
        }
    }
}())