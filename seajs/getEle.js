// define(function(require, exports) {
//     exports.$=function(str){
//         return document.getElementById(str);
//     }
// });

// ;(function(){
//     function $(str) {
//         return document.getElementById(str);
//     }
    
//     var moduleName = {
//     	$:$
//     };
//     if (typeof module !== 'undefined' && typeof exports === 'object') {
//         module.exports = moduleName;
//     } else if (typeof define === 'function' && (define.amd || define.cmd)) {
//         define(function() { return moduleName; });
//     } else {
//         this.moduleName = moduleName;
//     }
// }).call(function() {
//     return this || (typeof window !== 'undefined' ? window : global);
// });

(
    function (root, factory) {
        if (typeof define === 'function' && (define.amd || define.cmd)) {
            // AMD
            define(factory);
        } else if (typeof exports === 'object') {
            // Node, CommonJS-like
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.returnExports = factory();
        }
    }(this, function () {
        //    methods
        function $(str){
            return document.getElementById(str);
        };

        //    exposed public method
        return {
            $:$
        };
    })

);
