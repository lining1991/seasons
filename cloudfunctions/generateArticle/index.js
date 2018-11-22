// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const testDB = cloud.database()
const collections = testDB.collection('articles')

let generateUUID = () => {
    // 用哪一种方式更好呢
    return '_' + Math.random().toString(36).substr(2, 9)
}
// 云函数入口函数
exports.main = async (event, context) => {
    let OPENID = cloud.getWXContext().OPENID
    // 说明是登录状态
    if (OPENID) {
        let articleId = generateUUID()
        let imgCloudFilePathId = 0;
        return new Promise((resolve, reject) => {
            collections.add({
               data: {
                   _id: articleId,
                   imgCloudFilePathId,
                   OPENID
               } 
            })
            .then(res => {
                resolve({
                    articleId,
                    imgCloudFilePathId
                })
            })
        })
    } else {
        return ''
    }
}