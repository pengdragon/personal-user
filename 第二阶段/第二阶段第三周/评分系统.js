var star = (function(){
    var index;
    return {
        init:function(ele,num,cla){//传入类名和星星数量；
            this.$box = document.querySelector(ele);            
            this.createStar(num);
            this.$liAll = this.$box.children;
            this.event();
            this.lightStar(index);
        },
        event(){
            var _this = this;
            this.$box.onmouseover = function(ev){
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName==='LI')               
                //var index = target.index;
                _this.lightStar(target.index);
                
            }
        },
        createStar(num){
            var $frag= document.createDocumentFragment();
            for(var i =0;i<num;i++){
                var $li = document.createElement('li');
                $li.index = i;
                $frag.appendChild($li);
            }
            this.$box.appendChild($frag);
        },
        lightStar(index){
            for(var i = 0;i<this.$liAll.length;i++){
                this.$liAll[i].removeAttribute('class');
                console.log(index)
                if(i<=index)
                this.$liAll[i].setAttribute('class','active');
            }
            
        }
    }
}())