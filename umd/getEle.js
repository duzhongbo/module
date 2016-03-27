// define(function  () {
// 	return {
// 		g:function (str) {
// 			return document.getElementById(str);
// 		}
// 	}
// });

(
    function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(factory);
        } else if (typeof exports === 'object') {
            // Node, CommonJS-like
            module.exports = factory(require('jquery'));
        } else {
            // Browser globals (root is window)
            root.returnExports = factory(root.jQuery);
        }
    }(this, function ($) {
        //    methods
        function g(str){
        	return document.getElementById(str);
        };

        //    exposed public method
        return g;
    })

);
