const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('note add');
};

notesCtrl.createNewNote = (req, res) => {
    res.send('note create');
};

notesCtrl.renderNotes = (req, res) => {
    res.send('render note');
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit Form');
};

notesCtrl.updateNote = (req, res) => {
    res.send('Update Note');
};

notesCtrl.deleteNote = (req, res) => {
    res.send('Delete Note');
};

module.exports = notesCtrl;