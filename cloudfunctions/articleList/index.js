// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const testDB = cloud.database();
// const collections = testDB.collection('articles');
// 云函数入口函数
exports.main = async (event, context) => {
    let OPENID = cloud.getWXContext().OPENID;
    let articleList = [];
    let seasonsArr = ['春', '夏', '秋', '冬'];
    let seasons = '0';
    let article = {};
    console.log('OPENID', OPENID);
    // for (let seasons = 0; seasons < 4; seasons ++) {
    return new Promise((resolve, reject) => {
        testDB.collection('articles').where({
            "OPENID": OPENID,
            "seasons": seasons
        })
        .get()
        .then(res => {
            // let article = {};
            article.type = '春';
            article.list = res.data;
            // articleList = res.data;
            resolve(article);
        }) 
    })
}