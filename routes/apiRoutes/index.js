const path = require('path');
const fs = require("fs");
const router = require('express').Router();
const uniqid = require('uniqid');
const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')));
// const createNewNote = require('../../lib/notes');

function createNewNote(body, notesArray) {
    const note = body;
    note.id = uniqid();
    console.log(note.id);
    notesArray.push(note);
    let stringifiedData = JSON.stringify(notesArray);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        stringifiedData
    );
    return note;
}
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    console.log(note);
    res.json(note);
})



module.exports = router;