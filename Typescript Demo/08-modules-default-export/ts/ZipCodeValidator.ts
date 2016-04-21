/**
 * Created by tomer.a on 4/19/2016.
 */
export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}

export class A{
    constructor(){
        console.log("A ctor");
    }

}