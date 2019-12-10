import {Detector} from "./Detector";
import { binarySearch } from './../utilities/BinarySearch';
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
import { PhraseType } from "../../src/models/PhraseType";
let names = require('../storages/NamesBase.json');
let surnames = require('../storages/SurnamesBase.json');

export class NamesDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        return words.filter(word => 
            binarySearch(word, names, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'base'})) ||
            binarySearch(word, surnames, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'base'}))
        ).map(word => Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.name}))
    }
}