// ------------ 更新日志 ------------
// 2023年后有改版，   换成了 onclick="dayin()"
//

// ------------ 修改配色 ------------

var root = document.querySelector(':root');
// 修改蓝色
function blue() {
	root.style.setProperty('--color', '#1989FA');
}
// 修改绿色
function green() {
	root.style.setProperty('--color', '#5CB87A');
}
// 修改红色
function red() {
	root.style.setProperty('--color', '#F56C6C');
}
// 修改黄色
function yellow() {
	root.style.setProperty('--color', '#FFC107');
}
// ------------ 浏览器打印 ------------

function dayin() {
	window.print();
}

// ------------ 图片 ------------
function image() {
	// margin必须去掉，不然图片会截断
	var mystyle = {
		style: {
			margin: 0,
		},
	};

	// 下载png图片;
	domtoimage.toPng(document.getElementById('app'), mystyle).then(function(dataUrl) {
		var link = document.createElement('a');
		// link.download = 'my-image-name.png';
		link.download = document.title;
		link.href = dataUrl;
		link.click();
	});
}
