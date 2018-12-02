/*
 ele: DOM对象
 attr: 属性名称
 target: 目标值 
 time: 动画完成时间, 单位是毫秒

 */
// var timer = null;
function move($ele, attr, target, time = 200) {
    // 如果目标值减去初始值为正, 速度为正
    // 反之, 为负
    // 获取初始值
    if(typeof $ele === 'string') {
        // 判断传进来的时css选择器， 还是对象
        $ele = document.querySelector($ele);
    }
    clearInterval($ele.timer);
    var attrVal = getStyle($ele, attr);
    if(attr == 'opacity') {
        attrVal *= 100;
    }
    attrVal = parseInt(attrVal);
    var speed = (target - attrVal) / (time / 10);
    // speed = target - attrVal > 0 ? speed : -speed;
    // 把定时器加到对象上面, 保证一个对象拥有一个定时器
    $ele.timer = setInterval(_ => {
        attrVal += speed;
        if((speed > 0 && attrVal >= target) || (speed < 0 && attrVal <= target)) {
            attrVal = target;
            // 到达目的地, 停止运动
            clearInterval(timer);
        }
        if(attr == 'opacity') {
            $ele.style[attr] = attrVal / 100;
        } else {
            $ele.style[attr] = attrVal + 'px';
        }
    }, 10)
}