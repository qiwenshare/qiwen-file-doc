# 前端手册

如果你不是专业的前端或初级前端，在对前端项目进行二次开发前，建议先看完整个“前端手册”，了解完项目的目录结构、作者的设计思路后，考虑代码鲁棒性后，再着手改造。

如果你有更好的设计思路或写法，请加入 [QQ 群](/support/#联系我们) 交流

## 目录结构
```bash
├─ .vscode             // Visual Studio Code 相关
│  └─ settings.json    // 配置文件
├─ public           // 公共文件
│  ├─ codemirror    // codemirror 插件相关的 css 文件
│  ├─ mavonEditor   // markdonw 编辑器相关的 css、jss 文件
│  ├─ favicon.ico   // 浏览器标签页显示的图标
│  └─ index.html    // html 模板
├─ src    //  业务代码
│  ├─ assets        // 静态资源存放，例如图片、样式文件、字体文件等
│  │  ├─ images     // 全局图片 
│  │  └─ styles     // 全局样式
│  ├─ components    // 组件
│  │  ├─ common                 // 多个页面使用的公共组件
│  │  │  ├─ BreadCrumb.vue          // 面包屑导航栏组件，位于页面顶部第二行，主要用途：显示当前常看的文件路径
│  │  │  ├─ DragVerify.vue          // 滑动解锁组件，主要用途：注册、登录页面作为行为验证
│  │  │  ├─ FileTable.vue           // 表格展示组件，主要用途：列表模式下查看文件 
│  │  │  └─ MarkdownPreview.vue     // markdown 预览组件，主要用途：公告详情页面，放在此处是考虑后面还有其它页面用到
│  │  ├─ file   // 文件相关组件
│  │  │  ├─ box      // 文件操作相关的组件，展现形式为浮层、遮罩层
│  │  │  │  ├─ audioPreview     // 音乐预览，主要用途：点击音频文件时，在线播放音频，切换上下首、调节音量、播放进度等
│  │  │  │  │  ├─ BoxMask.vue       // 组件内容
│  │  │  │  │  └─ index.js          // 组件定义，主要用途：定义插件、接收参数、引入 BoxMask.vue 并传参
│  │  │  │  ├─ codePreview      // 使用 codemirror 插件对代码文件在线编辑、预览，主要用途：C、C++、JAVA、JavaScript、HTML、CSS 等和无后缀文件都可在线预览、编辑
│  │  │  │  │  ├─ BoxMask.vue       // 组件内容
│  │  │  │  │  ├─ fold.js           // 代码编辑框折叠动作相关
│  │  │  │  │  ├─ index.js          // 组件定义
│  │  │  │  │  ├─ mode.js           // 编码语言解析模式
│  │  │  │  │  └─ theme.js          // codemirro 代码高亮主题
│  │  │  │  ├─ contextMenu      // 右键菜单，主要用途：在文件列表中对文件进行右键操作，显示操作列表
│  │  │  │  │  ├─ Box.vue           
│  │  │  │  │  └─ index.js           
│  │  │  │  ├─ imgPreview       // 图片预览，主要用途：旋转、放大、缩小图片、切换上下张
│  │  │  │  │  ├─ BoxMask.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ markdownPreview  // 使用 mavonEditor 插件对 markdown 文件在线编辑、预览
│  │  │  │  │  ├─ BoxMask.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ uploadFile       // 上传文件、文件夹、拖拽上传、粘贴上传
│  │  │  │  │  ├─ Box.vue
│  │  │  │  │  └─ index.js
│  │  │  │  └─ videoPreview     // 视频预览
│  │  │  │     ├─ BoxMask.vue
│  │  │  │     ├─ index.js
│  │  │  │     └─ VideoPlayer.vue   // 使用 video.js 插件自定义封装视频播放器
│  │  │  ├─ components    // 文件显示相关的组件
│  │  │  │  ├─ FileGrid.vue         // 网格展示组件，主要用途：网格模式下查看文件 
│  │  │  │  ├─ FileTimeLine.vue     // 时间线展示组件，主要用途：时间线模式下查看图片
│  │  │  │  ├─ OperationMenu.vue    // 文件操作按钮区，位于页面顶部，主要包含：上传、批量操作、调节图标大小、切换查看模式、搜索等
│  │  │  │  └─ SelectColumn.vue     // 列表模式下，筛选显示的表格列
│  │  │  ├─ dialog        // 文件操作相关的组件，展现形式为对话框
│  │  │  │  ├─ addFile          // 新建 office 文件
│  │  │  │  │  ├─ Dialog.vue        // 对话框内容
│  │  │  │  │  └─ index.js          // 组件定义，主要用途：定义插件、接收参数、引入 BoxMask.vue 并传参
│  │  │  │  ├─ addFolder        // 新建文件夹
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ copyFile         // 复制文件，包含单文件、多文件操作
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ deleteFile       // 删除文件，包含单文件、多文件操作
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ moveFile         // 移动文件，包含单文件、多文件操作
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ renameFile       // 重命名文件
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ restoreFile      // 还原文件，包含单文件、多文件操作，主要用途：回收站分类下
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ saveShareFile    // 保存他人分享的文件到个人网盘，包含单文件、多文件操作，主要用途：查看他人分享文件页面
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ shareFile        // 分享文件给他人，包含单文件、多文件操作，主要用途：查看个人已分享的文件页面
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ showFileDetail   // 查看文件详细信息
│  │  │  │  │  ├─ Dialog.vue
│  │  │  │  │  └─ index.js
│  │  │  │  └─ unzipFile        // 解压缩文件
│  │  │  │     ├─ Dialog.vue
│  │  │  │     └─ index.js
│  │  │  ├─ AsideMenu.vue   // 文件分类栏，位于页面左侧     
│  │  │  └─ FileList.vue    // 文件相关组件整合，位于页面右侧，从上到下分为：文件操作按钮组、面包屑导航栏、文件列表、分页组件
│  │  ├─ home    // 首页相关组件
│  │  │  ├─ Banner.vue      // 海报宣传组件
│  │  │  ├─ Function.vue    // 功能介绍组件
│  │  │  └─ Notice.vue      // 公告组件
│  │  ├─ Footer.vue   // 底部栏组件，位于页面最底部，展示网站版权信息、联系方式等，主要用途：首页、注册、登录页面
│  │  └─ Header.vue   // 顶部栏组件，位于页面最顶部，展示首页、网盘页面导航，说明“文档”网址链接，注册、登录入口，所有页面均展示此组件
│  ├─ config    // 全局配置项
│  │  └─ index.js     // 配置文件
│  ├─ libs      // 全局函数、Map 存放
│  │  ├─ globalFunction   // 全局函数
│  │  │  ├─ common.js         // 公共函数
│  │  │  ├─ file.js           // 文件相关函数
│  │  │  └─ index.js          // 引入其它业务的全局函数，并向外提供入口
│  │  └─ map.js     // 全局映射关系配置
│  ├─ plugins   // 插件
│  │  ├─ element.js                 // 按需引入 element UI 组件
│  │  └─ fileOperationPlugins.js    // 自定义封装文件操作插件，利用 webpack 的 require.context 接口来自动引入相关文件
│  ├─ request   // 使用 Axios 封装接口
│  │  ├─ file.js        // 文件相关接口
│  │  ├─ home.js        // 首页相关接口
│  │  ├─ http.js        // 设置请求头，拦截请求、响应结果，封装 GET、POST、PUT、DELETE 请求
│  │  ├─ onlyoffice.js  // onlyoffice 相关接口
│  │  └─ user.js        // 用户相关接口
│  ├─ router    // 使用 Vue Router 定义路由
│  │  ├─ before.js      // 全局前置守卫
│  │  └─ router.js      // 路由定义，包含路由列表
│  ├─ store     // 使用 Vuex 定义状态管理器
│  │  ├─ module     // 分模块
│  │  │  ├─ common.js     // 公共管理      
│  │  │  ├─ fileList.js   // 文件列表管理
│  │  │  ├─ sideMenu.js   // 文件分类栏管理
│  │  │  └─ user.js       // 用户相关管理
│  │  └─ index.js   // 入口
│  ├─ views     // 页面
│  │  ├─ ErrorPage  // 错误相关页面
│  │  │  └─ 404.vue       // 404 页面
│  │  ├─ notice     // 公告相关页面
│  │  │  ├─ NoticeDetail.vue  // 公告详情页面
│  │  │  └─ NoticeList.vue    // 公告列表页面
│  │  ├─ File.vue       // 网盘页面
│  │  ├─ Home.vue       // 首页
│  │  ├─ Login.vue      // 登录页面
│  │  ├─ OnlyOffice.vue // 使用 OnlyOffice 在线预览、编辑 office 文件页面
│  │  ├─ Register.vue   // 注册页面
│  │  └─ Share.vue      // 查看他人分享的文件 页面
│  ├─ App.vue   // 入口页面
│  └─ main.js   // 入口文件，引入公共文件、挂载插件、初始化等
├─ .babelrc            
├─ .gitignore         // git 忽略配置
├─ .prettierrc.js     // prettier 扩展的格式化配置
├─ babel.config.js    // babel 配置
├─ jsconfig.json      // JavaScript 配置
├─ LICENSE            // 开源项目证书
├─ package-lock.json  // 依赖锁定
├─ package.json       // 依赖
├─ README.md          // 项目简介
└─ vue.config.js      // 项目打包、启动配置等
```

## 技术栈
- 技术栈：Node.js、Vue、Vuex、Vue Router、Vue CLI、Axios
- CSS 预编译器：Stylus
- 组件库：Element UI
- 工具类插件：canvas-nest.js、js-base64、js-cookie、spark-md5
- 应用类插件：mavon-editor、vue-codemirror、vue-simple-uploader、video.js
- 代码格式化：ESLint、Prettier

## 核心功能设计思路

## 核心代码编写逻辑
