const tickets = [
  {
    id: 1,
    code: 'REFUGE-DORÉ',
    title: 'Le Refuge Doré',
    gift: 'Doudou',
    teaser: 'Un mystère doux, discret, pensé pour les choses que l’on garde près de soi sans toujours l’expliquer.',
    intro: `
      <p>Certains trésors ne brillent pas.</p>
      <p>Ils ne sont pas faits pour impressionner, ni pour être utiles à tout prix.</p>
      <p>Ils restent là. Ils rassurent. Et parfois, ils accompagnent une vie plus longtemps qu’on ne l’avoue.</p>
    `,
    riddles: [
      {
        type: 'acrostic',
        title: 'Épreuve I — Les premières traces',
        q: `
          <p class="instruction">Il ne faut pas tout lire de la même manière. Dans ce texte, le premier regard n’est pas forcément le bon.</p>
          <div class="cipher-text subtle-cipher">
            <p>Dans les soirs un peu lourds, certaines choses savent rester près de nous.</p>
            <p>On croit parfois qu’elles sont inutiles, jusqu’au jour où elles rassurent.</p>
            <p>Une présence silencieuse peut parfois faire plus qu’un long discours.</p>
            <p>Ce qui paraît enfantin peut cacher beaucoup de tendresse.</p>
            <p>Et même quand on grandit, certains liens ne disparaissent pas vraiment.</p>
            <p>Une petite chose peut garder plus de souvenirs qu’elle n’en a l’air.</p>
            <p>Rien n’oblige à tout expliquer quand quelque chose fait simplement du bien.</p>
          </div>
        `,
        answers: ['douceur'],
        hint: 'Regarde la structure du texte, pas seulement son sens.',
        success: 'Le premier mot est trouvé. Ici, tout commence par la douceur.'
      },
      {
        type: 'rebus',
        title: 'Épreuve II — Le rébus du silence',
        q: `
          <p class="instruction">À lire à voix haute. Le deuxième élément n’est pas écrit : il se reconnaît par ce qu’il représente.</p>
          <div class="rebus-card">
            <div class="rebus-part">
              <span class="rebus-big">K</span>
              <small>un son, pas une lettre à recopier</small>
            </div>
            <span class="rebus-plus">+</span>
            <div class="rebus-part textile-part" aria-label="tissu de lin">
              <div class="linen-visual"></div>
              <small>une matière naturelle</small>
            </div>
          </div>
        `,
        answers: ['calin', 'câlin'],
        hint: 'Le premier son ressemble à “ca”. Le deuxième se porte, se touche, se froisse.',
        success: 'Oui. Un câlin ne dit rien, mais il peut rassurer beaucoup.'
      },
      {
        type: 'object-family',
        title: 'Épreuve III — La famille de l’objet',
        q: `
          <p>Elle en a eu depuis qu’elle est petite.</p>
          <p>Elle en garde encore, parce que certains objets ne disparaissent pas juste parce qu’on grandit.</p>
          <p>Tu lui en as déjà offert une récemment.</p>
          <p>Ce n’est pas encore le nom final du cadeau. C’est la famille à laquelle il appartient.</p>
          <p><strong>Quel mot désigne ce type d’objet doux ?</strong></p>
        `,
        answers: ['peluche'],
        hint: 'On peut en offrir une en forme d’animal, mais on ne cherche pas l’animal.',
        success: 'Exact. On parle bien d’une peluche, mais ce n’est pas encore le mot le plus important.'
      },
      {
        type: 'personal',
        title: 'Épreuve IV — Pourquoi on les garde',
        q: `
          <p>Une peluche peut être posée dans une chambre pendant des années.</p>
          <p>Elle peut sembler banale pour les autres, mais pas pour la personne qui la garde.</p>
          <p>Ce qui compte, ce n’est pas seulement sa forme. C’est ce qu’elle rappelle.</p>
          <p><strong>Quel mot explique pourquoi on garde ce genre d’objet longtemps ?</strong></p>
        `,
        answers: ['souvenir', 'attachement', 'nostalgie'],
        hint: 'Ce n’est pas l’objet seul qui compte, c’est le lien avec lui.',
        success: 'Oui. Un objet devient précieux quand il porte un souvenir ou un attachement.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Le vrai nom du refuge',
        q: `
          <p>Une peluche, c’est ce que tout le monde voit.</p>
          <p>Mais quand elle rassure, quand elle accompagne, quand elle reste liée à l’enfance ou à quelqu’un… elle prend un nom plus tendre.</p>
          <p>Ce nom ne décrit pas seulement l’objet. Il décrit la place qu’il prend.</p>
          <p><strong>Quel est ce nom ?</strong></p>
        `,
        answers: ['doudou'],
        hint: 'Ce n’est pas “peluche”. C’est le mot plus affectif.',
        success: 'Tu as trouvé le vrai nom du Refuge Doré.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Refuge Doré cachait un doudou.</h3>
        <p>Pas seulement une peluche.</p>
        <p>Un petit refuge à garder près de soi, pour les jours où un simple câlin vaut plus qu’un grand discours.</p>
      </div>
    `,
    memory: 'Le Refuge Doré — un souvenir doux, gardé pour rappeler que certains refuges tiennent simplement dans les bras.'
  },
  { id: 2, code: 'ROSE-NOIRE', title: 'La Rose Noire', gift: 'Fleurs', teaser: 'Un message qui ne se dit pas seulement avec des mots.', riddles: [] },
  { id: 3, code: '10-AVRIL', title: 'Le Parc des Premiers Secrets', gift: 'Journée avec toi', teaser: 'Un lieu, une date, et quelque chose qui a commencé.', riddles: [] },
  { id: 4, code: 'AUBE-ROYALE', title: 'L’Aube Royale', gift: 'Petit-déjeuner', teaser: 'Un cadeau qui commence avant que la journée ne décide vraiment de commencer.', riddles: [] },
  { id: 5, code: 'JOKER-18', title: 'Le Joker', gift: 'Une envie à réaliser', teaser: 'Un pouvoir à utiliser au bon moment.', riddles: [] },
  { id: 6, code: 'APRÈS-MINUIT', title: 'Après Minuit', gift: 'Pyjama / lingerie', teaser: 'Une salle élégante, intime, et gardée sous silence.', riddles: [] },
  { id: 7, code: 'CHAPITRE-XII', title: 'Chapitre XII', gift: 'Livre au choix', teaser: 'Certaines histoires attendent encore d’être choisies.', riddles: [] },
  { id: 8, code: 'FESTIN-DORÉ', title: 'Le Festin Doré', gift: 'Pack nourriture', teaser: 'Un panier pour les envies, les goûts, et les petits bonheurs.', riddles: [] },
  { id: 9, code: 'FIL-DORÉ', title: 'Le Fil Doré', gift: 'Tee-shirts', teaser: 'Quelque chose à porter, mais surtout quelque chose qui reste.', riddles: [] },
  { id: 10, code: 'PETIT-MONDE', title: 'Le Petit Monde', gift: 'Figurines', teaser: 'Un univers miniature, mais pas sans personnalité.', riddles: [] },
  { id: 11, code: 'JARDIN-SECRET', title: 'Le Jardin Secret', gift: 'Cadeau secret', teaser: 'Certains cadeaux ne se racontent pas sur la première page.', riddles: [] },
  { id: 12, code: 'DERNIER-MASQUE', title: 'Le Dernier Masque', gift: 'Cadeau final', teaser: 'Le dernier ticket ne ferme pas l’histoire. Il la rassemble.', riddles: [] }
];

const STORAGE_KEY = 'bal_des_secrets_state_v4';

function normalize(value) {
  return String(value || '').trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').replace(/\s+/g, ' ');
}

function defaultState() {
  return { unlocked: [], lastUnlockMonth: null, answers: {}, completed: [] };
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(defaultState()));
  } catch {
    return defaultState();
  }
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
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
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

const unlockBtn = document.getElementById('unlockBtn');
const codeInput = document.getElementById('codeInput');

unlockBtn.addEventListener('click', () => {
  const ticket = findTicket(codeInput.value);
  if (!ticket) {
    setMessage('Code inconnu. Vérifie les lettres, les accents ou les tirets.', 'error');
    return;
  }
  unlockTicket(ticket);
});

codeInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') unlockBtn.click();
});

function renderRoom(ticket) {
  const state = loadState();
  const room = document.getElementById('room');
  const solved = state.answers[ticket.id] || [];
  const total = (ticket.riddles || []).length;
  const completed = total && solved.length >= total;

  let html = `<p class="eyebrow">Porte déverrouillée</p><h2>${ticket.title}</h2><p>${ticket.teaser}</p>`;
  if (ticket.intro) html += `<div class="room-intro">${ticket.intro}</div>`;

  if (!total) {
    html += `<blockquote>Cette porte est encore en préparation. Le ticket est bien débloqué, mais son mystère complet arrivera plus tard.</blockquote>`;
    room.innerHTML = html;
    return;
  }

  ticket.riddles.forEach((r, index) => {
    const isUnlocked = index === 0 || solved.includes(index - 1);
    const isSolved = solved.includes(index);
    html += `<div class="room-step ${isUnlocked ? '' : 'locked'} ${isSolved ? 'solved' : ''}">
      <h3>${r.title || `Épreuve ${index + 1}`}</h3>
      <div class="riddle-content">${isUnlocked ? r.q : '<p>Cette épreuve est encore verrouillée.</p>'}</div>
      ${isUnlocked && !isSolved ? `<details><summary>Besoin d’un souffle ?</summary><p>${r.hint}</p></details><div class="answer-row"><input id="answer-${index}" placeholder="Ta réponse"><button onclick="checkAnswer(${ticket.id}, ${index})">Valider</button></div>` : ''}
      ${isSolved ? `<p class="message success">✓ Résolue — ${r.success || 'bien joué.'}</p>` : ''}
    </div>`;
  });

  if (completed) {
    if (!state.completed.includes(ticket.id)) {
      state.completed.push(ticket.id);
      saveState(state);
    }
    html += ticket.reveal || `<blockquote>Révélation : ce mystère te mène vers ton cadeau — ${ticket.gift}.</blockquote>`;
  }

  room.innerHTML = html;
}

window.checkAnswer = function(ticketId, index) {
  const ticket = tickets.find(t => t.id === ticketId);
  const input = document.getElementById(`answer-${index}`);
  const state = loadState();
  state.answers[ticketId] = state.answers[ticketId] || [];
  const validAnswers = ticket.riddles[index].answers || [];

  if (validAnswers.some(answer => normalize(input.value) === normalize(answer))) {
    if (!state.answers[ticketId].includes(index)) state.answers[ticketId].push(index);
    saveState(state);
    renderRoom(ticket);
    window.scrollTo({ top: document.getElementById('room').offsetTop - 80, behavior: 'smooth' });
  } else {
    input.value = '';
    input.placeholder = 'Ce n’est pas encore ça...';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 350);
  }
};

function renderMemories() {
  const state = loadState();
  const list = document.getElementById('memoryList');
  list.innerHTML = tickets.map(t => {
    const open = state.unlocked.includes(t.id);
    const done = state.completed.includes(t.id);
    const solvedCount = (state.answers[t.id] || []).length;
    const total = (t.riddles || []).length;
    const progress = open && total ? `${solvedCount}/${total} épreuve(s) résolue(s)` : '';
    return `<div class="memory-item ${done ? 'completed' : ''}">
      <div>
        <strong>${open ? '✓' : '🔒'} ${open ? t.title : 'Porte inconnue'}</strong><br>
        <span class="${open ? '' : 'locked-text'}">${open ? (done && t.memory ? t.memory : t.teaser) : 'Aucun souvenir débloqué pour le moment.'}</span>
        ${open && progress ? `<small class="memory-progress">${progress}</small>` : ''}
      </div>
      ${open ? `<button onclick="openTicketFromMemory(${t.id})">${done ? 'Revoir' : 'Continuer'}</button>` : ''}
    </div>`;
  }).join('');
}

window.openTicketFromMemory = function(ticketId) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (!ticket) return;
  renderRoom(ticket);
  showView('room');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function roman(num) {
  return ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][num] || num;
}

function resetTicket(ticketId) {
  const state = loadState();
  state.answers[ticketId] = [];
  state.completed = state.completed.filter(id => id !== ticketId);
  state.unlocked = state.unlocked.filter(id => id !== ticketId);
  saveState(state);
}

function unlockForTest(ticketId) {
  const state = loadState();
  if (!state.unlocked.includes(ticketId)) state.unlocked.push(ticketId);
  saveState(state);
}

window.resetBalSecrets = function() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
};

window.resetRefugeDore = function() {
  resetTicket(1);
  location.reload();
};

function setupAdmin() {
  const params = new URLSearchParams(window.location.search);
  const enabled = params.get('admin') === '1';
  if (!enabled) return;
  document.body.classList.add('admin-enabled');

  document.getElementById('resetRefugeBtn')?.addEventListener('click', () => {
    resetTicket(1);
    alert('Le Refuge Doré a été réinitialisé.');
    renderMemories();
    showView('code');
  });

  document.getElementById('resetAllBtn')?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    alert('Toute la progression a été réinitialisée.');
    location.reload();
  });

  document.getElementById('unlockRefugeBtn')?.addEventListener('click', () => {
    unlockForTest(1);
    alert('Le Refuge Doré est débloqué pour test.');
    renderRoom(tickets[0]);
    showView('room');
  });

  document.getElementById('resetMonthBtn')?.addEventListener('click', () => {
    const state = loadState();
    state.lastUnlockMonth = null;
    saveState(state);
    alert('Tu peux tester un nouveau code ce mois-ci.');
  });
}

setupAdmin();
