import EntryListComponent from './JournalEntryList.js'
// import JournalFormComponent from './JournalForm.js'
import { JournalFormComponent } from './JournalForm.js'
// import createEntry from './JournalForm.js'

JournalFormComponent()

EntryListComponent()

 const createEntry = (dateVal, conceptsVal, entryVal, moodVal) => {
    return {
      date: dateVal,
      concepts: conceptsVal,
      entry: entryVal,
      mood: moodVal
    }
  }
  
  const recordEntryButton = document.querySelector('.recordEntry')
  recordEntryButton.addEventListener('click', event => event.preventDefault())
  
  recordEntryButton.addEventListener('click', () => {
    const dateValue = document.querySelector('#journalDate').value
    const conceptsValue = document.querySelector('#concepts').value
    const entryValue = document.querySelector('#entry').value
    const moodValue = document.querySelector('#mood').value

    const newEntry = createEntry(dateValue, conceptsValue, entryValue, moodValue)
    console.log(newEntry)

    return newEntry

  })


