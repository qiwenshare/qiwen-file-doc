# 安装说明

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

编译完毕之后，根目录下会生成 release 包，该 release 包是独立的，你可以将它拷贝到任何具有 Java 环境的地方进行执行。进入 bin 目录，可以看到几个脚本文件：

| 名称         | 描述             |
| ------------ | ---------------- |
| restart.sh   | linux 重启脚本   |
| start.sh     | linux 启动脚本   |
| stop.sh      | linux 停止脚本   |
| winstart.bat | windows 启动脚本 |

修改`qiwen-file/file-web/src/main/resources/config/application.properties`中的`server.port`为 8081，然后启动后台项目：

```bash
# 进入 release/bin 目录
cd ./release/bin

# 启动
./winstart.bat
```

::: tip

windows 用户可以在上述目录下双击 winstart.bat 文件，会自动打开窗口启动项目，这个窗口不能关闭，关闭就意味着程序结束

:::

当出现以下内容时，表示后台项目在 8081 端口启动成功：

```bash
Tomcat started on port(s): 8081 (http) with context path ''
Started FileApplication in 13.429 seconds (JVM running for 14.517)
```

## 前端项目

```bash
# 克隆前端项目
git clone https://gitee.com/qiwen-cloud/qiwen-file-web.git

# 进入项目目录
cd qiwen-file-web

# 安装依赖
npm install
```

修改`public/config.json`中`baseUrl`的端口修改为后台项目的端口（例如前述的 8081 端口），然后启动：

```bash
# 本地开发 启动项目
npm run serve
```

::: tip

每次修改完`public/config.json`中的`baseUrl`，都需要重新启动项目

:::

启动完成后会自动打开浏览器访问 [http://localhost:8080](http://localhost:8080/)， 你看到下面的页面就代表操作成功了。

![首页](./img/home.png '启动成功.png')

接下来你可以修改代码进行业务开发了，本项目内建了状态管理、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。
