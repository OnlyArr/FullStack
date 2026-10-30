const input = document.getElementById('input');
const daftar = document.getElementById('daftar');

async function muat() {
  const res = await fetch('/api/notes');
  const notes = await res.json();
  daftar.innerHTML = '';
  notes.forEach(n => {
    const li = document.createElement('li');
    li.textContent = n.text;
    const btn = document.createElement('button');
    btn.textContent = 'Hapus';
    btn.onclick = async () => {
      await fetch('/api/notes/' + n.id, { method: 'DELETE' });
      muat();
    };
    li.appendChild(btn);
    daftar.appendChild(li);
  });
}

document.getElementById('tambah').onclick = async () => {
  if (!input.value.trim()) return;
  await fetch('/api/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: input.value })
  });
  input.value = '';
  muat();
};

muat();