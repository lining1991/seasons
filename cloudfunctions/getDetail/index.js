// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const testDB = cloud.database();
const collections = testDB.collection('articles');
// 云函数入口函数
exports.main = async (event, context) => {
    // const wxContext = cloud.getWXContext()
    const articleId = event.articleId;
    return new Promise((resolve, reject) => {
        collections.doc(articleId).get()
        .then(res => {
            resolve(res.data);
        })
    })
}