import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../dtos/AnonymizerDTO";

export class RegexAnonymizer implements Anonymizer {
    anonymizeTexts(texts: string[]): AnonymizerDto[] {
        const result = [];
        texts.forEach(text => {
            const anonymizedText = this.toBigRegex(text)
            result.push(Object.assign(new AnonymizerDto, {
                originalText: text,
                anonymizedText: anonymizedText
            }));
        });
        return result;
    }

    toBigRegex(text: string) {
        var result = "/"
        let characters = text.split('')
    
        for (let character of characters) {
            if (/[A-Z]/g.test(character)) {
                result += "[A-Z]"
            } else if (/[a-z]/g.test(character)) {
                result += "[a-z]"
            } else if (/[0-9]/g.test(character)) {
                result += '[0-9]'
            } else {
                result += '.'
            }
        }
    
        result += '/g'
    
        return result
    }
}