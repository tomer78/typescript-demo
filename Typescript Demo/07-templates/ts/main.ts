/**
 * Created by tomer.a on 4/17/2016.
 */

///<reference path="../../definitions/jquery.d.ts"/>



$(document).ready(function(){

    //Multiline Strings
    var str1:string = `Ehad Eloheno Eloheno Eloheno  Eloheno Eloheno Eloheno Eloheno Eloheno
    shebashamim ubaaarets!`;
    console.log("str1 = " + str1);


    //String Interpolation
    var firstName:string = "Itzik";
    var lastName:string = "Kevy";
    var html:string = `<h1 style="color: navy;">Hello ${firstName} - ${lastName}!</h1>`;
    $('body').append(html);


    var a = 5;
    var b = 10;
    console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");




    //Tagged template literals
    var a = 5;
    var b = 10;

    function tag(strings, ...values) {
        console.log(strings[0]); // "Hello "
        console.log(strings[1]); // " world "
        console.log(values[0]);  // 15
        console.log(values[1]);  // 50

        return "Bazinga!";
    }


    // "Bazinga!
    var html:string = `<div>${tag`Hello ${ a + b } world ${ a * b }`}! </div>`;
    $('body').append(html);






});