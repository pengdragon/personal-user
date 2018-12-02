var swiper = (function () {
    var timer = null;
    var showWidth = document.querySelector('.qf-banner').clientWidth;

    return {
        init: function () {
            // 获取dom元素
            this.$banner = document.querySelector('.banner-inner');
            this.$tipBox = document.querySelector('.banner-tip');
            this.$tipBoxLiALl = this.$tipBox.querySelectorAll('li');
            this.$prevBtn = document.querySelector('.left-btn');
            this.$nextBtn = document.querySelector('.right-btn');
            // 设置一个全局索引,保证按钮共享.(展示图片的索引)
            this.index = 0;
            // 给每一个小圆圈添加索引, 事件委托点击时,获取索引位置
            for (var i = 0; i < this.$tipBoxLiALl.length; i++) {
                this.$tipBoxLiALl[i].index = i;
            }
            // 克隆元素
            var firstIamge = this.$banner.firstElementChild;
            var lastImage = this.$banner.lastElementChild
            this.$banner.appendChild(firstIamge.cloneNode(true));
            this.$banner.insertBefore(lastImage.cloneNode(true), firstIamge);
            this.$banner.style.left = -showWidth + 'px';
            this.event()
        },
        event: function () {
            var _this = this;
            // 利用事件委托,给每一个小圆点添加点击事件
            this.$tipBox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName == 'LI') {
                    _this.showImage(target.index);
                }
            }
            this.$prevBtn.onclick = function () {
                _this.index--;
                _this.showImage(_this.index);
            }
            this.$nextBtn.onclick = function () {
                _this.index++;
                _this.showImage(_this.index);
            }

        },
        showImage: function (index = 0) {
            if(index >=  this.$tipBoxLiALl.length) {
                index = 0;
                this.$banner.style.left = '0px';
                console.log( this.$banner.style.left)
            } else if(index < 0) {
                index = this.$tipBoxLiALl.length - 1;
                this.$banner.style.left = -showWidth * (this.$tipBoxLiALl.length + 1) + 'px';
            }
            this.index = index;
            for (var i = 0; i < this.$tipBoxLiALl.length; i++) {
                this.$tipBoxLiALl[i].className = '';
            }
            this.$tipBoxLiALl[index].className = 'active';
            move(this.$banner, {
                left: -showWidth * (index + 1)
            });
        },
        autoPlay(index) {


        }
    }
}())