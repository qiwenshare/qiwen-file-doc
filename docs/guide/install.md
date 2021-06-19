# 编译

此项目为前后端分离项目

## 后台项目

```bash
# 克隆后台项目
git clone https://gitee.com/qiwen-cloud/qiwen-file.git

# 进入项目目录
cd qiwen-file

# 编译
./install.bat
```

::: tip

windows 用户可以在根目录下双击 install.bat 文件，会自动打开窗口，等待编译，这个过程大概需要几分钟，编译完毕之后窗口会自动关闭。

:::

编译完毕之后，检查根目录下是否生成 release 包，如果生成则说明编译成功，该 release 包是独立的，你可以将它拷贝到任何具有 Java 环境的地方进行执行。

## 前端项目

#### 安装依赖
```bash
# 克隆前端项目
git clone https://gitee.com/qiwen-cloud/qiwen-file-web.git

# 进入项目目录
cd qiwen-file-web

# 安装依赖
npm install
```

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

![首页](./img/install/home.png '启动成功.png')

接下来你可以修改代码进行业务开发了，本项目内建了状态管理、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。

#### 编译

进入到项目根路径，执行 `npm run build` 命令即可构建出 dist 目录，该dist目录里面的内容即是前台代码构建出来的包，在生产环境可以直接扔到nginx服务器里去运行访问
