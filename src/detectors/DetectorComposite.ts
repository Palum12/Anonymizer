import {Detector} from "./Detector";

export class DetectorComposite implements Detector {
    private detectors: Detector[];
   
   constructor(detectors: Detector[]) {
        this.detectors = detectors;
   }

   detectMatchingWords(words: string[]): string[] {
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