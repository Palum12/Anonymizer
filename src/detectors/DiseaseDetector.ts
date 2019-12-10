import { AnonymizerDto } from './../models/AnonymizerDto';
import { Detector } from "./Detector";
import { binarySearch } from './../utilities/BinarySearch';
import { PhraseType } from '../../src/models/PhraseType';
let diseases = require('../storages/DiseasesBase.json');

export class DiseaseDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words
            .filter(word => 
                binarySearch<string>(word, diseases, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'variant'}))
            )
            .map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.disease}))
    }
}