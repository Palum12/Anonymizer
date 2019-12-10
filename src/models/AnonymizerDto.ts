import { PhraseType } from './PhraseType';
export class AnonymizerDto {
    public originalText: string ;
    public anonymizedText: string;
    public phraseType?: PhraseType;
}