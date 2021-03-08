const path = require('path');
const fs = require("fs");
const router = require('express').Router();
const { notes } = require("../../db/db");
// const createNewNote = require('../../lib/notes');

// const notes = [{title: "panda", text: "pandas like to eat bamboo"}]
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    JSON.stringify(notesArray);
    console.log(typeof(notesArray));
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        notesArray
    );
    return note;
}
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(router);
})



module.exports = router;