import { Detector } from './Detector';
import { binarySearch } from './../utilities/BinarySearch';
import { PhraseType } from '../../src/models/PhraseType';
import { AnonymizerDto } from '../../src/models/AnonymizerDto';
let localities = require('../storages/LocalitiesBase.json');

export class LocalityDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words.filter(word => 
            binarySearch<string>(word, localities, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'case'}))
        ).map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.locality}))
    }
}