class WaterFall{
    constructor(targetobj){
    this.$showBox = document.querySelector(targetobj.$el);
    console.log( this.$showBox);
    this.width = targetobj.width || 200;
    this.init();
    }
    init(){
        let count = Math.floor( this.$showBox.parentNode.clientWidth/this.width);
        console.log(count)
        //给shoubox设置width;
        this.$showBox.style.width = count * this.width + 'px';
        //console.log(count);
        this.$liAll= [];
        for(let i =0;i<count;i++){
            this.$li = document.createElement("li");
            this.$li.style.width = this.width+'px';
            this.$showBox.appendChild(this.$li);
            this.$liAll.push(this.$li);
        }
    }
    insertData(data){
        data.forEach((item,index)=>{
            //console.log(item)
            let $div = document.createElement('div');
            let $img = document.createElement('img');
            $div.appendChild($img);
            $div.className ='img-list';
            $div.style.height = this.width * item.height/item.width+'px';
            //console.log($div.style.height)
            $img.src=item.img;
            //console.log($img.src);
            this.$liAll[this.countShort()].appendChild($div);
            //this.$li.appendChild($div)
            //console.log(this. countShort())
        })
    }
    //判断li中谁的高度最小，返回高度最小的Li的索引
        countShort() {
        const arr = [];
        for(let i = 0; i < this.$liAll.length; i++) {
            arr.push(this.$liAll[i].clientHeight);
        }
        let min = arr[0],
        minIndex = 0;
        for(let i = 1; i < arr.length; i++ ) {
            if(min > arr[i]) {
                //如果大于谁就先等于谁，循环完之后min是最小的，minIndex为最小的索引；
                min = arr[i];
                minIndex = i;
            }
        }
        return minIndex;
    }
}


// class WaterFall {
//     constructor(targetObj) {
//         // 获取盒子对象
//         this.$showBox = document.querySelector(targetObj.$el);
//         // 获取展示图片的宽度
//         this.width = Math.abs(targetObj.width) || 200;
//         this.init();
//         // this.getData().then(data => {
//         //     data = JSON.parse(data).data;
//         //     this.insertData(data)
//         // })
//     }
//     // 初始化, 准备工作
//     init() {
//         // 获取创建li的个数
//         let count = Math.floor(this.$showBox.parentNode.clientWidth / this.width);
//         this.$showBox.style.width = count * this.width + 'px';
//         // 创建li
//         // 存储所有li的集合
//         this.$liAll = [];
//         for(let i = 0; i < count; i++) {
//             const $li = document.createElement('li');
//             $li.style.width = this.width + 'px';
//             this.$showBox.appendChild($li);
//             // 把创所有创建的li放到一个数组里
//             this.$liAll.push($li);
//         }
//         console.log(this.$liAll);
//     }
//     // getData(words) {
//     //     var _default = {
//     //       page_num: 1,
//     //       page_size: 40,
//     //       q: words
//     //     }
//     //     return sendAjax('https://dev.91jianke.com:1091/id_v2_5/search_img', {
//     //       data: _default
//     //     })
//     // }
//     // 给数据, 渲染到页面中
//     insertData(data) {
//         data.forEach(item => {
//             const $div = document.createElement('div');
//             $div.className = 'img-list';
//             $div.style.height = this.width * item.height / item.width + 'px';
//             const $img = document.createElement('img');
//             $img.src = item.img
//             $div.appendChild($img);
//             let index = this.countShort();
//             // 找到对应的li, 高度最小,添加图片
//             this.$liAll[index].appendChild($div);
//         })
//     }
//     // 计算最小长度的li， 返回对象索引
//     countShort() {
//         const arr = [];
//         for(let i = 0; i < this.$liAll.length; i++) {
//             arr.push(this.$liAll[i].clientHeight);
//         }
//         // 打印高度
//         // console.log(arr);
//         let min = arr[0],
//         minIndex = 0;
//         for(let i = 1; i < arr.length; i++ ) {
//             if(min > arr[i]) {
//                 min = arr[i];
//                 minIndex = i;
//             }
//         }
//         return minIndex;
//     }
// }