(
    function (root, factory) {
        if (typeof define === 'function' && define.amd) {
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
        function myFunc(){
            console.log("hello world!");
        };

        //    exposed public method
        return myFunc;
    })

);