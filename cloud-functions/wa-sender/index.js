const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework
functions.http('waSender', (req, res) => {
  if (req.method === 'POST') {
    const { phoneNumber, ...data } = req.body
    const message = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join(`
`)
    res.redirect(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`)
  }

  res.json({ message: 'Harus menggunakan metode POST' });
});