(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["uppercase-umd"] = factory());
})(this, (function () { 'use strict';

    class UpperCase {
        constructor() {}

        static transform(str) {
            return str.toUpperCase()
        }
    }

    return UpperCase;

}));
