window.addEventListener('DOMContentLoaded', () => { // wait for page to load
  const savedDreams = JSON.parse(localStorage.getItem('dreams')) || []; // pull dreams from local storage
  savedDreams.forEach(addDreamToPage); // display all dreams to home page
});

function addDreamToPage(dream) {
  const wrapper = document.createElement('div');
  wrapper.className = 'dream-entry';
  wrapper.dataset.id = dream.id;

  const p = document.createElement('p');
  p.textContent = dream.title;

  const menuBtn = document.createElement('button');
  menuBtn.className = 'menu-button'
  menuBtn.textContent = '⋮';

  const menu = document.createElement('div');
  menu.className = 'options-menu';

  const viewBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  viewBtn.innerHTML = `<img class="view-icon" src="../images/view.png">`;
  editBtn.innerHTML = `<img class="edit-icon" src="../images/edit.png">`;
  deleteBtn.innerHTML = `<img class="trash-icon" src="../images/trash.png">`;

  viewBtn.onclick = () => alert(dream.text);

  editBtn.onclick = () => {
    const newTitle = prompt('Edit title', dream.title);
    if (!newTitle) return;
    p.textContent = newTitle;

    const dreams = JSON.parse(localStorage.getItem('dreams') || '[]');
    const idx = dreams.findIndex(d => d.id === dream.id);
    if (idx !== -1) {
      dreams[idx].title = newTitle;
      localStorage.setItem('dreams', JSON.stringify(dreams));
    }
  };

  deleteBtn.onclick = () => {
    wrapper.remove();
    const dreams = JSON.parse(localStorage.getItem('dreams') || '[]')
      .filter(d => d.id !== dream.id);
    localStorage.setItem('dreams', JSON.stringify(dreams));
  };
  
  menu.append(viewBtn, editBtn, deleteBtn);
  wrapper.append(p, menuBtn, menu);
  document.getElementById('dream').appendChild(wrapper);

  menuBtn.onclick = (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  };

  document.body.addEventListener('click', () => { menu.style.display = 'none'; });
}