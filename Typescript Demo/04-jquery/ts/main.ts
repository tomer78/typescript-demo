/**
 * Created by tomer.a on 4/17/2016.
 */

///<reference path="../../definitions/jquery.d.ts"/>



//import $ = require('../../libs/jquery.js');
class Person {

    constructor(name:string)
    {
        this.name=name;
    }
    name: string;
}

function greeter (person:Person){
    return "hello "+person.name;
}

var person=new Person("willy");


$(document).ready(function(){
    var message = greeter(person);

    var status:HTMLElement= $("#status")[0];
    $("#status")[0].innerHTML=message;

    $('body').append("<p>Added By Jquery</p>");
});