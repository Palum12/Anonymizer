import { AnonymizerDto } from '../models/AnonymizerDto';
export abstract class Anonymizer {
    public anonymizeTexts(texts: AnonymizerDto[]) {
        texts.forEach(text => {
            this.parseText(text)
        });
    }

    protected abstract parseText(text: AnonymizerDto);
}