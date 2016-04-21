/**
 * Created by tomer.a on 4/17/2016.
 */
///<reference path="../../definitions/jquery.d.ts"/>
//import $ = require('../../libs/jquery.js');
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
})();
function greeter(person) {
    return "hello " + person.name;
}
var person = new Person("willy");
$(document).ready(function () {
    var message = greeter(person);
    var status = $("#status")[0];
    $("#status")[0].innerHTML = message;
    $('body').append("<p>Added By Jquery</p>");
});
//# sourceMappingURL=main.js.map