import { LocalityDetector } from './../detectors/LocalityDetector';
import { PostalCodeDetector } from './../detectors/PostalCodeDetector';
import { ExampleDataGenerator } from './../generator/exampleDataGenerator';
import { LicensePlatesDetector } from './../detectors/LicensePlatesDetector';
import { PhoneNumbersDetector } from './../detectors/PhoneNumbersDetector';
import { PeselsDetector } from './../detectors/PeselsDetector';
import { EmailsDetector } from './../detectors/EmailsDetector';
import { Detector } from './../detectors/Detector';
import { NamesDetector } from './../detectors/NamesDetector';
import { DiseaseDetector } from './../detectors/DiseaseDetector';
/* global document, Office, Word */
import {DetectorComposite} from "../detectors/DetectorComposite";
import { DateDetector } from '../detectors/DateDetector';

Office.onReady(info => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("anonymize").onclick = anonymize;
    document.getElementById("generate").onclick = generateExampleText;
    // document.getElementById("deanonymize").onclick = run;
  }
});

export async function anonymize() {
  return Word.run(async context => {
    const detectors = getDetectors();
    const detectorsContainer = new DetectorComposite(detectors);

    const range = context.document.body.getRange();
    context.load(range, 'text');
    await context.sync();

      const words = range.text.split(/((\.(?=\s|$)|\s)|(,))/g).filter(word => {
          if (typeof word === 'string') {
              const trimmed = word.trim()
              return trimmed != '' && trimmed != '.' && trimmed != ',';
          } else {
              return false
          }
    });
    const wordsToAnonymize = detectorsContainer.detectMatchingWords(words);

    const searchResults = [];
    wordsToAnonymize.forEach(text => {
      let searchResult = range.search(text);
      searchResults.push([searchResult, text]);
      context.load(searchResult, 'text');
    });
    await context.sync();

    searchResults.forEach(result => {
      result[0].items.forEach(element => {
          element.insertText('*'.repeat(result[1].length), Word.InsertLocation.replace);
          element.hyperlink = null; // this can be done better and not everytime
      });
  });

    await context.sync();
  })
}

export async function generateExampleText() {
  return Word.run(async context => {
    const generator = new ExampleDataGenerator();
    const text = generator.generateText();
    const range = context.document.body.getRange();
    context.load(range, 'text');
    await context.sync();
    range.clear();
    await context.sync();
    range.insertText(text, Word.InsertLocation.start);
    await context.sync();
  })
}

function getDetectors(): Detector[] {
  const result = [];

  if((<HTMLInputElement>document.getElementById("names")).checked) {
    result.push(new NamesDetector());
  }
  if((<HTMLInputElement>document.getElementById("phones")).checked) {
    result.push(new PhoneNumbersDetector());
  }
  if((<HTMLInputElement>document.getElementById("pesels")).checked) {
    result.push(new PeselsDetector());
  }
  if((<HTMLInputElement>document.getElementById("emails")).checked) {
    result.push(new EmailsDetector());
  }
  if((<HTMLInputElement>document.getElementById("dates")).checked) {
    result.push(new DateDetector());
  }
  if((<HTMLInputElement>document.getElementById("license-plates")).checked) {
    result.push(new LicensePlatesDetector());
  }
  if((<HTMLInputElement>document.getElementById("diseases")).checked) {
    result.push(new DiseaseDetector());
  }
  if((<HTMLInputElement>document.getElementById("postal-codes")).checked) {
    result.push(new PostalCodeDetector());
  }
  if((<HTMLInputElement>document.getElementById("localities")).checked) {
    result.push(new LocalityDetector());
  }
  return result;
}
