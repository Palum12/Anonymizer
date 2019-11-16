import { Detector } from "./Detector";
import { binarySearch } from './../utilities/BinarySearch';
let diseases = require('../storages/DiseasesBase.json');

export class DiseaseDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => 
            binarySearch<string>(word, diseases, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'variant'}))
        )
    }
}