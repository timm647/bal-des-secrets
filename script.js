const tickets = [
  {
    id: 1,
    code: 'REFUGE-DORÉ',
    title: 'Le Refuge Doré',
    gift: 'Doudou',
    teaser: 'Un mystère doux, discret, pensé pour les choses que tu gardes près de toi sans toujours l’expliquer.',
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
        <p>Un petit refuge à garder près de toi, pour les jours où un simple câlin vaut plus qu’un grand discours.</p>
      </div>
    `,
    memory: 'Le Refuge Doré — un souvenir doux, gardé pour te rappeler que certains refuges tiennent simplement dans les bras.'
  },
  {
    id: 2,
    code: 'ROSE-NOIRE',
    title: 'La Rose Noire',
    gift: 'Fleurs',
    teaser: 'Un message fragile, élégant, qui ne se dit pas toujours avec des mots.',
    intro: `
      <p>Cette porte ne commence pas par une couleur.</p>
      <p>Elle commence par une intention : offrir quelque chose qui parle sans faire de bruit.</p>
    `,
    riddles: [
      {
        type: 'deduction',
        title: 'Épreuve I — Le message sans voix',
        q: `
          <p>Quatre messagers se présentent devant toi.</p>
          <div class="evidence-grid">
            <div><strong>Le papier</strong><br>Il peut porter des mots, mais il ne vit pas.</div>
            <div><strong>Le parfum</strong><br>Il laisse une trace, mais disparaît trop vite.</div>
            <div><strong>La lumière</strong><br>Elle révèle, mais ne reste pas entre les mains.</div>
            <div><strong>Le végétal</strong><br>Il ne parle pas, mais peut dire beaucoup.</div>
          </div>
          <p>Lequel est le meilleur messager de cette porte ?</p>
        `,
        answers: ['vegetal', 'végétal', 'plante', 'fleur', 'fleurs'],
        hints: [
          'La réponse appartient au vivant.',
          'Elle peut être offerte sans avoir besoin d’une longue phrase.',
          'Elle peut transmettre une attention par sa présence seule.',
          'Elle pousse, se cueille, puis devient souvent un cadeau.'
        ],
        success: 'Tu as choisi le messager le plus silencieux.'
      },
      {
        type: 'code',
        title: 'Épreuve II — Le code des pétales',
        q: `
          <p class="instruction">Chaque nombre indique une lettre de l’alphabet.</p>
          <div class="code-line">16 - 1 - 18 - 6 - 21 - 13</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['parfum'],
        hints: [
          'A vaut 1.',
          'Le premier nombre, 16, donne P.',
          'Ce mot peut rester quelques secondes après ton passage.',
          'Il se devine parfois avant même de voir ce qui l’accompagne.'
        ],
        success: 'Le parfum est trouvé. Il annonce parfois une présence avant elle.'
      },
      {
        type: 'logic',
        title: 'Épreuve III — Les trois témoins',
        q: `
          <p>Trois témoins décrivent le même cadeau.</p>
          <div class="testimony">
            <p><strong>Témoin A :</strong> “Il est fait pour durer toute une vie.”</p>
            <p><strong>Témoin B :</strong> “Il peut faner, mais pas forcément perdre son sens.”</p>
            <p><strong>Témoin C :</strong> “Il se mange quand il est réussi.”</p>
          </div>
          <p>Un témoin ment. Qui ment ?</p>
        `,
        answers: ['c', 'temoin c', 'témoin c'],
        hints: [
          'Deux témoins parlent d’un cadeau symbolique.',
          'Un témoin parle d’un usage qui n’a rien à faire ici.',
          'Celui qui ment transforme le cadeau en nourriture.',
          'La mauvaise piste est le témoin C.'
        ],
        success: 'Exact. Tout ne se mange pas, même quand c’est offert avec amour.'
      },
      {
        type: 'real',
        title: 'Épreuve IV — Le ruban réel',
        q: `
          <p>Certaines portes aiment quitter l’écran.</p>
          <p>Quand le moment viendra, regarde ce qui entoure le cadeau réel.</p>
          <p>Un petit mot devra être caché sur le ruban, l’étiquette ou le papier.</p>
          <p><strong>Quel mot y est inscrit ?</strong></p>
          <p class="admin-note">Préparation : écris discrètement le mot <strong>ÉCLAT</strong> sur le ruban ou une petite étiquette du bouquet.</p>
        `,
        answers: ['eclat', 'éclat'],
        hints: [
          'Cette réponse n’est pas uniquement dans le site.',
          'Cherche ce qui accompagne ou attache le cadeau réel.',
          'Le mot est court et peut évoquer quelque chose qui brille.',
          'Il commence par É et finit par T.'
        ],
        success: 'Tu as trouvé le mot caché dans le réel.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Ce que l’on offre sans parler',
        q: `
          <p>Je peux être simple ou composé.</p>
          <p>Je peux dire “je pense à toi” sans prononcer ces mots.</p>
          <p>Je peux accompagner une fête, une excuse, une surprise ou juste une envie de faire sourire.</p>
          <p>Je ne reste pas toujours longtemps, mais mon geste, lui, peut rester.</p>
          <p><strong>Que vais-tu recevoir ?</strong></p>
        `,
        answers: ['fleurs', 'bouquet', 'un bouquet', 'des fleurs'],
        hints: [
          'La réponse appartient au végétal.',
          'On l’offre souvent pour faire plaisir.',
          'Elle peut être liée à un parfum, une couleur, un ruban.',
          'Ce cadeau peut former un bouquet.'
        ],
        success: 'Le message est devenu clair.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>La Rose Noire cachait des fleurs.</h3>
        <p>Pas pour décorer une journée.</p>
        <p>Pour te rappeler qu’une attention peut parfois parler plus doucement qu’une phrase, mais rester plus longtemps dans la tête.</p>
      </div>
    `,
    memory: 'La Rose Noire — une attention florale, pensée pour te faire sourire sans avoir besoin de grands discours.'
  },
  {
    id: 3,
    code: '10-AVRIL',
    title: 'Le Parc des Premiers Secrets',
    gift: 'Journée avec toi',
    teaser: 'Un lieu, une date, et un souvenir qui a commencé quelque chose entre nous.',
    intro: `
      <p>Cette porte ne commence pas par un objet.</p>
      <p>Elle commence par un endroit, un instant, et un souvenir qui a laissé une trace.</p>
    `,
    riddles: [
      {
        type: 'memory',
        title: 'Épreuve I — Ce qui a commencé',
        q: `
          <p>Ce souvenir n’a pas eu besoin de durer longtemps.</p>
          <p>Il n’a pas rempli une journée entière.</p>
          <p>Pourtant il a changé la manière dont cette date existe dans ma tête.</p>
          <p>Ce n’était pas un cadeau, ni une promesse, ni une fête.</p>
          <p><strong>Quel moment cherche-t-on ?</strong></p>
        `,
        answers: ['premier baiser', 'premier bisou', 'bisou', 'baiser'],
        hints: [
          'Ce souvenir concerne nous deux.',
          'Il a duré peu de temps, mais il compte beaucoup.',
          'Il est arrivé avant beaucoup d’autres souvenirs.',
          'C’était notre premier bisou.'
        ],
        success: 'Oui. Cette porte commence par ce premier bisou.'
      },
      {
        type: 'place',
        title: 'Épreuve II — Le témoin discret',
        q: `
          <p>Ce n’était pas une maison.</p>
          <p>Ce n’était pas une rue.</p>
          <p>C’était un endroit assez grand pour marcher, assez calme pour s’arrêter, et assez particulier pour devenir un souvenir.</p>
          <p>Ce jour-là, ce lieu n’était pas seulement un décor.</p>
          <p><strong>Quel lieu était-ce ?</strong></p>
        `,
        answers: ['parc disle', "parc d'isle", 'parc d isle', 'parc de lisle', "parc de l'isle", 'parc de l isle', 'parc isle'],
        hints: [
          'C’est un lieu extérieur.',
          'On pouvait s’y promener sans chercher une destination précise.',
          'Son nom évoque presque quelque chose entouré d’eau.',
          'Il se trouve à Saint-Quentin.'
        ],
        success: 'Tu as retrouvé le témoin discret de ce souvenir.'
      },
      {
        type: 'date',
        title: 'Épreuve III — Les chiffres cachés',
        q: `
          <p class="instruction">Les chiffres sont là, mais pas sous forme de date.</p>
          <div class="date-puzzle">
            <span>Dix pas avant d’oser.</span>
            <span>Quatre battements avant de sourire.</span>
          </div>
          <p>Transforme ces deux indices en date.</p>
        `,
        answers: ['10 avril', 'dix avril', '10/04', '1004'],
        hints: [
          'Le premier nombre indique le jour.',
          'Le second nombre indique le mois.',
          'Le mois numéro 4 est celui d’avril.',
          'Écris la date comme on la dirait à voix haute.'
        ],
        success: 'La date est revenue à sa place.'
      },
      {
        type: 'chronology',
        title: 'Épreuve IV — Remettre l’instant dans l’ordre',
        q: `
          <p>Remets ces fragments dans l’ordre logique du souvenir :</p>
          <div class="sequence-list">
            <span>A — Le lieu</span>
            <span>B — Le premier bisou</span>
            <span>C — La date</span>
          </div>
          <p>Écris les lettres dans le bon ordre.</p>
        `,
        answers: ['cab'],
        hints: [
          'On situe d’abord le moment dans le temps.',
          'Ensuite vient l’endroit.',
          'Le souvenir lui-même arrive après le cadre.',
          'Date, lieu, souvenir.'
        ],
        success: 'La chronologie du souvenir est reconstituée.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Une journée à réécrire',
        q: `
          <p>Ce cadeau ne tient pas dans une boîte.</p>
          <p>Il ne se pose pas sur une étagère.</p>
          <p>Il se vit, se traverse, et se garde ensuite en souvenir.</p>
          <p>Il part d’un moment qui a déjà existé pour en créer un nouveau.</p>
          <p><strong>Que cache cette porte ?</strong></p>
        `,
        answers: ['journée avec toi', 'journee avec toi', 'date avec toi', 'une journée avec toi', 'une journee avec toi'],
        hints: [
          'Ce cadeau se vit plutôt qu’il ne se déballe.',
          'Il implique du temps passé ensemble.',
          'Il peut contenir plusieurs endroits, plusieurs moments, plusieurs surprises.',
          'C’est une journée que l’on passera ensemble.'
        ],
        success: 'Tu as trouvé : cette porte cache une journée qui sera à nous.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Parc des Premiers Secrets cachait une journée ensemble.</h3>
        <p>Parce qu’un souvenir peut en faire naître un autre.</p>
        <p>Cette fois, ce ne sera pas seulement un instant : ce sera une journée pensée pour nous.</p>
      </div>
    `,
    memory: 'Le Parc des Premiers Secrets — une journée à vivre ensemble, née du souvenir du 10 avril.'
  },
  {
    id: 4,
    code: 'AUBE-ROYALE',
    title: 'L’Aube Royale',
    gift: 'Petit-déjeuner',
    teaser: 'Un cadeau qui commence avant que la journée ait vraiment choisi son rythme.',
    intro: `
      <p>Cette porte appartient aux premières heures.</p>
      <p>Celles où le monde est encore un peu silencieux, et où une attention peut changer le début d’une journée.</p>
    `,
    riddles: [
      {
        type: 'morse',
        title: 'Épreuve I — Le signal du matin',
        q: `
          <p class="instruction">Traduis ce message en morse.</p>
          <div class="code-line">.- ..- -... .</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['aube'],
        hints: [
          'Ce n’est pas un mot à deviner, c’est un code à traduire.',
          'Chaque groupe de points et de traits donne une lettre.',
          'Le mot obtenu désigne un début de journée.',
          'Le premier groupe donne A.'
        ],
        success: 'L’aube apparaît avant le reste.'
      },
      {
        type: 'association',
        title: 'Épreuve II — Les compagnons du réveil',
        q: `
          <p>Trois mots vont ensemble :</p>
          <div class="word-chips">
            <span>Oreiller</span><span>Silence</span><span>Lumière pâle</span>
          </div>
          <p>Un quatrième mot les rejoint naturellement, mais il n’est pas le cadeau.</p>
          <p><strong>Quel est ce mot ?</strong></p>
        `,
        answers: ['réveil', 'reveil'],
        hints: [
          'Ce mot arrive souvent avant le premier geste de la journée.',
          'Certaines personnes l’ignorent, d’autres le repoussent.',
          'Il peut être un objet ou un moment.',
          'Il sonne parfois trop tôt.'
        ],
        success: 'Le réveil est trouvé. La journée peut commencer.'
      },
      {
        type: 'deduction',
        title: 'Épreuve III — L’intrus de la table',
        q: `
          <p>Quatre éléments sont posés devant toi :</p>
          <div class="evidence-grid">
            <div>Tasse</div><div>Assiette</div><div>Couverture</div><div>Cuillère</div>
          </div>
          <p>Lequel n’appartient pas vraiment à la scène qui se prépare ?</p>
        `,
        answers: ['couverture'],
        hints: [
          'Trois éléments peuvent se retrouver sur une table.',
          'L’intrus appartient plutôt au lit ou au canapé.',
          'Ce n’est pas quelque chose avec lequel on mange.',
          'La réponse commence par C.'
        ],
        success: 'L’intrus est retiré. La scène devient plus claire.'
      },
      {
        type: 'code',
        title: 'Épreuve IV — Le mot servi en secret',
        q: `
          <p class="instruction">Décale chaque lettre d’un cran en arrière dans l’alphabet.</p>
          <div class="code-line">HPVSNBOEJTF</div>
          <p>Quel mot est servi ?</p>
        `,
        answers: ['gourmandise'],
        hints: [
          'C’est un code César très simple.',
          'B redevient A.',
          'Le mot obtenu parle d’envie et de plaisir.',
          'Il commence par G.'
        ],
        success: 'La gourmandise rejoint la table.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Ce qui attend au réveil',
        q: `
          <p>Il arrive avant le reste de la journée.</p>
          <p>Il peut être simple ou préparé avec attention.</p>
          <p>Il peut contenir quelque chose à boire, quelque chose à manger, et surtout l’envie de te faire commencer la journée autrement.</p>
          <p><strong>Quel cadeau se cache ici ?</strong></p>
        `,
        answers: ['petit dejeuner', 'petit-déjeuner', 'petit dej', 'petit-déj', 'petit déjeuner'],
        hints: [
          'Ce cadeau se passe plutôt le matin.',
          'Il peut se préparer à la maison.',
          'Il mélange attention et gourmandise.',
          'Il se prend souvent après le réveil.'
        ],
        success: 'Tu as trouvé ce que l’aube préparait.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>L’Aube Royale cachait un petit-déjeuner.</h3>
        <p>Un matin où tu n’auras rien à préparer.</p>
        <p>Juste à profiter de quelque chose pensé pour commencer ta journée avec douceur.</p>
      </div>
    `,
    memory: 'L’Aube Royale — un matin préparé pour toi, avec attention et gourmandise.'
  },
  {
    id: 5,
    code: 'JOKER-18',
    title: 'Le Joker',
    gift: 'Une envie à réaliser',
    teaser: 'Une porte spéciale : elle ne promet pas un objet, mais une possibilité.',
    intro: `
      <p>Cette porte n’est pas là pour deviner une chose précise.</p>
      <p>Elle est là pour comprendre une règle : parfois, le vrai cadeau est de pouvoir choisir.</p>
    `,
    riddles: [
      {
        type: 'deduction',
        title: 'Épreuve I — La carte absente',
        q: `
          <p>Dans ce jeu, quatre cartes sont visibles :</p>
          <div class="word-chips">
            <span>Cœur</span><span>Carreau</span><span>Trèfle</span><span>Pique</span>
          </div>
          <p>Une carte spéciale n’appartient à aucune famille, mais peut changer la partie.</p>
          <p>Ne donne pas son nom : donne ce qu’elle représente ici.</p>
        `,
        answers: ['possibilite', 'possibilité', 'option', 'chance'],
        hints: [
          'On ne cherche pas le nom écrit sur la porte.',
          'On cherche l’idée derrière cette carte.',
          'Cette carte ouvre quelque chose qui n’était pas prévu.',
          'La réponse peut être “possibilité”.'
        ],
        success: 'Tu as compris : cette carte représente une possibilité.'
      },
      {
        type: 'logic',
        title: 'Épreuve II — Le choix impossible',
        q: `
          <p>Tu dois choisir entre ces trois phrases :</p>
          <div class="testimony">
            <p>A — “Je veux un cadeau déjà décidé.”</p>
            <p>B — “Je veux pouvoir choisir plus tard.”</p>
            <p>C — “Je veux que le cadeau soit le même chaque mois.”</p>
          </div>
          <p>Quelle lettre correspond le mieux à cette porte ?</p>
        `,
        answers: ['b'],
        hints: [
          'Cette porte ne fixe pas tout à l’avance.',
          'Elle garde une place pour une envie future.',
          'La bonne phrase parle d’un choix plus tard.',
          'La réponse est une seule lettre.'
        ],
        success: 'Le choix est laissé ouvert.'
      },
      {
        type: 'concept',
        title: 'Épreuve III — Ce qui peut attendre',
        q: `
          <p>Je peux être raisonnable ou capricieux.</p>
          <p>Je peux être petit ou plus ambitieux.</p>
          <p>Je peux apparaître maintenant, demain, ou dans plusieurs semaines.</p>
          <p>Je ne suis pas encore défini, mais j’existe déjà dans ta tête.</p>
          <p><strong>Que suis-je ?</strong></p>
        `,
        answers: ['envie', 'souhait', 'désir', 'desir'],
        hints: [
          'La réponse n’est pas un objet précis.',
          'Elle peut changer selon ton humeur.',
          'Elle commence souvent par “j’aimerais…”.',
          'C’est quelque chose que tu peux demander.'
        ],
        success: 'Une envie peut attendre le bon moment.'
      },
      {
        type: 'rule',
        title: 'Épreuve IV — La règle unique',
        q: `
          <p>Si ce pouvoir revenait chaque jour, il deviendrait normal.</p>
          <p>S’il revenait chaque semaine, il perdrait un peu de sa magie.</p>
          <p>Il doit donc être rare pour rester précieux.</p>
          <p><strong>Combien de fois pourra-t-il être utilisé ?</strong></p>
        `,
        answers: ['une fois', '1 fois', 'une seule fois', '1'],
        hints: [
          'La réponse est une quantité.',
          'Ce n’est pas plusieurs.',
          'La rareté fait partie du cadeau.',
          'Ce pouvoir ne se joue qu’une seule fois.'
        ],
        success: 'La règle est posée : ce pouvoir sera rare.'
      },
      {
        type: 'final',
        title: 'Épreuve V — La carte blanche',
        q: `
          <p>Cette porte ne cache pas une boîte.</p>
          <p>Elle ne cache pas un objet déjà choisi.</p>
          <p>Elle cache le droit de me demander quelque chose, au moment où tu en auras vraiment envie.</p>
          <p><strong>Quel cadeau viens-tu de gagner ?</strong></p>
        `,
        answers: ['carte blanche', 'voeu', 'vœu', 'envie à réaliser', 'envie a realiser', 'souhait à réaliser', 'souhait a realiser'],
        hints: [
          'Ce cadeau dépendra de toi.',
          'Tu pourras choisir ce que tu veux demander.',
          'Il faudra l’utiliser au bon moment.',
          'C’est une envie que je réaliserai.'
        ],
        success: 'Tu as trouvé le vrai pouvoir de cette porte.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Joker cachait une carte blanche.</h3>
        <p>Une envie à réaliser, une seule fois, quand tu décideras que c’est le bon moment.</p>
        <p>Ce cadeau ne choisit pas à ta place : il te laisse le pouvoir.</p>
      </div>
    `,
    memory: 'Le Joker — une carte blanche pour réaliser une envie que tu choisiras toi-même.'
  },
  {
    id: 6,
    code: 'APRÈS-MINUIT',
    title: 'Après Minuit',
    gift: 'Pyjama / lingerie',
    teaser: 'Une porte plus douce, plus intime, pensée pour la nuit et le confort.',
    intro: `
      <p>Cette porte ne doit pas tout dire trop vite.</p>
      <p>Elle avance dans la nuit, entre confort, douceur et confiance.</p>
    `,
    riddles: [
      {
        type: 'ambiance',
        title: 'Épreuve I — L’heure discrète',
        q: `
          <p>Je n’ai pas besoin de soleil.</p>
          <p>Je commence quand la journée accepte enfin de s’effacer.</p>
          <p>Je peux être calme, mystérieuse, reposante ou pleine de confidences.</p>
          <p><strong>Que suis-je ?</strong></p>
        `,
        answers: ['nuit'],
        hints: [
          'La réponse est un moment.',
          'Elle arrive après le soir.',
          'Elle est liée au sommeil.',
          'Elle est l’opposé du jour.'
        ],
        success: 'La nuit ouvre cette porte.'
      },
      {
        type: 'touch',
        title: 'Épreuve II — Ce que la peau remarque',
        q: `
          <p>Je ne suis pas le vêtement.</p>
          <p>Je ne suis pas sa couleur.</p>
          <p>Je suis ce que l’on ressent quand on le porte : agréable, souple, léger, rassurant.</p>
          <p><strong>Quel mot décrit cette sensation ?</strong></p>
        `,
        answers: ['confort'],
        hints: [
          'La réponse n’est pas une matière précise.',
          'Elle décrit ce que tu ressens en portant quelque chose.',
          'Elle est liée au bien-être.',
          'On peut dire qu’un vêtement est “...” quand on s’y sent bien.'
        ],
        success: 'Le confort est trouvé.'
      },
      {
        type: 'code',
        title: 'Épreuve III — Le mot après le silence',
        q: `
          <p class="instruction">Lis une lettre sur deux, en commençant par la première.</p>
          <div class="code-line">D X O R U M C E E U W R</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['douceur'],
        hints: [
          'Toutes les lettres ne servent pas.',
          'Il faut garder un rythme régulier.',
          'La première lettre à garder est D.',
          'Garde une lettre, ignore la suivante, et recommence.'
        ],
        success: 'La douceur rejoint la nuit.'
      },
      {
        type: 'concept',
        title: 'Épreuve IV — Ce qui ne se partage pas avec tout le monde',
        q: `
          <p>Je ne suis pas un secret honteux.</p>
          <p>Je ne suis pas quelque chose à cacher par peur.</p>
          <p>Je suis simplement ce qui appartient à toi, à ton corps, à ton espace, à ta confiance.</p>
          <p><strong>Quel mot suis-je ?</strong></p>
        `,
        answers: ['intimité', 'intimite'],
        hints: [
          'La réponse parle de quelque chose de personnel.',
          'Elle peut concerner le corps, la chambre, les pensées.',
          'Elle demande du respect.',
          'Elle commence par INT.'
        ],
        success: 'L’intimité est trouvée sans être forcée.'
      },
      {
        type: 'final',
        title: 'Épreuve V — La tenue de la nuit',
        q: `
          <p>Ce cadeau peut être doux, joli, confortable, discret ou plus élégant.</p>
          <p>Il appartient aux moments où l’on se sent chez soi, dans son espace, dans sa nuit.</p>
          <p>Il n’est pas fait pour tout le monde.</p>
          <p>Il est choisi pour toi.</p>
          <p><strong>Que cache cette porte ?</strong></p>
        `,
        answers: ['pyjama', 'lingerie', 'pyjama lingerie', 'pyjama et lingerie', 'tenue de nuit'],
        hints: [
          'C’est quelque chose que tu peux porter.',
          'C’est lié à la nuit ou à l’intimité.',
          'Cela peut être très confortable ou plus élégant.',
          'La réponse peut être pyjama ou lingerie.'
        ],
        success: 'Tu as trouvé ce que la nuit préparait.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Après Minuit cachait une tenue choisie pour toi.</h3>
        <p>Quelque chose entre confort, douceur et intimité.</p>
        <p>Pas pour impressionner le monde : pour que tu te sentes bien.</p>
      </div>
    `,
    memory: 'Après Minuit — une attention douce et personnelle, pensée pour tes moments à toi.'
  },
  {
    id: 7,
    code: 'CHAPITRE-XII',
    title: 'Chapitre XII',
    gift: 'Livre au choix',
    teaser: 'Certaines histoires attendent encore que tu les choisisses.',
    intro: `
      <p>Cette porte ne commence pas par un titre.</p>
      <p>Elle commence par cette sensation étrange : une histoire existe déjà quelque part, mais elle n’a pas encore trouvé tes mains.</p>
    `,
    riddles: [
      {
        type: 'code',
        title: 'Épreuve I — Le mot chiffré',
        q: `
          <p class="instruction">Décale chaque lettre d’un cran en arrière.</p>
          <div class="code-line">JNBHJOBUJPO</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['imagination'],
        hints: [
          'C’est un code César.',
          'Chaque lettre doit revenir à celle qui la précède.',
          'Le mot obtenu permet de créer des mondes sans les toucher.',
          'Il commence par I.'
        ],
        success: 'L’imagination ouvre la première page.'
      },
      {
        type: 'deduction',
        title: 'Épreuve II — Qui parle ?',
        q: `
          <p>Quatre personnes participent à une histoire.</p>
          <div class="testimony">
            <p>A — Celui qui écrit.</p>
            <p>B — Celle qui lit.</p>
            <p>C — Celui qui existe dans l’histoire.</p>
            <p>D — Celle qui imprime les pages.</p>
          </div>
          <p>Qui invente vraiment le monde au départ ? Réponds par le rôle, pas par la lettre.</p>
        `,
        answers: ['auteur', 'l auteur', "l'auteur"],
        hints: [
          'Ce n’est pas forcément la personne qui tient le livre.',
          'Ce rôle existe avant la lecture.',
          'Sans lui, l’histoire n’aurait pas été écrite.',
          'Il écrit le livre.'
        ],
        success: 'L’auteur est retrouvé.'
      },
      {
        type: 'order',
        title: 'Épreuve III — Le chemin d’une histoire',
        q: `
          <p>Remets ces éléments du plus grand au plus précis :</p>
          <div class="sequence-list">
            <span>A — Mot</span>
            <span>B — Livre</span>
            <span>C — Page</span>
            <span>D — Chapitre</span>
          </div>
          <p>Écris les lettres dans le bon ordre.</p>
        `,
        answers: ['bdca'],
        hints: [
          'Commence par l’objet entier.',
          'Un chapitre contient plusieurs pages.',
          'Une page contient plusieurs mots.',
          'Livre → chapitre → page → mot.'
        ],
        success: 'Le chemin est clair : une histoire se rapproche peu à peu.'
      },
      {
        type: 'real',
        title: 'Épreuve IV — La page réelle',
        q: `
          <p>Certaines réponses peuvent quitter l’écran.</p>
          <p>Quand cette porte deviendra réelle, un petit marque-page pourra t’attendre quelque part.</p>
          <p>Il portera un mot discret.</p>
          <p><strong>Quel mot est écrit dessus ?</strong></p>
          <p class="admin-note">Préparation : glisse un marque-page avec le mot <strong>ENCRE</strong> dans un livre ou dans l’enveloppe du ticket.</p>
        `,
        answers: ['encre'],
        hints: [
          'Cette réponse peut être cachée dans le monde réel.',
          'Cherche quelque chose lié aux pages.',
          'Le mot évoque l’écriture.',
          'Il commence par E.'
        ],
        success: 'L’encre laisse sa trace.'
      },
      {
        type: 'final',
        title: 'Épreuve V — L’histoire qui t’attend',
        q: `
          <p>Je peux contenir des mondes, des personnages, des phrases que tu n’as pas encore rencontrées.</p>
          <p>Je peux te suivre dans un sac, rester près d’un lit, ou attendre sur une étagère.</p>
          <p>Cette fois, ce ne sera pas une histoire choisie pour toi.</p>
          <p>Ce sera une histoire que tu pourras choisir toi-même.</p>
          <p><strong>Quel cadeau se cache ici ?</strong></p>
        `,
        answers: ['livre', 'un livre', 'livre au choix'],
        hints: [
          'Ce cadeau se lit.',
          'Il contient des pages.',
          'Tu pourras choisir lequel tu veux.',
          'C’est un livre.'
        ],
        success: 'Tu as trouvé l’histoire qui t’attend.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Chapitre XII cachait un livre au choix.</h3>
        <p>Parce que certaines histoires sont offertes.</p>
        <p>Et d’autres méritent d’être choisies par toi.</p>
      </div>
    `,
    memory: 'Chapitre XII — une histoire que tu pourras choisir toi-même.'
  },
  {
    id: 8,
    code: 'FESTIN-DORÉ',
    title: 'Le Festin Doré',
    gift: 'Pack nourriture',
    teaser: 'Un panier pour les envies, les goûts, et les petits bonheurs qui se mangent.',
    intro: `
      <p>Cette porte n’est pas très raisonnable.</p>
      <p>Elle sait que certaines attentions passent aussi par les choses qu’on aime grignoter.</p>
    `,
    riddles: [
      {
        type: 'logic',
        title: 'Épreuve I — L’intrus du panier',
        q: `
          <p>Dans ce panier imaginaire, une chose n’a rien à faire :</p>
          <div class="word-chips">
            <span>Sucré</span><span>Salé</span><span>Préféré</span><span>Fragile</span>
          </div>
          <p>Quel mot est le moins lié à ce que l’on mange ?</p>
        `,
        answers: ['fragile'],
        hints: [
          'Trois mots peuvent décrire des goûts ou des envies.',
          'Un mot décrit plutôt une manière de manipuler quelque chose.',
          'Ce mot n’aide pas à savoir ce que tu aimes manger.',
          'La réponse commence par F.'
        ],
        success: 'L’intrus est sorti du panier.'
      },
      {
        type: 'code',
        title: 'Épreuve II — Le code gourmand',
        q: `
          <p class="instruction">Chaque nombre indique une lettre.</p>
          <div class="code-line">7 - 15 - 21 - 18 - 13 - 1 - 14 - 4</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['gourmand'],
        hints: [
          'A vaut 1.',
          'Le premier nombre donne G.',
          'Le mot obtenu parle d’une envie de manger quelque chose qui fait plaisir.',
          'Il commence par GOUR.'
        ],
        success: 'Le code était gourmand.'
      },
      {
        type: 'personal',
        title: 'Épreuve III — La piste préférée',
        q: `
          <p>Ce plat n’est pas le cadeau entier.</p>
          <p>Mais il dit quelque chose de tes goûts.</p>
          <p>Il contient des pâtes, une sauce connue, et revient souvent quand on parle de tes plats préférés.</p>
          <p><strong>Quel plat est-ce ?</strong></p>
        `,
        answers: ['pates carbo', 'pâtes carbo', 'carbonara', 'pates carbonara', 'pâtes carbonara'],
        hints: [
          'C’est un plat salé.',
          'Il contient des pâtes.',
          'Son nom est souvent raccourci en “carbo”.',
          'Ce sont des pâtes carbo.'
        ],
        success: 'La piste des carbo est validée.'
      },
      {
        type: 'real',
        title: 'Épreuve IV — L’étiquette cachée',
        q: `
          <p>Quand ce cadeau existera en vrai, un des éléments du panier pourra cacher une petite étiquette.</p>
          <p>Cette étiquette portera un mot.</p>
          <p><strong>Quel mot y sera écrit ?</strong></p>
          <p class="admin-note">Préparation : colle ou glisse une petite étiquette avec le mot <strong>MIAM</strong> dans le panier.</p>
        `,
        answers: ['miam'],
        hints: [
          'Cette réponse doit être cherchée dans le réel.',
          'Regarde ce qui accompagne les choses à manger.',
          'Le mot est très court.',
          'On peut le dire quand quelque chose donne envie.'
        ],
        success: 'L’étiquette gourmande est trouvée.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Le panier des envies',
        q: `
          <p>Ce cadeau ne contient pas une seule chose.</p>
          <p>Il rassemble plusieurs petites envies.</p>
          <p>Il peut être sucré, salé, drôle, réconfortant, ou juste rempli de choses que tu aimes.</p>
          <p><strong>Que cache cette porte ?</strong></p>
        `,
        answers: ['pack nourriture', 'panier gourmand', 'panier de nourriture', 'pack gourmand', 'nourriture'],
        hints: [
          'Ce cadeau contient plusieurs choses.',
          'Il est fait autour de ce que tu aimes manger.',
          'On peut l’imaginer comme un panier.',
          'C’est un pack de nourriture.'
        ],
        success: 'Le panier est découvert.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Festin Doré cachait un panier gourmand.</h3>
        <p>Des petites choses choisies pour toi, selon tes goûts, tes envies, et tes moments de gourmandise.</p>
      </div>
    `,
    memory: 'Le Festin Doré — un panier rempli de choses que tu aimes.'
  },
  {
    id: 9,
    code: 'FIL-DORÉ',
    title: 'Le Fil Doré',
    gift: 'Tee-shirts',
    teaser: 'Quelque chose à porter, mais surtout quelque chose choisi pour toi.',
    intro: `
      <p>Cette porte parle de style, de matière, de choix et de détails.</p>
      <p>Parce qu’un vêtement n’est jamais seulement un morceau de tissu quand il a été pensé pour quelqu’un.</p>
    `,
    riddles: [
      {
        type: 'material',
        title: 'Épreuve I — La matière simple',
        q: `
          <p>On me retrouve dans beaucoup de vêtements.</p>
          <p>Je peux être doux, léger, naturel ou confortable.</p>
          <p>Je ne suis pas le vêtement lui-même, mais je peux en être la base.</p>
          <p><strong>Que suis-je ?</strong></p>
        `,
        answers: ['coton'],
        hints: [
          'La réponse est une matière.',
          'On la retrouve souvent dans les vêtements du quotidien.',
          'Elle est naturelle.',
          'Elle commence par C.'
        ],
        success: 'La matière est trouvée.'
      },
      {
        type: 'visual',
        title: 'Épreuve II — Le détail qui change tout',
        q: `
          <p>Deux vêtements peuvent avoir la même forme.</p>
          <p>Pourtant un simple dessin, une phrase, une couleur ou un signe peut les rendre totalement différents.</p>
          <p><strong>Quel mot désigne ce détail visible ?</strong></p>
        `,
        answers: ['motif', 'imprime', 'imprimé', 'design'],
        hints: [
          'Ce n’est pas la taille.',
          'Ce n’est pas la matière.',
          'C’est ce que l’on remarque parfois en premier.',
          'Cela peut être un motif.'
        ],
        success: 'Le détail visible est trouvé.'
      },
      {
        type: 'code',
        title: 'Épreuve III — Le fil caché',
        q: `
          <p class="instruction">Lis les lettres paires seulement.</p>
          <div class="code-line">X S Y T Z Y L Q E</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['style'],
        hints: [
          'Toutes les lettres ne servent pas.',
          'Il faut compter les positions.',
          'Garde la 2e, la 4e, la 6e, etc.',
          'Le mot parle de manière de s’habiller.'
        ],
        success: 'Le style est trouvé.'
      },
      {
        type: 'choice',
        title: 'Épreuve IV — La bonne mesure',
        q: `
          <p>Un vêtement peut être beau.</p>
          <p>S’il n’est pas adapté à toi, il perd une partie de son intérêt.</p>
          <p>Avant de choisir, il faut donc penser à un détail essentiel.</p>
          <p><strong>Quel détail ?</strong></p>
        `,
        answers: ['taille', 'la taille'],
        hints: [
          'Ce détail n’est pas une couleur.',
          'Il permet que le vêtement t’aille bien.',
          'Il peut s’écrire S, M, L, etc.',
          'C’est la taille.'
        ],
        success: 'La taille compte aussi.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Ce que tu pourras porter',
        q: `
          <p>Il peut être simple ou marqué par un motif.</p>
          <p>Il peut devenir un vêtement de tous les jours.</p>
          <p>Il se choisit selon une taille, une matière, un style.</p>
          <p><strong>Quel cadeau se cache ici ?</strong></p>
        `,
        answers: ['tee shirt', 'tee-shirt', 'tshirt', 't-shirt', 'teeshirt', 'tee shirts', 'tee-shirts'],
        hints: [
          'C’est un vêtement.',
          'Il se porte en haut.',
          'Il peut être en coton.',
          'Son nom commence souvent par T.'
        ],
        success: 'Le Fil Doré révèle ce que tu pourras porter.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Fil Doré cachait des tee-shirts.</h3>
        <p>Des vêtements choisis pour toi, pas seulement pour être portés, mais parce qu’ils correspondent à quelque chose que j’ai imaginé pour toi.</p>
      </div>
    `,
    memory: 'Le Fil Doré — des tee-shirts choisis pour toi.'
  },
  {
    id: 10,
    code: 'PETIT-MONDE',
    title: 'Le Petit Monde',
    gift: 'Figurines',
    teaser: 'Un univers miniature, mais pas sans personnalité.',
    intro: `
      <p>Cette porte est petite seulement en apparence.</p>
      <p>Elle parle de détails, de collections, de personnages et de petits univers que l’on garde près de soi.</p>
    `,
    riddles: [
      {
        type: 'scale',
        title: 'Épreuve I — Changer d’échelle',
        q: `
          <p>Je réduis le monde sans le faire disparaître.</p>
          <p>Je garde les formes, les détails, parfois même les expressions.</p>
          <p>Je transforme quelque chose de grand en version que l’on peut poser dans une main.</p>
          <p><strong>Quel mot me décrit ?</strong></p>
        `,
        answers: ['miniature'],
        hints: [
          'La réponse parle de taille.',
          'Ce n’est pas “petit”, mais plus précis.',
          'On l’utilise pour une version réduite d’une chose.',
          'Le mot commence par MINI.'
        ],
        success: 'L’échelle a changé.'
      },
      {
        type: 'logic',
        title: 'Épreuve II — La collection',
        q: `
          <p>Un seul élément peut être mignon.</p>
          <p>Deux commencent à se répondre.</p>
          <p>Trois donnent envie de continuer.</p>
          <p>Quand plusieurs objets se rassemblent autour d’un même univers, comment appelle-t-on cela ?</p>
        `,
        answers: ['collection'],
        hints: [
          'La réponse parle de plusieurs éléments.',
          'On peut la compléter avec le temps.',
          'Elle peut avoir un thème.',
          'C’est une collection.'
        ],
        success: 'La collection prend forme.'
      },
      {
        type: 'deduction',
        title: 'Épreuve III — Le rôle caché',
        q: `
          <p>Dans un petit monde, il peut y avoir :</p>
          <div class="word-chips">
            <span>un décor</span><span>une scène</span><span>une histoire</span><span>quelqu’un</span>
          </div>
          <p>Lequel donne le plus souvent une personnalité à l’ensemble ?</p>
        `,
        answers: ['quelqu un', 'quelqu’un', 'personnage'],
        hints: [
          'La réponse n’est pas le décor.',
          'Elle peut avoir une expression ou une posture.',
          'Elle représente souvent une personne, une créature ou un héros.',
          'On peut l’appeler un personnage.'
        ],
        success: 'Le personnage donne vie au décor.'
      },
      {
        type: 'observation',
        title: 'Épreuve IV — Le détail',
        q: `
          <p>Ce genre de cadeau se reconnaît souvent à ce qu’on remarque en s’approchant.</p>
          <p>Une expression, une pose, un accessoire, une couleur.</p>
          <p>Ce n’est pas sa taille qui compte le plus, mais ce qui la rend reconnaissable.</p>
          <p><strong>Quel mot résume cela ?</strong></p>
        `,
        answers: ['detail', 'détail'],
        hints: [
          'La réponse se remarque quand on regarde de près.',
          'Elle peut être minuscule mais importante.',
          'Elle différencie deux objets proches.',
          'Le mot commence par D.'
        ],
        success: 'Le détail est repéré.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Le petit objet du monde',
        q: `
          <p>Je suis petite, mais je peux avoir une personnalité.</p>
          <p>Je peux appartenir à une collection.</p>
          <p>Je peux représenter un personnage, un thème, un univers.</p>
          <p><strong>Quel cadeau se cache ici ?</strong></p>
        `,
        answers: ['figurine', 'figurines', 'petite figurine', 'petites figurines'],
        hints: [
          'C’est un petit objet.',
          'On peut le collectionner.',
          'Il peut représenter un personnage.',
          'C’est une figurine.'
        ],
        success: 'Le Petit Monde révèle ses figurines.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Petit Monde cachait des figurines.</h3>
        <p>Des petits personnages, un univers miniature, et quelque chose à collectionner ou simplement à garder parce que ça te plaît.</p>
      </div>
    `,
    memory: 'Le Petit Monde — un petit univers à garder près de toi.'
  },
  {
    id: 11,
    code: 'JARDIN-SECRET',
    title: 'Le Jardin Secret',
    gift: 'Cadeau intime',
    teaser: 'Certains cadeaux ne se racontent pas sur la première page.',
    intro: `
      <p>Cette porte avance doucement.</p>
      <p>Elle parle de confiance, de secret, de liberté, et de quelque chose qui ne regarde que toi.</p>
    `,
    riddles: [
      {
        type: 'concept',
        title: 'Épreuve I — Ce qui t’appartient',
        q: `
          <p>Je peux exister sans être montré.</p>
          <p>Je peux être gardé sans être lourd.</p>
          <p>Je peux être partagé seulement avec les personnes en qui tu as confiance.</p>
          <p><strong>Que suis-je ?</strong></p>
        `,
        answers: ['secret'],
        hints: [
          'La réponse peut rester cachée.',
          'Elle n’est pas forcément négative.',
          'On choisit à qui on la confie.',
          'C’est un secret.'
        ],
        success: 'Le secret ouvre la porte sans la brusquer.'
      },
      {
        type: 'deduction',
        title: 'Épreuve II — La condition',
        q: `
          <p>Trois mots sont nécessaires pour continuer :</p>
          <div class="word-chips">
            <span>respect</span><span>écoute</span><span>pression</span>
          </div>
          <p>Un seul n’a rien à faire ici. Lequel ?</p>
        `,
        answers: ['pression'],
        hints: [
          'Deux mots rendent un espace plus sûr.',
          'Un mot va contre l’idée de liberté.',
          'La mauvaise réponse force au lieu de respecter.',
          'C’est “pression”.'
        ],
        success: 'La mauvaise condition disparaît.'
      },
      {
        type: 'code',
        title: 'Épreuve III — Le mot inversé',
        q: `
          <p class="instruction">Lis ce mot à l’envers.</p>
          <div class="code-line">ÉTILAD</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['dalite', 'délicat', 'delicat'],
        hints: [
          'Le mot n’est pas à lire dans le sens habituel.',
          'Il faut retourner l’ordre des lettres.',
          'Il décrit quelque chose qu’on aborde doucement.',
          'La bonne réponse est “délicat”.'
        ],
        success: 'Cette porte demande de la délicatesse.'
      },
      {
        type: 'real',
        title: 'Épreuve IV — Le mot caché',
        q: `
          <p>Certaines réponses peuvent être préparées hors du site.</p>
          <p>Un petit papier pourra être caché dans une enveloppe noire, un coffret ou un endroit discret.</p>
          <p><strong>Quel mot y est écrit ?</strong></p>
          <p class="admin-note">Préparation : écris le mot <strong>CONFIANCE</strong> sur un petit papier caché dans le cadeau ou son emballage.</p>
        `,
        answers: ['confiance'],
        hints: [
          'Cette réponse peut t’attendre dans le réel.',
          'Le mot est lié au fait de se sentir en sécurité.',
          'Il commence par CON.',
          'Sans ce mot, cette porte n’aurait pas de sens.'
        ],
        success: 'La confiance est trouvée.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Ce qui ne regarde que toi',
        q: `
          <p>Ce cadeau n’est pas fait pour être expliqué à tout le monde.</p>
          <p>Il est personnel, discret, choisi avec respect.</p>
          <p>Il appartient à ton espace, à ton envie, à ton intimité.</p>
          <p><strong>Quel type de cadeau se cache ici ?</strong></p>
        `,
        answers: ['cadeau intime', 'secret intime', 'sextoy', 'jouet intime'],
        hints: [
          'Ce n’est pas un cadeau public.',
          'Il est lié à l’intimité.',
          'Il doit rester quelque chose de respectueux et personnel.',
          'C’est un cadeau intime.'
        ],
        success: 'Le Jardin Secret a révélé son sens.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Jardin Secret cachait un cadeau intime.</h3>
        <p>Quelque chose de personnel, choisi avec respect, et seulement pour toi.</p>
      </div>
    `,
    memory: 'Le Jardin Secret — un cadeau personnel, discret, et pensé avec respect.'
  },
  {
    id: 12,
    code: 'DERNIER-MASQUE',
    title: 'Le Dernier Masque',
    gift: 'Coffre de souvenirs',
    teaser: 'La dernière porte ne ferme pas l’histoire. Elle la rassemble.',
    intro: `
      <p>Cette porte est différente.</p>
      <p>Elle n’est pas pensée pour le début de l’aventure, mais pour le moment où plusieurs souvenirs auront déjà existé.</p>
    `,
    riddles: [
      {
        type: 'memory',
        title: 'Épreuve I — Ce qui reste après les cadeaux',
        q: `
          <p>Un cadeau peut être utilisé, porté, mangé, lu ou rangé.</p>
          <p>Mais certains morceaux restent même quand le cadeau est passé.</p>
          <p>Une photo, un ticket, un mot, une date, un détail.</p>
          <p><strong>Comment appelle-t-on ce qui reste dans la tête ?</strong></p>
        `,
        answers: ['souvenir', 'souvenirs'],
        hints: [
          'La réponse n’est pas un objet précis.',
          'Elle peut être liée à une date.',
          'Elle peut rester longtemps après un moment.',
          'C’est un souvenir.'
        ],
        success: 'Le premier morceau est retrouvé.'
      },
      {
        type: 'order',
        title: 'Épreuve II — Les fragments',
        q: `
          <p>Remets ces fragments dans l’ordre d’une aventure :</p>
          <div class="sequence-list">
            <span>A — Découvrir</span>
            <span>B — Chercher</span>
            <span>C — Garder</span>
            <span>D — Ouvrir</span>
          </div>
          <p>Écris les lettres dans le bon ordre.</p>
        `,
        answers: ['dbac'],
        hints: [
          'On commence par ouvrir une porte.',
          'Ensuite on cherche ce qu’elle cache.',
          'Puis on découvre.',
          'Enfin, on garde le souvenir.'
        ],
        success: 'L’aventure reprend son ordre.'
      },
      {
        type: 'real',
        title: 'Épreuve III — La cache ancienne',
        q: `
          <p>Un jour, un indice pourra attendre dans quelque chose que tu possèdes déjà.</p>
          <p>Pas dans un objet nouveau.</p>
          <p>Dans un objet ancien, doux, offert avant cette porte, et capable de cacher quelque chose.</p>
          <p><strong>Quel mot y sera caché ?</strong></p>
          <p class="admin-note">Préparation : cache un papier avec le mot <strong>ARCHIVE</strong> dans l’ancien doudou avec fermeture.</p>
        `,
        answers: ['archive'],
        hints: [
          'Cette réponse ne vient pas du site.',
          'Elle peut être cachée dans quelque chose déjà chez toi.',
          'L’objet est doux et possède une ouverture.',
          'Le mot commence par A.'
        ],
        success: 'L’archive cachée est trouvée.'
      },
      {
        type: 'code',
        title: 'Épreuve IV — Le dernier code',
        q: `
          <p class="instruction">Traduis ce binaire en texte.</p>
          <div class="code-line binary">01000011 01001111 01000110 01000110 01010010 01000101</div>
          <p>Quel mot apparaît ?</p>
        `,
        answers: ['coffre'],
        hints: [
          'Chaque bloc correspond à une lettre.',
          'C’est du code binaire ASCII.',
          'Le mot obtenu peut contenir des choses précieuses.',
          'Il commence par C.'
        ],
        success: 'Le coffre apparaît.'
      },
      {
        type: 'final',
        title: 'Épreuve V — Ce que l’année rassemble',
        q: `
          <p>Je peux contenir des photos, des lettres, des tickets, des petits mots, des preuves d’instants vécus.</p>
          <p>Je ne suis pas seulement un objet.</p>
          <p>Je suis une façon de garder une année à portée de main.</p>
          <p><strong>Quel cadeau final se cache ici ?</strong></p>
        `,
        answers: ['coffre de souvenirs', 'boite a souvenirs', 'boîte à souvenirs', 'boite de souvenirs', 'boîte de souvenirs'],
        hints: [
          'Ce cadeau sert à rassembler.',
          'Il peut contenir des traces de moments vécus.',
          'Il peut se remplir au fil du temps.',
          'C’est un coffre ou une boîte de souvenirs.'
        ],
        success: 'Le dernier masque rassemble l’histoire.'
      }
    ],
    reveal: `
      <div class="reveal-card">
        <div class="stamp">DÉCOUVERT</div>
        <h3>Le Dernier Masque cachait un coffre de souvenirs.</h3>
        <p>Pas seulement un cadeau final.</p>
        <p>Un endroit pour garder les traces de tout ce que cette année aura créé.</p>
      </div>
    `,
    memory: 'Le Dernier Masque — un coffre pour rassembler les souvenirs de cette année.'
  }
];

const STORAGE_KEY = 'bal_des_secrets_state_v4';

function normalize(value) {
  return String(value || '')
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'`´]/g, '')
    .replace(/[^A-Z0-9]/g, '');
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
    triggerGoldBurst();
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

  let adminSection = document.getElementById('admin');
  if (!adminSection) {
    adminSection = document.createElement('section');
    adminSection.id = 'admin';
    adminSection.className = 'view card admin-only';
    document.querySelector('main')?.appendChild(adminSection);
  }

  adminSection.innerHTML = `
    <p class="eyebrow">Mode test</p>
    <h2>Administration</h2>
    <p class="admin-note">Ces boutons servent uniquement à tester sur ton appareil. Ils ne modifient pas le téléphone de Julie.</p>
    <div class="admin-grid">
      <button id="resetAllBtn">Tout réinitialiser</button>
      <button id="resetMonthBtn">Réinitialiser le mois</button>
      <button id="unlockAllBtn">Débloquer toutes les portes</button>
      <button id="resetAnswersBtn">Effacer seulement les réponses</button>
    </div>
    <h3>Débloquer une porte</h3>
    <div class="admin-door-grid">
      ${tickets.map(t => `<button onclick="adminUnlockDoor(${t.id})">${t.title}</button>`).join('')}
    </div>
  `;

  if (!document.querySelector('[data-view="admin"]')) {
    const nav = document.querySelector('nav');
    if (nav) {
      const btn = document.createElement('button');
      btn.dataset.view = 'admin';
      btn.textContent = 'Admin';
      btn.addEventListener('click', () => showView('admin'));
      nav.appendChild(btn);
    }
  }

  document.getElementById('resetAllBtn')?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    alert('Toute la progression a été réinitialisée sur cet appareil.');
    location.reload();
  });

  document.getElementById('resetMonthBtn')?.addEventListener('click', () => {
    const state = loadState();
    state.lastUnlockMonth = null;
    saveState(state);
    alert('Tu peux tester un nouveau code ce mois-ci.');
  });

  document.getElementById('unlockAllBtn')?.addEventListener('click', () => {
    const state = loadState();
    state.unlocked = tickets.map(t => t.id);
    state.lastUnlockMonth = null;
    saveState(state);
    alert('Toutes les portes sont débloquées pour test.');
    renderMemories();
    showView('memories');
  });

  document.getElementById('resetAnswersBtn')?.addEventListener('click', () => {
    const state = loadState();
    state.answers = {};
    state.hints = {};
    state.completed = [];
    saveState(state);
    alert('Réponses, indices et révélations effacés. Les portes restent débloquées.');
    renderMemories();
    showView('memories');
  });
}

window.adminUnlockDoor = function(ticketId) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (!ticket) return;
  const state = loadState();
  if (!state.unlocked.includes(ticketId)) state.unlocked.push(ticketId);
  state.lastUnlockMonth = null;
  saveState(state);
  renderRoom(ticket);
  showView('room');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

setupAdmin();


/* V10 — Décor esthétique sans confettis permanents */
function setupMasqueradeDecor() {
  if (!document.querySelector('.masquerade-watermark')) {
    const mask = document.createElement('div');
    mask.className = 'masquerade-watermark';
    mask.setAttribute('aria-hidden', 'true');
    document.body.appendChild(mask);
  }
}

function triggerGoldBurst() {
  const burst = document.createElement('div');
  burst.className = 'gold-burst';
  burst.setAttribute('aria-hidden', 'true');

  for (let i = 0; i < 34; i++) {
    const piece = document.createElement('span');
    piece.style.setProperty('--x', `${Math.random() * 100}%`);
    piece.style.setProperty('--delay', `${Math.random() * 120}ms`);
    piece.style.setProperty('--rot', `${Math.random() * 360}deg`);
    piece.style.setProperty('--drift', `${(Math.random() - 0.5) * 90}px`);
    burst.appendChild(piece);
  }

  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 1100);
}

setupMasqueradeDecor();
