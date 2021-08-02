# 配置

## 端口号配置

项目中涉及到的端口号前后台都涉及，后台需要配置服务启动的端口号（如：8080），对前台而言，则需要配置连接后台服务的端口号（如：8080），这样请求才能连通。

打开后台代码，进入 resource 目录，打开 application.properties配置文件，配置 `server.port` 属性

```properties
server.port=8080
```

打开前台代码，在 `/public/config.json` 文件中，需要配置连接后台服务的 baseUrl，如果后台服务启动在`http://localhost:8080`，那么这里就需要改成 `http://localhost:8080`


## 上传路径配置

奇文网盘默认保存文件是在服务器的 static 目录下保存文件，配置以下属性可以自定义文件保存路径。

打开 resource/config 目录下的 application.properties 目录，并在该配置文件中添加如下属性：

```java
ufop.local-storage-path=D:/export
```

::: tip

1. 该路径一旦配置则默认生效，整个服务器保存都会切换到该路径下，因此，如果你在使用的过程中修改该路径，那么则需要将之前路径下的文件迁移到新的路径，前端才可以正常访问。
2. 如果该属性值为空或者该属性不存在，则系统默认保存文件到工程根路径下的 static 目录

:::

## 数据库配置

### H2
打开后台代码，进入 resource 目录，打开 application-dev.properties配置文件, 配置以下内容：

```properties
#jdbc连接-h2数据库
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.url = jdbc:h2:file:C:/ProgramData/QiwenNetDisk/file;MODE=MYSQL;DATABASE_TO_LOWER=TRUE
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true
```


### MySQL
打开后台代码，进入 resource 目录，打开 application-prod.properties配置文件, 配置以下内容：

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

### 阿里云 OSS 存储

#### 开通阿里云 OSS 对象存储

点击[阿里云官网](https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=c3m9d2cm)，开通阿里云 OSS 对象存储

#### 创建 bucket

点击进入 OSS 管理控制台，创建 bucket
创建完成之后，点击 bucket 列表目录，进入到概览页面

![image.png](./img/backend/createBucket.png)



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
#FastDFS配置
fdfs.so-timeout=1501
fdfs.connect-timeout=601
fdfs.tracker-list=127.0.0.1:22122
```



## 开发/生产配置

当我们在进行开发的过程中，可以根据需要对环境进行切换，默认配置为 `dev`

### 环境切换 dev/prod

![image.png](https://www.qiwenshare.com/api/upload/20210411/17151618070408034.png)

### 生产配置

当发布版本之后，在环境上如果需要对环境进行切换，可修改如下配置：
打开 bin 路径下 `start.sh` 文件，设置如下配置项，即可进行切换：

```shell
SPRING_PROFILES_ACTIVE="prod"
```

### 注意事项

在开发及生产环境，如果使用 H2 数据库，需要注意 H2 数据库文件保存路径是否存在，根据实际需要进行调整，具体修改位置为，`application-dev.properties` 文件，修改如下图路径：

![image.png](https://www.qiwenshare.com/api/upload/20210312/65971615558232387.png)

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

## FAQ

### 如何查看阿里云 API 密钥

![image.png](./img/backend/showAliyunAPIMiyao.png)

