let entries = []

export const getJournalEntries = () => {
  return fetch('http://localhost:3000/entries')
  .then(res => res.json())
  .then(parsedEntries => {
    entries = parsedEntries.slice()
  })
}

export const useJournalEntries = () => entries

export const saveJournalEntry = entryObject => {
  return fetch('http://localhost:3000/entries', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entryObject)
  })
  .then(getJournalEntries)
}