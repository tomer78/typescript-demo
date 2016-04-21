/**
 * Created by tomer.a on 4/19/2016.
 */
//Use of Arows Function
var Test = (function () {
    function Test() {
        this.example = 'Test';
    }
    Test.prototype.withFatArrow = function () {
        var _this = this;
        this.timer = setTimeout(function () { return alert(_this.example); }, 500);
    };
    Test.prototype.withFatArrow2 = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            alert(_this.example);
        }, 500);
    };
    Test.prototype.withoutFatArrow = function () {
        this.timer = setTimeout(function () {
            alert(this.example);
        }, 500);
    };
    return Test;
})();
var test = new Test();
//test.withoutFatArrow(); // won't work, does not have ref for class
test.withFatArrow(); // the right way
/*
 Use of Arrow function in Angular promise
 var result:ng.IPromise< any > = this.GetCategory(categoryId).then(
 (category:CategoryVM) => {
 return this.getDynamicCategoryTitle(category, categoryId);
 });
 */
var calculateInterest = function (amount, interestRate, duration) {
    return amount * interestRate * duration / 12;
};
var calculateInterest2 = function (amount, interestRate, duration) {
    return amount * interestRate * duration / 12;
};
var calculateInterest3 = function (amount, interestRate, duration) { return amount * interestRate * duration / 12; };
var inc = function (x) { return x + 1; };
var res1 = inc(7);
console.log("res1 = " + res1);
var calculateInterest3 = function (amount, interestRate, duration) { return amount * interestRate * duration / 12; };
var result2 = calculateInterest3(1000, 0.1, 6);
console.log("result2 = " + result2);
//# sourceMappingURL=main.js.map