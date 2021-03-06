module.exports = {
  title: '奇文网盘',
  description: '一款功能齐全的文件管理系统',
  head: [
    ['link', { rel: 'icon', href: '/QWshare.ico' }]
  ],
  base: '/docs/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '配置',  link: '/config/' },
      { text: '常见问题(FAQ)', link: '/question/' },
      { text: '联系 & 支持', link: '/support/' },
      {
        text: '资源列表',
        items: [
          {
            text: '插件',
            items: [
              { text: 'vue-simple-uploader', link: 'https://github.com/simple-uploader/vue-uploader/blob/master/README_zh-CN.md', target:'_blank' },
              { text: 'video.js', link: 'https://videojs.com/getting-started', target:'_blank' },
              { text: 'ufop-spring-boot-starter', link: 'https://gitee.com/qiwen-cloud/ufop-spring-boot-starter', target:'_blank' },
              { text: 'mavon-editor', link: 'https://www.npmjs.com/package/mavon-editor', target:'_blank' },
              { text: 'vue-codemirror', link: 'https://github.com/surmon-china/vue-codemirror', target:'_blank' }
            ]
          },
          {
            text: '仓库地址',
            items: [
              { text: '前端 qiwen-file-web', link: 'https://gitee.com/qiwen-cloud/qiwen-file-web', target:'_blank' },
              { text: '后台 qiwen-file', link: 'https://gitee.com/qiwen-cloud/qiwen-file', target:'_blank' },
              { text: '本说明文档 qiwen-file-doc', link: 'https://gitee.com/qiwen-cloud/qiwen-file-doc', target:'_blank' }
            ]
          }
        ]
      },
      { text: '演示地址', link: 'https://pan.qiwenshare.com/', target:'_blank' },
      { text: '更新日志', 
        items: [
          { text: '前端 qiwen-file-web', link: '/log/frontend/' },
          { text: '后台 qiwen-file', link: '/log/backend/' }
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        '',      /* /guide/ */
        'prepare', /* /guide/prepare.html */
        'install', /* /guide/install.html */
        'development', /* /guide/development.html */
        'deploying', /* /guide/deploying.html */
        'function', /* /guide/function.html */
        'frontend', /* /guide/frontend.html */
      ],
      '/config/': [
        '',      /* /config/ */
      ],
      '/question/': [
        '',      /* /question/ */
      ],
      '/support/': [
        '',      /* /support/ */
      ],
      '/log/': [
        'frontend',      /* /log/frontend.html */
        'backend',      /* /log/backend.html */
      ]
    },
    displayAllHeaders: true,
    lastUpdated: '最近更新时间' // 页面更新时间
  },
  plugins: [
    "@vuepress/plugin-medium-zoom", //  大图查看插件
    'fulltext-search',  //  全局搜索插件
    '@vuepress/back-to-top' //  回到顶部插件
  ]
}