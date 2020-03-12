import EntryListComponent from './JournalEntryList.js'
import { JournalFormComponent } from './JournalForm.js'
import { getJournalEntries, saveJournalEntry } from './JournalDataProvider.js'

JournalFormComponent()

getJournalEntries().then(EntryListComponent)



