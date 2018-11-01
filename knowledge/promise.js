// 写着玩一下的 异步相关 给云函数没啥关系
var taskAsync = function(callback){
    var result = setTimeout(function(){
        callback('异步任务的结果')
    }, 3000)
}
taskAsync(function cb(result){
    console.log(result);
});
// 用一个promise对象实现ajax操作的例子
const getJSON = (url) => {
    const promise = new Promise((resolve, reject) => {
        const handler = () => {
            if (this.readyState !== 4) {
                return ;
            }
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest();
        client.oepn('GET', url);
        client.onreadystatechange = handler
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json')
        client.send()
    });
    return promise;
}
getJSON('/post.json').then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})
// 写一个图片加载的例子
const preloadImage = path => {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = () => {
            resolve('图片加载成功')
        }
        image.onerror = () => {
            reject('图片加载失败')
        }
        // 如果不需要传递任何参数的话
        // image.onload = resolve;
        // image.onerror = reject;
        image.src = path;
    })
}

