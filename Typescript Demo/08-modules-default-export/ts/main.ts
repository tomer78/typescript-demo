/**
 * Created by tomer.a on 4/17/2016.
 */






import ZipCodeValidator from "./ZipCodeValidator";
import A from "./ZipCodeValidator";


var validator:ZipCodeValidator  = new ZipCodeValidator();
var isAcceptable:boolean =  validator.isAcceptable("12345");
console.log("isAcceptable = " + isAcceptable);





