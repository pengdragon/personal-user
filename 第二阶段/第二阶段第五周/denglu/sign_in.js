

var register = (function(){
    return {
        init(ele) {
            this.$el = document.querySelector(ele);
            this.$inputAll = this.$el.querySelectorAll('input');
            this.event()
            console.log(this.$inputAll);
        },
        event() {
            var _this = this;
                this.$inputAll[0].onblur = function() {
                    var $p = this.nextElementSibling;   
                    _this.valuen=this.value;       
                    if(this.value == '') {
                        $p.className = 'text-danger bg-danger';
                        $p.innerHTML = '内容不可以为空';
                     }else{
                         document.cookie =`username=${this.value};`;                        
                     }
                }
                this.$inputAll[1].onblur = function() {
                    _this.valuep = this.value;
                    var $p = this.nextElementSibling;          
                    if(this.value == '') {
                        $p.className = 'text-danger bg-danger';
                        $p.innerHTML = '内容不可以为空';
                     }else{
                        document.cookie =`password=${this.value};`;                        
                    }  
                }
                this.$el['submit'].onclick = function(){
                 
                        sendAjax('sign_in.php',{data:{username:_this.valuen,password:_this.valuep}})
                        .then(res=>{
                            console.log(res)
                            res = JSON.parse(res);
                            if(res.code=='10000'){
                                location.href = 'suc.html';
                            }else{
                                alert("用户名或密码错误")
                            }
                        }).catch(res=>{
                            alert('请先登录');
                        })
                        return false;
                }
              
        
        }
    }
} ())