import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
/* global document*/

export class RegexAnonymizer extends Anonymizer {

    protected parseText(text: AnonymizerDto) {
        // todo
        // let result = "/";
        // const characters = text.split('');
        // // here you can use this.regexRange now
        // for (let character of characters) {
        //     if (/[A-Z]/g.test(character)) {
        //         result += "[A-Z]";
        //     } else if (/[a-z]/g.test(character)) {
        //         result += "[a-z]";
        //     } else if (/[0-9]/g.test(character)) {
        //         result += '[0-9]';
        //     } else {
        //         result += '.';
        //     }
        // }
        // result += '/g';
        // return result;
    }
}