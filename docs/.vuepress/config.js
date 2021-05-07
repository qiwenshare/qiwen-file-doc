module.exports = {
  title: '奇文网盘',
  description: '一款功能齐全的文件管理系统',
  head: [
    ['link', { rel: 'icon', href: 'QWshare.ico' }]
  ],
  base: './dist/', // 默认路径
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' },
      {
        text: '插件',
        items: [
          { text: 'vue-simple-uploader', link: 'https://github.com/simple-uploader/vue-uploader/blob/master/README_zh-CN.md', target:'_blank'  },
          { text: 'vue-video-player', link: 'https://github.com/surmon-china/vue-video-player', target:'_blank'  },
        ]
      },
      {
        text: '仓库地址',
        items: [
          { text: '前端 qiwen-file-web', link: 'https://gitee.com/qiwen-cloud/qiwen-file-web', target:'_blank' },
          { text: '后台 qiwen-file', link: 'https://gitee.com/qiwen-cloud/qiwen-file', target:'_blank' }
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
        'install', /* /guide/install.html */
        'function', /* /guide/function.html */
        'deploying', /* /guide/deploying.html */
        'contact', /* /guide/contact.html */
        'thanks', /* /guide/thanks.html */
      ],
      '/config/': [
        '',      /* /config/ */
      ],
      '/log/': [
        'frontend',      /* /config/frontend.html */
        'backend',      /* /config/backend.html */
      ]
    },
    displayAllHeaders: true
  }
}