const express = require('express');
const fs = require ('fs'); // to let us read JSON file

const app = express();
const port = process.env.PORT || 5000;

/* I think we're creating this api */
app.get('/api/hello', (req, res) => {
  /* JSON parsing */
  var mockData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  res.send({ express: mockData });
  //res.send({ express: JSON.stringify(mockData) });
});

app.listen(port, () => console.log('Listening on port ${port}'));
