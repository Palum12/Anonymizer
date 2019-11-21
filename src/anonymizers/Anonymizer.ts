import { AnonymizerDto } from './../dtos/AnonymizerDto';
export interface Anonymizer {
    anonymizeTexts(texts: string[]): AnonymizerDto[];
}