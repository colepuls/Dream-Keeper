const dreamInput  = document.getElementById('dreamInput'); // user input for dream
const modal = document.getElementById('titleModal'); // title popup
const titleField = document.getElementById('titleField'); // user input for title
const titleSave = document.getElementById('titleSave'); // save dream button
const titleCancel = document.getElementById('titleCancel'); // cancel button (return back to dream input)

dreamInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const body = dreamInput.value.trim(); // stores the users input for dream
    if (!body) return; // exit if input is empty

    modal.dataset.body = body; // store input inside the modals dataset to easily get later
    titleField.value   = ''; // clear from previous use
    modal.style.display = 'flex'; // change the modals display from none to flex to popup
    titleField.focus(); // Place cursor in title field
  }
});

titleSave.addEventListener('click', () => {
  const title = titleField.value.trim();
  if (!title) { titleField.focus(); return; } // if title is empty focus and exit (forces input)

  saveDream(modal.dataset.body, title);
  dreamInput.value = '';
  closeModal(); // close popup
});

titleCancel.addEventListener('click', closeModal); // close popup if cancel clicked

function closeModal() {
  modal.style.display = 'none'; // closes popup
  delete modal.dataset.body; // delete dream from internal dataset not from textbox
}

export function saveDream(text, title) {
  const dreams = JSON.parse(localStorage.getItem('dreams') || '[]');
  dreams.push({ id: Date.now(), title, text });
  localStorage.setItem('dreams', JSON.stringify(dreams));
}