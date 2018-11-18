1. 元素的data属性 data-abc 尽量不要写data-abdDe 不要再跟一个驼峰，不然在小程序中bindtap的事件中在event.target.dataset的对象中是取不到这个data属性的  eg:event.target.dataset.abc 
```javascript
    // 在javascript高级程序设计中p293 html5 自定义数据属性
    var $div = document.getElementById('myDiv');
    var appId = $div.dataset.appiId;
    $div.dataset.myname = 'lining';
```
