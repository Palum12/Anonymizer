import { Detector } from "./Detector";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
import { PhraseType } from "../../src/models/PhraseType";

export class EmailsDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words.filter(word => this.validateEmail(word))
        .map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.email})); 
    }

    private validateEmail(word: string): boolean {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(word).toLowerCase());
    }
}