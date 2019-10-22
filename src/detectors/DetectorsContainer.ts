import {Detector} from "./Detector";
import {PeselsDetector} from "./PeselsDetector";
import {EmailsDetector} from "./EmailsDetector";

export class DetectorsContainer {
   private detectors: Detector[];
   
   constructor() {
       this.detectors = [];
       this.detectors.push(new EmailsDetector());
       this.detectors.push(new PeselsDetector());
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