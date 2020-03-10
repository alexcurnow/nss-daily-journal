import EntryListComponent from './JournalEntryList.js'
import { JournalFormComponent } from './JournalForm.js'
import { getJournalEntries } from './JournalDataProvider.js'

JournalFormComponent()

EntryListComponent()

getJournalEntries()

const dateVal = document.querySelector('#journalDate').value
const conceptsVal = document.querySelector('#concepts').value
const entryVal = document.querySelector('#entry').value
const moodVal = document.querySelector('#mood').value

document.querySelector('.recordEntry').addEventListener('click', () => {

})