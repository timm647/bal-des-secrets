const tickets = [
  {
    id: 1,
    code: 'REFUGE-DORÉ',
    title: 'Le Refuge Doré',
    gift: 'Doudou',
    memoryTitle: 'Le Refuge Doré',
    memoryText: 'Un premier secret consacré à la douceur, au réconfort et aux petits refuges que l’on garde près du cœur.',
    teaser: 'Un mystère doux, discret, fait pour les moments où le monde devient trop bruyant.',
    intro: [
      'Certains trésors ne brillent pas.',
      'Certains ne servent presque à rien.',
      'Pourtant, ils savent rester près de nous quand les journées deviennent trop lourdes.'
    ],
    challenges: [
      {
        type: 'hiddenText',
        title: 'Épreuve 1 — Les lettres dorées',
        prompt: 'Un premier mot est caché dans ce texte. Observe les lettres qui brillent plus que les autres.',
        body: [
          'Dans les mauvais jours, certaines présences changent tout.',
          'On ne les remarque pas toujours au premier regard.',
          'Un simple objet peut parfois porter plus qu’une valeur.',
          'Comme un petit morceau de calme au milieu du bruit.',
          'Et même quand on grandit, certaines choses restent importantes.',
          'Une tendresse discrète peut traverser les années.',
          'Rien n’oblige un souvenir à être immense pour compter.'
        ],
        goldLetters: ['D', 'O', 'U', 'C', 'E', 'U', 'R'],
        answer: ['douceur'],
        hint: 'Regarde le début de chaque phrase. Les initiales ne sont pas choisies au hasard.',
        success: 'Exact. Le premier indice est la douceur.'
      },
      {
        type: 'rebus',
        title: 'Épreuve 2 — Le rébus',
        prompt: 'Lis ce rébus à voix haute. Ne regarde pas l’objet : écoute surtout le son.',
        answer: ['calin', 'câlin'],
        hint: 'La première partie se prononce comme une lettre. La seconde ressemble au nom d’une plante : le lin.',
        success: 'Bien joué. Un câlin ne coûte rien, mais il peut tout changer.'
      },
      {
        type: 'visualRiddle',
        title: 'Épreuve 3 — La matière du secret',
        prompt: 'La silhouette commence à se dévoiler, mais pas assez pour tout comprendre.',
        question: 'Je suis doux au toucher, souvent associé au confort, et on aime me garder contre soi. Quel mot me décrit le mieux ?',
        answer: ['moelleux', 'doux', 'douceur'],
        hint: 'On utilise souvent ce mot pour parler d’un coussin, d’une couverture ou d’une peluche.',
        success: 'La forme devient un peu plus claire.'
      },
      {
        type: 'question',
        title: 'Épreuve 4 — Ce qu’on garde',
        prompt: 'Beaucoup disent qu’ils n’en ont plus besoin. Pourtant, certains objets restent cachés dans une chambre, une armoire ou au bord d’un lit pendant des années.',
        question: 'Pourquoi garde-t-on ce genre de chose ?',
        answer: ['souvenir', 'nostalgie', 'attachement'],
        hint: 'Ce n’est pas pour son utilité. C’est pour ce qu’il rappelle.',
        success: 'Oui. Certains objets valent surtout par les souvenirs qu’ils portent.'
      },
      {
        type: 'final',
        title: 'Épreuve 5 — Le nom du trésor',
        prompt: 'Premier ami de nombreuses enfances. Compagnon silencieux. Gardien de secrets, de nuits, de larmes et de sourires.',
        question: 'Quel est le trésor caché dans le Refuge Doré ?',
        answer: ['doudou'],
        hint: 'Ce n’est pas juste une peluche. C’est le mot plus tendre, celui qu’on garde parfois toute une vie.',
        success: 'Tu as trouvé le nom du trésor.'
      }
    ],
    reveal: {
      title: 'Le Refuge Doré est découvert',
      text: 'Ce mystère te mène vers un doudou. Parce qu’il n’y a pas d’âge pour avoir besoin d’un refuge, et parce qu’un simple câlin peut parfois valoir plus qu’un long discours.'
    }
  },
  { id: 2, code: 'ROSE-NOIRE', title: 'La Rose Noire', gift: 'Fleurs', teaser: 'Un message qui ne se dit pas seulement avec des mots.', challenges: [] },
  { id: 3, code: '10-AVRIL', title: 'Le Parc des Premiers Secrets', gift: 'Journée avec toi', teaser: 'Un lieu, une date, et quelque chose qui a commencé.', challenges: [] },
  { id: 4, code: 'AUBE-ROYALE', title: 'L’Aube Royale', gift: 'Petit-déjeuner', teaser: 'Un cadeau qui commence avant que la journée ne décide vraiment de commencer.', challenges: [] },
  { id: 5, code: 'JOKER-18', title: 'Le Joker', gift: 'Une envie à réaliser', teaser: 'Un pouvoir à utiliser au bon moment.', challenges: [] },
  { id: 6, code: 'APRÈS-MINUIT', title: 'Après Minuit', gift: 'Pyjama / lingerie', teaser: 'Une salle élégante, intime, et gardée sous silence.', challenges: [] },
  { id: 7, code: 'CHAPITRE-XII', title: 'Chapitre XII', gift: 'Livre au choix', teaser: 'Certaines histoires attendent encore d’être choisies.', challenges: [] },
  { id: 8, code: 'FESTIN-DORÉ', title: 'Le Festin Doré', gift: 'Pack nourriture', teaser: 'Un panier pour les envies, les goûts, et les petits bonheurs.', challenges: [] },
  { id: 9, code: 'FIL-DORÉ', title: 'Le Fil Doré', gift: 'Tee-shirts', teaser: 'Quelque chose à porter, mais surtout quelque chose qui reste.', challenges: [] },
  { id: 10, code: 'PETIT-MONDE', title: 'Le Petit Monde', gift: 'Figurines', teaser: 'Un univers miniature, mais pas sans personnalité.', challenges: [] },
  { id: 11, code: 'JARDIN-SECRET', title: 'Le Jardin Secret', gift: 'Cadeau secret', teaser: 'Certains cadeaux ne se racontent pas sur la première page.', challenges: [] },
  { id: 12, code: 'DERNIER-MASQUE', title: 'Le Dernier Masque', gift: 'Cadeau final', teaser: 'Le dernier ticket ne ferme pas l’histoire. Il la rassemble.', challenges: [] }
];

const STORAGE_KEY = 'bal_des_secrets_state_v2';

function normalize(value) {
  return String(value || '').trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').replace(/\s+/g, ' ');
}

function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"unlocked":[],"lastUnlockMonth":null,"answers":{},"completed":{},"openedAt":{}}');
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentMonthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function todayKey() {
  return new Date().toLocaleDateString('fr-FR');
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    state.openedAt[ticket.id] = todayKey();
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
  const completed = Boolean(state.completed[ticket.id]);

  let html = `<div class="room-head">
    <p class="eyebrow">Porte déverrouillée</p>
    <h2>${ticket.title}</h2>
    <p class="lead small-lead">${ticket.teaser}</p>
  </div>`;

  if (ticket.intro) {
    html += `<div class="intro-scroll">${ticket.intro.map(line => `<p>${line}</p>`).join('')}</div>`;
  }

  if (!ticket.challenges || !ticket.challenges.length) {
    html += `<blockquote>Cette porte est encore en préparation. Le ticket est bien débloqué, mais son mystère complet arrivera plus tard.</blockquote>`;
    room.innerHTML = html;
    return;
  }

  html += `<div class="mystery-visual clarity-${Math.min(solved.length, 5)}">${teddySvg()}</div>`;

  ticket.challenges.forEach((challenge, index) => {
    const isUnlocked = index === 0 || solved.includes(index - 1);
    const isSolved = solved.includes(index);
    html += renderChallenge(ticket, challenge, index, isUnlocked, isSolved);
  });

  if (completed) {
    html += renderReveal(ticket);
  }

  room.innerHTML = html;
}

function renderChallenge(ticket, challenge, index, isUnlocked, isSolved) {
  const lockedText = 'Cette épreuve est encore verrouillée.';
  let content = '';

  if (!isUnlocked) {
    content = `<p>${lockedText}</p>`;
  } else {
    content += `<p>${challenge.prompt}</p>`;
    if (challenge.type === 'hiddenText') content += hiddenTextHtml(challenge);
    if (challenge.type === 'rebus') content += rebusHtml();
    if (challenge.type === 'visualRiddle') content += `<div class="mini-note">La silhouette au-dessus deviendra plus nette à chaque réussite.</div><p>${challenge.question}</p>`;
    if (challenge.type === 'question' || challenge.type === 'final') content += `<p class="question-line">${challenge.question}</p>`;

    if (!isSolved) {
      content += `<details><summary>Indice</summary><p>${challenge.hint}</p></details>`;
      content += `<div class="answer-row"><input id="answer-${index}" placeholder="Ta réponse" autocomplete="off"><button onclick="checkAnswer(${ticket.id}, ${index})">Valider</button></div>`;
    } else {
      content += `<p class="message success">✓ ${challenge.success}</p>`;
    }
  }

  return `<div class="room-step ${isUnlocked ? 'unlocked-step' : 'locked'} ${isSolved ? 'solved-step' : ''}">
    <h3>${challenge.title}</h3>
    ${content}
  </div>`;
}

function hiddenTextHtml(challenge) {
  return `<div class="hidden-letter-text">
    ${challenge.body.map((line, i) => {
      const first = challenge.goldLetters[i] || line.charAt(0);
      return `<p><span class="gold-letter">${first}</span>${line.slice(1)}</p>`;
    }).join('')}
  </div>`;
}

function rebusHtml() {
  return `<div class="rebus-card" aria-label="Rébus K plus lin">
    <div class="rebus-piece big-letter">K</div>
    <div class="rebus-plus">+</div>
    <div class="rebus-piece plant">
      <svg viewBox="0 0 160 130" role="img" aria-label="plante de lin">
        <path d="M82 112 C78 82 76 50 79 18" />
        <path d="M80 62 C57 52 44 37 35 20" />
        <path d="M82 72 C105 56 119 38 129 19" />
        <circle cx="35" cy="20" r="12" />
        <circle cx="129" cy="19" r="12" />
        <circle cx="79" cy="18" r="12" />
        <text x="80" y="126" text-anchor="middle">lin</text>
      </svg>
    </div>
  </div>`;
}

function teddySvg() {
  return `<svg viewBox="0 0 260 260" class="teddy" role="img" aria-label="silhouette mystérieuse">
    <defs>
      <radialGradient id="fur" cx="50%" cy="35%" r="70%">
        <stop offset="0" stop-color="#f4d48a" />
        <stop offset="1" stop-color="#9b6f2d" />
      </radialGradient>
    </defs>
    <circle cx="84" cy="69" r="34" />
    <circle cx="176" cy="69" r="34" />
    <circle cx="130" cy="100" r="63" />
    <ellipse cx="130" cy="177" rx="78" ry="62" />
    <ellipse cx="58" cy="157" rx="30" ry="52" transform="rotate(-25 58 157)" />
    <ellipse cx="202" cy="157" rx="30" ry="52" transform="rotate(25 202 157)" />
    <ellipse cx="92" cy="222" rx="35" ry="24" />
    <ellipse cx="168" cy="222" rx="35" ry="24" />
    <circle cx="108" cy="93" r="7" class="dark" />
    <circle cx="152" cy="93" r="7" class="dark" />
    <ellipse cx="130" cy="121" rx="28" ry="21" class="muzzle" />
    <circle cx="130" cy="115" r="7" class="dark" />
    <path d="M130 123 C122 132 115 132 109 126" class="mouth" />
    <path d="M130 123 C138 132 145 132 151 126" class="mouth" />
  </svg>`;
}

function renderReveal(ticket) {
  return `<div class="reveal-card">
    <div class="stamp">DÉCOUVERT</div>
    <h3>${ticket.reveal.title}</h3>
    <div class="final-teddy">${teddySvg()}</div>
    <p>${ticket.reveal.text}</p>
    <p class="memory-added">Souvenir ajouté au carnet.</p>
  </div>`;
}

window.checkAnswer = function(ticketId, index) {
  const ticket = tickets.find(t => t.id === ticketId);
  const input = document.getElementById(`answer-${index}`);
  const challenge = ticket.challenges[index];
  const state = loadState();
  state.answers[ticketId] = state.answers[ticketId] || [];

  const accepted = challenge.answer.map(normalize);
  if (accepted.includes(normalize(input.value))) {
    if (!state.answers[ticketId].includes(index)) state.answers[ticketId].push(index);
    if (state.answers[ticketId].length >= ticket.challenges.length) {
      state.completed[ticketId] = todayKey();
    }
    saveState(state);
    renderRoom(ticket);
  } else {
    input.value = '';
    input.placeholder = 'Ce n’est pas encore ça...';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 450);
  }
};

function renderMemories() {
  const state = loadState();
  const list = document.getElementById('memoryList');
  list.innerHTML = tickets.map(t => {
    const open = state.unlocked.includes(t.id);
    const done = Boolean(state.completed[t.id]);
    return `<div class="memory-item ${done ? 'done-memory' : ''}">
      <div><strong>${open ? (done ? '✦' : '✓') : '🔒'} ${open ? t.title : 'Porte inconnue'}</strong><br>
      <span class="${open ? '' : 'locked-text'}">${open ? (done ? t.memoryText || t.teaser : 'Mystère ouvert, mais pas encore terminé.') : 'Un ticket d’or attend encore son heure.'}</span>
      ${open ? `<br><small>${done ? 'Découvert le ' + state.completed[t.id] : 'Ouvert le ' + (state.openedAt[t.id] || '—')}</small>` : ''}</div>
      ${open ? `<button onclick="renderRoom(tickets.find(x => x.id === ${t.id})); showView('room')">Ouvrir</button>` : ''}
    </div>`;
  }).join('');
}

function roman(num) {
  return ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][num] || num;
}

// Pratique pour tes tests : ouvre la console du navigateur et tape resetBalSecrets()
window.resetBalSecrets = function() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
};
