define(function(require, exports) {
    var get = require("./getEle");
 
    exports.set=function(str,color){
        var obj = get.$(str);
        obj.style.backgroundColor=color;
    }
});