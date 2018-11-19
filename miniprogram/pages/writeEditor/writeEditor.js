const app = getApp();
// 1.做图片上传的时候，没有考虑到①图片上传多次时index的处理，即先上传3张再上传两张 ②以及删除了某一张图片，再重新上传时  这两种场景下的图片在云端存储的路径问题
// 1.1 问题在于如何确保图片在云端的路径+名字是唯一的
// 2.关于data-*属性的一些问题 不能用data-驼峰单词 data-active data-type
// 3.动态绑定类名
// 4.对象的名字是一个变量
Page({
    data: {
        content: '',
        type: '',
        detailType: '',
        seasons: ['春', '夏', '秋', '冬'],
        types: ['愿景', '生活'],
        itemUrlArr: [], // 图片的临时路径
        articleId: 'abc',
        imgFileIdArr: [], // 图片在云端存储的fileID 可以用来删除图片 以及绑定图片和这篇文章的关系
        imgFileIdArrVal: '',
        activeIndex1: 0, // 用来控制季节标签选中的
        activeIndex2: 0, // 用来控制类型标签选中的
        maxImgNum: 9, // 所允许上传的最大图片张数
        imgCloudFilePathId: 0// 用来控制图片在云端存储时有一个唯一的名字
    },
    onLoad (options) {
        // this.setData({
        //     articleId: options.articleId
        // })
        // 需要设置imgCloudFilePathId
    },
    // 点击保存按钮，提交表单
    submitForm (e) {
        console.log(this.data.imgFileIdArr);
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        let data = e.detail.value;
        data.imgFileIdArr = data.imgFileIdArr.split(',');
        wx.cloud.callFunction({
            name: 'saveArticle',
            data,
        })
        .then(res => {
            // res 不是我在云端reslove的呢
            console.log('调用云函数成功', res)
        })
        .catch(error => {
            console.log('调用云函数失败', error)
        })
    },
    selectTypes (event) {
        console.log(event);
        let dataset = event.target.dataset;
        let values = dataset.index;
        let keys = dataset.types;
        console.log(keys, values);
        this.setData({
            [keys]: values
        })
    },
    // 生成在云端存储的唯一的路径或者说是名字
    generateUUID () {
        // 用哪一种方式更好呢
        // return '_' + Math.random().toString(36).substr(2, 9);
        let imgCloudFilePathId = this.data.imgCloudFilePathId + 1;
        this.setData({
            imgCloudFilePathId
        });
        console.log('imgCloudFilePathId', imgCloudFilePathId);
        return imgCloudFilePathId;
    },
    uploadImage () {
        let count = this.data.maxImgNum - this.data.itemUrlArr.length;
        wx.chooseImage({
            count,
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
                    // 尾缀 获取图片格式
                    let infix = tempPath.match(/\.[^.]+?$/)
                    let imgCloudFilePathId = this.generateUUID()
                    cloudPaths.push([`${articleId}-image-${imgCloudFilePathId}${infix}`, tempPath]);
                })
                cloudPaths.forEach((item, index) => {
                    let cloudPath = item[0];
                    let filePath = item[1];
                    wx.cloud.uploadFile({
                        cloudPath,
                        filePath
                    })
                    .then(res => {
                        console.log('res', res);
                        // 储存远程返回的图片文件ID 提交时使用
                        let key1 =  `imgIdArr[${index}]`;
                        let key2 =  `itemUrlArr[${index}]`;
                        let afterUploadImgFileIdArr = this.data.imgFileIdArr;
                        afterUploadImgFileIdArr.push(res.fileID);
                        let afterUploadItemUrlArr = this.data.itemUrlArr;
                        afterUploadItemUrlArr.push(filePath);
                        console.log(key2);
                        this.setData({
                            imgFileIdArr: afterUploadImgFileIdArr  
                        })
                        this.setData({
                            imgFileIdArrVal: afterUploadImgFileIdArr.join(',')
                        })
                        console.log(this.data.itemUrlArr);
                        // 设置图片在视图层展示
                        this.setData({
                            itemUrlArr: afterUploadItemUrlArr  
                        })
                        if (index === cloudPaths.length -1) {
                            wx.hideLoading();
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                })
            },
            fail: function(error) {
                console.log('上传照片出错了error', error)
            },
            complete: function() {
                
            }
        })
    },
    deleteImage (event) {
        let index = event.target.dataset.file;
        let fileId = this.data.imgFileIdArr[index];
        let fileList = [fileId];
        let key = `itemUrlArr[${index}]`;
        console.log(event);
        wx.cloud.deleteFile({
            fileList
        }).then(res => {
            // todo 删除数组中的某一项 有些问题
            let imgArr = this.data.itemUrlArr;
            imgArr.splice(index, 1);
            this.setData({
                itemUrlArr: imgArr
            });
            // handle success
            console.log('删除图片成功')
        }).catch(error => {
           console.log('删除图片出现了问题', error)
        })
    }
})
