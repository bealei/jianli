/* ===== 纯数据：标题、副标题、分组、条目、版权都在这里改 =====
   header.title 大标题 / header.subTitle 副标题 / footer.text 版权
   group 分组名；items 为空则显示「待补充」占位
   每条：time 时间 / title 正文 / tag 小标签（可选）/ desc 第二行（可选）
   side: "left" 左栏 / "right" 右栏，不写自动左右交替 */
const data = {
  header: {
    title: "时间轴大事记",
    subTitle: "1994～2024",
  },
  footer: {
    text: "Copyright © zhuanglei · 版权所有",
  },
  groups: [
    {
      group: "1994",
      items: [{ time: "1994.08", title: "我出生啦", tag: "666", side: "left" }],
    },
    {
      group: "上学",
      items: [
        {
          time: "1999.09～2007.07",
          title: "九峰小学",
          tag: "小学",
          side: "right",
        },
        {
          time: "2007.09～2010.07",
          title: "涵江私立银河学校",
          tag: "初中",
          side: "left",
        },
        {
          time: "2010.09～2012.12",
          title: "莆田华侨中学",
          tag: "高中",
          side: "right",
        },
      ],
    },
    {
      group: "部队",
      items: [
        {
          time: "2012.12～2013.03",
          title: "41集团军机步123师369团新兵2连3排1班",
          side: "left",
        },
        {
          time: "2013.03～2013.03",
          title: "41集团军机步123师369团二营六连三排七班",
          side: "right",
        },
        {
          time: "2013.03～2013.08",
          title: "白求恩医务士官学校三大队十四队一区队4班",
          desc: "学兵（卫生勤务）",
          side: "left",
        },
        {
          time: "2013.08～2014.12",
          title: "41集团军123师装甲团卫生队",
          desc: "卫生员",
          side: "right",
        },
      ],
    },
    { group: "大学", items: [] },
    {
      group: "工作",
      items: [
        {
          time: "2013.03～2013.08",
          title: "白求恩医务士官学校三大队十四队一区队4班",
          desc: "学兵（卫生勤务）",
          side: "left",
        },
        {
          time: "2013.08～2014.12",
          title: "41集团军123师装甲团卫生队",
          desc: "卫生员",
          side: "right",
        },
      ],
    },
    { group: "兼职", items: [] },
    /* 继续加模块：复制上面一段，改 group 名和 items 即可 */
  ],
};
