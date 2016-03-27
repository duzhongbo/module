// define(function  () {
// 	return {
// 		$:function (str) {
// 			return document.getElementById(str);
// 		}
// 	}
// });

;(function(){
    function $(str) {
        return document.getElementById(str);
    }
    
    var moduleName = {
    	$:$
    };
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = moduleName;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function() { return moduleName; });
    } else {
        this.moduleName = moduleName;
    }
}).call(function() {
    return this || (typeof window !== 'undefined' ? window : global);
});