function move($ele,attr,target,time=200){
    if(typeof $ele==='string')
         $ele = document.querySelector($ele);
    var attrVal = getStyle($ele,attr);
    if(attr === 'opacity')
    attrVal *=100;
    attrVal = parseInt(attrVal);
    var speed = (target - attrVal)/(time/10);//`(time/10)定时器执行的次数
    //(target - attrVal)目标值和初值的差 //speed速度
    var timer = setInterval(_=>{
        attrVal += speed;
        if((speed>0&&attrVal>=target) || (speed<0 &&attrVal<=0)){
            attrVal = target;
            clearInterval(timer);
        }
        if(attr === 'opacity')
        $ele.style[attr] = attrVal/100;
        else
        $ele.style[attr] = attrVal + 'px';
        console.log('speed的值是--------',speed)
    },10)
}