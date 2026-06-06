const tickets = [
  {
    id: 1,
    code: 'REFUGE-DORÉ',
    title: 'Le Refuge Doré',
    gift: 'Doudou',
    teaser: 'Un mystère doux, discret, pensé pour les moments où le monde devient trop bruyant.',
    intro: `
      <p>Certains trésors ne brillent pas.</p>
      <p>Certains ne servent à rien, et pourtant ils restent près de nous pendant des années.</p>
      <p>Pour ouvrir ce refuge, observe, écoute, relie les indices… et ne fais pas trop confiance aux apparences.</p>
    `,
    riddles: [
      {
        type: 'acrostic',
        title: 'Épreuve I — Les débuts comptent',
        q: `
          <p class="instruction">Un mot se cache ici. Ce ne sont pas les lettres dorées qui parlent, mais les débuts.</p>
          <div class="cipher-text">
            <p><strong>D</strong>ans les soirs un peu lourds, certaines choses savent rester près de nous.</p>
            <p><strong>O</strong>n croit parfois qu’elles sont inutiles, jusqu’au jour où elles rassurent.</p>
            <p><strong>U</strong>ne présence silencieuse peut parfois faire plus qu’un long discours.</p>
            <p><strong>C</strong>e qui paraît enfantin peut cacher beaucoup de tendresse.</p>
            <p><strong>E</strong>t même quand on grandit, certains liens ne disparaissent pas vraiment.</p>
            <p><strong>U</strong>n petit objet peut garder plus de souvenirs qu’il n’en a l’air.</p>
            <p><strong>R</strong>ien n’oblige à tout expliquer quand quelque chose fait simplement du bien.</p>
          </div>
        `,
        answers: ['douceur'],
        hint: 'Regarde le début de chaque ligne. Pas besoin de chercher dans tout le texte.',
        success: 'Bien vu. Le Refuge Doré commence par quelque chose de simple : la douceur.'
      },
      {
        type: 'rebus',
        title: 'Épreuve II — À lire à voix haute',
        q: `
          <p class="instruction">Le mot suivant n’est pas écrit directement. Lis ce rébus comme tu le dirais à voix haute.</p>
          <div class="rebus-card">
            <div class="rebus-part">
              <span class="rebus-big">K</span>
              <small>prononcé comme une syllabe</small>
            </div>
            <span class="rebus-plus">+</span>
            <div class="rebus-part">
              <span class="rebus-big">LIN</span>
              <small>la matière</small>
            </div>
          </div>
        `,
        answers: ['calin', 'câlin'],
        hint: 'K se lit “ca”. Ajoute le deuxième morceau.',
        success: 'Exact. Un câlin ne coûte rien, mais il peut changer une soirée.'
      },
      {
        type: 'veil',
        title: 'Épreuve III — L’objet se rapproche',
        q: `
          <p>Elle en a eu depuis qu’elle est petite.</p>
          <p>Tu lui en as déjà offert une récemment.</p>
          <p>Ce n’est pas un vêtement, ce n’est pas un bijou, ce n’est pas un simple souvenir.</p>
          <p>Quel genre d’objet commence à se dessiner derrière le voile ?</p>
          <div class="veil-box">
            <div class="soft-shape">?</div>
            <p class="veil-caption">Le voile se lèvera quand le bon mot sera donné.</p>
          </div>
        `,
        answers: ['peluche'],
        hint: 'Pense à quelque chose de doux, qu’on peut garder près de soi, et qu’elle connaît déjà très bien.',
        success: 'Oui. Le mystère prend forme : on se rapproche d’une peluche.',
        solvedVisual: `
          <div class="veil-box revealed">
            <div class="soft-shape">🐼</div>
            <p class="veil-caption">Une silhouette douce apparaît… mais ce n’est pas encore le dernier mot.</p>
          </div>
        `
      },
      {
        type: 'personal',
        title: 'Épreuve IV — La silhouette noire et blanche',
        q: `
          <p>Il est doux, noir et blanc.</p>
          <p>Il a l’air calme, mais celui-ci pourrait bien courir.</p>
          <p>Ce n’est pas encore le nom du cadeau final, seulement l’apparence de celui qui l’annonce.</p>
          <p>Quel animal se cache derrière cette piste ?</p>
        `,
        answers: ['panda'],
        hint: 'Noir, blanc, doux… et tu sais déjà que celui-ci peut être une peluche.',
        success: 'Exact. Le gardien du Refuge Doré prend la forme d’un panda.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Le vrai nom du refuge',
        q: `
          <p>Une peluche peut être jolie.</p>
          <p>Un panda peut être mignon.</p>
          <p>Mais quand on l’attache à des souvenirs, quand il rassure, quand il reste près de nous longtemps… il porte un nom plus tendre.</p>
          <p>Quel est ce nom ?</p>
        `,
        answers: ['doudou'],
        hint: 'Ce n’est pas seulement une peluche. C’est le mot qu’on utilise quand elle devient vraiment importante.',
        success: 'Tu as trouvé le vrai nom du Refuge Doré.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Refuge Doré cachait un doudou.</h3>
        <p>Parce qu’il n’y a pas d’âge pour avoir besoin de douceur.</p>
        <p>Et parce que certains refuges tiennent simplement dans les bras.</p>
      </div>
    `,
    memory: 'Le Refuge Doré — un souvenir doux, noir et blanc, gardé pour les jours où un simple câlin vaut plus qu’un long discours.'
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

const STORAGE_KEY = 'bal_des_secrets_state_v2';

function normalize(value) {
  return String(value || '').trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').replace(/\s+/g, ' ');
}

function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"unlocked":[],"lastUnlockMonth":null,"answers":{},"completed":[]}');
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
  const completed = solved.length >= (ticket.riddles || []).length && ticket.riddles?.length;

  let html = `<p class="eyebrow">Porte déverrouillée</p><h2>${ticket.title}</h2><p>${ticket.teaser}</p>`;

  if (ticket.intro) {
    html += `<div class="room-intro">${ticket.intro}</div>`;
  }

  if (!ticket.riddles || !ticket.riddles.length) {
    html += `<blockquote>Cette salle est encore en préparation. Le ticket est bien débloqué, mais son mystère complet arrivera plus tard.</blockquote>`;
    room.innerHTML = html;
    return;
  }

  ticket.riddles.forEach((r, index) => {
    const isUnlocked = index === 0 || solved.includes(index - 1);
    const isSolved = solved.includes(index);
    html += `<div class="room-step ${isUnlocked ? '' : 'locked'} ${isSolved ? 'solved' : ''}">
      <h3>${r.title || `Épreuve ${index + 1}`}</h3>
      <div class="riddle-content">${isUnlocked ? r.q : '<p>Cette épreuve est encore verrouillée.</p>'}</div>
      ${isSolved && r.solvedVisual ? r.solvedVisual : ''}
      ${isUnlocked && !isSolved ? `<details><summary>Indice</summary><p>${r.hint}</p></details><div class="answer-row"><input id="answer-${index}" placeholder="Ta réponse"><button onclick="checkAnswer(${ticket.id}, ${index})">Valider</button></div>` : ''}
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
  const validAnswers = ticket.riddles[index].answers || [ticket.riddles[index].a];

  if (validAnswers.some(answer => normalize(input.value) === normalize(answer))) {
    if (!state.answers[ticketId].includes(index)) state.answers[ticketId].push(index);
    saveState(state);
    renderRoom(ticket);
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
    return `<div class="memory-item ${done ? 'completed' : ''}">
      <div><strong>${open ? '✓' : '🔒'} ${open ? t.title : 'Porte inconnue'}</strong><br><span class="${open ? '' : 'locked-text'}">${open ? (done && t.memory ? t.memory : t.teaser) : 'Aucun souvenir débloqué pour le moment.'}</span></div>
      ${open ? `<button onclick="renderRoom(tickets.find(x => x.id === ${t.id})); showView('room')">Ouvrir</button>` : ''}
    </div>`;
  }).join('');
}

window.resetBalSecrets = function() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
};
