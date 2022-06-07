import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: '琴鬼白羊的小站',
  description: '记录，变成更好的自己',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    lang: 'zh-CN',
    logo: '/mylogo.jpg',
    author: '琴鬼白羊',
    authorAvatar: '/mylogo.jpg',
    docsRepo: '/pzy-pzy/pzy-pzy.github.io',
    docsBranch: 'master',
    docsDir: 'docs',
    repo: '/pzy-pzy/pzy-pzy.github.io',
    editLinkText: '编辑此页',
    editLinkPattern: ':repo/-/edit/:branch/:path',
    lastUpdatedText: '最后更新于',
    // series 为原 sidebar
    series: {
      '/docs/theme-reco/': [
        {
          text: '基础',
          children: ['home', 'theme']
        },
        {
          text: '高级',
          children: ['api', 'plugin']
        }
      ]
    },
    navbar:
    [
      { text: '主页', link: '/' },
      { text: '分类', link: '/categories/suibi/1/' },
      { text: '标签', link: '/tags/suibi/1/' },
      { text: '归档',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        ]
      },
      //{ text: 'TimeLine', link: '/article/timeline/' },
      { text: '留言板', link: '/article/MessageBoard' },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'QQ 群',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'GitHub',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'buttongroup',
    //       children: [
    //         {
    //           text: '打赏',
    //           link: '/docs/others/donate.html'
    //         }
    //       ]
    //     }
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    valineConfig: {
      appId: '5b7FyS40d5jXqv1F5fwVUSSf-gzGzoHsz',
      appKey: 'ahSUPNm1GzNkIzAJ1UU5rDVo',
      placeholder: '填写邮箱可以收到回复提醒哦！',
      verify: true, // 验证码服务
      // notify: true,
      recordIP: true,
      hideComments: true // 隐藏评论
    },
  }),
  // debug: true,
})
