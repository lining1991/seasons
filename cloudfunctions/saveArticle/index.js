// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const testDB = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    // let { OPENID, APPID } = cloud.getWXContext();
    let articleId = event.articleId;
    let time = new Date();
    event.time = time;
    // todo: 提交的时候应该先查找有没有对应的文章ID
    // event数据中自带userinfo字段
    // return await testDB.collection('articles').add({
    //     data: event
    // })
    return new Promise((resolve, reject) => {
        testDB.collection('articles').doc(articleId).set({
            data: event
        })
        .then(res => {
            resolve(res);
            // resolve({
            //     error_code: 0,
            //     error_msg: '文章提交成功'
            // })
        })
    })
}
function formatTime(){
    
}