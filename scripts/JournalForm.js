import { saveJournalEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector('.container')
const contentElement = document.querySelector('.journalForm')


contentElement.addEventListener('click', event => {
  if (event.target.classList.contains('recordEntry')) {

    const dateVal = document.querySelector('#journalDate').value
    const conceptsVal = document.querySelector('#concepts').value
    const entryVal = document.querySelector('#entry').value
    const moodVal = document.querySelector('#mood').value
  
    const newEntryObject = createEntry(dateVal, conceptsVal, entryVal, moodVal)
    saveJournalEntry(newEntryObject)

  }  
})


export const JournalFormComponent = () => {

  contentElement.innerHTML = `
  <form class="journal" action="">
    <fieldset class="journal__fieldset">
      <label for="journalDate">Date of Entry</label>
      <input type="date" name="journalDate" id="journalDate">
      <label for="conceptsCovered">Concepts Covered</label>
      <textarea name="concepts" id="concepts" cols="30" rows="10"></textarea>
      <label for="journalEntry">Journal Entry</label>
      <textarea name="entry" id="entry" cols="30" rows="10"></textarea>
      <label for="mood">Mood for the Day</label> 
      <select name="mood" id="mood">
        <option value="Happy">Happy</option> 
        <option value="Sad">Sad</option> 
        <option value="Elated">Elated</option> 
        <option value="Mad">Mad</option> 
        <option value="Meh...">Meh...</option> 
      </select>
      <button class="recordEntry">Record Journal Entry</button>
    </fieldset>
  </form>
  `
  // return contentElement
}


export const createEntry = (date, concepts, entry, mood) => {
  return {
    date: date,
    concept: concepts,
    entry: entry,
    mood: mood
  }
}