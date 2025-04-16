const jwt = require('jsonwebtoken');

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFsaWNlIiwicm9sZSI6InVzZXIifQ.AsUNG9vVW3BzHtTtVtZ0yXwXuyjJFZP7jpYDNkbFUsc';

// Secret key used to sign the JWT
const secret = 'NoobKey123'; // Replace this with your actual secret

try {
  // Decode and verify the JWT
  const decoded = jwt.verify(token, secret);
  console.log('Decoded Token:', decoded);
} catch (err) {
  console.error('Error decoding token:', err.message);
}
