const shopCar = (function(){
    var $ul = document.querySelector('ul');
    return {
        init(){
            this.event();
            this.getData();
        },
        event(){
            var _this = this;
            $ul.oninput = function(e){
                e = e || window.event;
                var target =  e.target || e.srcElement;
                var index = target.parentNode.index;
                if(target.nodeName === 'INPUT') {
                // 修改本地的数据
                // 获取当前数据
                var data = _this.data[index];
                // 修改对应数据的数量
                data.count = Number(target.value);
                console.log(data.count)
                // 更新本地数据
                localStorage.shopList = JSON.stringify(_this.data);
                // 修改小计
                _this.insertData(_this.data);

            } 
            }
            $ul.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName==='BUTTON'){
                    //console.log(_this.data)
                    _this.data.splice(target.parentNode.index,1);
                    target.parentNode.remove();
                    //删除后更新本地存储
                    localStorage.shopList = JSON.stringify(_this.data);
                }
            }           
        },
        getData(){
            //localStorage.clear();
                this.data = localStorage.shopList || '[]';
                this.data = JSON.parse( this.data);
                //console.log(shopList);
               this.insertData(this.data)
        },
        insertData(data){
            $ul.innerHTML='';
            data.forEach((item, index) => {
                    var $li = document.createElement('li');
                    $li.index = index;
                    $li.innerHTML = `
                        商品名称:<span class='title'>${data[index].title}</span></br>
                        商品价格<span class='price'>${data[index].price}</span></br>
                        购买数量<input class="count" value=${data[index].count} placeholder="请输入数量" /></br>
                        小计<span>${data[index].price * data[index].count}</span></br>
                        <button>删除</button>
                    `;
                    $ul.appendChild($li);
                })
        }
    }
}())