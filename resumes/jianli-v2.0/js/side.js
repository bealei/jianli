var pdf = document.querySelector('.pdf');

pdf.onclick = function() {
	console.log('1111')
	window.print();
}


var root = document.querySelector(':root');
var blue = document.querySelector('.blue');
var green = document.querySelector('.green');
var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');

// 修改蓝色
blue.onclick = function() {
	root.style.setProperty('--color', '#1989FA');
	root.style.setProperty('--color-1', '#D1E7FE');
	root.style.setProperty('--color-2', '#8CC4FC');
}
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