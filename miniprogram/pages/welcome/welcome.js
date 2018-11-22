const app = getApp()

Page({
    data: {
        userInfo: {},
        tips:'',
        avatarUrl: './user-unlogin.png',
        logged: false,
        nickName: ''
    },
    onLoad () {
        console.log('onload事件被触发了');
        // ？this指的是这个页面的实例
        console.log(this);
        // ？指的是整个app
        console.log(app);
        this.setTipsText();
        // 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: res => {
                            console.log(res.userInfo);
                            this.setData({
                                avatarUrl: res.userInfo.avatarUrl,
                                nickName: res.userInfo.nickName,
                                userInfo: res.userInfo
                            })
                        }
                    })
                }
            }
        })
    },
    // 绑定在button按钮的bindgetuserinfo属性上 代表获取完用户信息会走到这个回调里
    getUserInfoCb (e) {
        // 不是特别明白logged的作用
        if (!this.logged && e.detail.userInfo) {
            this.setData({
                logged: true,
                avatarUrl: e.detail.userInfo.avatarUrl,
                nickName: e.detail.userInfo.nickName,
                userInfo: e.detail.userInfo
            })
        }
    },
    setTipsText () {
        // 设置tips
        let tipsArr = ['从今天起记录生活', '每天都是一个值得记录的日子', '千里之行，始于足下']
        let randomIndex = Math.floor(Math.random(0, 1) * tipsArr.length);
        console.log(this);
        this.setData({
            tips: tipsArr[randomIndex]
        })
    },
    linkEditor () {
        // 最好是做一个loadding
        wx.cloud.callFunction({
            name: 'generateArticle',
            complete: res => {
                console.log(res)
                const articleId = res.result.articleId;
                const imgCloudFilePathId = res.result.imgCloudFilePathId;
                wx.navigateTo({
                    url: `../writeEditor/writeEditor?articleId=${articleId}&imgCloudFilePathId=${imgCloudFilePathId}`
                })
            }
        })
    }
})