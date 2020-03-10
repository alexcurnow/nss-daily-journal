import EntryListComponent from './JournalEntryList.js'
import { JournalFormComponent } from './JournalForm.js'
import { getJournalEntries, saveJournalEntry } from './JournalDataProvider.js'
import { createEntry } from './JournalForm.js'

JournalFormComponent()

EntryListComponent()

getJournalEntries()

const recordEntryBtn = document.querySelector('.recordEntry')

recordEntryBtn.addEventListener('click', event => {
  event.preventDefault()

  const dateVal = document.querySelector('#journalDate').value
  const conceptsVal = document.querySelector('#concepts').value
  const entryVal = document.querySelector('#entry').value
  const moodVal = document.querySelector('#mood').value

  const newEntryObject = createEntry(dateVal, conceptsVal, entryVal, moodVal)
  saveJournalEntry(newEntryObject)
})

