使用GitHub 最佳工作流
先在GitHub上建立一个仓库，然后再copy到本地 然后再有更改再push

查看git工作环境中配置的邮箱 如果改邮箱与github注册邮箱不匹配，那么即使往GitHub有推送也不会有小绿点
> git config user.email 
可通过以下命令来设置好 
> git config user.email youemailname@qq.com 
[更多有关git配置链接](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE)

添加该目录下所有未跟踪（新增）的文件以及已跟踪更改过的文件到暂存区，（注意不包括被删除的文件)
> git add .
