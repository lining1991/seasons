1. 元素的data属性 data-abc 尽量不要写data-abdDe 不要再跟一个驼峰，不然在小程序中bindtap的事件中在event.target.dataset的对象中是取不到这个data属性的.同时实践中也发现data-type data-active 这样的属性在微信小程序中也是取不到的，渲染出来的结构上能够看到就是没有的  eg:event.target.dataset.abc 
```javascript
    // 在javascript高级程序设计中p293 html5 自定义数据属性
    var $div = document.getElementById('myDiv');
    var appId = $div.dataset.appiId;
    $div.dataset.myname = 'lining';
```
2. 动态绑定类名
```html
   <view class="tags {{index === num : 'active' : ''}}"></view>  
```html
