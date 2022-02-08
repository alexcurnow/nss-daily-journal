const JournalEntryComponent = entry => {
  return `
    <section id="entry--${entry.id}" class="journalEntry">
      <p>${entry.date}</p>
      <br>
      <p>I was in a ${entry.mood} mood today</p>
      <br>
      <p>${entry.entry}</p>
      <button id="delete-btn-${entry.id}class="deleteEntry">Delete Entry</button>
    </section>
`
}



export default JournalEntryComponent
