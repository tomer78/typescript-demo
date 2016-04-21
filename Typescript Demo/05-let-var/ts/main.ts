//var vs let


//var- the foo value is overridden
var foo = 123;
if (true) {
    var foo = 456;
}
console.log("var :" + foo); //  expect to print 123, instead it will print 456



//let - the foo1 value is saved
let foo1 = 123;
if (true) {
    let foo1 = 456; // relevant for the is block
}
console.log("let :" + foo1); // 123






//for loop using let
var index = 0;
var array = [1, 2, 3];
    for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log("after loop: " + index); // 0





//look at generated js
var stam = '123';
if (true) {
    let stam = 123;
}

