
    const obj = (function(){

        return {
            init:function(ele){              
                this.$box = document.querySelector(ele);
                this.$mini_box = this.$box.children[3];
                this.$picture = this.$box.nextElementSibling.nextElementSibling;
                //lunplay
                this.$btn = document.querySelector('#btn');
                this.$imgAll = obj.$box;
                this.$liAll = this.$btn.children;
               // console.log(this.$picture)
                this.event();
            },
            event(){ 
                let _this = this;

                //lunp;ay
                for(var i = 0;i<this.$liAll.length;i++){
                    this.$liAll[i].index = i;
                    this.$liAll[i].onmousedown = function(){                                  
                      _this.index = this.index;
                       for(var j =0;j<_this.$liAll.length;j++){
                        _this.$picture.children[j].className = '';
                    }
                    _this.$picture.children[this.index].className = 'play';
                    _this.showImg(this.index);
                    }   
                  
                }
                this.$box.onmouseover = function(e){                      
                    e = e || window.event; 
                     //显示遮罩层
                   _this.$mini_box.style.display = 'block'; 
                   //显示被放大的图片
                   _this.$picture.style.display = 'block';                                                                                                                     
                    //遮罩层的宽高
                    let miniHeight = _this.$mini_box.offsetHeight;
                   let miniWidth = _this.$mini_box.offsetWidth; 
                   //遮罩层的一半宽高
                   let heightHalf = miniHeight/2;
                    let widthHalf =  miniWidth/2;
                    //大盒子的可视宽高-小盒子的可用宽高
                   let maxX = this.clientWidth-_this.$mini_box.offsetWidth;
                   let mayY = this.clientHeight-_this.$mini_box.offsetHeight;   
                    //鼠标到大盒子左边的距离
                    let left = e.clientX- this.offsetLeft- this.clientLeft; 
                    //鼠标到大盒子顶部的距离
                    let bottom = e.clientY- this.offsetTop- this.clientTop;                   
                   //初始化定位的值
                
                    
//---------四个方向进入条件  ,横轴小于一半时，判断 纵轴小于一半，大于一半 小于最大值加一半-----------
//---------------------------横轴大于一半时，判断纵轴小于一半，大于一半 小于最大值加一半------------
//---------------------------横轴大于最大值加一半时，纵轴小于一半，大于一半 小于最大值加一半--------
//----------------先获取鼠标进入的鼠标位置---将鼠标获取的值经过判断出合理的数据再传给遮罩的定位值-------------------------------------------
                _this.direction(e,widthHalf,heightHalf,mayY,maxX,   _this._left,  _this._bottom);
                //将鼠标获取的值给遮罩层进行定位
                _this.$mini_box.style.left =   _this._left+'px';
                _this.$mini_box.style.top =   _this._bottom+'px'; 
                //放大后图片定位
                // console.log( _this.$picture.children[2])
                // _this.$picture.children[1].style.left = -left+widthHalf+'px';
                // _this.$picture.children[1].style.top =  -bottom+heightHalf+'px'; 
                //鼠标开始移动了
                this.onmousemove = function(ev){                    
                    ev = ev || window.event;
                    //鼠标到大盒子左边的距离
                   let left = ev.clientX- this.offsetLeft- this.clientLeft; 
                   //鼠标到大盒子顶部的距离
                   let bottom = ev.clientY- this.offsetTop- this.clientTop; 
//---------------判断鼠标是怎么移动的---把移动的数据分析判断后再给遮罩层的定位置-------------                  
                  tureFalse();
                  _this.$mini_box.style.left =   _this._left+'px';
                _this.$mini_box.style.top =   _this._bottom+'px'; 
                    //放大后图片定位值要是遮罩层的两倍    
                _this.index = _this.index || 0;
                
                _this.$picture.children[_this.index].style.left = -(  _this._left*2)+'px';
                _this.$picture.children[_this.index].style.top =  -(  _this._bottom*2)+'px'; 
 //----------------------定位值的合法性----------------------------------------------------------               
                  function tureFalse(){
                  //当鼠标从左往右移到遮罩层一半的时候定位启动
                    if(ev.offsetX>=widthHalf){
                        _this._left=left-widthHalf;                        
                   }
                   //当定位大于最大值时，默认等于最大值
                   if(  _this._left>maxX){
                    _this._left = maxX;                        
                   }
                   //当鼠标在最右边时，往左滑动，滑到遮罩层一半的时候，定位启动；
                   if( left-widthHalf<maxX){
                    _this._left = left-widthHalf;
                   }
                   //当遮罩在最左边的时候，定位为0；
                   if(left<widthHalf){
                    _this._left=0;
                   }     

                   if(ev.offsetY>=widthHalf){
                    _this._bottom=bottom-heightHalf;     
                   }    
                   if(  _this._bottom>mayY){
                    _this._bottom = mayY;
                   }     
                   if( bottom-heightHalf<mayY){
                    _this._bottom = bottom-widthHalf;
                   }   
                   if(bottom<heightHalf){
                    _this._bottom = 0;
                   }
                }
//--------------------------判断结束-----------------------------------------------------            
                       }
                   }     
//-----------------鼠标移出去时，遮罩层和被放大的图片隐藏起来-----------------------------
                   this.$box.onmouseout = function(){
                    _this.$mini_box.style.display = 'none'; 
                    _this.$picture.style.display = 'none';  
                                                     
                   }                                              
                  },
                  showImg:function(index){
                    //清除所有li的current类名
                   for(var i = 0 ;i<3;i++){
                   obj.$box.children[i].className='';                      
                       }//给指定的Li添加current类名                    
                      obj.$box.children[index].className='current';
                },
                  direction(e,widthHalf,heightHalf, mayY,maxX, _left,_bottom){
                    this._bottom = _bottom;             
                    this._left = _left;
                       //鼠标到大盒子左边的距离
                    let left = e.clientX-this.$box.offsetLeft-this.$box.clientLeft; 
                     //鼠标到大盒子顶部的距离                      
                   let bottom = e.clientY-this.$box.offsetTop-this.$box.clientTop;
                   //定位left=0;
                   if(left<widthHalf){
                    this._left=0;
                    //鼠标从左上角或者上左角进入
                      if(bottom<heightHalf){
                        this._bottom=0;
                      }   
                      //鼠标从坐下角或者下左角进入
                      else if(bottom>(mayY+heightHalf)){
                        this._bottom = mayY;
                      } 
                      //鼠标从左边进入
                      else if(bottom>heightHalf){
                        this._bottom = _bottom-e.offsetY;
                      }             
                  }
                  //定位的left达到最大值maxX
                  else if(left>(maxX+widthHalf)){
                    this._left = maxX;
                      //鼠标从右上角进入或者上右角进入
                    if(bottom<heightHalf){                           
                        this._bottom=0;
                      }
                      //鼠标从右下角或者下右角进入
                      else if(bottom>(mayY+heightHalf)){
                        this._bottom = mayY;
                      }     
                      //鼠标从右边进入
                      else if(bottom>heightHalf){
                        this._bottom = this._bottom-e.offsetY;
                      }                      
                  }
                  //定位left在最小值和最大值之间时
                  else if(left>widthHalf){
                    this._left = left-e.offsetX;
                      //鼠标从上方进入
                      if(bottom<heightHalf){                           
                        this._bottom=0;
                      }
                      //鼠标从下方进入
                      else if(bottom>(mayY+heightHalf)){
                        this._bottom = mayY;
                      }   
                      //暂定
                      else if(bottom>heightHalf){
                        this._bottom =   this._bottom-e.offsetY;
                      }             
                  }
                  },
                  lunPlay(){

                  }                 
        }
    }())    

             
    