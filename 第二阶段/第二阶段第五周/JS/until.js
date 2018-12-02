function loadImg($img) {
    // const $img = document.createElement('img');
    // $img.src = url;
    return new Promise((resolve, reject) => {
        $img.onload = function() {
            // 图片加载成功事件
           
            resolve($img)
            // document.body.appendChild($img);
        }
        $img.onerror = function() {
            // 图片加载失败的事件
            reject($img)
        }
    }) 
}