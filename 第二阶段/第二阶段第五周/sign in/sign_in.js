var checkInput = {
    username(str) {
        var  reg = /^[\u4e00-\u9fa5]{2,4}$/;
        return reg.test(str);
    },
    password(str) {
        var reg = /^\w{6,11}$/;
        return reg.test(str);
    },
    age(str){
        var reg = /^([1-9]\d{1,2}|[0-9])$/;
        return reg.test(str);
    },
    tel(str) {
        var reg = /^1[35789]\d{9}$/;
        return reg.test(str);
    },
    mark(str){
        return true;
    },
    email(str) {
        
    }
}

var register = (function(){
    return {
        init(ele) {
            this.$el = document.querySelector(ele);
            this.$inputAll = this.$el.querySelectorAll('input');
            this.$user =  this.$inputAll[0];
            this.event()
            console.log(this.$user);
        },
        event() {
            var _this = this;
            for(let i = 0; i < this.$inputAll.length; i++) {
                this.$inputAll[i].onblur = function() {
                    var $p = this.nextElementSibling;          
                    if(this.value == '') {
                        $p.className = 'text-danger bg-danger';
                        $p.innerHTML = '内容不可以为空';
                    } else {
                        
                        // 调用对应的方法, 把文本值传入
                        var bool = checkInput[this.name](this.value);//执行相应的方法
                        if(bool) {
                            // 验证成功
                            $p.className = 'text-success bg-success'; 
                            if(i==0){  
                                var val = this.value;
                                sendAjax('ajax.php', {
                                      data:{username:val},
                                  
                                    success(res){
                                        res = JSON.parse(res);
                                    console.log(res);
                                    if(res==1){
                                        $p.className = 'text-danger bg-danger';
                                        $p.innerHTML="该用户名已经被注册";
                                    }
    
                                    }
                                });
                            }     
                            $p.innerHTML = '验证成功';                         
                        } else {
                            // 验证失败
                            $p.className = 'text-danger bg-danger';
                            $p.innerHTML = this.getAttribute('data-error');//获取自定义属性
                        }
                    }
                }
            }
            this.$el['submit'].onclick = function() {
                var $pAll = _this.$el.querySelectorAll('p');
                for(let i = 0; i < $pAll.length; i++) {
                    if($pAll[i].className.indexOf('text-success') == -1) {
                        $pAll[i].previousElementSibling.focus();
                        return false;
                    }
                }
                alert('注册成功');
            }
        }
    }
} ())