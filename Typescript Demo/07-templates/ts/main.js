/**
 * Created by tomer.a on 4/17/2016.
 */
///<reference path="../../definitions/jquery.d.ts"/>
$(document).ready(function () {
    //Multiline Strings
    var str1 = "Ehad Eloheno Eloheno Eloheno  Eloheno Eloheno Eloheno Eloheno Eloheno\n    shebashamim ubaaarets!";
    console.log("str1 = " + str1);
    //String Interpolation
    var firstName = "Itzik";
    var lastName = "Kevy";
    var html = "<h1 style=\"color: navy;\">Hello " + firstName + " - " + lastName + "!</h1>";
    $('body').append(html);
    var a = 5;
    var b = 10;
    console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
    //Tagged template literals
    var a = 5;
    var b = 10;
    function tag(strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        console.log(strings[0]); // "Hello "
        console.log(strings[1]); // " world "
        console.log(values[0]); // 15
        console.log(values[1]); // 50
        return "Bazinga!";
    }
    // "Bazinga!
    var html = "<div>" + (_a = ["Hello ", " world ", ""], _a.raw = ["Hello ", " world ", ""], tag(_a, a + b, a * b)) + "! </div>";
    $('body').append(html);
    var _a;
});
//# sourceMappingURL=main.js.map