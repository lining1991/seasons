const app = getApp()
Page({
    data: {
        articleId: ''
    },
    onLoad (options) {
        this.setData({
            articleId: options.articleId
        })
    }
})