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
3. 虽然在开发文档中，组件一项中，form章节没有提到点击提交按钮的时候，textarea的内容也可以被携带，但实际上是有的。
4. input元素没有type="hidden"这个类型 用<input type="text" name="seasons" value="kk" hidden/> 就好了 注意有闭合结束符
5. 云函数的返回值里边不能和函数相关，也就是说不能返回一个函数 也不能返回一个对象，这个对象的某个属性值是个函数，这样的属性会被过滤掉
6. wx:for="{{arrData}}" wx:for-item="itemName"
7. 
```html
    <image src="{{url}}" mode="aspectFit" data-id="hh" data-file="123"></image>
    // target.dataset.file
```html