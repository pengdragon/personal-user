function ball(){
    var $box = document.querySelector('.box');
    var $frag = document.createDocumentFragment();
    for(var i =0;i<50;i++){
       $div = document.createElement('div');
       //$div.className='ball'; 
       $div.innerHTML='猪头'
      // $div.classList.add('ball');
       $frag.appendChild($div);
       $div.classList.toggle('ball')
       $div.style.opacity='0.5'
    }
   $box.appendChild($frag);
    var $divAll =$box.children;     
    for(var j=0;j<$divAll.length;j++){               
            $divAll[j].style.background= getColor();
            $divAll[j].style.left = getRandom($box.clientWidth, 0)+'px';
            $divAll[j].style.top = getRandom($box.clientHeight, 0)+'px';
         let $obj =new Ball({$el: $divAll[j],$el2: $box,speedX:5,speedY:5})
        $obj.move(); 
             }                      
    setInterval(_=>{
        for(var j=0;j<$divAll.length;j++){              
        $divAll[j].style.color= getColor(); 
        $divAll[j].style.background= getColor();  
        //$box.style.background= getColor();        
            } 
            move($divAll[getRandom(50,0)],{width:600,height:600,'line-height':600,'font-size':300,opacity:100},200,ele=>{
            console.log(ele);
            move(ele,{width:100,height:100,'line-height':100,'font-size':50,opacity:50},300)
        }) 
        },1000)
}