// ------------ 2022更新日志 ------------
//

// ------------ 修改配色 ------------
var root = document.querySelector(':root');
var blue = document.querySelector('.blue');
var green = document.querySelector('.green');
var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');

// 修改蓝色
blue.onclick = function blue() {
	root.style.setProperty('--color', '#1989FA');
	root.style.setProperty('--color-1', '#D1E7FE');
	root.style.setProperty('--color-2', '#8CC4FC');
};
// 修改绿色
green.addEventListener('click', function() {
	root.setAttribute('style', '--color: #5CB87A;--color-1: #DEF0E4;--color-2: #ADDBBC');
});
// 修改红色
red.addEventListener('click', function() {
	root.setAttribute('style', '--color: #F56C6C;--color-1: #FDE1E1;--color-2: #FAB5B5');
});
// 修改黄色
yellow.addEventListener('click', function() {
	root.setAttribute('style', '--color: #FFC107;--color-1: #FFF3CD;--color-2: #FFDA6A');
});

// ------------ 浏览器打印 ------------
var dayin = document.querySelector('.dayin');
dayin.onclick = function dayin() {
	window.print();
};

// ------------ html2canvas ------------
var image1 = document.querySelector('.image1');

image1.onclick = function() {
	var mydom = document.getElementById('app');
	var filename = document.title;

	html2canvas(mydom, {
		dpi: 172,
		onrendered: function(canvas) {
			var context = canvas.getContext('2d');
			context.mozImageSmoothingEnabled = false;
			context.webkitImageSmoothingEnabled = false;
			context.msImageSmoothingEnabled = false;
			context.imageSmoothingEnabled = false;
			// let a = document.createElement("a");
			//把截取到的图片替换到a标签的路径下载
			// a.attr('href',canvas.toDataURL());
			//下载下来的图片名字
			// a.attr('download','share.png') ;
			var url = canvas.toDataURL('image/png');
			let a = document.createElement('a');
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		},
		//可以带上宽高截取你所需要的部分内容
		//     ,
		//     width: 300,
		//     height: 300
	});
};

// ------------ pdf1 ------------
var pdf1 = document.querySelector('.pdf1');

pdf1.onclick = function pdf1() {
	var mydom = document.getElementById('app');
	var filename = document.title;

	html2canvas(mydom, {
		dpi: 172, //导出pdf清晰度
		onrendered: function(canvas) {
			let contentWidth = canvas.width;
			let contentHeight = canvas.height;

			//一页pdf显示html页面生成的canvas高度;
			let pageHeight = (contentWidth / 592.28) * 841.89;
			//未生成pdf的html页面高度
			let leftHeight = contentHeight;
			//pdf页面偏移
			let position = 0;
			//html页面生成的canvas在pdf中图片的宽高（a4纸的尺寸[595.28,841.89]）
			let imgWidth = 595.28;
			let imgHeight = (592.28 / contentWidth) * contentHeight;

			let pageData = canvas.toDataURL('image/jpeg', 1.0);
			let pdf = new jsPDF('', 'pt', 'a4');

			//有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
			//当内容未超过pdf一页显示的范围，无需分页
			if (leftHeight < pageHeight) {
				pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
			} else {
				while (leftHeight > 0) {
					pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
					leftHeight -= pageHeight;
					position -= 841.89;
					//避免添加空白页
					if (leftHeight > 0) {
						pdf.addPage();
					}
				}
			}
			pdf.save(filename);
		},
		//背景设为白色（默认为黑色）
		background: '#fff',
	});
};

// ------------ image2 ------------
var image2 = document.querySelector('.image2');

image2.onclick = function image2() {
	var mydom = document.getElementById('app');
	var filename = document.title;
	// margin必须去掉，不然图片会截断
	var mystyle = {
		// 其他样式
		// width: 794,
		// height: 1122,
		style: {
			margin: 0,
		},
	};

	// 下载png图片;
	domtoimage.toPng(mydom, mystyle).then(function(dataUrl) {
		var link = document.createElement('a');
		link.download = filename;
		link.href = dataUrl;
		link.click();
	});
};

// ------------ pdf2 ------------
var pdf2 = document.querySelector('.pdf2');

pdf2.onclick = function pdf2() {
	var mydom = document.getElementById('app');
	var filename = document.title;
	// margin必须去掉，不然图片会截断
	var mystyle = {

		// 其他样式
		style: {
			margin: 0,
		},
	};
	mydom.style.backgroundColor = '#fff'; //背景设为白色（默认为透明）

	domtoimage.toPng(mydom, mystyle).then(function(pageData) {
		let contentWidth = mydom.clientWidth;
		let contentHeight = mydom.clientHeight;

		//一页pdf显示html页面生成的canvas高度;
		let pageHeight = (contentWidth / 592.28) * 841.89;
		//未生成pdf的html页面高度
		let leftHeight = contentHeight;
		//页面偏移
		let position = 0;
		//a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
		let imgWidth = 595.28;
		let imgHeight = (592.28 / contentWidth) * contentHeight;
		let pdf = new jsPDF('', 'pt', 'a4');

		//有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
		//当内容未超过pdf一页显示的范围，无需分页
		if (leftHeight < pageHeight) {
			pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
		} else {
			while (leftHeight > 0) {
				pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
				leftHeight -= pageHeight;
				position -= 841.89;
				//避免添加空白页
				if (leftHeight > 0) {
					pdf.addPage();
				}
			}
		}

		pdf.save(filename);
	});
};
