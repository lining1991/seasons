// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const testDB = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    return await testDB.collection('articles').add({
        data: event
    })
    // .then(res => {
    //     console.log('追加记录成功', res);
    //     reslove({
    //         error_code: 0,
    //         error_msg: '文章提交成功'
    //     })
    // })
    // .catch(error => {
    //     reject({
    //         error_code: 1,
    //         error_msg: '文章提交失败'
    //     })
    // });
}