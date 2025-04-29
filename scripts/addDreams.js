const dreamInput = document.getElementById('dreamInput');
const dream = document.getElementById('dream');

window.addEventListener('DOMContentLoaded', () => { // wait for page to load
  const savedDreams = JSON.parse(localStorage.getItem('dreams')) || []; // pull dreams from local storage
  savedDreams.forEach(addDreamToPage); // display all dreams to home page
});

if (dreamInput) {
  dreamInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const body = dreamInput.value.trim();
  
      if (body !== '') {
        const obj = {
          id: Date.now(),
          title: body.slice(0, 30) + (body.length > 30 ? '…' : ''),
          text: body
        };
      
        addDreamToPage(obj);
        saveDream(obj.text, obj.title);
        dreamInput.value = '';
      }
    }
  });
}

function addDreamToPage(item) {
  const wrapper = document.createElement('div');
  wrapper.className = 'dream-entry';
  wrapper.dataset.id = item.id;

  const p = document.createElement('p');
  p.textContent = item.title;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-button'
  deleteBtn.innerHTML = `<img src="../images/trash.png" class="trash-icon">`;

  deleteBtn.addEventListener('click', () => {
    wrapper.remove();
    const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    const filtered = dreams.filter(d => d.id !== item.id);
    localStorage.setItem('dreams', JSON.stringify(filtered));
  });
  
  wrapper.appendChild(p);
  wrapper.appendChild(deleteBtn);
  document.getElementById("dream").appendChild(wrapper);
}