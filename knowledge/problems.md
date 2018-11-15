1. 不小心把onload的值写成了箭头函数，导致函数里边一直取不到this的值。也就无法使用this.setData()等。
```javascript
    // 错误的代码片段
    onload: () => {
        console.log(this); //undefined
    }
    // 正确的实践1
    onload: function () {

    }
    // 正确的实践2
    onload() {

    }
```
*思考：我知道两种写法的区别，也知道箭头函数的this,但我不知道在这个地方写成箭头函数this指向了哪里。也许需要看看源码*