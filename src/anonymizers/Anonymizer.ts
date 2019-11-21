import { AnonymizerDto } from './../dtos/AnonymizerDto';
export interface Anonymizer {
    AnonymizeTexts(texts: string[]): AnonymizerDto[];
}