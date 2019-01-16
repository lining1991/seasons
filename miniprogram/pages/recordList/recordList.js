const app = getApp()
Page({
    // data: {
    //     recordsList: [
    //         {
    //             type: '春',
    //             list: [
    //                 {
    //                     title: '我想在这个春天种朵小花花',
    //                     type: '0', // 0表示愿景 1表示生活记录
    //                     time: '2017-04-15',
    //                     articleId: '1'
    //                 },
    //                 {
    //                     title: '我今天吃了很多饭',
    //                     type: '1', // 0表示愿景 1表示生活记录
    //                     time: '2017-04-16',
    //                     articleId: '2'
    //                 }
    //             ]
    //         },
    //         {
    //             type: '夏',
    //             list: [
    //                 {
    //                     title: '我想在这个夏天去游泳',
    //                     type: '0', // 0表示愿景 1表示生活记录
    //                     time: '2017-06-15',
    //                     articleId: '3'
    //                 },
    //                 {
    //                     title: '我今天吃了很多西瓜',
    //                     type: '1', // 0表示愿景 1表示生活记录
    //                     time: '2017-07-16',
    //                     articleId: '4'
    //                 }
    //             ]
    //         },
    //         {
    //             type: '秋',
    //             list: [
    //                 {
    //                     title: '我想在这个秋天种朵小花花',
    //                     type: '0', // 0表示愿景 1表示生活记录
    //                     time: '2017-04-15',
    //                     articleId: '5'
    //                 },
    //                 {
    //                     title: '我今天吃了很多饭',
    //                     type: '1', // 0表示愿景 1表示生活记录
    //                     time: '2017-04-16',
    //                     articleId: '16'
    //                 }
    //             ]
    //         },
    //         {
    //             type: '冬',
    //             list: [
    //                 {
    //                     title: '我想在这个冬天去游泳',
    //                     type: '0', // 0表示愿景 1表示生活记录
    //                     time: '2017-06-15',
    //                     articleId: '7'
    //                 },
    //                 {
    //                     title: '我今天吃了很多西瓜',
    //                     type: '1', // 0表示愿景 1表示生活记录
    //                     time: '2017-07-16',
    //                     articleId: '8'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    data: {
        recordsList: [
        ]
    },
    onLoad () {
        // let _this = this;
        // console.log(_this.recordsList);
        wx.cloud.callFunction({
            name: 'articleList',
            complete: res => {
                console.log(res);
                let arr = [];
                arr.push(res.result);
                console.log(arr);
                console.log(res.result);
                this.setData({
                    recordsList: arr
                })
            }
        });
    }
})