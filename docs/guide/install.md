# 快速开始

此项目为前后端分离项目

## 后台项目

### 代码下载
```shell
git clone https://gitee.com/qiwen-cloud/qiwen-file.git
```
### 代码编译

本项目是本质上是一个maven工程，因此，在命令行执行普通的maven编译命令即可编译。编译命令如下：

```bash
mvn install 
``` 

因为依赖比较多，我一般使用阿里的maven镜像库进行下载, 如果你也想通过该方式进行编译，可直接双击根路径下的 `install.bat` 脚本。


::: tip 注意事项

1. 编译完毕之后，检查根目录下是否生成 release 包，如果生成则说明编译成功
2. 该 release 包是独立的，你可以将它拷贝到任何具有 Java 环境的地方进行执行。

:::



## 前端项目

### 代码下载
```shell
git clone https://gitee.com/qiwen-cloud/qiwen-file-web.git
```

### 代码编译

```bash

# 进入项目目录
cd qiwen-file-web

# 安装依赖
npm install

# 编译
npm run build
```

::: tip 注意事项

编译完毕之后，即可构建出 dist 目录，该dist目录里面的内容即是前台代码构建出来的包，在生产环境可以在nginx服务器里去运行访问

:::



#### 开发环境运行

修改`public/config.json`中`baseUrl`的端口修改为后台项目的端口（例如前述的 8081 端口），然后启动：

```bash
# 本地开发 启动项目
npm run serve
```

::: tip

每次修改完`public/config.json`中的`baseUrl`，都需要重新启动项目

:::

启动完成后会自动打开浏览器访问 [http://localhost:8081](http://localhost:8081/)， 你看到下面的页面就代表操作成功了。

<img :src="$withBase('/img/guide/install/home.png')" alt="启动成功">

接下来你可以修改代码进行业务开发了，本项目内建了状态管理、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。
