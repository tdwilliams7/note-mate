const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 8080;
let notes = [
  { title: "hello, troy", text: "hi", id: 0 },
  { title: "hello, calculator", text: "bawk, bawk", id: 1 }
];
let id = 2;

app.use(bodyParser.json());
app.use(cors());

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.get("/note/:id", (req, res) => {
  const noteId = req.params.id;
  note = notes.filter(note => note.id.toString() === noteId);
  res.send(note);
});

app.post("/notes", (req, res) => {
  const newNote = req.body;
  notes.push({ ...newNote, id: id });
  id++;
  res.send(notes);
});

app.delete("/notes", (req, res) => {
  const targetId = req.body.id;
  const newNotes = notes.filter(note => {
    if (note.id !== targetId) {
      return note;
    }
  });
  notes = newNotes;
  res.send(notes);
});

app.put("/note/:id", (req, res) => {
  const note = req.body.data.note;
  const { title, text, id } = note;
  let newNotes = notes.map(note => {
    if (note.id === Number(id)) {
      return { ...note, title, text };
    }
    return note;
  });
  console.log("New notes: ", newNotes);
  notes = newNotes;
  res.send(notes);
});

app.listen(port, (req, res) => {
  console.log("listening on port: " + port);
});
