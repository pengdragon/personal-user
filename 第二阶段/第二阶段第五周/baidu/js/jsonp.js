
/**
 * 
 * @param {*} url:  输入一个地址
 * @param {*} data : 传入数据
 * 
 * jsonp的原理:
 *      script标签是可以主动向服务器请求资源, 利用了script标签没有同源策略的限制
 * 
 */
function sendJsonp(url, data) {
    // 创建script标签
    const $script = document.createElement('script');
    // 拼接url, 解决缓存
    const flag = url.indexOf('?') == -1 ? '?' : '&';
    url += flag;
    for(let i in data) {
        url += `${i}=${data[i]}&`;
    }
    // window.fn = data.cb
    // window['xxx11111000011222'] = data.cb
    // data.cb = 'xxx11111000011222';
    // data.cb = 'fn';
    url += '_=' + Date.now();
    $script.src = url;
    document.body.appendChild($script);

}