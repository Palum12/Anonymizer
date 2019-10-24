import { PhoneNumbersDetector } from './PhoneNumbersDetector';
import {Detector} from "./Detector";
import {PeselsDetector} from "./PeselsDetector";
import {EmailsDetector} from "./EmailsDetector";
import {NamesDetector} from './NamesDetector';

export class DetectorsContainer {
   private detectors: Detector[];
   
   constructor() {
       this.detectors = [
        new EmailsDetector(),
        new PeselsDetector(),
        new NamesDetector(),
        new PhoneNumbersDetector()
       ];
   }

   public FindPersonalData(words: string[]): string[] {
    const importantWords = [];   
    this.detectors.forEach(detector => {
           const detectorResult = detector.detectMatchingWords(words);
           if(detectorResult.length > 0) {
            importantWords.push(...detectorResult);
           }
       });
    return importantWords;
   }
}