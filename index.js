(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const promisify = fn => {
        return function () {
            const ctx = this;
            return new Promise((res, rej) => {
                fn.call(ctx, ...arguments, function () {
                    const args = Array.from(arguments);
                    const err = args.shift();
                    if (err) {
                        rej(err);
                    }
                    else {
                        res(args.length > 1 ? args : args[0]);
                    }
                });
            });
        };
    };
    exports.default = promisify;
});
