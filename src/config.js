// src/config.js
const process = require('process');

function validateConfig() {
  const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || 'dev-secret';
  if (!NEXTAUTH_SECRET) {
    throw new Error('NEXTAUTH_SECRET environment variable is required but not set.');
  }
  // other config validations can be added here
}

module.exports = { validateConfig };
