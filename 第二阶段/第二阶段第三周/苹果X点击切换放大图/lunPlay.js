const btn = (function(){
          
    return {
        init:function(ele){
            this.$btn = document.querySelector('#btn');
            this.$imgAll = obj.$box;
            this.$liAll = this.$btn.children;
            this.event();
           
        },
        event(){
            let _this = this;
            for(var i = 0;i<this.$liAll.length;i++){
                this.$liAll[i].index = i;
                this.$liAll[i].onmousedown = function(){
                   _this.showImg(this.index);
                }     
            }
        },
       showImg:function(index){
            //清除所有li的current类名
           for(var i = 0 ;i<3;i++){
           obj.$box.children[i].className='';                      
               }//给指定的Li添加current类名                    
              obj.$box.children[index].className='current';
        }
    }
}())