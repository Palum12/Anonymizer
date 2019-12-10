import { Anonymizer } from "./Anonymizer";
import { AnonymizerDto } from "../../src/models/AnonymizerDto";

export class AsteriskAnonymizer extends Anonymizer {
    protected parseText(text: AnonymizerDto) {
        text.anonymizedText = '*'.repeat(text.originalText.length);
    }
}