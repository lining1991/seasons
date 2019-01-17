// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => ({
    add:3333,
    sum: function(){
        return '2222'
    },
    bbb: 'dddd'
})