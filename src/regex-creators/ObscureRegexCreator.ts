import { RegexCreator } from './RegexCreator';
export class ObscureRegexCreator implements RegexCreator {
    createRegex(sourceText: string): string {
        const splitted = this.split(sourceText);
        const regexed = this.createObscureRegex(splitted, sourceText);
        return regexed.join('');
    }
    

    private split (text: string): string[] {
        if (text.length <= 2) {
          return [];
        }
        let result = [];
      
        for (let i= 0; i < text.length - 2; i++)
        {
            const current = text.charAt(i);
            const next = text.charAt(i + 1);
            result.push(current + next);
        }
      
        return result;
    }

    private shuffleArray(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    private createObscureRegex (couples: string[], originalWord: string): string[] {
        const result = [];
        
        for(let i = 0; i < couples.length; i++) {
          const tempString = '(?=.*' + couples[i] + `.{${(couples.length - i)}})`
          result.push(tempString);
        }
        this.shuffleArray(result);

        let lastChar = originalWord.charAt(originalWord.length - 1);
        const lastString = '(?=.*' + lastChar + '$)';
        result.unshift(lastString);

        let firstChar = originalWord.charAt(0);
        const firstString = '(?=^' + firstChar + '.*)';
        result.unshift(firstString);

        result.unshift(`(?=^.{${originalWord.length}}$)`)
        
        return result;
    } 
}
