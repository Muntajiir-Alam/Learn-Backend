const express = require("express");
const noteModel = require("./models/note.model");
const app = express();

app.use(express.json());

// title , description

//add
app.post("/notes", async (req, res) => {
    const { title, description } = req.body;
    const note = await noteModel.create({ title, description });
    res.status(201).json({
        message: "note crated successfully",
        note
    });
});

// delete
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message: "Note deleted successfully",
    });
});

// get all notes
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json(notes);
});

// edit
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const note = await noteModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!note) {
        return res.status(404).json({
            message: "Note not found",
        });
    }
    res.status(200).json({
        message: "Note updated successfully",
        note
    });
});

module.exports = app;
