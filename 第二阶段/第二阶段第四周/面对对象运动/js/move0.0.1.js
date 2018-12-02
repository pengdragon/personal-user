function move($ele, attr, target, callback) {
    if(typeof $ele === 'string') {
        $ele = document.querySelector($ele);
    }
    clearInterval($ele.timer);
    // var speed = 4;
    $ele.timer = setInterval(function() {
        var initValue = getStyle($ele, attr);
        if(attr === 'opacity') {
            initValue *= 100;
        }
        initValue = parseInt(initValue);
        // (目标值 - 初始值) / 定值
        var speed = (target - initValue) / 10;
        // 速度为越来越小, 给速度取整, 负数向下取整, 整数向上取整
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        initValue += speed;
        if((initValue >= target && speed >= 0) || (initValue <= target && speed <= 0)) {
            initValue = target;
            clearInterval($ele.timer);
            if(typeof callback === 'function') {
                callback($ele);
            }
        }
        if(attr === 'opacity') {
            $ele.style[attr] = initValue/100;
        } else {
            $ele.style[attr] = initValue + 'px';
        }

    }, 10)
}
//获取非行内样式
function getStyle($ele, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle($ele, false)[attr];
    }
    return $ele.currentStyle[attr];
}