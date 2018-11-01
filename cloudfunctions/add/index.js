// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// exports.main = async (event, context) => {
//     // 知识点： 对象的解构赋值
//     let {userInfo, a, b} = event
//     let {OPENID, APPID} = cloud.getWXContext()
//     let sum = a + b

//     return {
//         OPENID,
//         APPID,
//         sum,
//         event
//     }
// }

// exports.main = async (event, context) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(event.a + event.b)
//         }, 9000)
//     })
// }

const db = cloud.database()
exports.main = async (event, context) => {

}

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
            if (resolve)
        }
        const client = new XMLHttpRequest();
        client.oepn('GET', url);
        client.onreadystatechange = handler
    });
    return promise;
}


