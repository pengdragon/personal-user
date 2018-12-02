	var clock = (function(){
		function $(obj){
					return document.getElementById(obj);
		}
		var num = 0;
		var time;
		var _inp = $('inp');
		var _start = $('start');
		var _stop = $('stop');
		var _clean = $('clean');
		var _fen = $('fen');
		var _miao = $('miao');
		_start.value ='开始';
		_stop.value = "暂停";
		_clean.value = '清零';		
		console.log(1)
		return {
				Init:function(){
					this.Event();
					},
				Event:function(){
					var _this = this;
					_start.onclick = function(){					
					_this.SetIntval();//调用定时器	
					}
							//暂停
					_stop.onclick = function(){
							clearInterval(time); 
								
					}//清零 
					_clean.onclick = function(){
						num=0;
						_fen.innerHTML=00+'分';
						_miao.innerHTML=00+'秒';
					}
				},
				ShowTime:function(){ 
					num++;
					if(_miao<10)					 
						_miao.innerHTML='0'+Math.floor(num)%60+'秒';
					else
						_miao.innerHTML=Math.floor(num)%60+'秒';
					if(_fen<0)
						_fen.innerHTML ='0'+ Math.floor(num/60%60)+'分';			
					else
						_fen.innerHTML =Math.floor(num/60%60)+'分';	
				},
				SetIntval:function(){			
					time = setInterval(this.ShowTime,1000);
						}
				
			}
					
	}()) 
