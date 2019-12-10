import { AnonymizerDto } from '../../src/models/AnonymizerDto';
export interface Detector {
    detectMatchingWords(words: string[]): AnonymizerDto[];
}