/* ==========================================================================
   SITE_DATA —— 简历归档首页的数据源
   --------------------------------------------------------------------------
   用法：index.html 里先引本文件，再引内联渲染脚本
     <script src="./static/api/data.js"></script>

   为什么用 .js 不用 .json：
     .json 只能靠 fetch 读取，双击本地文件（file://）会被浏览器拦截；
     写成 js 赋值变量，本地直接打开和 GitHub Pages 都能用。

   改内容只改这个文件，改完刷新页面即可。
   path 规则：以仓库根为基准，以 ./ 开头（跟原来的 data.json 一致）
   ========================================================================== */

window.SITE_DATA = {
  meta: {
    eyebrow: "Personal Resume Archive",
    title: "RESUMES",
    sub: "庄磊的简历归档 · 模板、个人版本与资料分类",
    footerLeft: "Copyright © zhuanglei · 版权所有",
    footerRight: "简历仅供参考，请勿用于商业用途",
  },

  /* 顶部联系条 */
  contact: [
    { label: "电话", value: "13145205866", href: "tel:13145205866" },
    { label: "微信", value: "Guai_OK", href: "#" },
    { label: "QQ", value: "9066225", href: "#" },
    { label: "邮箱", value: "bealei@163.com", href: "mailto:bealei@163.com" },
  ],

  /* 01 信息资料：icon 对应 index.html 里的 SVG 图标表 */
  info: {
    num: "01",
    title: "信息资料",
    desc: "证件与学业证明材料",
    items: [
      { name: "学信网", icon: "xuexin", path: "./resumes/z-xxw/index.html" },
      { name: "毕业证书", icon: "byzs", path: "./resumes/z-byzs/index.html" },
      { name: "荣誉证书", icon: "ryzs", path: "./resumes/z-ryzs/index.html" },
      {
        name: "湄职院成绩单",
        icon: "cjd",
        path: "./resumes/z-mzycjd/index.html",
      },
      { name: "个人经历", icon: "grjl", path: "./resumes/z-grjl/index.html" },
    ],
  },

  /* 02 简历模板：按主版本分卡片，items 是同一套母版的不同修订 */
  templates: {
    num: "02",
    title: "简历模板",
    desc: "v1 – v5 母版 · v6 待补充",
    groups: [
      {
        ver: "v1",
        tag: "早期母版",
        items: [
          { name: "v1.0", path: "./resumes/jianli-v1.0/index.html" },
          { name: "v1.1", path: "./resumes/jianli-v1.1/index.html" },
          { name: "v1.2", path: "./resumes/jianli-v1.2/index.html" },
          { name: "v1.3", path: "./resumes/jianli-v1.3/index.html" },
          { name: "v1.4", path: "./resumes/jianli-v1.4/index.html" },
        ],
      },
      {
        ver: "v2",
        tag: "母版",
        items: [{ name: "v2.0", path: "./resumes/jianli-v2.0/index.html" }],
      },
      {
        ver: "v3",
        tag: "母版",
        items: [{ name: "v3.0", path: "./resumes/jianli-v3.0/index.html" }],
      },
      {
        ver: "v4",
        tag: "母版",
        items: [
          { name: "v4.0", path: "./resumes/jianli-v4.0/index.html" },
          { name: "v4.1", path: "./resumes/jianli-v4.1/index.html" },
        ],
      },
      {
        ver: "v5",
        tag: "母版",
        items: [{ name: "v5.0", path: "./resumes/jianli-v5.0/index.html" }],
      },
      { ver: "v6", tag: "待补充", todo: true, items: [] },
    ],
  },

  /* 03 个人简历：按年份归档，current 标记最新一年 */
  timeline: {
    num: "03",
    title: "个人简历",
    desc: "2021 – 2027 · 按年份归档",
    years: [
      {
        year: "2021",
        items: [
          { name: "v2.0-2021", path: "./resumes/jianli-v2.0-2021/index.html" },
        ],
      },
      {
        year: "2022",
        items: [
          { name: "v2.0-2022", path: "./resumes/jianli-v2.0-2022/index.html" },
        ],
      },
      {
        year: "2023",
        items: [
          { name: "v2.0-2023", path: "./resumes/jianli-v2.0-2023/index.html" },
          { name: "v4.0-2023", path: "./resumes/jianli-v4.0-2023/index.html" },
          {
            name: "v4.0-2023-all",
            path: "./resumes/jianli-v4.0-2023-all/index.html",
          },
          { name: "v5.0-2023", path: "./resumes/jianli-v5.0-2023/index.html" },
        ],
      },
      {
        year: "2024",
        items: [
          { name: "v5.0-2024", path: "./resumes/jianli-v5.0-2024/index.html" },
          {
            name: "v5.0-2024-1",
            path: "./resumes/jianli-v5.0-2024-1/index.html",
          },
          {
            name: "v5.0-2024-2",
            path: "./resumes/jianli-v5.0-2024-2/index.html",
          },
          { name: "简历2024.pdf", path: "./static/files/庄磊简历.pdf" },
        ],
      },
      {
        year: "2025",
        items: [
          {
            name: "庄磊简历2025",
            path: "./resumes/jianli-v5.0-2025-2/index.html",
          },
        ],
      },
      {
        year: "2026",
        items: [
          {
            name: "庄磊简历2026",
            path: "./resumes/jianli-v5.0-2026-2/index.html",
          },
        ],
      },
      {
        year: "2027",
        current: true,
        items: [
          {
            name: "v5.0-2027-2 ↗",
            path: "./resumes/jianli-v5.0-2027-2/index.html",
          },
        ],
      },
    ],
  },

  /* 04 资源下载 */
  downloads: {
    num: "04",
    title: "资源下载",
    desc: "字体与成品 PDF",
    items: [
      {
        name: "鸿蒙字体",
        path: "./static/files/HarmonyOS_Sans_SC_Regular.ttf",
      },
      { name: "Oppo 字体", path: "./static/files/OPlusSans3-Regular.ttf" },
      { name: "简历 PDF", path: "./static/files/庄磊简历.pdf" },
      { name: "简历 PDF 副本", path: "./static/files/庄磊简历 - 副本.pdf" },
    ],
  },
};
