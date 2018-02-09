const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 8080;
let notes = [
  {
    title: "Don't Panic",
    text: "On no account should you allow a Vogon to read poetry to you",
    id: 0,
    rank: 2,
    createdOn: 1518135181100,
    checklist: [{ text: "IODK something else", completed: false, id: 0 }]
  },
  {
    title: "hello, calculator",
    text:
      "What to do if you find yourself stuck with no hope of rescue: Consider yourself lucky that life has been good to you so far. ",
    id: 1,
    rank: 5,
    createdOn: 1518132281256,
    checklist: [{ text: "finish this", completed: false, id: 0 }]
  }
];
let id = 2;
let date = Date.now();

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
  notes.push({ ...newNote, id: id, createdOn: date });
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
  const { title, text, id, checklist, rank } = note;
  console.log("New note sent from Update: ", note);
  let newNotes = notes.map(note => {
    if (note.id === Number(id)) {
      return { ...note, title, text, checklist, rank };
    }
    return note;
  });
  notes = newNotes;
  res.send(notes);
});

app.listen(port, (req, res) => {
  console.log("listening on port: " + port);
});
