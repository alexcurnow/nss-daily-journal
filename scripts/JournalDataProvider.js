const journal = [
  {
    date: '07/24/2025',
    concept: 'HTML & CSS',
    entry:
      'We talked about HTML components and how to make grid layouts with Flexbox in CSS.',
    mood: 'Ok'
  }
]

const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}

const saveJournalEntry = journalEntries => {
  fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  })
  .then(journalEntries)
}

export { saveJournalEntry, useJournalEntries }
