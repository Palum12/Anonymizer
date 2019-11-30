import { Anonymizer } from "./Anonymizer";

export class AsteriskAnonymizer extends Anonymizer {
    protected parseText(text: string): string {
        return '*'.repeat(text.length);
    }
}