define(["require", "exports"], function (require, exports) {
    /**
     * Created by tomer.a on 4/19/2016.
     */
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
        };
        ZipCodeValidator.numberRegexp = /^[0-9]+$/;
        return ZipCodeValidator;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ZipCodeValidator;
    var A = (function () {
        function A() {
            console.log("A ctor");
        }
        return A;
    })();
    exports.A = A;
});
//# sourceMappingURL=ZipCodeValidator.js.map