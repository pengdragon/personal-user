const shop = (function(){
    var $ul = document.querySelector('ul');
    return {
        init(){
            this.event();
            this.getData();
        },
        event(){
            var _this = this;
            $ul.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'BUTTON'){
                    var $father = target.parentNode;
                    var count = $father.querySelector('.count').value;
                    _this.data[$father.index].count = Number(count);
                    //console.log(_this.data)
                     _this.setItem(_this.data[$father.index]);
                     location.href='shop_car.html';                           
                }
            }
        },
        getData(){
          sendAjax('json/shop.json')
            .then(res=>{
               res = JSON.parse(res);
                if(res.code==0){
                    this.data = res.data;
                    this.insertData(this.data);
                    //console.log(this.data);
                }else{
                    alert('获取信息失败');
                }
            })
        },
        insertData(data){
                data.forEach((element,index) => {
                    var $li = document.createElement('li');
                    $li.index = index;
                    $li.innerHTML = `
                    商品名称<span class="title">${data[index].title}</span>
                    商品价格<span class="price">${data[index].price}</span>
                    购买数量<input class="count" type="text" placeholder="请输入数量">
                    <button>加入购物车</button>
                    `;
                    $ul.appendChild($li);
                });
        },
           // 把商品数据存储到本地
        setItem(data){
              // 现获取原有数据
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
              // 判断购物数据中, 是否存在当前商品
                for(var i = 0; i < shopList.length; i++) {
                    if(data.id == shopList[i].id) {
                        // 此商品已经存在
                        shopList[i].count += data.count;
                        break;
                    }                         
                }
                if(i == shopList.length) {
                    // 商品不存在
                    shopList.push(data);
                }                    
                // 在把全部数据存到本地
                localStorage.shopList = JSON.stringify(shopList);      
        }
    }
}())