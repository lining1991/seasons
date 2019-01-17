const app = getApp()
Page({
    // data: {
    //     recordsList: [
    //         {
    //             type: '春',
    //             title: '我想在这个春天种朵小花花',
    //             type: '0', // 0表示愿景 1表示生活记录
    //             time: '2017-04-15',
    //             articleId: '1'
    //         },
    //         {
    //             type: '夏',
    //             title: '我想在这个夏天去游泳',
    //             type: '0', // 0表示愿景 1表示生活记录
    //             time: '2017-06-15',
    //             articleId: '3'
    //         },
    //         {
    //             type: '夏',
    //             title: '我今天吃了很多西瓜',
    //             type: '1', // 0表示愿景 1表示生活记录
    //             time: '2017-07-16',
    //             articleId: '4'
    //         }
    //     ]
    // },
    data: {
        recordsList: [
        ]
    },
    onLoad () {
        let _this = this;
        wx.cloud.callFunction({
            name: 'articleList',
            complete: res => {
                console.log(res.result);
                this.setData({
                    recordsList: res.result
                })
            }
        });
    }
})