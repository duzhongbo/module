define(['getEle'],function  (g) {
	return {
		set:function (str,color) {
	        var obj = g.$(str);
	        obj.style.backgroundColor=color;
		}
	}
});