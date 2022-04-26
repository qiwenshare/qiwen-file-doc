# 配置

## 端口号配置

项目中涉及到的端口号前端、后台都涉及。后台需要配置服务启动的端口号（如：8080），对前端而言，则需要配置连接后台服务的端口号（如：8080），这样请求才能连通。

- 对后台来说，进入 resource 目录，打开 application.properties配置文件，配置 `server.port` 属性

```properties
server.port=8080
```

- 对前端来说，在根目录下的 `vue.config.js` 文件中，需要配置连接后台服务的接口，如果后台服务启动在 `http://localhost:8080`，那么在 `devServer.proxy` 中的 `target` 就需要改成 `http://localhost:8080`

```javascript
devServer: {
  disableHostCheck: true,
  host: '0.0.0.0',
  // 配置代理，解决本地开发环境下跨域请求后台接口的问题，proxy 中的修改项修改完后需要重启项目才可生效
  proxy: {
    '/api': {
      target: 'http://localhost:8080', //  本地开发环境 - 连接后台接口
      ws: true, //是否跨域
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
}
```

## 上传路径配置

奇文网盘默认保存路径：
  - 开发环境：代码工程的下的 `/target/classes/static` 路径 
  - 生产环境：发布包下 `/static` 路径

奇文网盘修该默认保存路径方法：
打开 resource/config 目录下的 application.properties 目录，并在该配置文件中添加如下属性：

```java
ufop.local-storage-path=D:/export
```

::: tip

1. 该路径一旦配置则默认生效，整个服务器保存都会切换到该路径下，因此，如果你在使用的过程中修改该路径，那么则需要将之前路径下的文件迁移到新的路径，前端才可以正常访问。
2. 如果该属性值为空或者该属性不存在，则系统默认保存文件到工程根路径下的 static 目录

:::

## 数据库配置

打开后台代码，进入 resource 目录，打开 application.properties配置文件, 配置以下内容：

```properties
#jdbc连接-mysql数据库
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/file?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf-8&allowMultiQueries=true
spring.datasource.username=root
spring.datasource.password=
```

## 存储方式配置
### 本地磁盘存储    

#### 配置存储方式

打开后台代码，进入 resource 目录，打开 application.properties配置文件，将 ufop.storage-type 修改为 0

```properties
ufop.storage-type=0
```

### 阿里云 OSS 对象存储

#### 开通阿里云 OSS 对象存储

点击[阿里云官网](https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=c3m9d2cm)，开通阿里云 OSS 对象存储

#### 创建 bucket

点击进入 OSS 管理控制台，创建 bucket
创建完成之后，点击 bucket 列表目录，进入到概览页面

<img :src="$withBase('/img/config/createBucket.png')" alt="bucket">



#### 配置存储方式

打开后台代码，进入 resource 目录，打开 `application.properties` 配置文件，将 ufop.storage-type 修改为 1

```properties
ufop.storage-type=1
```

#### 配置阿里云 OSS 信息

```properties
#阿里云oss基本配置
ufop.aliyun.oss.endpoint=
ufop.aliyun.oss.access-key-id=
ufop.aliyun.oss.access-key-secret=
ufop.aliyun.oss.bucket-name=

```

#### 参数说明

| 属性                                    | 说明                                              | 参数示例                             |
| --------------------------------------- | ------------------------------------------------- | ------------------------------------ |
| ufop.aliyun.oss.endpoint          | Endpoint 以杭州为例，其它 Region 请按实际情况填写 | oss-cn-hangzhou.aliyuncs.com |
| ufop.aliyun.oss.access-key-id     | 阿里云 API 的密钥                                 | **\*\*\*\***                         |
| ufop.aliyun.oss.access-key-secret | 阿里云 API 的密钥                                 | **\*\*\*\***                         |
| ufop.aliyun.oss.bucket-name       | bucketName                                        |                                      |


### FastDFS 存储

#### 搭建 FastDFS 集群

略

#### 配置存储方式

打开后台代码，进入 resource 目录，打开 `application.properties` 配置文件，将 ufop.storage-type 修改为 2

```properties
ufop.storage-type=2
```

#### 配置FastDFS环境信息 

```properties
#读取时间
fdfs.so-timeout=15000 
#超时连接时间
fdfs.connect-timeout=15000
# 连接池最大数量
fdfs.pool.max-total=200
#单个tracker最大连接数
fdfs.pool.max-total-per-key=50
#连接耗尽最大等待时间 毫秒
fdfs.pool.max-wait-millis=5000
fdfs.tracker-list=127.0.0.1:22122
```

### MinIO 存储
#### 配置存储方式

打开后台代码，进入 resource 目录，打开 `application.properties` 配置文件，将 ufop.storage-type 修改为 3

```properties
ufop.storage-type=3
```

#### 配置 MinIO 存储信息

```properties
#MinIO基本配置
ufop.minio.endpoint=http://127.0.0.1:9000
ufop.minio.access-key=
ufop.minio.secret-key=
ufop.minio.bucket-name=

```
### 七牛云KODO 对象存储

#### 配置存储方式

打开后台代码，进入 resource 目录，打开 `application.properties` 配置文件，将 ufop.storage-type 修改为 4

```properties
ufop.storage-type=4
```

#### 配置七牛云KODO存储信息

```properties
#七牛云Kodo配置
ufop.qiniuyun.kodo.domain=
ufop.qiniuyun.kodo.endpoint=
ufop.qiniuyun.kodo.access-key=
ufop.qiniuyun.kodo.secret-key=
ufop.qiniuyun.kodo.bucket-name=
```

## 开发/生产配置

当我们在进行开发的过程中，可以根据需要对环境进行切换，默认配置为 `dev`

### 环境切换 dev/prod

打开后台代码，进入 resource 目录，打开 `application.properties` 配置文件，修改如下配置文件:
```properties
#环境切换 dev/prod
spring.profiles.active=prod
```
### 注意事项

在开发及生产环境，如果使用 H2 数据库，需要注意 H2 数据库文件保存路径是否存在，根据实际需要进行调整，具体修改位置为，`application-dev.properties` 文件，修改如下图路径：

<img :src="$withBase('/img/config/environmentDev.png')" alt="开发环境">

## 文件搜索配置

### 安装 ElasticSearch 服务

#### 下载安装

1. 点击[官网下载](https://www.elastic.co/cn/downloads/elasticsearch)，根据自己的服务器类型，选择合适的安装包进行下载后安装
2. 关注 **奇文社区** 公众号，回复 `qf` 即可获取奇文网盘一键启动包，及推荐的windows版本elasticsearch下载地址

#### Windows 环境启动

在 Windows 环境下，点击 bin 目录下 elasticsearch.bat 启动

#### linux 环境启动和停止

```shell
sudo -i service elasticsearch start
sudo -i service elasticsearch stop
```

### 奇文网盘配置

打开 `application.properties` 文件，在文件中修改如下脚本：

```properties
spring.data.elasticsearch.client.reactive.endpoints=127.0.0.1:9200
spring.elasticsearch.rest.uris=127.0.0.1:9200
```

## 缩略图配置

打开后台代码，进入 resource 目录，打开 `application.properties` 文件，在文件中修改如下脚本：
```properties
ufop.thumb-image.width=150
ufop.thumb-image.height=150
```

## 在线编辑预览配置

### 安装OnlyOffice Docs服务

安装流程参见：[https://www.qiwenshare.com/essay/detail/1208](https://www.qiwenshare.com/essay/detail/1208)

### 奇文网盘配置

打开 `resource/config/application.properties`文件，配置当前网盘外网IP

```properties
# 当前部署外网IP，用于office文件编辑和预览
deployment.host: 192.168.31.158
```

打开 `settings.properties` 文件，配置onlyoffice安装服务IP地址，如下：

```properties
files.docservice.url.site=http://192.168.31.158:80/
```

## FAQ

### 如何查看阿里云 API 密钥

<img :src="$withBase('/img/config/showAliyunAPIMiyao.png')" alt="网络拓扑图">

