const express = require('express');
const path = require('path');
const notesRoutes = require('./routes/notes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/api/notes', notesRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log('Server jalan di port ' + PORT));