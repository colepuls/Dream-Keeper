/**
 * Waits for page to load.
 * Loads dreams from local storage.
 * Adds each dream to page.
 */
window.addEventListener('DOMContentLoaded', () => {
  const savedDreams = JSON.parse(localStorage.getItem('dreams')) || [];
  savedDreams.forEach(addDreamToPage); // Automatically passes each dream to function.
});

/**
 * Adds a dream to the home page.
 * Creates a card for a dream including:
 * Title, Menu (View, Edit, Delete).
 * @param {Object} dream - Users dream containing {id, title, text}.
 */
function addDreamToPage(dream) {
  /* ↓ Creates a div to store dream contents (Card). */
  const card = document.createElement('div');
  card.className = 'card'; // Give div a classname.
  card.dataset.id = dream.id; // Sets internal id for current card.

  /* ↓ Creates paragraph to store dream title in card. */
  const p = document.createElement('p');
  p.textContent = dream.title; // Sets the cards content to the current dreams title.

  /* ↓ Creates a new button (menu) for the card. */
  const menuBtn = document.createElement('button');
  menuBtn.className = 'menu-button'
  menuBtn.textContent = '⋮';

  /* ↓ Creates a container for the menu. */
  const menu = document.createElement('div');
  menu.className = 'menu';

  /* ↓ Creates buttons for menu. */
  const viewBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  viewBtn.innerHTML = `<img class="view-icon" src="../images/view.png">`;
  editBtn.innerHTML = `<img class="edit-icon" src="../images/edit.png">`;
  deleteBtn.innerHTML = `<img class="trash-icon" src="../images/trash.png">`;

  viewBtn.onclick = () => alert(dream.text); // Display dream content.

  editBtn.onclick = () => {
    const newTitle = prompt('Edit title', dream.title); // Prompt to change dream name.
    if (!newTitle) return;
    p.textContent = newTitle; // Set cards content to new title.

    /* ↓ Change dreams title in local storage. */
    const dreams = JSON.parse(localStorage.getItem('dreams') || '[]');
    const idx = dreams.findIndex(d => d.id === dream.id); // Find index of changed dream.
    if (idx !== -1) { // If found (not -1 "not found").
      dreams[idx].title = newTitle; // Change title in list.
      localStorage.setItem('dreams', JSON.stringify(dreams)); // Update to local storage.
    }
  };

  deleteBtn.onclick = () => {
    card.remove(); // Delete Card (div) with dreams contents
    const dreams = JSON.parse(localStorage.getItem('dreams') || '[]')
      .filter(d => d.id !== dream.id); // Remove dream from list.
    localStorage.setItem('dreams', JSON.stringify(dreams)); // Update local storage.
  };
  
  menu.append(viewBtn, editBtn, deleteBtn); // Adds elements to menu.
  card.append(p, menuBtn, menu); // Adds elements to card.
  document.getElementById('dream-container').appendChild(card); // Appends card to dream container that holds all of the dreams.

  /**
   * @param {onclick object} -> Saved into e. 
   */
  menuBtn.onclick = (e) => {
    e.stopPropagation(); // Allows menu to open without closing immediately.

    /** ↓ Reads the the menu elements current display value.
     * If it's flex (meaning it's visible), set to 'none' to hide it.
     * If it's none (meaning it's not visible), set to 'flex' to show it.
     */
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  };

  document.body.addEventListener('click', () => { menu.style.display = 'none'; }); // Can also click anywhere on the page to close the menu.
}