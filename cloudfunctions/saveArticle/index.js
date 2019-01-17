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
    // var ss = await add(3, 2);
    return new Promise((resolve, reject) => {
        cloud.callFunction({
            name: 'util'
        })
        .then(res => {
            // var data = res.add({
            //     a: 12,
            //     b: 13
            // });
            resolve(res.result);
            // console.log(res);
        })
        // testDB.collection('articles').doc(articleId).set({
        //     data: event
        // })
        // .then(res => {
        //     resolve(ss);
        // })
    })
}
// function add(a, b){
//     cloud.callFunction({
//         name: 'util',
//         data: [a, b],
//     })
//     .then(res => {
//         console.log(res);
//     })

// }
