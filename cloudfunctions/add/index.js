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

