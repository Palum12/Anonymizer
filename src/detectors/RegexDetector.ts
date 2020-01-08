import { Detector } from "./Detector";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
import { PhraseType } from "../../src/models/PhraseType";

export class RegexDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words.filter(word => this.checkIfRegex(word))
        .map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.regex})); 
    }

    private checkIfRegex(word: string): boolean {
        return true;
    }
}