class WaterFall {
    constructor(targetObj) {
        // 获取盒子对象
        this.$showBox = document.querySelector(targetObj.$el);
        // 获取展示图片的宽度
        this.width = Math.abs(targetObj.width) || 200;
        this.ajax = targetObj.ajax;
        this.init();
        if (targetObj.lazyLoad) this.lazyLoad();
        if(targetObj.resize) this.resize();
        // this.getData().then(data => {
        //     data = JSON.parse(data).data;
        //     this.insertData(data)
        // })
    }
    getData(words){
        if(words != void 0) {
            // 页码归1
            this.ajax.data.page_num = 1;
            // 查询字段更新
            this.ajax.data.q = words;

        }
        return sendAjax(this.ajax.url, {
            data: this.ajax.data
        })
    }
    //重新创建数据, 重置
    create(words) {
        this.getData(words).then(data => {
            data = JSON.parse(data).data;
            this.data = data;
            this.insertData(data, true);

        })
    }
    // 更新数据, 下一页
    update() {
        this.ajax.data.page_num++;
        return this.getData().then(data => {
            data = JSON.parse(data).data;
            this.data.concat(data);//存储更新后的数据，暂时搁置；
            this.insertData(data);
        })
    }
    // 初始化, 准备工作
    init() {
        // 获取创建li的个数
        let count = Math.floor(this.$showBox.parentNode.clientWidth / this.width);
        this.$showBox.style.width = count * this.width + 'px';
        // 创建li
        // 存储所有li的集合
        this.$liAll = [];
        this.$showBox.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const $li = document.createElement('li');
            $li.style.width = this.width + 'px';
            this.$showBox.appendChild($li);
            // 把创所有创建的li放到一个数组里
            this.$liAll.push($li);
        }
        console.log(this.$liAll);
    }
    // 给数据, 渲染到页面中
    insertData(data, bool) {
        // 清除原有数据
        if(bool) {
            this.$liAll.forEach(item => {
                item.innerHTML = '';
            })
        }
        data.forEach(item => {
            const $div = document.createElement('div');
            $div.className = 'img-list';
            $div.style.height = this.width * item.height / item.width + 'px';
            const $img = document.createElement('img');
            $img.src = item.img
            this.loadImage($img)
            .then(img => {
                $div.appendChild($img);
            })
            .catch(img => {
                //  处理加载失败
            });
            let index = this.countShort();
            // 找到对应的li, 高度最小,添加图片
            this.$liAll[index].appendChild($div);
        })
    }
    // 计算最小长度的li， 返回对象索引
    countShort() {
        const arr = [];
        for (let i = 0; i < this.$liAll.length; i++) {
            arr.push(this.$liAll[i].clientHeight);
        }
        // 打印高度
        // console.log(arr);
        let min = arr[0],
            minIndex = 0;
        for (let i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
    lazyLoad() {
        const _this = this;
        let flag = true;
        this.$showBox.parentNode.addEventListener('scroll', function () {
            // 当滚动高度小于100时，获取数据
            // 设置一个锁, 当获取数据时, 只有成功以后,才可以继续请求获取数据
            if (flag) {
                // 剩余高度
                let height = this.scrollHeight - this.scrollTop - this.clientHeight;
                if (height < 100) {
                    // 获取下一页数据
                    flag = false;

                    // 等到数据获取成功以后, 把flag变为true
                    _this.update().then(_ => {
                        flag = true;
                    })
                }
            }
        })
    }
    // 浏览器尺寸发生改变, 页面内容重排
    resize() {
        let timer = null;
        const _this = this;
        window.addEventListener('resize', function() {
            clearInterval(timer);
            timer = setTimeout(_ => {
                _this.init();
                _this.insertData(_this.data)
            }, 500)
        })
    }
    loadImage(img) {
        return new Promise((resolve, reject) => {
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function() {
                reject(img);
            }
        }) 
    }
}