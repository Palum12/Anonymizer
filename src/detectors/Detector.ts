export interface Detector {
    detectMatchingWords(words: string[]): string[];
}