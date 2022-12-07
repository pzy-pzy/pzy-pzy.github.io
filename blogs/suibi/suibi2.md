---
title: 日常维护
date: 2022/05/06 23:11:34
author: 琴鬼白羊
tags:
 - 随笔
categories:
 - 随笔
---

这几天一直试着用[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)主题更新博客，作为一个新手还是会遇到各种各样的问题的。统一在这里记录一下。

## 问题1：推送到代码仓库后，Pages页面加载为空白
打开链接加载时正常，但是加载完成后，显示空白。

**可能的原因是**build过程没有正常完成。

## 问题2：使用vuepress dev时，提示端口正在被占用
没有找到具体的原因，重启电脑也没有用，最后用了一个笨办法，重新初始化了主题仓库，然后将网站内容覆盖过来。这个问题应该是更新版本造成。

## 问题3：使用start构建本地静态页面时，发现vist报错。
这个问题可能是依赖更新错误，使用的是最新的版本才会出现这个问题，因此暂时的办法是，保持现有的项目依赖，不进行版本更新。

版本更新后，vist版本更新了，因此不是什么错误。同时因为没有更改config.js内的内容才引起预览和编译内容生成了空白页。目前已经更新到最新版本[vuepress-theme-reco@2.0.0-beta.16](https://vuepress-theme-reco.recoluan.com/)。

## 问题4：vuepress-theme-reco如何升级

我一般是先通过创建一个最新版本的新项目，然后将`package.json`和`config.ts`更新到自己的网站即可。删除临时目录文件和`package-lock.json`，重新生成即可。