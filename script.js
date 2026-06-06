const tickets = [
  {
    id: 1,
    code: 'REFUGE-DORÉ',
    title: 'Salle I — Refuge Doré',
    gift: 'Doudou',
    teaser: 'Un mystère doux, discret, fait pour les moments où le monde devient trop bruyant.',
    riddles: [
      { q: 'Je ne parle pas, mais je rassure. Je ne bouge pas, mais je peux accompagner une nuit entière. Que suis-je ?', a: 'doudou', hint: 'C’est quelque chose qu’on serre contre soi.' },
      { q: 'Je suis petit pour le monde, mais parfois immense pour le cœur. Mon pouvoir commence quand les bras se referment.', a: 'calin', hint: 'Réponds sans accent.' },
      { q: 'On me garde près de soi quand la fatigue arrive. Je connais les silences, les rêves, et les soirs où l’on veut juste être bien.', a: 'refuge', hint: 'C’est aussi dans le nom du ticket.' },
      { q: 'Mon cadeau n’est pas fait pour impressionner. Il est fait pour rester, rassurer, et rappeler une présence même à distance.', a: 'presence', hint: 'Réponds sans accent.' }
    ]
  },
  { id: 2, code: 'ROSE-NOIRE', title: 'Salle II — Rose Noire', gift: 'Fleurs', teaser: 'Un message qui ne se dit pas seulement avec des mots.', riddles: [] },
  { id: 3, code: '10-AVRIL', title: 'Salle III — Le Parc des Premiers Secrets', gift: 'Journée avec toi', teaser: 'Un lieu, une date, et quelque chose qui a commencé.', riddles: [] },
  { id: 4, code: 'AUBE-ROYALE', title: 'Salle IV — Aube Royale', gift: 'Petit-déjeuner', teaser: 'Un cadeau qui commence avant que la journée ne décide vraiment de commencer.', riddles: [] },
  { id: 5, code: 'JOKER-18', title: 'Salle V — Joker', gift: 'Une envie à réaliser', teaser: 'Un pouvoir à utiliser au bon moment.', riddles: [] },
  { id: 6, code: 'APRÈS-MINUIT', title: 'Salle VI — Après Minuit', gift: 'Pyjama / lingerie', teaser: 'Une salle élégante, intime, et gardée sous silence.', riddles: [] },
  { id: 7, code: 'CHAPITRE-XII', title: 'Salle VII — Chapitre XII', gift: 'Livre au choix', teaser: 'Certaines histoires attendent encore d’être choisies.', riddles: [] },
  { id: 8, code: 'FESTIN-DORÉ', title: 'Salle VIII — Festin Doré', gift: 'Pack nourriture', teaser: 'Un panier pour les envies, les goûts, et les petits bonheurs.', riddles: [] },
  { id: 9, code: 'FIL-DORÉ', title: 'Salle IX — Fil Doré', gift: 'Tee-shirts', teaser: 'Quelque chose à porter, mais surtout quelque chose qui reste.', riddles: [] },
  { id: 10, code: 'PETIT-MONDE', title: 'Salle X — Petit Monde', gift: 'Figurines', teaser: 'Un univers miniature, mais pas sans personnalité.', riddles: [] },
  { id: 11, code: 'JARDIN-SECRET', title: 'Salle XI — Jardin Secret', gift: 'Cadeau secret', teaser: 'Certains cadeaux ne se racontent pas sur la première page.', riddles: [] },
  { id: 12, code: 'DERNIER-MASQUE', title: 'Salle XII — Dernier Masque', gift: 'Cadeau final', teaser: 'Le dernier ticket ne ferme pas l’histoire. Il la rassemble.', riddles: [] }
];

const STORAGE_KEY = 'bal_des_secrets_state_v1';

function normalize(value) {
  return value.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"unlocked":[],"lastUnlockMonth":null,"answers":{}}');
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentMonthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function daysUntilNextMonth() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return Math.ceil((next - now) / (1000 * 60 * 60 * 24));
}

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'memories') renderMemories();
}

document.querySelectorAll('[data-view]').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.view));
});

function findTicket(code) {
  return tickets.find(t => normalize(t.code) === normalize(code));
}

function unlockTicket(ticket) {
  const state = loadState();
  const alreadyUnlocked = state.unlocked.includes(ticket.id);
  const thisMonth = currentMonthKey();

  if (!alreadyUnlocked && state.lastUnlockMonth === thisMonth) {
    setMessage(`Cette porte est encore scellée. Tu as déjà ouvert un ticket ce mois-ci. Prochain mystère dans environ ${daysUntilNextMonth()} jour(s).`, 'error');
    return;
  }

  if (!alreadyUnlocked) {
    state.unlocked.push(ticket.id);
    state.lastUnlockMonth = thisMonth;
    saveState(state);
  }

  setMessage('Porte déverrouillée.', 'success');
  renderRoom(ticket);
  showView('room');
}

function setMessage(text, type) {
  const el = document.getElementById('message');
  el.textContent = text;
  el.className = `message ${type || ''}`;
}

document.getElementById('unlockBtn').addEventListener('click', () => {
  const code = document.getElementById('codeInput').value;
  const ticket = findTicket(code);
  if (!ticket) {
    setMessage('Code inconnu. Vérifie les lettres, les accents ou les tirets.', 'error');
    return;
  }
  unlockTicket(ticket);
});

document.getElementById('codeInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('unlockBtn').click();
});

function renderRoom(ticket) {
  const state = loadState();
  const room = document.getElementById('room');
  const solved = state.answers[ticket.id] || [];

  let html = `<p class="eyebrow">Ticket ${roman(ticket.id)}</p><h2>${ticket.title}</h2><p>${ticket.teaser}</p>`;

  if (!ticket.riddles.length) {
    html += `<blockquote>Cette salle est encore en préparation. Le ticket est bien débloqué, mais son mystère complet arrivera plus tard.</blockquote>`;
    html += `<p><strong>Indice privé :</strong> ${ticket.gift}</p>`;
    room.innerHTML = html;
    return;
  }

  ticket.riddles.forEach((r, index) => {
    const isUnlocked = index === 0 || solved.includes(index - 1);
    const isSolved = solved.includes(index);
    html += `<div class="room-step ${isUnlocked ? '' : 'locked'}">
      <h3>Énigme ${index + 1}</h3>
      <p>${isUnlocked ? r.q : 'Cette énigme est encore verrouillée.'}</p>
      ${isUnlocked && !isSolved ? `<details><summary>Indice</summary><p>${r.hint}</p></details><div class="answer-row"><input id="answer-${index}" placeholder="Ta réponse"><button onclick="checkAnswer(${ticket.id}, ${index})">Valider</button></div>` : ''}
      ${isSolved ? '<p class="message success">✓ Résolue</p>' : ''}
    </div>`;
  });

  if (solved.length >= ticket.riddles.length) {
    html += `<blockquote>Révélation : ce mystère te mène vers ton cadeau — ${ticket.gift}. Mais la vraie surprise reste à découvrir en vrai.</blockquote>`;
  }

  room.innerHTML = html;
}

window.checkAnswer = function(ticketId, index) {
  const ticket = tickets.find(t => t.id === ticketId);
  const input = document.getElementById(`answer-${index}`);
  const state = loadState();
  state.answers[ticketId] = state.answers[ticketId] || [];

  if (normalize(input.value) === normalize(ticket.riddles[index].a)) {
    if (!state.answers[ticketId].includes(index)) state.answers[ticketId].push(index);
    saveState(state);
    renderRoom(ticket);
  } else {
    input.value = '';
    input.placeholder = 'Ce n’est pas encore ça...';
  }
};

function renderMemories() {
  const state = loadState();
  const list = document.getElementById('memoryList');
  list.innerHTML = tickets.map(t => {
    const open = state.unlocked.includes(t.id);
    return `<div class="memory-item">
      <div><strong>${open ? '✓' : '🔒'} Ticket ${roman(t.id)}</strong><br><span class="${open ? '' : 'locked-text'}">${open ? t.code + ' — ' + t.title : 'Inconnu'}</span></div>
      ${open ? `<button onclick="renderRoom(tickets.find(x => x.id === ${t.id})); showView('room')">Ouvrir</button>` : ''}
    </div>`;
  }).join('');
}

function roman(num) {
  return ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][num] || num;
}
