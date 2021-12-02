# 快速入手

## 简介

[奇文网盘](https://pan.qiwenshare.com/) 是一款基于 **Spring Boot 2 + VUE CLI@3（Vue2）** 框架开发的分布式文件管理系统，旨在为用户和企业提供一个简单、方便的文件存储方案，能够以完善的目录结构体系，对文件进行管理。

<p>
  <a target="_blank" href="https://github.com/vuejs/vue" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
	<a target="_blank" href="https://baike.baidu.com/item/MIT%E8%AE%B8%E5%8F%AF%E8%AF%81/6671281?fr=aladdin">
    <img src="https://img.shields.io/:license-MIT-blue.svg" />
	</a>
	<a target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">
		<img src="https://img.shields.io/badge/JDK-8+-green.svg" />
	</a>
	<a target="_blank" href="https://gitee.com/mingSoft/MCMS/stargazers">
		<img src="https://gitee.com/qiwen-cloud/qiwen-file/badge/star.svg?theme=dark" alt='gitee star' style="height: 20px;"/>
	</a>
	<a href='https://gitee.com/qiwen-cloud/qiwen-file/members'>
		<img src='https://gitee.com/qiwen-cloud/qiwen-file/badge/fork.svg?theme=dark' alt='fork' style="height: 20px;"></img>
	</a>
</p>

### 优势

#### 前后台分离

项目使用前后台分离的模式进行开发和部署，对于开发者来说，前后台职责划分的比较清晰，对于使用者来说，你可以将前后台部署到不同的机器上。

#### 技术选型

使用业内最流行的 Spring Boot 2 + VUE CLI@3 作为基础框架开发。

#### 跨平台

可以将该系统部署到你的 windows 操作系统或者 Linux 操作系统。

#### 功能强大，使用简单

你只需要配置很少的信息,便可以开启你的个人网盘之旅。

#### 在线编辑，协同办公

目前已经支持 Word, Excel，PPT 在线编辑，协同编辑功能。

#### 分布式架构

分布式的架构设计，可以为你的网盘开启无限的扩展空间，网络拓扑图如下：

![网络拓扑图](/img/guide/web-expand.png '屏幕截图.png')

### 功能概览

#### 基础操作

| 操作   | 文件 | 文件夹 | 单个 | 批量 | 备注                                                         |
| ------ | ---- | ------ | ---- | ---- | ------------------------------------------------------------ |
| 创建   | √    | √      | √    | ⚪    | 创建 Word、Excel、PowerPoint 在线文件                        |
| 删除   | √    | √      | √    | √    |                                                              |
| 上传   | √    | √      | √    | √    | **拖拽**上传、**粘贴截图**上传                               |
| 重命名 | √    | √      | √    | ⚪    |                                                              |
| 移动   | √    | √      | √    | √    |                                                              |
| 复制   | √    | ⚪      | √    | ⚪    |                                                              |
| 解压缩 | √    | ⚪      | √    | ⚪    | **ZIP、RAR**                                                 |
| 预览   | √    | ⚪      | √    | ⚪    | 支持图片、视频、音频在线预览<br />支持PDF、JSON、TXT、HTML 等常用文本文件<br />支持 Office 文件在线预览 |
| 分享   | √    | √      | √    | √    | 支持有效期、提取码                                           |
| 搜索   | √    | √      | ⚪    | ⚪    | 支持 ElasticSearch 文件名称模糊搜索                          |

#### 特色功能

| 功能         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| 在线编辑功能 | Word、Excel、PowerPoint 文档的在线创建、**在线编辑**、协同编辑功能<br />集成 [OnlyOffice](https://api.onlyoffice.com/)，安装方式参考 [安装 ONLYOFFICE](https://www.qiwenshare.com/essay/detail/1208) |
| 文件分类查看 | 图片、视频、音乐、文档、其他，分类查看更快捷                 |
| 多种查看模式 | 支持网格模式、列表模式、时间线模式<br />网格模式下图标支持手动控制显示大小 |
| 回收站       | 删除文件自动移入回收站，支持在回收站中彻底删除、还原文件     |
| 多种存储方式 | 基于奇文社区自研框架 [UFOP](https://gitee.com/qiwen-cloud/ufop-spring-boot-starter)，实现文件多样化存储。<br/>支持**本地**磁盘、**阿里云 OSS** 对象存储、**FastDFS** 存储、**MinIO** 存储、<br />**七牛云 KODO** 对象存储，点击查看配置方式[存储方式配置](/config/#存储方式配置) |
| 支持分片上传 | 基于奇文社区自研框架 [UFOP](https://gitee.com/qiwen-cloud/ufop-spring-boot-starter), 实现文件分片上传。<br />集成优秀开源项目 [vue-simple-uploader](https://github.com/simple-uploader/vue-uploader/blob/master/README_zh-CN.md) |
| 支持极速秒传 | 计算文件 MD5，实现极速秒传效果，提高上传效率                 |
| 支持断点续传 | 同一个文件，当上传过程中网络中断，可以从断点处继续上传       |
| 实时进度显示 | 页面实时显示上传文件进度、速度、结果等信息                   |
| 存储容量显示 | 可实时显示文件存储占用情况及总存储容量                       |

### 参与贡献

[奇文社区组织](https://gitee.com/qiwen-cloud)下的开源项目目前仅托管在 Gitee。欢迎各路好汉一起来参与完善奇文网盘，我们期待你的 PR！

1.  Fork 本仓库（仓库地址见顶部导航栏）
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

### 自研课程

联手蓝桥云课，打造了奇文网盘基础功能从 0 开始教程：[经典项目：前后端分离网盘系统实战](https://www.lanqiao.cn/courses/)

![蓝桥云课](/img/guide/lanqiao.png)

![蓝桥云课](/img/guide/project.png)

## 快速开始

由于项目是前后台分离的模式，因此编译和部署得花费一点时间，对于部分想快速体验的用户，我们制作了一个 window 环境下的一键启动包，解压就可以使用，不需要任何依赖，**当然你也可以跳过这一部分，从下一小节编译开始**。

#### 安装包获取

关注 **奇文社区** 公众号，回复 `qf` 即可获取奇文网盘一键启动包

#### 安装

该软件包为绿色解压版，解压即可使用

#### 配置

默认是不需要任何配置的即可启动使用，当然其他的一些扩展功能配置，请点击 [配置](/config/) 页查看详情

#### 启动

点击 start.bat 脚本启动项目

#### 停止

启动成功后会挂窗口，窗口关闭即停止项目

#### 访问

打开浏览器，访问 http://localhost:8080 , 即可启动项目
