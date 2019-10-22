import {Detector} from "./Detector";

export class EmailsDetector implements Detector {
    detectMatchingWords(words: string[]): string[] {
        return words.filter(word => this.validateEmail(word)); 
    }

    private validateEmail(word: string): boolean {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(word).toLowerCase());
    }
}