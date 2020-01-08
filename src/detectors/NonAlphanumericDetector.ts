import { Detector } from "./Detector";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
import { PhraseType } from "../../src/models/PhraseType";

export class NonAlphanumericDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words.filter(word => this.checkIfNonAlphanumeric(word))
        .map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.nonAlphanumeric})); 
    }

    private checkIfNonAlphanumeric(word: string): boolean {
        return '*/.,;:\''.split('').some(character => this.containsTwoDots(word, character));
    }

    private containsTwoDots(word: string, character: string): boolean { 
        return word.indexOf(character) != word.lastIndexOf(character); 
    }
}