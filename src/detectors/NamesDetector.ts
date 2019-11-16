import {Detector} from "./Detector";
import { binarySearch } from './../utilities/BinarySearch';
let names = require('../storages/NamesBase.json');
let surnames = require('../storages/SurnamesBase.json');

export class NamesDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => 
            binarySearch(word, names, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'base'})) ||
            binarySearch(word, surnames, (a, b) => b.localeCompare(a, 'pl', {'sensitivity': 'base'}))
        )
    }
}