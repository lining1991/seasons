// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const testDB = cloud.database();
const collections = testDB.collection('articles');
// 云函数入口函数
exports.main = async (event, context) => {
    let OPENID = cloud.getWXContext().OPENID;
    return new Promise((resolve, reject) => {
        collections.where({
            "userInfo.openId": OPENID,
        })
        .get()
        // 这个地方的then是数据库异步操作promise对象的then 
        .then(res => {
            resolve(res.data);
        }) 
    })
}
// 