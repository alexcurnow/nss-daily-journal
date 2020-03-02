import { saveJournalEntry } from './JournalDataProvider.js'

const JournalFormComponent = () => {
  const contentElement = document.querySelector('.journalForm')

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
  return contentElement
}

saveJournalEntry()

export { JournalFormComponent }
// export default JournalFormComponent