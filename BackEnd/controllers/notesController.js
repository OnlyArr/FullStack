let notes = [];
let nextId = 1;

exports.getAll = (req, res) => res.json(notes);

exports.create = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Teks wajib diisi' });
  const note = { id: nextId++, text };
  notes.push(note);
  res.status(201).json(note);
};

exports.remove = (req, res) => {
  notes = notes.filter(n => n.id !== Number(req.params.id));
  res.json({ ok: true });
};