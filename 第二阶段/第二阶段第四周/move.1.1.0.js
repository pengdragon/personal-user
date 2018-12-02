function move($ele,targetObj,time=200,callback){
    if(typeof $ele==='string')
         $ele = document.querySelector($ele);
    clearInterval($ele.timer);
    const speedObj = {};
    for(var attr in targetObj){
        var attrVal = getStyle($ele,attr);
        if(attr === 'opacity')
            attrVal *=100;
        attrVal = parseInt(attrVal);
        speedObj[attr] = (targetObj[attr]-attrVal)/(time/10);
    }
    $ele.timer = setInterval(_=>{
        let flag = true;
        for(var attr in speedObj){
            var attrVal = getStyle($ele,attr);
            if(attr === 'opacity')
                attrVal *=100;
            attrVal = parseInt(attrVal);
            attrVal +=speedObj[attr];
            if((speedObj[attr]>0&&attrVal>=targetObj[attr]) || (speedObj[attr]<0 &&attrVal<=targetObj[attr]))
                attrVal = targetObj[attr];
            else
                flag = false;
            if(attr === 'opacity')
            $ele.style[attr] = attrVal/100;
            else
            $ele.style[attr] = attrVal + 'px';  
            console.log(1)
            if(flag)
            clearInterval($ele.timer);
            }
            if(typeof callback == 'function')
            callback($ele,attr);
           
    },10)
}
