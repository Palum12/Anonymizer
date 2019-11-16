import {Detector} from "./Detector";
let names = require('../storages/NamesBase.json');
let surnames = require('../storages/SurnamesBase.json');

export class NamesDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => 
            this.stringOptimizedBinarySearch(word, names) || this.stringOptimizedBinarySearch(word, surnames)); 
    }

    private stringOptimizedBinarySearch(element: string, array: string[]): boolean {
        let start = 0;
        let end = array.length-1; 
          
        while (start<=end){ 
            let mid = Math.floor((start + end)/2); 
            let compareResult = array[mid].localeCompare(element, 'pl', {'sensitivity': 'base'});
            if (compareResult === 0) {
                return true; 
            }
            else if (compareResult < 0) {
                start = mid + 1; 
            }
            else {
                end = mid - 1; 
            }
        } 
        return false; 
    }
}