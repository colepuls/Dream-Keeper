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

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-button'
  deleteBtn.innerHTML = `<img src="../images/trash.png" class="trash-icon">`;

  deleteBtn.addEventListener('click', () => {
    wrapper.remove();
    const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    const filtered = dreams.filter(d => d.id !== dream.id);
    localStorage.setItem('dreams', JSON.stringify(filtered));
  });
  
  wrapper.appendChild(p);
  wrapper.appendChild(deleteBtn);
  document.getElementById("dream").appendChild(wrapper);
}