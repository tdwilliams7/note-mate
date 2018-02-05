const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();
const port = 8080;
let notes = [{title: 'hello, troy', text: 'hi', id: 0}, {title: 'hello, calculator', text: 'bawk, bawk', id: 1}];

app.use(bodyParser.json());
app.use(cors());

app.get('/notes', (req, res) => {
  res.send(notes)
});

app.post('/notes', (req, res) => {
  const newNote = req.body;
  notes = [...notes, newNote];
  res.send(notes);
})

app.listen(port, (req, res) => {
  console.log("listening on port: " + port)
});
