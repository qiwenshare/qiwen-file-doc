# qiwen-file-doc

## 介绍
奇文网盘文档，主要包括功能说明、配置说明等，各个链接如下：
- 奇文网盘文档线上地址：https://pan.qiwenshare.com/docs/
- 奇文网盘线上演示地址：https://pan.qiwenshare.com/
- 奇文网盘前端项目地址：https://gitee.com/qiwen-cloud/qiwen-file-web
- 奇文网盘后台项目地址：https://gitee.com/qiwen-cloud/qiwen-file

## 软件架构
使用 [VuePress](https://www.vuepress.cn/) 搭建，具体使用方法可参考官方文档。
此项目为纯前端工程，无需后台。


## 安装教程

```bash
# 克隆仓库
git clone https://gitee.com/qiwen-cloud/qiwen-file-doc.git
# 依赖安装
npm install
# 项目启动
npm run dev
# 项目打包
npm run build
```

## 使用说明

1. 如修改了 `docs/.vuepress/config.js`文件中的内容，请重启项目，此文件不支持热更新
2. `docs/log/frontend.md`和`docs/log/backend.md`请勿修改内容，此文件中的内容在Jenkins自动部署时，通过执行`bash getFrontendLog.sh`和`bash getBackendLog.sh`命令（根目录下的`getFrontendLog.sh`和`getBackendLog.sh`）来自动写入前端和后台的更新日志内容，然后再执行打包操作，脚本文件内容查看：
    - https://gitee.com/qiwen-cloud/qiwen-file-doc/blob/master/getFrontendLog.sh
    - https://gitee.com/qiwen-cloud/qiwen-file-doc/blob/master/getBackendLog.sh


## 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


## 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
