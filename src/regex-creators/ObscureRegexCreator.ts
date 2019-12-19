import { RegexCreator } from './RegexCreator';
export class ObscureRegexCreator implements RegexCreator {
    numOfOptions:number = 10
    usedOptions:number = 0
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

        for (let i = 0; i < couples.length; i++) {
            if (this.usedOptions < this.numOfOptions) {
                const shiftCalc = Math.ceil(this.numOfOptions / couples.length)
                const tempString = '(?=.*' + couples[i] + '-' + this.stringShifter(couples[i], shiftCalc) + `.{${(couples.length - i)}})`
                this.usedOptions += shiftCalc
                result.push(tempString);
                console.log("adding - in" + tempString + " by " + shiftCalc)
            } else {
                const tempString = '(?=.*' + couples[i] + `.{${(couples.length - i)}})`
                result.push(tempString);
            }
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

    private stringShifter(str: string, num: number) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var newStr = "";
    
        for (var i = 0; i < str.length; i++) {
            var char = str[i],
                isUpper = char === char.toUpperCase() ? true : false;
    
            char = char.toLowerCase();
    
            if (alphabet.indexOf(char) > -1) {
                var newIndex = alphabet.indexOf(char) + num;
                if(newIndex < alphabet.length) {
                  isUpper ? newStr += alphabet[newIndex].toUpperCase() : newStr += alphabet[newIndex];
                } else {
                  var shiftedIndex = -(alphabet.length - newIndex);
                    isUpper ? newStr += alphabet[shiftedIndex].toUpperCase() : newStr += alphabet[shiftedIndex];
                }
            } else {
               newStr += char;
            }
        }
        return newStr;
    
    }
}
