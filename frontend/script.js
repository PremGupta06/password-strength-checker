const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength-text');
const strengthBar = document.getElementById('strength-bar');

passwordInput.addEventListener('input', async () => {
  const password = passwordInput.value;

  const response = await fetch('https://password-strength-checker-aio9.onrender.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });

  const data = await response.json();
  const { strength } = data;

  strengthText.textContent = 'Strength: ' + strength.label;
  strengthBar.style.background = strength.color;
});
