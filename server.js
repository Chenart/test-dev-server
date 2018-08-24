const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

/* I think we're creating this api */
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log('Listening on port ${port}'));
