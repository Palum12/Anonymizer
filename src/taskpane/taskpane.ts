/* global document, Office, Word */
import {DetectorsContainer} from "../detectors/DetectorsContainer";

Office.onReady(info => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("anonymize").onclick = anonymize;
    // document.getElementById("deanonymize").onclick = run;
  }
});

export async function anonymize() {
  return Word.run(async context => {
    const detectorsContainer = new DetectorsContainer();

    const range = context.document.body.getRange();
    context.load(range, 'text');
    await context.sync();

    const words = range.text.split(/([\s,.])/).filter(e => e.trim());
    const wordsToAnonymize = detectorsContainer.FindPersonalData(words);

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
      });
  });

    await context.sync();
  })
}
