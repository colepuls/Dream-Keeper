const dreamInput = document.getElementById('dreamInput');
const dream = document.getElementById('dream');

window.addEventListener('DOMContentLoaded', () => {
  const savedDreams = JSON.parse(localStorage.getItem('dreams')) || [];
  savedDreams.forEach(text => addDreamToPage(text));
});

dreamInput.addEventListener('keydown', function(pressed) {
  if (pressed.key === 'Enter' && !pressed.shiftKey) {
    pressed.preventDefault();
    const text = dreamInput.value.trim();

    if (text != '') {
      addDreamToPage(text);
      saveDream(text);
      dreamInput.value = '';
    }
  }
});

function addDreamToPage(text) {
  const wrapper = document.createElement('div');
  wrapper.className = 'dream-entry';

  const p = document.createElement('p');
  p.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-button'

  deleteBtn.addEventListener('click', () => {
    wrapper.remove();
    const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    const index = dreams.indexOf(text);
    if (index !== -1) {
      dreams.splice(index, 1);
      localStorage.setItem('dreams', JSON.stringify(dreams));
    }
  });
  
  wrapper.appendChild(p);
  wrapper.appendChild(deleteBtn);
  dream.appendChild(wrapper);
}

function saveDream(text) {
  const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  dreams.push(text);
  localStorage.setItem('dreams', JSON.stringify(dreams));
}