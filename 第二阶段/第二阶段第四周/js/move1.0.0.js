/*
 ele: DOM对象
 attr: 属性名称
 target: 目标值 
 time: 动画完成时间, 单位是毫秒

 */
// var timer = null;
function move($ele, targetObj, time = 200) {
 
    if(typeof $ele === 'string') {
        $ele = document.querySelector($ele);
    }
    clearInterval($ele.timer);

    // 获取每个属性的速度
    var speedObj = {};
    for(var attr in targetObj) {
        // 获取初始值
        var attrVal = getStyle($ele, attr);
        if(attr == 'opacity') {
            attrVal *= 100;
        }
        attrVal = parseInt(attrVal);
        var speed = (targetObj[attr] - attrVal) / (time / 10);
        speedObj[attr] = speed;
    }
    console.log(speedObj);

    $ele.timer = setInterval(_ => {
        var flag = true;
        for(var attr in targetObj) {
            // 根据不同属性获取初始值
            var attrVal = getStyle($ele, attr);
            if(attr == 'opacity') {
                attrVal *= 100;
            }
            attrVal = parseInt(attrVal);
                
            attrVal += speedObj[attr];

            if((speedObj[attr] > 0 && attrVal >= targetObj[attr]) || (speedObj[attr] < 0 && attrVal <= targetObj[attr])) {
                attrVal = targetObj[attr];
            } else {
                flag = false
            }
            if(attr == 'opacity') {
                $ele.style[attr] = attrVal / 100;
            } else {
                $ele.style[attr] = attrVal + 'px';
            }
        }
        console.log(1)
        if(flag) {
            clearInterval($ele.timer);
        }

    }, 10)
}