import useJournalEntries from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"


const entryLog = document.querySelector("#entryLog")

const EntryListComponent = () => {
  const entries = useJournalEntries()

  for (entry of entries) {
    entryLog.innerHTML += JournalEntryComponent(entry)
  }
}

export default EntryListComponent