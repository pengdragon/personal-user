var cookie = (function() {

    return {
        getItem(key) {
            return this.getObject()[key];
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
            this.setItem(key, '', -1);
        },
        clear() {
            var obj = this.getObject()
            for(var i in obj) {
                this.removeItem(i);
            }
        }
    }
}())