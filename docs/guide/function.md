# 功能说明

## 网盘主页

### 页面布局

- 左侧菜单栏区域：展示文件类型，点击可以分类查看文件，底部显示已占用存储空间。
- 顶部文件操作区域：包括对文件的操作按钮组、文件查看模式切换按钮组、设置文件显示列按钮。
- 右侧文件展示区域：包括面包屑导航栏——标识当前位于的目录；文件展示区域——展示形式会随文件查看模式而改变；底部分页组件。

![网盘主页](https://images.gitee.com/uploads/images/2021/0325/105935_225d3d46_1837873.png)

### 布局调整功能

左侧菜单栏可折叠，表格操作列可折叠，可控制当前表格中列的显示和隐藏

![折叠功能](https://images.gitee.com/uploads/images/2021/0325/113631_cf57fc44_1837873.gif)

### 批量操作功能

![批量操作](https://images.gitee.com/uploads/images/2021/0325/115913_ad3bbe67_1837873.gif)

## 三种查看模式

文件查看支持三种展示模式（列表、网格和时间线模式）

### 列表模式

![列表模式](https://images.gitee.com/uploads/images/2021/0325/120007_1d046ef5_1837873.png)

### 网格模式

![网格模式](https://images.gitee.com/uploads/images/2021/0325/123609_e4868707_1837873.png)

### 时间线模式

![时间线模式](https://images.gitee.com/uploads/images/2021/0325/123638_3316ce8f_1837873.png)

## 创建文件夹

![创建文件夹](https://images.gitee.com/uploads/images/2021/0325/123704_145604f0_1837873.png)

## 文件图标大小调整

在网格模式和时间线模式下，支持手动调整图标大小：

![图标大小调整](https://images.gitee.com/uploads/images/2021/0409/181840_bb0dcb17_1837873.gif)

## 文件移动

![文件移动](https://images.gitee.com/uploads/images/2021/0325/123752_14364633_1837873.png)

## 文件在线解压缩

![文件在线解压缩](https://images.gitee.com/uploads/images/2021/0325/123823_aba673e8_1837873.png)

## 文件上传三种方式

### 文件分片上传

文件采用**分片上传**，集成了[simiple-uplader](https://github.com/simple-uploader/Uploader/blob/develop/README_zh-CN.md#uploader)的文件**秒传**、**断点续传**功能。
![文件上传](https://images.gitee.com/uploads/images/2021/0325/144103_08f4902b_1837873.png)

### 拖拽上传

![文件拖拽上传](https://images.gitee.com/uploads/images/2021/0416/143326_1353ea6a_1837873.gif)

### 截图粘贴上传

直接使用任何截图工具截图后，在拖拽区域使用 Ctrl + V 粘贴图片，点击上传图片即可上传。

![截图粘贴上传](https://images.gitee.com/uploads/images/2021/0416/143216_c7be7797_1837873.png)

## 文件回收站

![文件回收站](https://images.gitee.com/uploads/images/2021/0325/123843_f8fa15bf_1837873.png)

## 文件单个和批量分享

1. 支持单个和批量分享文件给他人：

   ![单个或批量分享文件](https://images.gitee.com/uploads/images/2021/0412/094958_842ead78_1837873.png)

2. 可以选择过期时间和是否需要提取码：

   ![过期时间和是否需要提取码](https://images.gitee.com/uploads/images/2021/0412/095039_b7841dbc_1837873.png)

3. 提供快捷复制链接及提取码给他人：

   ![生成分享链接](https://images.gitee.com/uploads/images/2021/0412/095055_a06df014_1837873.png)

   粘贴分享链接及提取码效果：

   ```
   分享链接：https://pan.qiwenshare.com/share/27d9b438019e4f68bcec02f579d163b7
   提取码：356978
   复制链接到浏览器中并输入提取码即可查看文件
   ```

4. 他人查看分享内容，并支持保存到网盘功能：

   ![查看他人分享](https://images.gitee.com/uploads/images/2021/0412/095629_ce5b3336_1837873.png)

## 支持查看自己已分享过的文件列表

支持在列表中快捷复制当次的分享链接及提取码，并标注分享时间和过期状态：

![我的分享](https://images.gitee.com/uploads/images/2021/0412/095142_6d543701_1837873.png)

## 视频在线预览

文件类型为视频时，点击即可打开预览窗口，展示播放列表，支持快进、后退、暂停、倍速播放、全屏播放、下载视频和折叠播放列表。

![视频在线预览](https://images.gitee.com/uploads/images/2021/0416/143120_c1ab2d82_1837873.png)

## 音频在线播放

![音频在线播放](https://images.gitee.com/uploads/images/2021/0416/142347_1a09dd57_1837873.png)
