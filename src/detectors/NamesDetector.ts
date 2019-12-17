import {Detector} from "./Detector";
import { binarySearch } from './../utilities/BinarySearch';
import { AnonymizerDto } from "../../src/models/AnonymizerDto";
import { PhraseType } from "../../src/models/PhraseType";
let names = require('../storages/NamesBase.json');
let surnames = require('../storages/SurnamesBase.json');

export class NamesDetector implements Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[] {
        const result = [];

        words.forEach(word => {
            if (binarySearch(word, names, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'base'}))) {
                result.push(Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.name}));
            } else if (binarySearch(word, surnames, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'base'}))) {
                result.push(Object.assign(new AnonymizerDto(), {originalText: word, phraseType: PhraseType.surname}));
            }
        })

        return result;
    }
}