window.onload = function () {



  watermark.load({
    watermark_txt: "庄 磊", //第一行水印的内容
    watermark_time: "ZhuangLei", //第二行水印内容
    watermark_x: 30, //水印起始位置x轴坐标
    watermark_y: 30, //水印起始位置Y轴坐标
    watermark_rows: 0, //水印行数
    watermark_cols: 0, //水印列数
    watermark_x_space: 210, //水印x轴间隔
    watermark_y_space: 190, //水印y轴间隔
    watermark_font: '微软雅黑', //水印字体
    watermark_color: 'red', //水印字体颜色
    watermark_fontsize: '22px', //水印字体大小
    watermark_alpha: 0.2, //水印透明度，要求设置在大于等于0.005
    watermark_width: 120, //水印宽度
    watermark_height: 60, //水印高度
    watermark_angle: 30, //水印倾斜度数
    watermark_parent_node: document.getElementById('app') //水印插件挂载的父元素element,不输入则默认挂在body上
  });



  window.addEventListener('beforeprint', function (e) {
    watermark.remove();
  })
  window.addEventListener('afterprint', function (e) {
    watermark.init({
      watermark_txt: "庄 磊", //第一行水印的内容
      watermark_time: "ZhuangLei", //第二行水印内容
      watermark_x: 30, //水印起始位置x轴坐标
      watermark_y: 30, //水印起始位置Y轴坐标
      watermark_rows: 0, //水印行数
      watermark_cols: 0, //水印列数
      watermark_x_space: 210, //水印x轴间隔
      watermark_y_space: 190, //水印y轴间隔
      watermark_font: '微软雅黑', //水印字体
      watermark_color: 'red', //水印字体颜色
      watermark_fontsize: '22px', //水印字体大小
      watermark_alpha: 0.2, //水印透明度，要求设置在大于等于0.005
      watermark_width: 120, //水印宽度
      watermark_height: 60, //水印高度
      watermark_angle: 30, //水印倾斜度数
      watermark_parent_node: document.getElementById('app') //水印插件挂载的父元素element,不输入则默认挂在body上
    })
      // window.onload(watermark.load({ watermark_txt: "庄磊" }))
      ;
  })

  // watermark.remove();

  var gundong = function () {



    //滚动的监听方法
    $(document).scroll(function () {
      $('dd').addClass('active');
      //当前滚动的距离
      var current = document.documentElement.scrollTop;
      //页面的总高度
      var offsetHeight = document.documentElement.offsetHeight
      //页面的可视高度
      var clientHeight = document.documentElement.clientHeight
      //offsetHeight - clientHeight得出的就是滚动条最大滚动的长度。
      //跟当前滚动距离相比较，相等则直接高亮最后的锚点
      if (current == offsetHeight - clientHeight) {
        $('dd').removeClass('active');
        $('dd:last').addClass('active');
      } else {
        //对超过的最后一个元素锚点进行高亮
        //注意要给予一个默认的高亮节点，也就是第一个
        var divs = $('.list-wrap');
        var index = 0;
        for (let i = 0; i < divs.length; i++) {
          if (current >= $(divs[i]).offset().top) {
            index = i;
          }
        }
        $('dd').removeClass('active');
        $('dd:eq(' + index + ')').addClass('active');


      }
    })



  }

  gundong()


}