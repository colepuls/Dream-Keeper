const dreamInput = document.getElementById('dreamInput');

dreamInput.addEventListener('keydown', function(pressed) {
  if (pressed.key === 'Enter' && !pressed.shiftKey) {
    pressed.preventDefault();
    const text = dreamInput.value.trim();

    if (text != '') {
      saveDream(text);
      dreamInput.value = '';
    }
  }
});

function saveDream(text) {
  const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
  dreams.push(text);
  localStorage.setItem('dreams', JSON.stringify(dreams));
}