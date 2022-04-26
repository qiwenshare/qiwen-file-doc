# 下载编译


## 后台
```shell
git clone https://gitee.com/qiwen-cloud/qiwen-file.git
```

本项目是本质上是一个maven工程，因此，在命令行执行普通的maven编译命令即可编译。编译命令如下：

```shell
mvn install 
``` 

因为依赖比较多，我一般使用阿里的maven镜像库进行下载, 如果你也想通过该方式进行编译，可直接双击根路径下的 `install.bat` 脚本。


::: tip 注意

1. 编译完毕之后，检查根目录下是否生成 release 目录，如果生成则说明编译成功
2. 该 release 包是独立的，在生产环境可以直接使用 release 包来运行。

:::



## 前端

```shell
git clone https://gitee.com/qiwen-cloud/qiwen-file-web.git
```

```shell
# 进入项目目录
cd qiwen-file-web

# 安装依赖
npm install

# 编译
npm run build
```

::: tip 注意

1. 编译完毕之后，检查根目录下是否生成 dist 目录，如果生成则说明编译成功
2. 该dist目录里面的内容即是前台代码构建出来的包，在生产环境可以在nginx服务器里去运行访问

:::


