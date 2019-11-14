import {Detector} from "./Detector";
import {diseases} from "../storages/DiseasesBase";

export class DiseaseDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => 
            this.stringOptimizedBinarySearch(word, diseases)); 
    }

    private stringOptimizedBinarySearch(element: string, array: string[]): boolean {
        let end = array.length - 1; 
        var index = 0
          
        while (index<=end){ 
            let compareResult = array[index].localeCompare(element);
            if (compareResult === 0) {
                return true; 
            }
            index++;
        } 
        return false; 
    }
}