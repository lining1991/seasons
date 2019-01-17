const app = getApp()
Page({
    data: {
        title: '',
        fileList: []
    },
    onLoad (options) {
        // let articleId = options.articleId;
        let articleId = '_z5q99kcqq';
        wx.cloud.callFunction({
            name: "getDetail",
            data: {
                articleId
            },
            complete: res => {
                let data = res.result;
                this.setData(data);
                this.getImgUrl(data.imgFileIdArr);
            }
        });
        // this.setData({
        //     articleId: options.articleId
        // })
    }, 
    getImgUrl (arr) {
        // 小程序端用云文件ID换取真实链接，可自定义有效期，默认一天且最大不超过一天。一次最多取 50 个。
        wx.cloud.getTempFileURL({
            fileList: arr,
        })
        .then(res => {
            let data = res.fileList;
            console.log(data);
            this.setData({
                fileList: data
            })
        });
    }
})