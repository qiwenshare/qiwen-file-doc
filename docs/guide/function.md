# 功能说明

本系统的用户需要自行注册并登录。

## 注册

注册页面提供滑动解锁插件，在输入用户名、手机号、密码之后，点击注册就可以注册成功。

![注册](./img/function/register.png)

## 登录

输入手机号和密码，滑动解锁，点击登录按钮即可登录

![登录](./img/function/login.png)

## 网盘主页

网盘主页采用经典的左右布局。

### 页面布局

- 左侧菜单栏区域：展示文件类型，点击可以分类查看文件，底部显示已占用存储空间。
  1. 点击左侧分类栏中的**全部**，右侧文件列表会随面包屑导航栏中的当前位置变化而变化，调用后台接口，传参当前位置 & 分页数据，获取当前路径下 & 当前页的文件列表。
  2. 点击左侧分类栏中的**图片、文档、视频、音乐、其他**，面包屑导航栏将显示当前文件类型，右侧文件列表会随左侧分类栏的切换而变化，调用后台接口，传参当前点击的文件类型 & 分页数据，获取当前文件类型 & 当前页的文件列表。
- 顶部文件操作区域：包括对文件的操作按钮组、文件查看模式切换按钮组、设置文件显示列按钮。
- 右侧文件展示区域：包括面包屑导航栏——标识当前位于的目录；文件展示区域——展示形式会随文件查看模式而改变；底部分页组件。

![网盘主页](./img/function/home.png)

### 布局调整功能

左侧菜单栏可折叠，表格操作列可折叠，可控制当前表格中列的显示和隐藏

![折叠功能](./img/function/fold.png)

### 批量操作功能

![批量操作](./img/function/batch.png)

## 三种查看模式

文件查看支持三种展示模式（列表、网格和时间线模式）

### 列表模式

![列表模式](./img/function/list.png)

### 网格模式

![网格模式](./img/function/grid.png)

### 时间线模式

![时间线模式](./img/function/timeline.png)

## 创建文件夹

![创建文件夹](./img/function/createFolder.png)

## 文件图标大小调整

在网格模式和时间线模式下，支持手动调整图标大小：

![图标大小调整](./img/function/adjustIconSize.png)

## 文件移动

![文件移动](./img/function/moveFile.png)

## 文件在线解压缩

![文件在线解压缩](./img/function/unzip.png)

## 文件上传三种方式

### 文件分片上传

文件采用**分片上传**，集成了[simiple-uplader](https://github.com/simple-uploader/Uploader/blob/develop/README_zh-CN.md#uploader)的文件**秒传**、**断点续传**功能。
![文件上传](./img/function/fileUpload.png)

### 拖拽上传

![文件拖拽上传](./img/function/dropUpload.png)

### 截图粘贴上传

直接使用任何截图工具截图后，在拖拽区域使用 Ctrl + V 粘贴图片，点击上传图片即可上传。

![截图粘贴上传](./img/function/pasteUpload.png)

## 文件回收站

![文件回收站](./img/function/recycle.png)

## 文件单个和批量分享

1. 支持单个和批量分享文件给他人：

   ![单个或批量分享文件](./img/function/share.png)

2. 可以选择过期时间和是否需要提取码：

   ![过期时间和是否需要提取码](./img/function/selectDate.png)

3. 提供快捷复制链接及提取码给他人：

   ![生成分享链接](./img/function/copyLink.png)

   粘贴分享链接及提取码效果：

   ```
   分享链接：https://pan.qiwenshare.com/share/27d9b438019e4f68bcec02f579d163b7
   提取码：356978
   复制链接到浏览器中并输入提取码即可查看文件
   ```

4. 他人查看分享内容，并支持保存到网盘功能：

   ![查看他人分享](./img/function/saveShareFile.png)

## 支持查看自己已分享过的文件列表

支持在列表中快捷复制当次的分享链接及提取码，并标注分享时间和过期状态：

![我的分享](./img/function/shareList.png)

## 视频在线预览

文件类型为视频时，点击即可打开预览窗口，展示播放列表，支持快进、后退、暂停、倍速播放、全屏播放、下载视频和折叠播放列表。

![视频在线预览](./img/function/video.png)

## 音频在线播放

![音频在线播放](./img/function/audio.png)