const express = require("express");
const app = express();

app.use(express.json());

// title , description
const notes = [];
//add
app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message : "note crated successfully"
    })
});

// delete
app.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        res.status(200).json({
            message: "Note deleted successfully"
        });
    } else {
        res.status(404).json({
            message: "Note not found"
        });
    }
});

// get all notes
app.get("/notes", (req, res) => {
    res.status(200).json(notes);
});

// edit
app.put("/notes/:id", (req, res) => {
    const id = req.params.id;
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index] = req.body;
        res.status(200).json({
            message: "Note updated successfully"
        });
    } else {
        res.status(404).json({
            message: "Note not found"
        });
    }
});

module.exports = app;
