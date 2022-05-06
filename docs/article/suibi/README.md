---
title: 网站之始
date: 2022/05/04
author: 琴鬼白羊
tags:
 - 随笔
categories:
 - 随笔
---

之前一直想把[vuepress](https://www.vuepress.cn/)的网站搭建一下，正好趁着五一假期，一个人在家闲着也没事干，简单把这个小网站搭建好。建站比较简单，找的是[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)的一个V2.0主题，直接客制化一下内容而已。详细的创建步骤，在[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)页面中都有提及，按照步骤来即可。

选择vuepress-theme-reco是因为我不是搞前端的，主要需求还是在搭建一个简单可用的平台就可以。同时vuepress-theme-reco作者也正是秉承着“开箱即用”的理念设计了这款主题，正好符合我的需求，在这里要感谢一下主题作者[reco_luan](https://github.com/recoluan)。

## 几个要点

### 1.代码托管
选择一般的代码托管平台即可。常用的像是[GitHub](https://github.com/)或者[Gitee](https://gitee.com/)等，只要能够提供Pages服务即可，而且这几个网站的Pages服务都是免费的。

### 2.构建
通过vuepress搭建的网页属于静态页面，是通过将Markdown文件渲染成HTML静态页面，然后将静态页面部署到站点完成的。

### 3.自动推送
通过vuepress构建静态页面后，需要将编译完成的目标文件夹（默认是`.vuepress/dist`）推送到仓库，仓库根据Pages设置，将静态页面托管到项目站点，以Github为例，一般是`<username>.github.io/<repo>`。

### 4.页面重定向
因为我正好有一个闲置的域名，Git Pages服务可以将默认的`<username>.github.io/<repo>`站点，替换成个人域名。详细步骤可以参考GitHub官方文档[配置GitHubPages站点的自定义域](https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site)

