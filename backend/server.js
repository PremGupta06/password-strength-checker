const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
  origin: "password-strength-checker-bay.vercel.app"
}));

app.use(express.json());

function evaluatePassword(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { label: 'Very Weak', color: '#ff4d4d' },
    { label: 'Weak', color: '#ff944d' },
    { label: 'Medium', color: '#ffd11a' },
    { label: 'Strong', color: '#99e600' },
    { label: 'Very Strong', color: '#00cc44' },
  ];

  return levels[score];
}

app.post('/check-password', (req, res) => {
  const { password } = req.body;
  const strength = evaluatePassword(password);
  res.json({ strength });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
