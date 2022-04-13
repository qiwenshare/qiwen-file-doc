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
需要安装 onlyoffice 服务，具体请查看 [在windows服务器上安装 ONLYOFFICE](https://www.qiwenshare.com/essay/detail/1208)

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