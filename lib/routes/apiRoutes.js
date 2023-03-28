const { Router } = require('express');

module.exports = Router().get('/hello', (req, res) => {
  res.json({ message: 'Hello from express!' });
});
