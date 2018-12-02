var cookie = (function() {

    return {
        getItem(key) {
            return this.getObject()[key];//获取cookie里面的属性值；
        },
        getObject() {
            var obj = {};
            var cookieAll = document.cookie.split('; ');
            cookieAll.forEach(item => {
                var _item  = item.split('=');
                obj[_item[0]] = _item[1];
            })
            return obj;
        },
        setItem(key, value, day) {
            var sec = day * 24 * 3600;
            document.cookie = `${key}=${value}; max-age=${sec}`;
        },
        removeItem(key) {
            this.setItem(key, '', -1);//把事件设置成过去的 这样就是失效的
        },
        clear() {
            var obj = this.getObject()//删除cookie中的属性，把时间设置为负数，这样就全部删除啦
            for(var i in obj) {
                this.removeItem(i);
            }
        }
    }
}())