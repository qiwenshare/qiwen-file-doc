# 开发环境运行

## 后台

将 `qiwen-file` 项目加载到 Intellj IDEA 中, 打开 FileApplication.java 类，运行其中的main 方法：

<img :src="$withBase('/img/guide/development/development1.png')" alt="运行成功">

## 前端
修改根目录下`vue.config.js`中`devServer.proxy.target`的端口修改为后台项目的端口（例如前述的 8081 端口），然后启动：

```bash
# 本地开发 启动项目
npm run serve
```

::: warning 警告

每次修改完`vue.config.js`中的配置项，都需要重新启动项目才会生效

:::

启动完成后会自动打开浏览器访问 [http://localhost:8081](http://localhost:8081/)， 你看到下面的页面就代表操作成功了。

<img :src="$withBase('/img/guide/install/home.png')" alt="启动成功">

接下来你可以修改代码进行业务开发了，本项目内建了状态管理、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。