import { Detector } from './Detector';
import { binarySearch } from './../utilities/BinarySearch';
let localities = require('../storages/LocalitiesBase.json');

export class LocalityDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => 
            binarySearch<string>(word, localities, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'case'}))
        )
    }
}