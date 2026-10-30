const express = require('express');
const c = require('../controllers/notesController');
const router = express.Router();

router.get('/', c.getAll);
router.post('/', c.create);
router.delete('/:id', c.remove);

module.exports = router;