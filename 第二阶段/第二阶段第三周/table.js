var table = (function () {
    var $tbody = document.querySelector('.tbody');
    return {
        init(data) {
            this.insertData(data);
            //有先后顺序，先添加元素，再给元素绑定事件
            this.event();
        },
        event() {
            var _this = this;
            $tbody.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                // 判断如果是按钮才触发
                if (target.className === 'btn btn-danger') {
                    // 删除按钮
                    // target.parentNode.parentNode.remove()
                    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
                    //    console.log(target.parentNode.parentNode)
                } else if (target.className === 'btn btn-success') {
                    // 添加按钮
                    //var tr = target.parentNode.parentNode.cloneNode(true);
                    //加在当前tr的下一行
                    //var next_tr = target.parentNode.parentNode.nextElementSibling;
                    //this.insertBefore(tr,next_tr);                   
                   // this.insertBefore(tr);加在tbody的最后面
                   var obj = {
                       name:'彭龙',
                        age:23,
                        proffesion:'学生',
                        jieshao:'我就是我，人间不一样的烟火'
                   };
                   var node = target.parentNode.parentNode;
                   data.splice(node.index+1,0,obj);
                   data.sort((a,b)=>a.age-b.age)
                   _this.insertData(data);

                } else if (target.className == 'btn btn-warning') {
                    // 修改按钮
                    target.innerHTML = '确定';
                    target.className = 'btn';
                    var tr = target.parentNode.parentNode;
                    // 获取tr中的td， 不包含最后一项    
                    for (var i = 0; i < tr.children.length - 1; i++) {
                        console.log(tr.children[i]);
                        tr.children[i].innerHTML = `<textarea>${tr.children[i].innerHTML}</textarea>`;
                    }

                } else if (target.className == 'btn') {
                    // 确定按钮
                    target.innerHTML = '修改';
                    target.className = 'btn btn-warning';
                    var tr = target.parentNode.parentNode;
                    // 获取tr中的td， 不包含最后一项    
                    for (var i = 0; i < tr.children.length - 1; i++) {
                        console.log(tr.children[i]);
                        // 获取每一个文本域的值
                        var val = tr.children[i].children[0].value;
                        tr.children[i].innerHTML = val;
                    }

                }
            }
        },//把数据渲染成对象,插入到html中
        insertData(data) {
            //文档碎片
            var frag = document.createDocumentFragment();
            //
            $tbody.innerHTML = '';
            //有几条数据添加几个tr
            for (var i = 0; i < data.length; i++) {
                var $tr = document.createElement('tr');
                $tr.index = i;
                for (var j in data[i]) {
                    //循环对象创建td
                    var $td = document.createElement('td');
                    $td.innerHTML = data[i][j];
                    $tr.appendChild($td);
                }
                var _td = document.createElement('td');
                _td.innerHTML = '<button class="btn btn-danger">删除</button><button class="btn btn-warning">修改</button><button class="btn btn-success">添加</button>'
                // _td.innerText = '<button class="del">删除</button>';不会进行转义
                // _td.outerHTML = '<button class="del">删除</button>';除了去除本身 其他和innerhtml一样
                $tr.appendChild(_td);
                //把创建好的tr放入到文档碎片中
                frag.appendChild($tr);
            }//把文档碎片添加到TBODY中
            $tbody.appendChild(frag);

        }
    }
}())