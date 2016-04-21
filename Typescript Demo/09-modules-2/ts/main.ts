/**
 * Created by tomer.a on 4/19/2016.
 */

import { StringValidator,StringValidator2} from "./Validation";
import  ZipCodeValidator  from "./ZipCodeValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators:{ [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach(str => {
    for (let name in validators) {
        console.log(`"${ str }" - ${ validators[name].isAcceptable(str) ? "matches" : "does not match" } ${ name }`);
    }
})