/**
 * Created by tomer.a on 4/19/2016.
 */
define(["require", "exports", "./ZipCodeValidator", "./LettersOnlyValidator"], function (require, exports, ZipCodeValidator_1, LettersOnlyValidator_1) {
    // Some samples to try
    var strings = ["Hello", "98052", "101"];
    // Validators to use
    var validators = {};
    validators["ZIP code"] = new ZipCodeValidator_1.default();
    validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
    // Show whether each string passed each validator
    strings.forEach(function (str) {
        for (var name_1 in validators) {
            console.log("\"" + str + "\" - " + (validators[name_1].isAcceptable(str) ? "matches" : "does not match") + " " + name_1);
        }
    });
});
//# sourceMappingURL=main.js.map