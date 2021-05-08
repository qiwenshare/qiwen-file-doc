# 介绍

基于 **Spring Boot + VUE CLI@3** 框架开发的分布式文件系统，旨在为用户和企业提供一个简单、方便的文件存储方案，能够以完善的目录结构体系，对文件进行管理 。

您可以在其基础上继续进行开发来完善其功能，成为本项目的贡献者之一。

您也可以以该项目作为脚手架，进行其他项目的开发。

<p>
  <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
	<a target="_blank" href="https://baike.baidu.com/item/MIT%E8%AE%B8%E5%8F%AF%E8%AF%81/6671281?fr=aladdin">
    <img src="https://img.shields.io/:license-MIT-blue.svg" />
	</a>
	<a target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">
		<img src="https://img.shields.io/badge/JDK-8+-green.svg" />
	</a>
	<a target="_blank" href="https://gitee.com/mingSoft/MCMS/stargazers">
		<img src="https://gitee.com/qiwen-cloud/qiwen-file/badge/star.svg?theme=dark" alt='gitee star'/>
	</a>
</p>

## 功能概览

### 用户操作

1. 用户的登录和注册

### 文件操作

1. 用户可对目录结构进行增加，删除，修改
2. 提供文件的拖拽上传，下载，支持截图粘贴直接上传图片
3. 支持对 zip 文件和 rar 文件的在线解压缩
4. 支持文件和目录的移动和复制
5. 多文件格式分类查看
6. 支持阿里云 OSS 对象存储,FastDFS 存储
7. 增加分片上传，该功能同时支持本地存储和阿里云 OSS,FastDFS
8. 支持极速秒传功能，提高上传效率
9. 上传文件前台实时显示上传文件进度，上传速率，百分比等信息
10. 支持文件重命名
11. 可实时显示文件存储占用情况及总占用容量
12. 支持 ElasticSearch 文件搜索
13. 支持将文件分享给他人，并查看自己已分享过的文件列表
14. 提供图片在线预览、视频在线预览、音频在线预览、PDF、JSON、TXT 等常用文本文件在线预览，支持 office 在线预览
15. ……

## 网络拓扑图

![网络拓扑图](./img/web-expand.png '屏幕截图.png')

## 软件架构

该项目采用前后端分离的方式进行开发和部署,主要用到以下关键技术

**前端**：Element UI、Vue CLI@3、Node.js、Webpack

**后台**：Spring Boot、MyBatis、JPA、JWT

**数据库** : MySQL

**数据结构**：递归算法，树的遍历和插入...

## 参与贡献

1.  Fork 本仓库（仓库地址见顶部导航栏）
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
