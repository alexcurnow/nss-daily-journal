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

export default useJournalEntries
