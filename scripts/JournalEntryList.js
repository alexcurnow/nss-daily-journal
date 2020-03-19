import { useJournalEntries, deleteJournalEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")

entryLog.addEventListener('click', event => {
  if (event.target.id.startsWith('delete-btn-')) {

    if (confirm('Are you sure you want to delete this entry? This action cannot be undone.')) {

      const [prefix, entryIdNumber] = event.target.parentNode.id.split("--")
      deleteJournalEntry(entryIdNumber)
      event.target.parentNode.style.display = 'none'
    }
    return false
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