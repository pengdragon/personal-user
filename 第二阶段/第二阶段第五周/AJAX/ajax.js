// 把不确定的参数, 设置成一个集合(无序集合), 用对象
/*
    {
        method,
        data,
        success(){}
    }

*/
function sendAjax(url, obj) {
    const xhr = new XMLHttpRequest();
    // 给对象中的参数设置默认值
    const _default = {
        method: 'GET',
        data: null,
        success: undefined
    }
    // 替换默认值
    // 把obj的值替换到_default中, 如果obj没有, 使用默认值
    for(var key in _default) {
        if(key in obj) {
            _default[key] = obj[key];
        }
    }
    // 拼接url
    _default.method = _default.method.toUpperCase()
    if(_default.method == 'GET') {
        // url拼接
        // 先判断地址有没有?号
        let flag = url.includes('?') ? "&" : "?";//如果存在?那么就是& 不存在？就是？；
        url += flag;
        for(var i in _default.data) {
            let keyValue = `${i}=${_default.data[i]}`;
            url += keyValue + '&';
        }
        url = url.slice(0, url.length - 1);
        console.log(url);

        //get请求， 发送为null
        _default.data = null;
    } else if(_default.method == 'POST') {
        
        _default.data = JSON.stringify(_default.data);
    } else {
        console.log('告辞!');
        return;
    }
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.open(_default.method, url, true);
    xhr.send(_default.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            // console.log(xhr);
            let data = xhr.response;
            if(typeof _default.success == 'function') {
                _default.success(data);
            }
        }
    }
}
