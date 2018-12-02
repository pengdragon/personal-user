const filter1 = (function(){

    return {
        init:function(){
            this.$show_image = document.querySelector('.show-image');
            this.$filter = this.$show_image.children[1];
            this.$show_big_image =   this.$show_image.nextElementSibling;
            this.$big = this.$show_big_image.firstElementChild;
            this.$img_box = this.$show_big_image.nextElementSibling;
            this.$img_box_childAll =  this.$img_box.children;
            console.log(  this.$big )
            this.event();
        },
        event(){
            let _this = this;
            let maxX;
            let mayY;
            this.$show_image.onmouseenter = function(){
                _this.$filter.style.display="block";
                _this.$show_big_image.style.display="block";
                 maxX = _this.$show_image.clientWidth- _this.$filter.offsetWidth;
                 mayY = _this.$show_image.clientHeight-_this.$filter.offsetHeight;
                //console.log(maxX,mayY)
            }
            this.$show_image.onmousemove = function(e){
                e = e || window.event;
                let x = e.pageX,
                y = e.pageY;
                let left = x-_this.$filter.offsetWidth/2- this.offsetLeft;
                let top = y - _this.$filter.offsetHeight/2 - this.offsetTop;
                //console.log(left,top)
                if(left<0)
                left = 0;
                if(top<0)
                top = 0;
                else if(left>maxX)
                left = maxX;
                else if(top>mayY)
                top = mayY;
                console.log(left,top)
                console.log(maxX,mayY)
                _this.$filter.style.left = left +'px';
                _this.$filter.style.top = top +'px';
                _this.$big.style.left = -3*left+'px';
                _this.$big.style.top= -3*top+'px';
                
            }
            this.$show_image.onmouseleave = function(){
                _this.$filter.style.display="none";
                _this.$show_big_image.style.display="none";

            }  
            for(var i = 0;i< this.$img_box_childAll.length;i++){
                this.$img_box_childAll[i].index=i;
                this.$img_box_childAll[i].className=''
                this.$img_box_childAll[i].onclick = function(){
                    console.log(this)
                    for(var j = 0;j<_this.$img_box_childAll.length;j++){
                        _this.$img_box_childAll[j].className='';                       
                    }
                    this.className='active';
                    console.log( _this.$big)
                    _this.$big.setAttribute('src',`img/${this.index}.jpg`);
                    _this.$show_image.firstElementChild.setAttribute('src',`img/${this.index}.jpg`);
                   
                }
            }     
        }
    }
}())

    function Filter(obj){
        if(typeof obj.ele ==="string")this.ele = document.querySelector(obj.ele);
        else this.ele = obj.ele;
        //展示区
        this.$show_image = this.ele.firstElementChild;
        this.$show_image_img = this.$show_image.firstElementChild;
        this.$show_image_filter = this.$show_image.lastElementChild;
        //选择区
        this.$img_box = this.ele.lastElementChild;
        this.$img_box_childAll =  this.$img_box.children;
        //放大区
        this.$show_big = this.$img_box.previousElementSibling;
        this.$show_big_img = this.$show_big.firstElementChild;
        //最大值判断
    }
    Filter.prototype.init = function(){
    this.event();
    }
    Filter.prototype.event= function(){
        this.$show_image.onmouseenter =_=>{
            this.$show_image_filter.style.display="block";
            this.$show_big.style.display="block"; 
            this.maxX = this.$show_image.clientWidth- this.$show_image_filter.offsetWidth;
            this.mayY =  this.$show_image.clientHeight- this.$show_image_filter.offsetHeight;   
        }
        this.$show_image.onmousemove =e=>{
            e = e || window.event;
            let left = e.pageX - this.ele.offsetLeft - this.$show_image_filter.offsetWidth/2;
            let top = e.pageY -this.ele.offsetTop -  this.$show_image_filter.offsetHeight/2;
            if(left<0)
            left = 0;
            else if(left>=this.maxX)
            left =this.maxX;    
            if(top<0)
            top = 0;
            else if(top>=this.mayY)
                top = this.mayY;
            this.$show_image_filter.style.left = left +'px';
            this.$show_image_filter.style.top = top +'px';
            this.$show_big_img.style.left = -3*left+'px';
            this.$show_big_img.style.top= -3*top+'px';
        }
        this.$show_image.onmouseleave = _=>{
            this.$show_image_filter.style.display="none";
            this.$show_big.style.display="none";
        }
        for(let i = 0;i<  this.$img_box_childAll.length;i++){
            this.$img_box_childAll[i].index=i;
            this.$img_box_childAll[i].classList.remove('active');
            this.$img_box_childAll[i].onclick =_=>{
                for(var j = 0;j<this.$img_box_childAll.length;j++){
                    this.$img_box_childAll[j].classList.remove('active');                       
                }
                this.$img_box_childAll[i].classList.add('active');
                this.$show_big_img.setAttribute('src',`img/${i}.jpg`);
                this.$show_image_img .setAttribute('src',`img/${i}.jpg`);
               
            }
        }       
    }