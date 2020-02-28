const JournalEntryComponent = entry => {
  return `
    <section id="entry--${entry.id}" class="journalEntry">
        <p>${entry.entry}</p>
        <br>
        <p>${entry.date}</p>
    </section>
`
}

export default JournalEntryComponent
