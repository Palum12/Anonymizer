import { AnonymizerDto } from './../dtos/AnonymizerDto';
export abstract class Anonymizer {
    public anonymizeTexts(texts: string[]): AnonymizerDto[] {
        const result = [];
        texts.forEach(text => {
            const anonymizedText = this.parseText(text)
            result.push(Object.assign(new AnonymizerDto, {
                originalText: text,
                anonymizedText: anonymizedText
            }));
        });
        return result;
    }

    protected abstract parseText(text: string): string;
}