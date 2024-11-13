const express = require('express');
const app = express();
app.get('/status-health', (req, res) => {
 res.json({ status: 'API is working!' });
});
module.exports = app;
