const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength-text');
const strengthBar = document.getElementById('strength-bar');

passwordInput.addEventListener('input', async () => {
  const password = passwordInput.value;

  const response = await fetch('http://localhost:3000/check-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });

  const data = await response.json();
  const { strength } = data;

  strengthText.textContent = 'Strength: ' + strength.label;
  strengthBar.style.background = strength.color;
});
