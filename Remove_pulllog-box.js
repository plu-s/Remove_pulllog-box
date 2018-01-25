
var box = document.getElementsByClassName("pulllog-box");

if (box && box.length == 1)
{
	// 应该只有一个 div 使用了 pulllog-box 类选择器
	box[0].parentNode.removeChild(box[0]);
}