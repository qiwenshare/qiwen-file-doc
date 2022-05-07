# 常见问题

## 1. MP4 格式的视频不能播放？<br />
浏览器的 `video` 标签是否能够播放视频，却决于视频编码和视频格式，并不是所有格式为 `*.mp4` 的视频都可以被 `video` 解析，详细解释请查看 MDN 上的解释：[Media container formats (file types)](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Containers) ；或者查看这篇文章的解释：[你不知道的前端音视频知识](http://mp.weixin.qq.com/s?__biz=MzI2MjcxNTQ0Nw==&mid=2247497223&idx=2&sn=972b18240e4e66bf2fb81230aeffa276&chksm=ea44575fdd33de499c8ef7d0485fcd874a9e786e17df6770a414c82aff716e2d577bcfb74caf&mpshare=1&scene=23&srcid=1130fwAeuHu1GQN6AexLm6fD&sharer_sharetime=1643268306726&sharer_shareid=1dea07607d21240fe9b2d70dd8faf171#rd)

## 2. 脚本未初始化，请在数据库执行数据初始化脚本，存放路径： '/resources/import.sql'<br />
以下两种方式任选一种即可<br />
  方式一：将 `qiwen-file` 工程的 `src/main/resource/import.sql` 脚本在 MySQL 数据库中执行<br />
  方式二：将 `qiwen-file` 工程的 `src/main/resource/config/application.properties` 文件中的 `spring.jpa.hibernate.ddl-auto` 改为 `create`，然后重新启动 `qiwen-file` 工程；启动成功之后，将 `spring.jpa.hibernate.ddl-auto` 改回成 `update`
  
## 3. 网盘是否有默认账号？<br />
没有，网盘需要自行注册用户，然后登录即可。

## 4. office 文件预览时显示空白页面<br />
需要安装 OnlyOffice 服务，具体请查看 [在windows服务器上安装 ONLYOFFICE](https://www.qiwenshare.com/essay/detail/1208)

## 5. 如何修改用户的默认存储大小？<br />
目前演示环境的用户默认存储大小配置是在管理端维护的，管理端代码暂未开源；如需修改，可先通过手动修改数据库表中的字段值来实现：<br />
  - 如需修改 **所有新用户默认被分配的存储大小** ，需要在 `sysparam` 表中修改 `totalStorageSize` 字段；<br />
  <video width="100%" height="auto" controls>
    <source :src="$withBase('/video/question/modifyNewUserStorage.mp4')"  type="video/mp4">
    您的浏览器不支持 HTML5 video 标签。
  </video>
  - 如需修改 **老用户或单个用户被分配的存储大小** ，需要在 `storage` 表中修改 `totalStorageSize` 字段
  <video width="100%" height="auto" controls>
    <source :src="$withBase('/video/question/modifyOldUserStorage.mp4')"  type="video/mp4">
    您的浏览器不支持 HTML5 video 标签。
  </video>

## 6. OnlyOffice 预览报错排查流程总结<br />
以下总结部分来源于 [OnlyOffice 官方 Troubleshooting](https://api.onlyoffice.com/editors/troubleshooting)，如遇到问题，请先查看 OnlyOffice 官方提供的[故障排查](https://api.onlyoffice.com/editors/troubleshooting)，看能否解决您的问题
### 6.1 检测 OnlyOffice 服务是否安装成功
首先访问 OnlyOffice 首页，如下图：
<img :src="$withBase('/img/question/6_1_onlyoffice_home.png')" alt="onlyoffice">
出现上图仍旧不能说明你的 OnlyOffice 服务已经成功安装，我们需要启动 OnlyOffice 服务测试用例来检测，可以看到上图出现了两条命令，第一条命令是用来启动 测试用例服务的，我们只需要在后台执行该命令即可，

启动完成后，点击下方按钮即可进入主页，如果没有启动或启动失败，点击链接则进入报错页面，如下图：
<img :src="$withBase('/img/question/6_1_onlyoffice_fail.png')" alt="onlyoffice">

成功启动如下图：
<img :src="$withBase('/img/question/6_1_onlyoffice_success.png')" alt="onlyoffice">
接下来可以在这个页面来创建或者上传问件，如果功能正常，则说明 OnlyOffice 的安装时没有问题的

### 6.2 预览 office 文件出现白页
出现白页说明网盘配置的 OnlyOffice 服务器地址是错误的，解决方式如下：

打开 `/resource/config/settings.properties` 文件，在该文件中检查 `files.docservice.url.site` 属性中配置正确的 OnlyOffice 地址，==强烈建议使用ipv4地址==
### 6.3 预览 office 文件一直显示加载中
查看 OnlyOffice 是否安装成功，检测方法看 [常见问题(FAQ) 6.1](/question/#_6-1-检测-onlyoffice-服务是否安装成功)
### 6.4 预览 office 文件提示“下载失败”
OnlyOffice 官方解释 [Download failed](https://api.onlyoffice.com/editors/troubleshooting#download)

<img :src="$withBase('/img/question/6_4_download_fail.png')" alt="onlyoffice">

下载失败说明应用地址配置错误，解决方式如下：
打开 `/resource/config/application.properties` 文件，在该文件中检查 `deployment.host` 地址是否正确，该地址是当前网盘所在的服务器IP地址，**强烈建议使用ipv4地址**


::: warning 注意
- 如果网盘和 OnlyOffice 服务部署在**不同**的机器上，那么以上地址必须是**外网 IP** 地址
- 如果网盘和 OnlyOffice 服务部署在**同一台**机器上，那么使用**内网和外网 IP** 都是可以的。
:::

## 7. 大文件下载到一定大小之后，又从0开始下载

该问题一般出现在生产环境，原因是 nginx 缓存导致的超时，解决办法是关闭 nginx 缓存。
在 nginx.conf 配置文件中的 http 节点下，配置如下属性：
```
proxy_request_buffering off;
proxy_buffering off;
```