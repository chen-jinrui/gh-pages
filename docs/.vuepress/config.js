module.exports = {
  title: "chen",
  description: "自学 读书 技术学习 生活记录", // 描述
  lange: "zh-CN", // 语言
  // dest: 'docs',
  base: "/",
  // theme: require.resolve('./theme/'), // 使用自定义主题
  markdown: {
    // markdown 配置
    lineNumbers: true,
  },
  themeConfig: {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    dateFormat: "YYYY-MM-DD",
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "博客",
        link: "/blog/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
      {
        text: "读书",
        link: "/reading/",
      },
      {
        text: "JavaScript",
        link: "/javascript/",
      },
      {
        text: "成功日记",
        link: "/success/",
      },
      {
        text: "愿望清单",
        link: "/wishList/",
      },
      {
        text: "编程",
        link: "/programming/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"],
        },
      ],
    },
    directories: [
      // 目录分类器
      {
        id: "home",
        dirname: "_blog/_posts",
        path: "/",
        layout: "Home",
      },
      {
        id: "post",
        dirname: "_blog/_posts",
        path: "/blog/",
        itemPermalink: "/blog/:year/:month/:day/:slug",
        // layout: 'Layout',
        pagination: {
          lengthPerPage: 20,
        },
      },
      {
        id: "reading",
        dirname: "_reading",
        path: "/reading/",
        itemPermalink: "/reading/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 20,
        },
      },
      {
        id: "javascript",
        dirname: "_javascript",
        path: "/javascript/",
        itemPermalink: "/javascript/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 20,
        },
      },
      {
        id: "success",
        dirname: "_success",
        path: "/success/",
        itemPermalink: "/success/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 20,
        },
      },
      {
        id: "wishList",
        dirname: "_wishList",
        path: "/wishList/",
        itemPermalink: "/wishList/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 20,
        },
      },
      {
        id: "programming",
        dirname: "_programming",
        path: "/programming/",
        itemPermalink: "/programming/:year/:month/:day/:slug",
        pagination: {
          lengthPerPage: 20,
        },
      },
    ],
    footer: {
      // 页脚
      contact: [
        {
          type: "github",
          link: "https://github.com/",
        },
      ],
      copyright: [
        {
          text: "京ICP备20016112号",
          link: "http://beian.miit.gov.cn",
        },
        {
          text: "MIT Licensed | Copyright © 2020",
          link: "https://github.com/",
        },
      ],
    },
  },
  plugins: [
    require("./plugin.js"),
    "cat",
    "@vuepress/back-to-top",
    "@vuepress/last-updated",
    // '@vuepress/blog',
    [
      "sitemap",
      {
        hostname: "https://chen-jinrui.github.io/",
      },
    ],
  ],
};
