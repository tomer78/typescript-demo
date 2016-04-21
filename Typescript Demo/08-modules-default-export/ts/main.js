/**
 * Created by tomer.a on 4/17/2016.
 */
define(["require", "exports", "./ZipCodeValidator"], function (require, exports, ZipCodeValidator_1) {
    var validator = new ZipCodeValidator_1.default();
    var isAcceptable = validator.isAcceptable("12345");
    console.log("isAcceptable = " + isAcceptable);
});
//# sourceMappingURL=main.js.map