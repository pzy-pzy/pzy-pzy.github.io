---
home: true
modules:
  - BannerBrand
  #- MdContent
  - Blog
  - Footer
bannerBrand:
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  bgImage: '/bg.svg'
  heroText: 琴鬼白羊
  tagline: 这里是琴鬼白羊的小博客。为避免版权问题，禁止转载。
  # buttons:
  #   - { text: Guide, link: '/docs/guide/introduce' }
  #   - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
blog: # blog 模块的配置
  socialLinks: # 社交 icon 请到 [Xions](https://www.xicons.org/#/zh-CN) 页面的 tabler 下获取，复制名称即可
    - { icon: 'BrandGithub', link: 'https://github.com/pzy-pzy' }
    - { icon: 'BrandMessenger', link: '/wechat.png' }
footer: # 底部模块的配置
  record: 湘ICP备19021302号
  recordLink: https://beian.miit.gov.cn/
  # cyberSecurityRecord: 公安备案文案
  # cyberSecurityLink: 公安备案地址
  startYear: 2022
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
