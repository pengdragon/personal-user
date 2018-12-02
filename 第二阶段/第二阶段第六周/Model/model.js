//  `<div class="model-dialog">
//     <div class="model-content">
//       <div class="model-header">
//         <a href="javascript:;" class="close">x</a>
//         <h4 class="model-title">提示内容</h4>
//       </div>
//       <div class="model-body">

//       </div>
//     </div>
//   </div>`
function create (element, className) {    
  var $box = document.createElement(element);
  if(className) $box.className = className;
  return $box;
}
 var Model = (function() {
    var instance = null;
    function dialog() {
      // 创建dom结构
      var $box = create('div', 'model-dialog'),
      $content= create('div', 'model-content'),
      $header =  create('div', 'model-header'),
      $headerTitle =  create('h4', 'model-title');
      $body =  create('div', 'model-body');
      // appendChild()方法会返回添加的元素， 所以写成了链式结构
      $box.appendChild($content).appendChild($header).innerHTML = ` <a href="javascript:;" class="qf qf-shop-close close"></a>`;
      $header.appendChild($headerTitle);
      $content.appendChild($body);
      document.body.appendChild($box);
      return {
        event() {
          var _this = this;
          $box.onclick = function(e) {
            e = e || window.event();
            const target = e.target ||e.srcElement;
            if(target.classList.contains('close')) {
              _this.close()
            }
          }
        },
        // 展示弹窗
        show({title, content, type}) {
          let i = `<i class="qf qf-shop-${type}"> </i>`;
          $headerTitle.innerHTML = title;
          $body.innerHTML = `${i} <p>${content}</p>`;
          $box.style.display = 'flex';
        },
        close() {
          $box.style.display = 'none';
        },
        success(content = '恭喜成功') {
          this.show({title: '成功', content, type: 'success'})
        },
        info(content = '这是一个提示') {
          this.show({title: '提示', content, type: 'info'})
        },
        error(content = '未知的错误') {
          this.show({title: '失败', content, type: 'error'})
        },
        warning(content = '这是一个警告') {
          this.show({title: '警告', content, type: 'warning'})
        }
      }
      
    }
    return function() {
      if(!instance) {
        instance =  dialog();
        // 绑定事件
        instance.event()
      }
      return instance;
    }
}())