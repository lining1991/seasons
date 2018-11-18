const app = getApp();

Page({
    data: {
        content: '',
        type: '',
        detailType: '',
        seasons: ['春', '夏', '秋', '冬'],
        types: ['愿景', '生活'],
        itemUrlArr: [],
        articleId: 'abc',
        imgIdArr: []
    },
    onLoad (options) {
        // this.setData({
        //     articleId: options.articleId
        // })
    },
    uploadImage () {
        wx.chooseImage({
            count: 9,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                console.log(res)
                wx.showLoading({
                    title: '上传中'
                })
                const articleId = this.data.articleId;
                const tempFilePaths = res.tempFilePaths;
                const cloudPaths = [];
                tempFilePaths.forEach((tempPath, index) => {
                    // todo: 这里用二维数组 还是用map
                    // 尾缀
                    let infix = tempPath.match(/\.[^.]+?$/)
                    cloudPaths.push([`${articleId}-image-${index}${infix}`, tempPath]);
                })
                cloudPaths.forEach((item, index) => {
                    let cloudPath = item[0];
                    let filePath = item[1];
                    wx.cloud.uploadFile({
                        cloudPath,
                        filePath,
                        success: res => {
                            // 储存远程返回的图片文件ID 提交时使用
                            let key1 =  `imgIdArr[${index}]`;
                            let key2 =  `itemUrlArr[${index}]`;
                            console.log(key2);
                            this.setData({
                              [key1]: res.fileID  
                            });
                            console.log(this.data.itemUrlArr);
                            // 设置图片在视图层展示
                            this.setData({
                                [key2]: filePath
                            });
                            if (index === cloudPaths.length -1) {
                                wx.hideLoading();
                            }
                        },
                        fail: console.error
                    })
                })
            },
            fail: function(error) {
                console.log('上传照片出错了error', error)
            },
            complete: function() {
                
            }
        })
    }
})