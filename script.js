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
        type: 'hidden-ending',
        title: 'Épreuve I — Au bord des phrases',
        q: `
          <p class="instruction">Pour trouver certains indices, il faut savoir regarder. Les détails racontent parfois plus que le reste.</p>
          <div class="cipher-text ending-cipher">
            <p>Il y a des objets qu’on garde plus longtemps que prévu, parfois toujours.</p>
            <p>On les croit parfois inutiles, jusqu’au moment où ils comptent encore.</p>
            <p>Certains souvenirs reviennent surtout quand tombe la nuit.</p>
            <p>Ce qui rassure le plus ne fait pas toujours beaucoup de bruit doucement.</p>
            <p>Une simple présence peut parfois faire plus qu’un discours et rassure.</p>
            <p>Les choses les plus petites peuvent porter un morceau d’enfance.</p>
            <p>On ne sait pas toujours expliquer pourquoi elles deviennent un souvenir.</p>
            <p>Mais quand elles restent, c’est souvent qu’elles protègent un secret.</p>
            <p>Et parfois, ce qui paraît enfantin devient simplement essentiel.</p>
          </div>
          <p><strong>Quel est ce mot ?</strong></p>
        `,
        answers: ['tendresse'],
        hints: [
          'Les phrases ne sont pas seulement là pour être lues dans leur ensemble.',
          'Certaines réponses se trouvent là où une phrase s’arrête.',
          'Observe les mots qui arrivent juste avant chaque point.',
          'Prends la première lettre de chaque mot placé juste avant un point.'
        ],
        success: 'Le premier mot est trouvé. Ici, tout commence par la tendresse.'
      },
      {
        type: 'rebus',
        title: 'Épreuve II — Le rébus du silence',
        q: `
          <p class="instruction">Deux images. Un seul mot à entendre.</p>
          <div class="rebus-card image-rebus">
            <figure class="rebus-image-card">
              <img src="assets/roi-k.jpg" alt="Carte roi K" />
            </figure>
            <span class="rebus-plus">+</span>
            <figure class="rebus-image-card">
              <img src="assets/lin.jpg" alt="Tissu de lin" />
            </figure>
          </div>
          <p><strong>Quel mot se cache derrière ce rébus ?</strong></p>
        `,
        answers: ['calin', 'câlin'],
        hints: [
          'Les deux images ne doivent pas être lues comme de simples objets.',
          'La première image représente surtout un symbole inscrit sur la carte.',
          'La seconde image montre une matière que l’on retrouve dans certains vêtements, comme des chemises ou des pantalons.',
          'Assemble le son de la lettre de la carte avec le nom de la matière.'
        ],
        success: 'Oui. Un câlin ne dit rien, mais il peut rassurer beaucoup.'
      },
      {
        type: 'concept',
        title: 'Épreuve III — Ce que l’on cherche',
        q: `
          <p>Je ne suis ni une personne, ni un lieu.</p>
          <p>Pourtant, beaucoup me cherchent.</p>
          <p>Certains me trouvent dans une présence.</p>
          <p>D’autres dans une habitude.</p>
          <p>D’autres encore dans quelque chose qu’ils gardent depuis longtemps.</p>
          <p>On peut avoir besoin de moi après une mauvaise nouvelle, un moment difficile, ou simplement lorsqu’on a envie de quelque chose qui fait du bien.</p>
          <p><strong>Que suis-je ?</strong></p>
        `,
        answers: ['reconfort', 'réconfort'],
        hints: [
          'La réponse ne peut pas se voir ni se toucher.',
          'Elle se ressent plus qu’elle ne se possède.',
          'Elle est proche du calme, de l’apaisement et de la sécurité.',
          'On la cherche souvent quand on a besoin d’aller mieux.'
        ],
        success: 'Exact. Le réconfort peut parfois tenir dans très peu de choses.'
      },
      {
        type: 'personal',
        title: 'Épreuve IV — Ce qui reste',
        q: `
          <p>Un objet peut rester dans une chambre pendant des années.</p>
          <p>Pour quelqu’un d’autre, il ne vaut presque rien.</p>
          <p>Pour la personne qui le garde, il peut rappeler une époque, une présence, une habitude ou un moment.</p>
          <p>Ce n’est donc pas seulement l’objet qui compte.</p>
          <p>C’est le lien invisible qui s’est créé avec lui.</p>
          <p><strong>Quel mot décrit ce lien ?</strong></p>
        `,
        answers: ['attachement'],
        hints: [
          'La réponse n’est pas un objet.',
          'Elle peut exister entre une personne et un objet.',
          'Elle peut aussi exister entre deux personnes.',
          'Elle décrit un lien émotionnel que l’on crée avec quelque chose ou quelqu’un.'
        ],
        success: 'Oui. Certains objets restent parce qu’on s’y attache.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Le vrai nom du refuge',
        q: `
          <p>Certaines personnes l’oublient.</p>
          <p>D’autres le retrouvent des années plus tard.</p>
          <p>Il ne possède aucune valeur particulière.</p>
          <p>Pourtant peu accepteraient qu’on le jette sans leur demander.</p>
          <p>Il accompagne souvent les premiers rêves.</p>
          <p>Et parfois même quelques rêves d’adulte.</p>
          <p><strong>Qui est-il ?</strong></p>
        `,
        answers: ['doudou'],
        hints: [
          'La réponse est un objet.',
          'Beaucoup en ont possédé un durant l’enfance.',
          'Certains le conservent même en grandissant.',
          'Il est souvent associé au sommeil, à la douceur et au réconfort.'
        ],
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
  return { unlocked: [], lastUnlockMonth: null, answers: {}, hints: {}, completed: [] };
}

function loadState() {
  try {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(defaultState()));
    state.unlocked = state.unlocked || [];
    state.lastUnlockMonth = state.lastUnlockMonth || null;
    state.answers = state.answers || {};
    state.hints = state.hints || {};
    state.completed = state.completed || [];
    return state;
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
    const hintsShown = getHintCount(ticket.id, index);
    const maxHints = (r.hints || []).length;
    const hintsHtml = isUnlocked && !isSolved && maxHints ? renderHints(ticket.id, index, r.hints, hintsShown) : '';

    html += `<div class="room-step ${isUnlocked ? '' : 'locked'} ${isSolved ? 'solved' : ''}">
      <h3>${r.title || `Épreuve ${index + 1}`}</h3>
      <div class="riddle-content">${isUnlocked ? r.q : '<p>Cette épreuve est encore verrouillée.</p>'}</div>
      ${hintsHtml}
      ${isUnlocked && !isSolved ? `<div class="answer-row"><input id="answer-${index}" placeholder="Ta réponse"><button onclick="checkAnswer(${ticket.id}, ${index})">Valider</button></div>` : ''}
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

function getHintCount(ticketId, index) {
  const state = loadState();
  return ((state.hints || {})[ticketId] || {})[index] || 0;
}

function renderHints(ticketId, index, hints, count) {
  const visibleHints = hints.slice(0, count).map((hint, i) => `
    <div class="hint-item"><span>Indice ${i + 1}</span><p>${hint}</p></div>
  `).join('');

  const button = count < hints.length
    ? `<button class="hint-button" onclick="revealHint(${ticketId}, ${index})">${count === 0 ? 'Demander un indice' : 'Demander un indice supplémentaire'}</button>`
    : `<p class="hint-max">Tous les indices de cette épreuve ont été révélés.</p>`;

  return `<div class="hint-panel">
    ${visibleHints}
    ${button}
  </div>`;
}

window.revealHint = function(ticketId, index) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (!ticket) return;
  const state = loadState();
  state.hints[ticketId] = state.hints[ticketId] || {};
  const current = state.hints[ticketId][index] || 0;
  const max = (ticket.riddles[index].hints || []).length;
  if (current < max) state.hints[ticketId][index] = current + 1;
  saveState(state);
  renderRoom(ticket);
};

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
  if (state.hints) state.hints[ticketId] = {};
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
