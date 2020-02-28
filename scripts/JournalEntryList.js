import useJournalEntries from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"


const entryLog = document.querySelector("#entryLog")
const EntryListComponent = () => {
  const entries = useJournalEntries()

  for (const journalObject of entries) {
    entryLog.innerHTML += JournalEntryComponent(journalObject)
  }
}

export default EntryListComponent