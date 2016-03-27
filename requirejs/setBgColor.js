define(['getEle'],function  (g) {
	return {
		set:function (str,color) {
	        var obj = g.getEle(str);
	        obj.style.backgroundColor=color;
		}
	}
});