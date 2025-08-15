import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/myblog/',
  title: "Kelefie 学习库",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/myblog/logo.svg" }]],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端',   // 父导航
        items: [
          { text: 'vue', link: '/vue' },
          { text: 'react', link: '/react' }
        ]
      },
      {
        text: '后端',   // 父导航
        items: [
          { text: 'c#', link: '/csharp' },
          { text: '.net core', link: '/core' },
          { text: 'JAVA知识库', link: '/java' },
          { text: 'Spring Framework 中文文档', link: '/spring' }
        ]
      },
      {
        text: '其它',
        items: [

          { text: '例子', link: '/markdown-examples' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '📝 c#', link: '/csharp' },
          { text: '🌱 vue', link: '/vue' },
          { text: '☕️ JAVA 知识', link: '/java' },
          { text: '🌐  Spring Framework 中文文档', link: '/spring' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          cn: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    footer: {
      copyright: 'Copyright@ 2025 Kelefie. All rights reserved.'
    }
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
