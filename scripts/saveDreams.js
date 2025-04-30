/* Loads user input (dream) into variable. ↓ */
const dreamInput = document.getElementById('dreamInput');
/* Loads modal (popup) into variable. ↓ */
const modal = document.getElementById('titleModal');
/* Loads user input (title) into variable. ↓ */
const titleField = document.getElementById('titleField');
/* Loads title save button into variable. ↓ */
const titleSave = document.getElementById('titleSave');
/* Loads title cancel button into variable. ↓ */
const titleCancel = document.getElementById('titleCancel');

/**
 * Saves user input for dream.
 * Saves it internally to the modal (using dataset).
 * Updates to show modal.
 * @param 'Keydown' -> e.
 */
dreamInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault(); // Prevents default newline from happening on enter.
    const body = dreamInput.value.trim(); // Save dream into variable.
    /* ↓ If dream input is empty, return. Don't except empty inputs. */
    if (!body) return;
    
    /* Internally save. ↓ */
    modal.dataset.body = body;
    titleField.value   = ''; // Reset title input to be empty for new dream.
    modal.style.display = 'flex'; // Make modal viewable.
    titleField.focus(); // Automatically place cursor in title input.
  }
});

/**
 * Save dream and title when clicking the save button.
 * @param 'click' -> with pointer.
 */
titleSave.addEventListener('click', () => {
  const title = titleField.value.trim(); // Save title into variable.

  /** ↓ If title is empty, place cursor in title input and return. 
   *  This will keep prompting for title until user inputs one.
  */
  if (!title) { titleField.focus(); return; }

  saveDream(modal.dataset.body, title); // Save dream along with title.
  dreamInput.value = ''; // Reset dream input for new dream to be entered.
  closeModal(); // Close title modal (popup).
});

/* ↓ Closes modal and user can continue typing dream. */
titleCancel.addEventListener('click', closeModal);


/**
 * Closes the modal by setting display back to none.
 * Then deletes current dream from modal.
 */
function closeModal() {
  modal.style.display = 'none';
  delete modal.dataset.body; 
}

/**
 * Loads current list of dreams from local storage.
 * Pushes the new dream to the dreams list.
 * Saves new list to local storage.
 * @param {String} text - Users input for a dream.
 * @param {String} title - Users input for a dreams title.
 */
function saveDream(text, title) {
  const dreams = JSON.parse(localStorage.getItem('dreams') || '[]');
  /** ↓ A dream is a object.
   * id: current time stamp in milliseconds (unique).
   * title: title for dream.
   * text: dream itself.
   */
  dreams.push({ id: Date.now(), title, text });
  localStorage.setItem('dreams', JSON.stringify(dreams));
}