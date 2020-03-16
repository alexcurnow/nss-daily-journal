import { useJournalEntries, deleteJournalEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")

entryLog.addEventListener('click', event => {
  if (event.target.id.startsWith('delete-btn-')) {
    
    const [prefix, entryIdNumber] = event.target.parentNode.id.split("--")
    deleteJournalEntry(entryIdNumber)
    event.target.parentNode.style.display = 'none'
  }
})

const EntryListComponent = () => {
 const entries = useJournalEntries()
 entries.reverse()
  for (const journalObject of entries) {
    entryLog.innerHTML += JournalEntryComponent(journalObject)
  }
}


export default EntryListComponent