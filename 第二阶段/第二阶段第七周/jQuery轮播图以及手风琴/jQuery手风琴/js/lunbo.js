const swrapper = (function(){
    var timer;
    return {
        init:function(){
            this.index=0;
           this.$box = document.querySelector('.box');
           this.$box_liAll = this.$box.children;
           this.$uu = this.$box.nextElementSibling;
           this.$uu_liAll = this.$uu.children;
           this.$rightbtn = this.$box.previousElementSibling;
           this.$leftbtn = this.$rightbtn.previousElementSibling;
           let $first = this.$box.firstElementChild;
           let $last = this.$box.lastElementChild;
           this.$box.appendChild($first.cloneNode(true));
           this.$box.insertBefore($last.cloneNode(true),$first);
          // console.log(this.$box)
          this.$box.style.left = -670+'px';
            this.event();
            this.autoPlay(this.index);
        },
        event(){
            let _this = this;
            for(let i = 0;i<this.$uu_liAll.length;i++){
                this.$uu_liAll[i].onclick = function(){
                   _this.index = i;
                    _this.showImages(i);
                }
            }
            this.$leftbtn.onclick = function(e){
                _this.index--;  
                _this.showImages(_this.index);  
                console.log(_this.index)     
            }
            this.$rightbtn.onclick = function(){
                _this.index++;
                _this.showImages(_this.index);
            }
        },
        showImages(index=0){
            if(index<0){
                index=this.$uu_liAll.length-1;
                this.$box.style.left = -670*(this.$uu_liAll.length+1)+'px';
            }else if(index>=this.$uu_liAll.length){
                index = 0;
                this.$box.style.left = '0px';
            }
            this.index = index;
            for(let i = 0;i<this.$uu_liAll.length;i++){
                this.$uu_liAll[i].classList.remove('current');
            }
            this.$uu_liAll[index].className += ' current';
            move(this.$box,{left:-670*(index+1)},500);

        },
        autoPlay(){
            timer = setInterval(_=>{   
                this.showImages(this.index);
                this.index++;
            },1000)
        }
    }
}())