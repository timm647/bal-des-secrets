const tickets = [
  {
    "id": 1,
    "code": "REFUGE-DORÉ",
    "title": "Le Refuge Doré",
    "gift": "Doudou",
    "teaser": "Un mystère doux, discret, pensé pour les choses que tu gardes près de toi sans toujours l’expliquer.",
    "intro": "<p>Certains trésors ne brillent pas.</p><p>Ils ne sont pas faits pour impressionner, ni pour être utiles à tout prix.</p><p>Ils restent là. Ils rassurent. Et parfois, ils accompagnent une vie plus longtemps qu’on ne l’avoue.</p>",
    "riddles": [
      {
        "type": "hidden-ending",
        "title": "Épreuve I — Au bord des phrases",
        "q": "<p class=\"instruction\">Pour trouver certains indices, il faut savoir regarder. Les détails racontent parfois plus que le reste.</p><div class=\"cipher-text ending-cipher\"><p>Il y a des objets qu’on garde plus longtemps que prévu, parfois toujours.</p><p>On les croit parfois inutiles, jusqu’au moment où ils comptent encore.</p><p>Certains souvenirs reviennent surtout quand tombe la nuit.</p><p>Ce qui rassure le plus ne fait pas toujours beaucoup de bruit doucement.</p><p>Une simple présence peut parfois faire plus qu’un discours et rassure.</p><p>Les choses les plus petites peuvent porter un morceau d’enfance.</p><p>On ne sait pas toujours expliquer pourquoi elles deviennent un souvenir.</p><p>Mais quand elles restent, c’est souvent qu’elles protègent un secret.</p><p>Et parfois, ce qui paraît enfantin devient simplement essentiel.</p></div><p><strong>Quel est ce mot ?</strong></p>",
        "answers": [
          "tendresse"
        ],
        "hints": [
          "Les phrases ne sont pas seulement là pour être lues dans leur ensemble.",
          "Certaines réponses se trouvent là où une phrase s’arrête.",
          "Observe les mots qui arrivent juste avant chaque point.",
          "Prends la première lettre de chaque mot placé juste avant un point."
        ],
        "success": "Le premier mot est trouvé. Ici, tout commence par la tendresse."
      },
      {
        "type": "rebus",
        "title": "Épreuve II — Le rébus du silence",
        "q": "<p class=\"instruction\">Deux images. Un seul mot à entendre.</p><div class=\"rebus-card image-rebus\"><figure class=\"rebus-image-card\"><img src=\"assets/roi-k.jpg\" alt=\"Carte roi K\" /></figure><span class=\"rebus-plus\">+</span><figure class=\"rebus-image-card\"><img src=\"assets/lin.jpg\" alt=\"Tissu de lin\" /></figure></div><p><strong>Quel mot se cache derrière ce rébus ?</strong></p>",
        "answers": [
          "calin",
          "câlin"
        ],
        "hints": [
          "Les deux images ne doivent pas être lues comme de simples objets.",
          "La première image représente surtout un symbole inscrit sur la carte.",
          "La seconde image montre une matière que l’on retrouve dans certains vêtements, comme des chemises ou des pantalons.",
          "Assemble le son de la lettre de la carte avec le nom de la matière."
        ],
        "success": "Oui. Un câlin ne dit rien, mais il peut rassurer beaucoup."
      },
      {
        "type": "concept",
        "title": "Épreuve III — Ce que l’on cherche",
        "q": "<p>Je ne suis ni une personne, ni un lieu.</p><p>Pourtant, beaucoup me cherchent.</p><p>Certains me trouvent dans une présence.</p><p>D’autres dans une habitude.</p><p>D’autres encore dans quelque chose qu’ils gardent depuis longtemps.</p><p>On peut avoir besoin de moi après une mauvaise nouvelle, un moment difficile, ou simplement lorsqu’on a envie de quelque chose qui fait du bien.</p><p><strong>Que suis-je ?</strong></p>",
        "answers": [
          "reconfort",
          "réconfort"
        ],
        "hints": [
          "La réponse ne peut pas se voir ni se toucher.",
          "Elle se ressent plus qu’elle ne se possède.",
          "Elle est proche du calme, de l’apaisement et de la sécurité.",
          "On la cherche souvent quand on a besoin d’aller mieux."
        ],
        "success": "Exact. Le réconfort peut parfois tenir dans très peu de choses."
      },
      {
        "type": "personal",
        "title": "Épreuve IV — Ce qui reste",
        "q": "<p>Un objet peut rester dans une chambre pendant des années.</p><p>Pour quelqu’un d’autre, il ne vaut presque rien.</p><p>Pour toi, il peut rappeler une époque, une présence, une habitude ou un moment.</p><p>Ce n’est donc pas seulement l’objet qui compte.</p><p>C’est le lien invisible qui s’est créé avec lui.</p><p><strong>Quel mot décrit ce lien ?</strong></p>",
        "answers": [
          "attachement"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "Elle peut exister entre une personne et un objet.",
          "Elle peut aussi exister entre deux personnes.",
          "Elle décrit un lien émotionnel que l’on crée avec quelque chose ou quelqu’un."
        ],
        "success": "Oui. Certains objets restent parce qu’on s’y attache."
      },
      {
        "type": "final",
        "title": "Épreuve V — Le vrai nom du refuge",
        "q": "<p>Certaines personnes l’oublient.</p><p>D’autres le retrouvent des années plus tard.</p><p>Il ne possède aucune valeur particulière.</p><p>Pourtant peu accepteraient qu’on le jette sans leur demander.</p><p>Il accompagne souvent les premiers rêves.</p><p>Et parfois même quelques rêves d’adulte.</p><p><strong>Qui est-il ?</strong></p>",
        "answers": [
          "doudou"
        ],
        "hints": [
          "La réponse est un objet.",
          "Beaucoup en ont possédé un durant l’enfance.",
          "Certains le conservent même en grandissant.",
          "Il est souvent associé au sommeil, à la douceur et au réconfort."
        ],
        "success": "Tu as trouvé le vrai nom du Refuge Doré."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Refuge Doré cachait un doudou.</h3><p>Pas seulement une peluche : un petit refuge à garder près de toi, pour les jours où un simple câlin vaut plus qu’un grand discours.</p></div>",
    "memory": "Le Refuge Doré — un souvenir doux, gardé pour toi.",
    "theme": "refuge"
  },
  {
    "id": 2,
    "code": "ROSE-NOIRE",
    "title": "La Rose Noire",
    "gift": "Fleurs",
    "teaser": "Une porte faite pour comprendre comment un message peut exister sans être écrit clairement.",
    "intro": "<p>Cette porte ne commence pas par le cadeau. Elle commence par une idée : certaines attentions parlent sans utiliser beaucoup de mots.</p>",
    "riddles": [
      {
        "type": "deduction",
        "title": "Épreuve I — Les quatre messagers",
        "q": "<p>Quatre messagers veulent porter une attention jusqu’à toi.</p><ul><li>Le papier garde les mots, mais demande qu’on le lise.</li><li>Le parfum laisse une trace, mais disparaît trop vite.</li><li>La lumière révèle, mais ne reste pas entre les mains.</li><li>Le végétal ne parle pas, mais peut transmettre quelque chose par sa présence.</li></ul><p>Cette porte cherche le messager qui peut être offert, gardé un moment, puis devenir souvenir.</p><p><strong>Quel messager choisis-tu ?</strong></p>",
        "answers": [
          "vegetal",
          "végétal"
        ],
        "hints": [
          "Ce n’est pas un objet fabriqué.",
          "Il peut vivre, changer, puis faner.",
          "On peut l’offrir sans écrire une phrase.",
          "La réponse désigne ce qui pousse."
        ],
        "success": "Tu as choisi le messager vivant."
      },
      {
        "type": "caesar",
        "title": "Épreuve II — Les lettres trop avancées",
        "q": "<p>Un mot devrait t’indiquer ce qu’il y a derrière un geste préparé pour toi.</p><p>Mais ses lettres semblent avoir trop avancé :</p><div class=\"cipher-text\"><strong>DWWHQWLRQ</strong></div><p><strong>Quel mot devait apparaître ?</strong></p>",
        "answers": [
          "attention"
        ],
        "hints": [
          "Le mot n’est pas mélangé : toutes les lettres ont bougé de la même manière.",
          "Pense à un ancien chef romain souvent associé à une couronne de laurier.",
          "Les lettres semblent être parties trop loin dans l’alphabet.",
          "Pour retrouver le mot, recule chaque lettre de trois positions."
        ],
        "success": "Oui : l’attention est retrouvée."
      },
      {
        "type": "logic",
        "title": "Épreuve III — Pourquoi ce geste ?",
        "q": "<p>Deux gestes peuvent se ressembler de l’extérieur.</p><p>Pourtant, l’un peut être fait au hasard, l’autre parce qu’il a été pensé pour toi.</p><p>Ce n’est pas ce qu’on tient dans la main qui change.</p><p>C’est la raison silencieuse derrière le geste.</p><p><strong>Quel mot désigne cette raison ?</strong></p>",
        "answers": [
          "intention"
        ],
        "hints": [
          "Ce mot ne désigne pas un objet.",
          "Il répond à la question : “pourquoi ?”.",
          "Il existe avant même que le geste soit fait.",
          "Il commence par INT."
        ],
        "success": "Oui : l’intention donne du sens au geste."
      },
      {
        "type": "morse",
        "title": "Épreuve IV — Points et traits",
        "q": "<p>Un petit message a été laissé comme une suite de battements.</p><div class=\"cipher-text\"><strong>.-. ..- -... .- -.</strong></div><p>Ce mot ne désigne pas le cadeau. Il désigne ce qui peut l’accompagner.</p><p><strong>Quel mot entends-tu derrière ces signes ?</strong></p>",
        "answers": [
          "ruban"
        ],
        "hints": [
          "Ce message n’utilise presque rien : seulement deux signes différents.",
          "Ces signes peuvent se lire comme des battements courts et longs.",
          "Ce système servait à transmettre des messages à distance.",
          "C’est du Morse : traduis les points et les traits en lettres."
        ],
        "success": "Oui : un ruban peut accompagner le message sans être le message."
      },
      {
        "type": "final",
        "title": "Épreuve V — Le message sans phrase",
        "q": "<p>Tu as retrouvé un messager vivant, une attention, une intention et un ruban.</p><p>Il reste à nommer ce qui peut porter tout cela à la fois.</p><p>On ne l’offre pas pour son utilité.</p><p>On l’offre parce qu’il y a quelque chose à dire sans forcément le prononcer.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "fleurs",
          "fleur"
        ],
        "hints": [
          "La réponse désigne un cadeau vivant.",
          "Il peut être accompagné d’un ruban.",
          "Il peut faner, mais le geste reste.",
          "On peut l’offrir en bouquet."
        ],
        "success": "Tu as trouvé le secret de la Rose Noire."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>La Rose Noire cachait des fleurs.</h3><p>Des fleurs choisies pour te transmettre un message sans avoir besoin de trop en dire.</p></div>",
    "memory": "La Rose Noire — un message vivant, pensé pour toi.",
    "theme": "rose"
  },
  {
    "id": 3,
    "code": "10-AVRIL",
    "title": "Le Parc des Premiers Secrets",
    "gift": "Date avec toi",
    "teaser": "Un souvenir, un endroit, puis une nouvelle journée à créer ensemble.",
    "intro": "<p>Cette porte commence dans le passé, mais elle ne s’y enferme pas. Elle utilise un souvenir pour ouvrir un nouveau moment à deux.</p>",
    "riddles": [
      {
        "type": "memory",
        "title": "Épreuve I — Deux nombres gardés",
        "q": "<p>Deux nombres ont été laissés comme une trace :</p><div class=\"date-fragments\"><span>10</span><span>04</span></div><p>Ce ne sont pas eux qui sont importants.</p><p>Ils protègent un souvenir très court, mais impossible à remplacer.</p><p><strong>Quel souvenir se cache derrière cette date ?</strong></p>",
        "answers": [
          "premierbisou",
          "premierbaiser",
          "bisou",
          "baiser"
        ],
        "hints": [
          "La réponse n’est pas “10 avril”.",
          "Les nombres donnent le jour, mais pas le souvenir.",
          "Ce souvenir a duré seulement quelques secondes.",
          "C’est la première fois que nos lèvres se sont rejointes."
        ],
        "success": "Oui : le 10 avril protégeait notre premier bisou."
      },
      {
        "type": "place",
        "title": "Épreuve II — Le témoin discret",
        "q": "<p>Ce n’était pas une maison.</p><p>Ce n’était pas une rue.</p><p>C’était un endroit assez grand pour marcher et assez calme pour s’arrêter.</p><p>Ce jour-là, il est devenu le témoin discret d’un commencement.</p><p><strong>Quel lieu était-ce ?</strong></p>",
        "answers": [
          "parcdisle",
          "parcdisles",
          "parcd isle",
          "parc d isle",
          "parc d'isle",
          "parcde lisle",
          "parc de lisle",
          "parc de l isle",
          "parcisle"
        ],
        "hints": [
          "Ce lieu n’était pas important pour tout le monde, seulement pour nous.",
          "On pouvait y marcher sans chercher une destination précise.",
          "Son nom évoque presque quelque chose entouré d’eau.",
          "Il se trouve à Saint-Quentin."
        ],
        "success": "Tu as retrouvé le lieu."
      },
      {
        "type": "emotion",
        "title": "Épreuve III — Ce qui reste après",
        "q": "<p>Un instant peut passer vite.</p><p>Puis il revient plus tard, sans prévenir.</p><p>Il peut être raconté, gardé, ou simplement ressenti en silence.</p><p>Ce n’est plus le moment lui-même, mais ce qu’il laisse derrière lui.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "souvenir"
        ],
        "hints": [
          "Ce mot naît après l’événement.",
          "Il peut rester même quand le lieu change.",
          "On peut le raconter ou le garder pour soi.",
          "Il commence par S."
        ],
        "success": "Oui : un souvenir."
      },
      {
        "type": "promise",
        "title": "Épreuve IV — Ce qui n’est pas encore arrivé",
        "q": "<p>Le passé ne suffit pas toujours.</p><p>Quand un souvenir compte, on peut avoir envie d’en créer un autre.</p><p>Ce mot désigne quelque chose que l’on prépare sans l’avoir encore vécu.</p><p><strong>Quel mot complète cette idée ?</strong></p>",
        "answers": [
          "projet",
          "promesse"
        ],
        "hints": [
          "La réponse n’est pas un souvenir.",
          "Elle concerne quelque chose à venir.",
          "Elle peut se préparer à l’avance.",
          "On peut parler d’un projet ou d’une promesse."
        ],
        "success": "Oui : quelque chose à préparer."
      },
      {
        "type": "final",
        "title": "Épreuve V — Le temps offert",
        "q": "<p>Tu as retrouvé le souvenir, le lieu, ce qu’il a laissé, puis l’idée d’un moment à venir.</p><p>Cette porte ne cache pas un objet.</p><p>Elle cache du temps pour marcher, rire, parler, manger, découvrir et se retrouver.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "date",
          "rendezvous",
          "rendez-vous"
        ],
        "hints": [
          "La réponse n’est pas matérielle.",
          "Elle se vit à deux.",
          "Elle peut durer plusieurs heures.",
          "On pourrait aussi appeler ça un rendez-vous."
        ],
        "success": "Tu as trouvé : une date, un moment rien qu’à nous."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Parc des Premiers Secrets cachait une date avec moi.</h3><p>Une journée préparée pour nous, pour créer un nouveau souvenir à partir du premier.</p></div>",
    "memory": "Le Parc des Premiers Secrets — du premier bisou vers une nouvelle date.",
    "theme": "parc"
  },
  {
    "id": 4,
    "code": "AUBE-ROYALE",
    "title": "L’Aube Royale",
    "gift": "Petit-déjeuner",
    "teaser": "Une porte qui commence avant que la journée ne décide vraiment de commencer.",
    "intro": "<p>Cette porte parle du début d’une journée, mais elle ne doit pas donner le cadeau trop vite.</p>",
    "riddles": [
      {
        "type": "binary",
        "title": "Épreuve I — Les lumières allumées",
        "q": "<p>Une suite de 0 et de 1 a été laissée dans l’obscurité.</p><div class=\"cipher-text\"><strong>01010010 01000101 01010110 01000101 01001001 01001100</strong></div><p>Elle nomme le moment où la journée te reprend doucement.</p><p><strong>Quel mot se cache ici ?</strong></p>",
        "answers": [
          "reveil",
          "réveil"
        ],
        "hints": [
          "Ce n’est pas un calcul.",
          "Chaque groupe représente une lettre.",
          "C’est un codage informatique très simple.",
          "Traduis le binaire en texte."
        ],
        "success": "Le réveil est trouvé."
      },
      {
        "type": "order",
        "title": "Épreuve II — Remettre le matin en ordre",
        "q": "<p>Ces fragments sont dans le désordre :</p><div class=\"logic-grid\"><span>ouvrir les yeux</span><span>sortir du lit</span><span>s’installer</span><span>commencer doucement</span></div><p>Le mot cherché désigne une habitude qui revient, presque comme une petite cérémonie.</p><p><strong>Quel mot correspond à cette suite ?</strong></p>",
        "answers": [
          "rituel",
          "routine"
        ],
        "hints": [
          "Ce n’est pas un objet.",
          "C’est une répétition rassurante.",
          "On peut en avoir un le matin.",
          "Le mot commence par R."
        ],
        "success": "Oui : un rituel, ou une routine douce du matin."
      },
      {
        "type": "deduction",
        "title": "Épreuve III — Ce qui précède",
        "q": "<p>Je ne suis pas le repas.</p><p>Je ne suis pas non plus la personne qui le sert.</p><p>Pourtant, sans moi, le moment arrive moins naturellement.</p><p>Je commence souvent avant que tu sois là : choisir, disposer, prévoir, rendre les choses prêtes.</p><p><strong>Que suis-je ?</strong></p>",
        "answers": [
          "preparation",
          "préparation",
          "mise en place",
          "miseenplace",
          "installation"
        ],
        "hints": [
          "Ce n’est pas un objet.",
          "C’est une action faite avant le moment attendu.",
          "Elle consiste à rendre quelque chose prêt.",
          "On peut dire : une préparation."
        ],
        "success": "Oui : la préparation rend le moment possible."
      },
      {
        "type": "taste",
        "title": "Épreuve IV — Le petit plaisir",
        "q": "<p>Ce mot n’est pas obligatoire pour vivre.</p><p>Mais il rend un moment plus agréable.</p><p>Il peut être sucré, salé, chaud, froid, choisi pour toi.</p><p>Il transforme un simple début de journée en attention.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "gourmandise"
        ],
        "hints": [
          "Ce mot parle de plaisir.",
          "Il est souvent lié à ce qu’on mange.",
          "Ce n’est pas nécessaire, mais ça fait du bien.",
          "Il commence par G."
        ],
        "success": "Oui : la gourmandise."
      },
      {
        "type": "final",
        "title": "Épreuve V — Le matin servi",
        "q": "<p>Tu as retrouvé le réveil, le rituel, la préparation et la gourmandise.</p><p>Il reste à nommer le moment complet que cette porte prépare.</p><p>Ce n’est pas juste de la nourriture.</p><p>C’est un début de journée pensé pour toi.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "petitdejeuner",
          "petitdéjeuner",
          "petit dej",
          "petitdej"
        ],
        "hints": [
          "La réponse est un moment du matin.",
          "Il peut se préparer sur un plateau.",
          "Il arrive avant que la journée commence vraiment.",
          "On l’appelle souvent “petit dej”."
        ],
        "success": "Tu as trouvé l’Aube Royale."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>L’Aube Royale cachait un petit-déjeuner.</h3><p>Un matin préparé pour toi, avec de quoi commencer la journée doucement.</p></div>",
    "memory": "L’Aube Royale — un matin préparé pour toi.",
    "theme": "aube"
  },
  {
    "id": 5,
    "code": "JOKER-18",
    "title": "Le Joker",
    "gift": "Une envie à réaliser",
    "teaser": "Une porte qui ne promet pas un objet précis, mais une liberté à utiliser au bon moment.",
    "intro": "<p>Cette porte doit être comprise avant d’être utilisée. Elle cache une possibilité, pas un objet.</p>",
    "riddles": [
      {
        "type": "concept",
        "title": "Épreuve I — Le cas à part",
        "q": "<p>Dans une règle, tout semble prévu.</p><p>La plupart des choses suivent le même chemin, sans surprise.</p><p>Mais parfois, un cas existe à côté : il n’annule pas la règle, il la rend simplement moins ordinaire.</p><p>Cette porte commence par cette idée de cas rare, différent, presque impossible à classer.</p><p><strong>Quel mot désigne ce cas à part ?</strong></p>",
        "answers": [
          "exception"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "Elle désigne ce qui ne rentre pas complètement dans la règle générale.",
          "C’est un cas particulier.",
          "Le mot commence par EX."
        ],
        "success": "Oui : une exception ouvre cette porte."
      },
      {
        "type": "choice",
        "title": "Épreuve II — La décision",
        "q": "<p>Cette porte ne choisit pas à ta place.</p><p>Elle attend que tu décides ce qui te ferait plaisir.</p><p>Le mot cherché désigne le fait de sélectionner une possibilité parmi plusieurs.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "choix"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "Elle dépend de toi.",
          "Il peut y en avoir plusieurs, mais tu en gardes un.",
          "Le mot commence par CH."
        ],
        "success": "Oui : le choix t’appartient."
      },
      {
        "type": "value",
        "title": "Épreuve III — Ce qui compte parce que c’est rare",
        "q": "<p>Si quelque chose arrive tous les jours, on finit parfois par moins le remarquer.</p><p>Mais quand cela n’arrive qu’une seule fois, ou presque jamais, l’attention change.</p><p>Ce mot décrit ce qui n’a pas de double exact, ce qui ne se répète pas simplement.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "unique"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "Elle parle de rareté.",
          "Elle veut dire : pas comme les autres, pas répété.",
          "Le mot commence par U."
        ],
        "success": "Oui : ce pouvoir compte parce qu’il est unique."
      },
      {
        "type": "limit",
        "title": "Épreuve IV — Une seule utilisation",
        "q": "<p>Si cette possibilité revenait tous les jours, elle perdrait sa valeur.</p><p>Elle compte parce qu’elle demande un moment choisi.</p><p>Elle n’est pas faite pour remplacer toutes les autres surprises.</p><p><strong>Combien de fois peut-elle être utilisée ?</strong></p>",
        "answers": [
          "unefois",
          "1fois",
          "une seule fois",
          "1"
        ],
        "hints": [
          "La réponse est une limite.",
          "Elle empêche que le pouvoir devienne banal.",
          "Ce n’est pas “toujours”.",
          "C’est l’inverse de plusieurs fois."
        ],
        "success": "Oui : une seule fois."
      },
      {
        "type": "final",
        "title": "Épreuve V — Ce que tu pourras demander",
        "q": "<p>Tu as trouvé l’exception, le choix, ce qui est unique, puis la limite d’une seule utilisation.</p><p>Cette porte ne cache pas un objet déjà choisi.</p><p>Elle cache une possibilité : le jour où tu voudras vraiment quelque chose, tu pourras me le demander.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "envie",
          "souhait",
          "voeu",
          "vœu",
          "enviearealiser",
          "envie à réaliser",
          "souhaitarealiser",
          "souhait à réaliser"
        ],
        "hints": [
          "Ce n’est pas un objet précis.",
          "C’est quelque chose qui viendra de toi.",
          "Cela pourra être petit, grand, raisonnable ou un peu capricieux.",
          "Tu peux répondre simplement : envie ou souhait."
        ],
        "success": "Tu as trouvé : une envie que tu pourras choisir."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Joker cachait une envie à réaliser.</h3><p>Une carte spéciale : tu la joueras une seule fois, quand tu voudras vraiment que je réalise une envie pour toi.</p></div>",
    "memory": "Le Joker — une envie que tu pourras choisir toi-même.",
    "theme": "joker"
  },
  {
    "id": 6,
    "code": "APRÈS-MINUIT",
    "title": "Après Minuit",
    "gift": "Pyjama / lingerie",
    "teaser": "Une porte douce, intime et élégante, pensée pour la nuit sans tout révéler trop vite.",
    "intro": "<p>Cette porte avance dans une ambiance de nuit, de confort et de confiance.</p>",
    "riddles": [
      {
        "type": "observation",
        "title": "Épreuve I — Quand le jour se retire",
        "q": "<p>Je ne suis pas le titre de cette porte.</p><p>Je suis ce qui arrive quand le bruit retombe, quand la lumière baisse, quand le monde paraît plus calme.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "nuit"
        ],
        "hints": [
          "La réponse est un moment.",
          "Elle vient après le soir.",
          "On y associe souvent le silence et le sommeil.",
          "Le mot commence par N."
        ],
        "success": "La nuit ouvre la porte."
      },
      {
        "type": "texture",
        "title": "Épreuve II — Ce qui se ressent",
        "q": "<p>Ce mot ne désigne pas le vêtement.</p><p>Il désigne la sensation que l’on cherche quand quelque chose touche la peau sans gêner.</p><p>Il peut exister dans un tissu, dans une voix, dans un geste.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "douceur"
        ],
        "hints": [
          "La réponse n’est pas une matière précise.",
          "Elle se ressent plus qu’elle ne se voit.",
          "Elle peut être physique ou émotionnelle.",
          "Elle commence par D."
        ],
        "success": "Oui : la douceur."
      },
      {
        "type": "deduction",
        "title": "Épreuve III — Ce qui met à l’aise",
        "q": "<p>Un bel objet peut être inconfortable.</p><p>Un objet simple peut devenir précieux s’il te laisse respirer, bouger, dormir, te sentir bien.</p><p>Ce mot désigne cette sensation d’être à l’aise.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "confort"
        ],
        "hints": [
          "Ce n’est pas le style.",
          "Il peut compter autant que l’apparence.",
          "On le cherche souvent pour dormir.",
          "Le mot commence par C."
        ],
        "success": "Oui : le confort."
      },
      {
        "type": "trust",
        "title": "Épreuve IV — Ce qui ne se montre pas à tout le monde",
        "q": "<p>Cette porte ne parle pas seulement d’apparence.</p><p>Elle parle d’un espace où l’on peut être soi, sans regard extérieur.</p><p>Un espace de confiance, de proximité, et de pudeur choisie.</p><p><strong>Quel mot résume cela ?</strong></p>",
        "answers": [
          "intimite",
          "intimité"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "Elle demande de la confiance.",
          "Elle ne se partage pas avec tout le monde.",
          "Le mot commence par INT."
        ],
        "success": "Oui : l’intimité."
      },
      {
        "type": "final",
        "title": "Épreuve V — La surprise de nuit",
        "q": "<p>Tu as trouvé la nuit, la douceur, le confort et l’intimité.</p><p>Cette porte cache quelque chose à porter, pensé pour toi, pour les moments calmes ou plus précieux.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "pyjama",
          "lingerie",
          "pyjama lingerie",
          "pyjamaetlingerie",
          "pyjama lingerie"
        ],
        "hints": [
          "C’est quelque chose à porter.",
          "C’est lié aux moments plus calmes ou à la nuit.",
          "Cela peut être confortable, élégant ou intime.",
          "La réponse peut être “pyjama” ou “lingerie”."
        ],
        "success": "Tu as trouvé Après Minuit."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Après Minuit cachait un pyjama / de la lingerie.</h3><p>Un cadeau pensé pour toi, entre confort, douceur et élégance.</p></div>",
    "memory": "Après Minuit — une surprise à porter, pensée pour tes moments à toi.",
    "theme": "minuit"
  },
  {
    "id": 7,
    "code": "CHAPITRE-XII",
    "title": "Chapitre XII",
    "gift": "Livre au choix",
    "teaser": "Une porte pour ouvrir une histoire qui ne sera pas imposée, mais choisie par toi.",
    "intro": "<p>Cette porte parle d’histoires, mais elle ne donne pas le livre avant la dernière page.</p>",
    "riddles": [
      {
        "type": "morse",
        "title": "Épreuve I — Signes courts et longs",
        "q": "<p>Un mot a été écrit sans lettres :</p><div class=\"cipher-text\"><strong>.. -- .- --. .. -. .- - .. --- -.</strong></div><p>Il désigne ce qui permet à une histoire d’exister avant même d’être lue.</p><p><strong>Quel mot se cache ici ?</strong></p>",
        "answers": [
          "imagination"
        ],
        "hints": [
          "Ce ne sont pas des chiffres.",
          "Le message utilise seulement deux types de signes.",
          "Ce système sert à coder des lettres avec points et traits.",
          "Déchiffre le Morse."
        ],
        "success": "L’imagination est trouvée."
      },
      {
        "type": "deduction",
        "title": "Épreuve II — Celui qui construit sans marteau",
        "q": "<p>Il peut créer des lieux où il n’est jamais allé.</p><p>Il peut faire parler des personnes qui n’existent pas.</p><p>Il peut déclencher des émotions avec seulement des phrases.</p><p><strong>Qui est-il ?</strong></p>",
        "answers": [
          "auteur",
          "ecrivain",
          "écrivain"
        ],
        "hints": [
          "La réponse désigne une personne.",
          "Elle crée avec des mots.",
          "Elle peut inventer des personnages.",
          "On trouve souvent son nom sur une couverture."
        ],
        "success": "Oui : l’auteur."
      },
      {
        "type": "sequence",
        "title": "Épreuve III — Du plus grand au plus petit",
        "q": "<p>Remets cette idée dans le bon sens :</p><div class=\"logic-grid\"><span>histoire</span><span>chapitre</span><span>page</span><span>ligne</span></div><p>Le mot cherché est l’étape qui se lit d’un seul regard, mais qui appartient à une page.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "ligne"
        ],
        "hints": [
          "On descend vers quelque chose de plus petit.",
          "Ce n’est pas toute la page.",
          "C’est plus petit qu’un paragraphe.",
          "On lit parfois entre elles."
        ],
        "success": "Oui : une ligne."
      },
      {
        "type": "choice",
        "title": "Épreuve IV — Ce qui t’appartient",
        "q": "<p>Une histoire peut être offerte.</p><p>Mais celle-ci aura quelque chose de différent : elle ne sera pas décidée sans toi.</p><p>Ce mot désigne ce que tu devras faire avant que le cadeau existe vraiment.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "choix"
        ],
        "hints": [
          "La réponse dépend de toi.",
          "Il peut y avoir plusieurs possibilités.",
          "Ce n’est pas le cadeau, mais la manière de le rendre tien.",
          "Le mot commence par CH."
        ],
        "success": "Oui : le choix."
      },
      {
        "type": "final",
        "title": "Épreuve V — La première page",
        "q": "<p>Tu as trouvé l’imagination, l’auteur, la ligne et le choix.</p><p>Il reste à nommer l’objet qui peut contenir tout cela.</p><p>Cette fois, l’histoire ne sera pas choisie à ta place.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "livre"
        ],
        "hints": [
          "C’est un objet.",
          "Il contient des pages.",
          "Tu pourras le choisir toi-même.",
          "Le mot commence par L."
        ],
        "success": "Tu as trouvé Chapitre XII."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Chapitre XII cachait un livre au choix.</h3><p>Une histoire que tu pourras choisir toi-même, parce que celle-ci sera la tienne.</p></div>",
    "memory": "Chapitre XII — une histoire que tu choisiras toi-même.",
    "theme": "chapitre"
  },
  {
    "id": 8,
    "code": "FESTIN-DORÉ",
    "title": "Le Festin Doré",
    "gift": "Pack nourriture",
    "teaser": "Une porte gourmande, faite de petites envies choisies pour toi.",
    "intro": "<p>Cette porte ne parle pas d’un grand repas. Elle parle plutôt de petits plaisirs rassemblés.</p>",
    "riddles": [
      {
        "type": "senses",
        "title": "Épreuve I — Le premier sens",
        "q": "<p>Je peux changer ton humeur avec presque rien.</p><p>Je peux être sucré, salé, doux, fort, réconfortant.</p><p>Je ne suis pas un aliment, mais ce que l’aliment laisse sur la langue.</p><p><strong>Que suis-je ?</strong></p>",
        "answers": [
          "gout",
          "goût",
          "saveur"
        ],
        "hints": [
          "Ce n’est pas un objet.",
          "On le découvre en mangeant.",
          "Il peut être sucré ou salé.",
          "On peut dire “goût” ou “saveur”."
        ],
        "success": "Le goût est trouvé."
      },
      {
        "type": "personal",
        "title": "Épreuve II — Le plat repère",
        "q": "<p>Un indice personnel se cache dans cette porte.</p><p>Il ne donne pas le cadeau final, mais il rappelle une envie que tu aimes bien.</p><p>Ce plat mélange des pâtes, une sauce crémeuse et une envie simple.</p><p><strong>Quel plat est-ce ?</strong></p>",
        "answers": [
          "patescarbo",
          "pâtescarbo",
          "pates carbonara",
          "pâtes carbonara",
          "carbonara"
        ],
        "hints": [
          "C’est un plat.",
          "Il contient des pâtes.",
          "Son nom est souvent raccourci.",
          "Tu as déjà dit aimer les pâtes carbo."
        ],
        "success": "Oui : les pâtes carbo."
      },
      {
        "type": "sorting",
        "title": "Épreuve III — Rassembler sans cuisiner",
        "q": "<p>Ce n’est pas un plat unique.</p><p>C’est plutôt une manière de réunir plusieurs petites choses au même endroit.</p><p>On peut y mettre du sucré, du salé, du simple, du réconfortant.</p><p><strong>Quel mot désigne ce rassemblement ?</strong></p>",
        "answers": [
          "assortiment",
          "selection",
          "sélection"
        ],
        "hints": [
          "La réponse désigne plusieurs choses ensemble.",
          "Ce n’est pas forcément cuisiné.",
          "On y choisit ce qui va bien ensemble.",
          "On peut dire “sélection”."
        ],
        "success": "Oui : une sélection."
      },
      {
        "type": "real",
        "title": "Épreuve IV — Dans le vrai monde",
        "q": "<p>Cette porte pourra sortir du site.</p><p>Le jour venu, un indice pourra se cacher directement parmi ce qui se mange.</p><p>Si tu vois une étiquette étrange, un mot sous un paquet, ou un détail doré, ne l’ignore pas.</p><p><strong>Quel mot décrit cette recherche ?</strong></p>",
        "answers": [
          "fouille",
          "recherche"
        ],
        "hints": [
          "La réponse n’est pas un aliment.",
          "C’est une action.",
          "Elle consiste à regarder attentivement.",
          "On peut fouiller un panier."
        ],
        "success": "Oui : il faudra peut-être fouiller."
      },
      {
        "type": "final",
        "title": "Épreuve V — Les petites envies réunies",
        "q": "<p>Tu as trouvé le goût, les pâtes carbo, la sélection et la fouille.</p><p>Cette porte cache plusieurs petites choses choisies pour toi, à manger ou à grignoter.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "packnourriture",
          "pack de nourriture",
          "paniergourmand",
          "panier gourmand",
          "pack gourmand"
        ],
        "hints": [
          "Ce n’est pas un seul aliment.",
          "Il réunit plusieurs envies.",
          "On peut le présenter dans un panier.",
          "C’est un pack/panier de nourriture."
        ],
        "success": "Tu as trouvé le Festin Doré."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Festin Doré cachait un pack nourriture.</h3><p>Un petit panier rempli de choses que tu aimes, préparé pour tes envies.</p></div>",
    "memory": "Le Festin Doré — un panier de petites envies pour toi.",
    "theme": "festin"
  },
  {
    "id": 9,
    "code": "FIL-DORÉ",
    "title": "Le Fil Doré",
    "gift": "Tee-shirts",
    "teaser": "Une porte à porter, pensée pour ton style sans dévoiler trop vite le cadeau.",
    "intro": "<p>Cette porte avance par matière, forme et choix, avant d’arriver à ce que tu pourras porter.</p>",
    "riddles": [
      {
        "type": "material",
        "title": "Épreuve I — La base douce",
        "q": "<p>Je peux être tissé, lavé, porté.</p><p>Je ne suis pas le vêtement complet.</p><p>Je suis souvent choisi parce que je est agréable sur la peau.</p><p><strong>Que suis-je ?</strong></p>",
        "answers": [
          "coton"
        ],
        "hints": [
          "La réponse est une matière.",
          "On la retrouve dans beaucoup de vêtements.",
          "Elle est souvent douce et simple.",
          "Le mot commence par C."
        ],
        "success": "Le coton est trouvé."
      },
      {
        "type": "shape",
        "title": "Épreuve II — Ce qui tombe juste",
        "q": "<p>Deux vêtements peuvent être faits de la même matière.</p><p>Pourtant l’un peut aller parfaitement, l’autre non.</p><p>Ce mot parle de la manière dont quelque chose se pose sur toi.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "coupe"
        ],
        "hints": [
          "Ce n’est pas la couleur.",
          "Ce n’est pas la matière.",
          "Cela change la forme portée.",
          "On parle de la coupe d’un vêtement."
        ],
        "success": "Oui : la coupe."
      },
      {
        "type": "choice",
        "title": "Épreuve III — L’accord",
        "q": "<p>Il ne suffit pas qu’un vêtement existe.</p><p>Il faut qu’il te corresponde.</p><p>Ce mot peut parler d’une ambiance, d’une couleur, d’une façon de s’habiller.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "style"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "Elle parle de ce qui te correspond.",
          "Elle peut être personnel.",
          "Le mot commence par ST."
        ],
        "success": "Oui : le style."
      },
      {
        "type": "code",
        "title": "Épreuve IV — Trois lettres courantes",
        "q": "<p>Un vêtement peut parfois se résumer à une courte indication.</p><div class=\"choice-line\"><span>S</span><span>M</span><span>L</span><span>XL</span></div><p>Ce n’est pas le cadeau. C’est ce qu’il faut connaître pour qu’il tombe bien.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "taille"
        ],
        "hints": [
          "Ce n’est pas une couleur.",
          "Cela aide à choisir le bon vêtement.",
          "S, M et L sont des exemples.",
          "Le mot commence par T."
        ],
        "success": "Oui : la taille."
      },
      {
        "type": "final",
        "title": "Épreuve V — Ce que tu porteras",
        "q": "<p>Tu as trouvé le coton, la coupe, le style et la taille.</p><p>Cette porte cache quelque chose à porter, simple mais choisi pour toi.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "teeshirt",
          "tee shirt",
          "tshirt",
          "t shirt",
          "tee-shirts",
          "t-shirts"
        ],
        "hints": [
          "C’est un vêtement.",
          "Il peut être en coton.",
          "Il se choisit avec une taille.",
          "Le mot commence souvent par T."
        ],
        "success": "Tu as trouvé le Fil Doré."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Fil Doré cachait des tee-shirts.</h3><p>Des vêtements choisis pour toi, pour ton style et ton confort.</p></div>",
    "memory": "Le Fil Doré — des tee-shirts pensés pour toi.",
    "theme": "fil"
  },
  {
    "id": 10,
    "code": "PETIT-MONDE",
    "title": "Le Petit Monde",
    "gift": "Figurines",
    "teaser": "Une porte miniature, construite autour de petits personnages et d’univers à collectionner.",
    "intro": "<p>Cette porte parle de choses petites par la taille, mais pas forcément petites par l’attachement.</p>",
    "riddles": [
      {
        "type": "scale",
        "title": "Épreuve I — Changer d’échelle",
        "q": "<p>Je ne suis pas moins important parce que je suis petit.</p><p>Je reprends une forme plus grande, mais réduite.</p><p>Je peux tenir dans une main tout en représentant un univers.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "miniature"
        ],
        "hints": [
          "La réponse parle de taille.",
          "Elle désigne une version réduite.",
          "Elle peut représenter quelque chose de plus grand.",
          "Le mot commence par MINI."
        ],
        "success": "La miniature est trouvée."
      },
      {
        "type": "identity",
        "title": "Épreuve II — Celui qui habite l’univers",
        "q": "<p>Dans une histoire, il peut avoir une apparence, un caractère, un rôle.</p><p>Il n’est pas forcément réel, mais on peut s’y attacher.</p><p><strong>Quel mot désigne cet être d’histoire ?</strong></p>",
        "answers": [
          "personnage"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "On peut le trouver dans des films, livres ou univers.",
          "Il peut être représenté en petit.",
          "Le mot commence par P."
        ],
        "success": "Oui : un personnage."
      },
      {
        "type": "collection",
        "title": "Épreuve III — Quand un seul ne suffit pas",
        "q": "<p>Un objet peut exister seul.</p><p>Mais parfois, ce qui devient amusant, c’est d’en avoir plusieurs qui se répondent.</p><p>Chaque nouveau morceau complète l’ensemble.</p><p><strong>Quel mot désigne cet ensemble ?</strong></p>",
        "answers": [
          "collection"
        ],
        "hints": [
          "La réponse parle de plusieurs objets.",
          "Elle grandit avec le temps.",
          "Chaque élément peut être différent.",
          "Le mot commence par C."
        ],
        "success": "Oui : une collection."
      },
      {
        "type": "theme",
        "title": "Épreuve IV — Le monde autour",
        "q": "<p>Sommeil, yoga, animaux, personnages, couleurs…</p><p>Ce mot désigne l’idée commune qui rassemble plusieurs éléments.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "theme",
          "thème"
        ],
        "hints": [
          "Ce n’est pas un objet.",
          "Il rassemble plusieurs éléments sous une même idée.",
          "Il peut changer d’une série à l’autre.",
          "Le mot commence par TH."
        ],
        "success": "Oui : le thème."
      },
      {
        "type": "final",
        "title": "Épreuve V — Les petits habitants",
        "q": "<p>Tu as trouvé miniature, personnage, collection et thème.</p><p>Cette porte cache de petits objets qui représentent des univers ou des personnages.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "figurines",
          "figurine"
        ],
        "hints": [
          "La réponse désigne de petits objets.",
          "Ils peuvent former une collection.",
          "Ils représentent souvent des personnages.",
          "Le mot commence par F."
        ],
        "success": "Tu as trouvé le Petit Monde."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Petit Monde cachait des figurines.</h3><p>De petits personnages à collectionner, chacun avec son univers.</p></div>",
    "memory": "Le Petit Monde — de petites figurines choisies pour toi.",
    "theme": "monde"
  },
  {
    "id": 11,
    "code": "JARDIN-SECRET",
    "title": "Le Jardin Secret",
    "gift": "Cadeau intime",
    "teaser": "Une porte plus discrète, pensée autour de confiance, pudeur et complicité.",
    "intro": "<p>Cette porte reste élégante. Elle ne cherche pas à tout dire trop vite : elle avance par confiance.</p>",
    "riddles": [
      {
        "type": "trust",
        "title": "Épreuve I — La condition",
        "q": "<p>Sans moi, cette porte n’aurait pas sa place.</p><p>Je ne suis pas un objet.</p><p>Je permets de recevoir une surprise sans malaise, parce qu’elle vient de quelqu’un en qui tu peux croire.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "confiance"
        ],
        "hints": [
          "La réponse n’est pas matérielle.",
          "Elle se construit avec le temps.",
          "Elle rend possible les surprises plus personnelles.",
          "Le mot commence par CONF."
        ],
        "success": "Oui : la confiance."
      },
      {
        "type": "boundary",
        "title": "Épreuve II — Ce qui t’appartient",
        "q": "<p>Tout ne se partage pas avec tout le monde.</p><p>Certains espaces, certaines pensées, certains moments restent à toi.</p><p>Ce mot désigne ce qui est personnel et protégé.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "intimite",
          "intimité"
        ],
        "hints": [
          "La réponse n’est pas un objet.",
          "Elle parle de quelque chose de personnel.",
          "Elle demande du respect.",
          "Le mot commence par INT."
        ],
        "success": "Oui : l’intimité."
      },
      {
        "type": "discretion",
        "title": "Épreuve III — Le voile",
        "q": "<p>Ce mot ne cache pas par honte.</p><p>Il cache parce que certaines choses gagnent à rester délicates.</p><p>Il évite d’être trop direct, trop visible, trop brutal.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "pudeur"
        ],
        "hints": [
          "La réponse est liée à la délicatesse.",
          "Elle protège ce qui est intime.",
          "Elle évite d’en dire trop.",
          "Le mot commence par P."
        ],
        "success": "Oui : la pudeur."
      },
      {
        "type": "complicity",
        "title": "Épreuve IV — À deux seulement",
        "q": "<p>Ce mot existe quand un geste ou une blague n’a pas besoin d’être expliqué aux autres.</p><p>Il appartient à deux personnes qui se comprennent.</p><p>Il rend certaines choses plus simples, parce qu’il y a déjà un lien.</p><p><strong>Quel mot cherches-tu ?</strong></p>",
        "answers": [
          "complicite",
          "complicité"
        ],
        "hints": [
          "Ce mot parle d’un lien.",
          "Il peut exister dans un couple.",
          "Il permet de se comprendre avec peu de mots.",
          "Le mot commence par COMP."
        ],
        "success": "Oui : la complicité."
      },
      {
        "type": "final",
        "title": "Épreuve V — Le cadeau discret",
        "q": "<p>Tu as trouvé confiance, intimité, pudeur et complicité.</p><p>Cette porte cache un cadeau plus personnel que les autres.</p><p>Il n’est pas fait pour être expliqué à tout le monde.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "cadeauintime",
          "cadeau intime",
          "sextoy",
          "jouet intime"
        ],
        "hints": [
          "La réponse n’est pas un cadeau public.",
          "Il appartient au domaine intime.",
          "Il demande confiance et pudeur.",
          "On peut l’appeler un cadeau intime."
        ],
        "success": "Tu as trouvé le Jardin Secret."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Jardin Secret cachait un cadeau intime.</h3><p>Un cadeau discret, pensé avec confiance et respect, seulement pour toi.</p></div>",
    "memory": "Le Jardin Secret — une porte intime, pensée avec respect.",
    "theme": "jardin"
  },
  {
    "id": 12,
    "code": "DERNIER-MASQUE",
    "title": "Le Dernier Masque",
    "gift": "Cadeau final",
    "teaser": "La dernière porte n’est pas encore figée : elle pourra rassembler les souvenirs de l’année.",
    "intro": "<p>Cette porte restera volontairement en construction. Elle pourra devenir le final de toute l’aventure.</p>",
    "riddles": [
      {
        "type": "archive",
        "title": "Épreuve I — Ce qui reste",
        "q": "<p>Quand une année avance, certains moments disparaissent.</p><p>D’autres restent grâce aux traces qu’on garde : photos, mots, tickets, petits objets.</p><p><strong>Quel mot désigne ce que l’on garde du passé ?</strong></p>",
        "answers": [
          "souvenir"
        ],
        "hints": [
          "La réponse n’est pas un objet précis.",
          "Elle peut être gardée dans une boîte ou dans la tête.",
          "Elle parle du passé.",
          "Le mot commence par S."
        ],
        "success": "Premier fragment trouvé."
      },
      {
        "type": "collection",
        "title": "Épreuve II — Rassembler",
        "q": "<p>Un souvenir seul peut compter.</p><p>Mais plusieurs souvenirs réunis racontent une histoire plus grande.</p><p><strong>Quel mot désigne l’action de les mettre ensemble ?</strong></p>",
        "answers": [
          "rassembler",
          "collectionner"
        ],
        "hints": [
          "C’est une action.",
          "Elle transforme plusieurs morceaux en ensemble.",
          "On peut le faire avec des photos ou des petits mots.",
          "Le mot peut être “rassembler”."
        ],
        "success": "Deuxième fragment trouvé."
      },
      {
        "type": "real",
        "title": "Épreuve III — Hors du site",
        "q": "<p>Un jour, cette porte pourra te demander de chercher ailleurs que dans l’écran.</p><p>Pas maintenant forcément.</p><p>Mais certains secrets sont plus beaux quand ils existent vraiment.</p><p><strong>Quel mot désigne ce qui existe hors du site ?</strong></p>",
        "answers": [
          "reel",
          "réel",
          "realite",
          "réalité"
        ],
        "hints": [
          "La réponse s’oppose au virtuel.",
          "Elle peut se toucher.",
          "Elle peut être cachée chez toi.",
          "Le mot commence par R."
        ],
        "success": "Troisième fragment trouvé."
      },
      {
        "type": "patience",
        "title": "Épreuve IV — Attendre le bon moment",
        "q": "<p>Toutes les portes ne doivent pas être terminées trop tôt.</p><p>Certaines gagnent du sens parce qu’on les laisse mûrir.</p><p><strong>Quel mot faut-il parfois accepter ?</strong></p>",
        "answers": [
          "patience"
        ],
        "hints": [
          "Ce mot parle du temps.",
          "Il demande de ne pas tout avoir immédiatement.",
          "Il peut rendre une surprise meilleure.",
          "Le mot commence par P."
        ],
        "success": "Oui : patience."
      },
      {
        "type": "final",
        "title": "Épreuve V — Porte à compléter",
        "q": "<p>Cette dernière porte n’a pas encore son cadeau définitif.</p><p>Elle sera gardée pour la fin, quand l’année aura laissé assez de traces.</p><p><strong>Quel mot résume ce rôle ?</strong></p>",
        "answers": [
          "final",
          "conclusion"
        ],
        "hints": [
          "La réponse parle de la fin.",
          "Elle ne donne pas encore le cadeau.",
          "Elle ferme une histoire.",
          "On peut dire “final”."
        ],
        "success": "Le Dernier Masque restera prêt pour la suite."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Dernier Masque reste à compléter.</h3><p>Cette porte pourra devenir le coffre final des souvenirs, ou une surprise encore meilleure quand elle apparaîtra.</p></div>",
    "memory": "Le Dernier Masque — une porte gardée pour la fin.",
    "theme": "masque"
  }
];


const COLLECTION_CARDS = [
  { id: 'parc-isle', title: "Parc d’Isle", rarity: 'rare', emoji: '🌿', text: "Là où un souvenir a commencé." },
  { id: 'cinema', title: 'Cinéma', rarity: 'commune', emoji: '🎬', text: "Une sortie simple qui peut devenir un souvenir." },
  { id: 'premier-bisou', title: 'Premier bisou', rarity: 'legendaire', emoji: '💫', text: "Certaines dates prennent plus de place que prévu." },
  { id: 'bocal', title: 'Bocal réconfort', rarity: 'rare', emoji: '🫙', text: "Quelques mots peuvent attendre le bon moment." },
  { id: 'bal', title: 'Bal des Secrets', rarity: 'epique', emoji: '🎭', text: "Un monde créé juste pour toi." },
  { id: 'petitdej', title: 'Matin préparé', rarity: 'commune', emoji: '☕', text: "Un début de journée pensé doucement." },
  { id: 'rose', title: 'Message vivant', rarity: 'rare', emoji: '🌹', text: "Dire quelque chose sans forcément le prononcer." },
  { id: 'doudou', title: 'Refuge doux', rarity: 'epique', emoji: '🧸', text: "Les refuges ne sont pas toujours des lieux." },
  { id: 'ticket-or', title: 'Ticket d’or', rarity: 'commune', emoji: '🎟️', text: "Une clé qui attend son mois." },
  { id: 'souvenir-flou', title: 'Photo à remplacer', rarity: 'commune', emoji: '📷', text: "Emplacement temporaire pour une future photo." },
  { id: 'sortie', title: 'Sortie surprise', rarity: 'commune', emoji: '🗺️', text: "Un moment qui n’existe pas encore." },
  { id: 'nous', title: 'Nous deux', rarity: 'legendaire', emoji: '❤️', text: "Une carte rare, à remplacer par une vraie photo." }
];



const RARITY_WEIGHTS = [
  { rarity: 'commune', weight: 40 },
  { rarity: 'rare', weight: 30 },
  { rarity: 'epique', weight: 20 },
  { rarity: 'legendaire', weight: 10 }
];

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function collectionCounts(state) {
  const counts = {};
  (state.collection || []).forEach(id => { counts[id] = (counts[id] || 0) + 1; });
  return counts;
}

function weightedRandomCard() {
  const total = RARITY_WEIGHTS.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  let chosen = RARITY_WEIGHTS[0].rarity;
  for (const item of RARITY_WEIGHTS) {
    if (roll < item.weight) { chosen = item.rarity; break; }
    roll -= item.weight;
  }
  const pool = COLLECTION_CARDS.filter(card => card.rarity === chosen);
  const source = pool.length ? pool : COLLECTION_CARDS;
  return source[Math.floor(Math.random() * source.length)];
}

function drawCards(count) {
  return Array.from({ length: count }, () => weightedRandomCard());
}

function packLabel(type) {
  return type === 'daily' ? 'Carte du jour' : type === 'mini' ? 'Mini booster' : 'Grand booster';
}

const ROOM_THEMES = {
  refuge: { label: 'Refuge Doré', tone: 220 }, rose: { label: 'Rose Noire', tone: 196 }, parc: { label: 'Parc des Premiers Secrets', tone: 174 },
  aube: { label: 'Aube Royale', tone: 262 }, joker: { label: 'Le Joker', tone: 146 }, minuit: { label: 'Après Minuit', tone: 116 },
  chapitre: { label: 'Chapitre XII', tone: 185 }, festin: { label: 'Festin Doré', tone: 246 }, fil: { label: 'Fil Doré', tone: 208 },
  monde: { label: 'Petit Monde', tone: 164 }, jardin: { label: 'Jardin Secret', tone: 132 }, masque: { label: 'Dernier Masque', tone: 98 }
};

const STORAGE_KEY = 'bal_des_secrets_state_v4';

function normalize(value) {
  return String(value || '')
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'`´]/g, '')
    .replace(/[\s\-_/\.]+/g, '')
    .replace(/[^A-Z0-9À-ÖØ-Ý]/g, '');
}

function defaultState() {
  return { unlocked: [], lastUnlockMonth: null, answers: {}, hints: {}, completed: [], boosters: 0, miniBoosters: 0, collection: [], openedBoosters: [], lastDailyBooster: null };
}

function loadState() {
  try {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(defaultState()));
    state.unlocked = state.unlocked || [];
    state.lastUnlockMonth = state.lastUnlockMonth || null;
    state.answers = state.answers || {};
    state.hints = state.hints || {};
    state.completed = state.completed || [];
    state.boosters = Number(state.boosters || 0);
    state.miniBoosters = Number(state.miniBoosters || 0);
    state.collection = state.collection || [];
    state.openedBoosters = state.openedBoosters || [];
    state.lastDailyBooster = state.lastDailyBooster || null;
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
  if (id !== 'room') clearRoomTheme();
  if (id === 'memories') renderMemories();
  if (id === 'boosters') renderBoosters();
  if (id === 'collection') renderCollection();
  if (id === 'chronicles') renderChronicles();
  updateBoosterBadge();
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
  applyRoomTheme(ticket);
  const state = loadState();
  const room = document.getElementById('room');
  const solved = state.answers[ticket.id] || [];
  const total = (ticket.riddles || []).length;
  const completed = total && solved.length >= total;

  let html = `<p class="eyebrow">Porte déverrouillée</p><h2>${ticket.title}</h2><p>${ticket.teaser}</p>`;
  if (ticket.intro) html += `<div class="room-intro">${ticket.intro}<div class="booster-reminder"><strong>Récompenses du Bal :</strong> chaque énigme résolue t’offre un mini booster. En terminant cette porte, tu débloques aussi un grand booster de 3 cartes.</div><div class="room-tools"><button id="ambienceBtn" onclick="toggleAmbience('${ticket.theme || ''}')">Jouer une note d’ambiance</button><span class="theme-chip">Ambiance visuelle : ${ticket.title}</span></div></div>`;

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
      updateBoosterBadge();
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
    const wasAlreadySolved = state.answers[ticketId].includes(index);
    let earnedMessages = [];
    if (!wasAlreadySolved) {
      state.answers[ticketId].push(index);
      const isFinalRiddle = index === (ticket.riddles.length - 1);
      state.miniBoosters = Number(state.miniBoosters || 0) + 1;
      earnedMessages.push('Mini booster gagné ! Il t’attend dans l’onglet Boosters.');
      if (isFinalRiddle) {
        state.boosters = Number(state.boosters || 0) + 1;
        earnedMessages.push('Grand booster gagné ! 3 cartes t’attendent dans l’onglet Boosters.');
      }
    }
    saveState(state);
    renderRoom(ticket);
    updateBoosterBadge();
    triggerGoldBurst();
    if (earnedMessages.length) showBoosterToast(earnedMessages.join('<br>'));
    window.scrollTo({ top: document.getElementById('room').offsetTop - 80, behavior: 'smooth' });
  } else {
    input.value = '';
    input.placeholder = 'Ce n’est pas encore ça...';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 350);
  }
};

function showBoosterToast(message) {
  let toast = document.getElementById('boosterToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'boosterToast';
    toast.className = 'booster-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✦</span><p>${message}</p>`;
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(window.__boosterToastTimer);
  window.__boosterToastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
}

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


function updateBoosterBadge() {
  const state = loadState();
  const badge = document.getElementById('boosterCount');
  const totalPacks = Number(state.boosters || 0) + Number(state.miniBoosters || 0) + (state.lastDailyBooster === todayKey() ? 0 : 1);
  if (badge) badge.textContent = totalPacks ? ` (${totalPacks})` : '';
}

function rarityLabel(rarity) {
  return { commune: 'Commune', rare: 'Rare', epique: 'Épique', legendaire: 'Légendaire' }[rarity] || rarity;
}

function getNextCards(count = 3) {
  return drawCards(count);
}

function cardHtml(card, options = {}) {
  const locked = !!options.locked;
  const isNew = !!options.isNew;
  const count = Number(options.count || 0);
  const extraClass = `${locked ? 'locked-card' : ''} ${isNew ? 'new-card' : ''}`;
  return `<article class="collection-card rarity-${card.rarity} ${extraClass}">
    ${isNew ? '<div class="new-badge">NOUVEAU</div>' : ''}
    ${!locked && count > 1 ? `<div class="duplicate-badge">x${count}</div>` : ''}
    <div class="card-art">${locked ? '🔒' : card.emoji}</div>
    <div class="card-rarity">${locked ? 'Inconnue' : rarityLabel(card.rarity)}</div>
    <h3>${locked ? 'Carte non découverte' : card.title}</h3>
    <p>${locked ? 'Cette carte attend encore dans un futur booster.' : card.text}</p>
  </article>`;
}

function rarityRatesHtml() {
  return `<div class="rarity-rates">
    <span class="rarity-dot rarity-commune">Commune 40%</span>
    <span class="rarity-dot rarity-rare">Rare 30%</span>
    <span class="rarity-dot rarity-epique">Épique 20%</span>
    <span class="rarity-dot rarity-legendaire">Légendaire 10%</span>
  </div>`;
}

function renderBoosters(lastCards = [], lastType = '') {
  const state = loadState();
  const box = document.getElementById('boosterArea');
  if (!box) return;
  const canOpenBig = Number(state.boosters || 0) > 0;
  const canOpenMini = Number(state.miniBoosters || 0) > 0;
  const canDaily = state.lastDailyBooster !== todayKey();
  const adminTools = document.body.classList.contains('admin-enabled') ? `
    <div class="booster-admin-tools">
      <strong>Admin boosters</strong>
      <button onclick="adminAddMiniBooster()">Ajouter 1 mini booster</button>
      <button onclick="adminAddBooster()">Ajouter 1 grand booster</button>
      <button onclick="adminAddBoosters(5)">Ajouter 5 grands boosters</button>
      <button onclick="adminRepairBoosters()">Réparer boosters manquants</button>
    </div>` : '';
  box.innerHTML = `
    <div class="booster-summary">
      <p class="lead">Mini boosters : <strong>${state.miniBoosters || 0}</strong> · Grands boosters : <strong>${state.boosters || 0}</strong></p>
      <p>Chaque énigme résolue donne un mini booster d’une carte. Quand une porte est terminée, un grand booster de trois cartes est aussi ajouté. Une carte gratuite peut aussi être récupérée une fois par jour.</p>
      ${rarityRatesHtml()}
    </div>
    ${adminTools}
    <div class="booster-actions-grid">
      <div class="booster-pack ${canDaily ? 'ready daily-pack' : ''}" ${canDaily ? 'onclick="openDailyCard()"' : ''}><span>☀️</span><strong>Carte du jour</strong><small>${canDaily ? '1 carte gratuite à récupérer' : 'Déjà récupérée aujourd’hui'}</small></div>
      <div class="booster-pack ${canOpenMini ? 'ready mini-pack' : ''}" ${canOpenMini ? 'onclick="openMiniBooster()"' : ''}><span>✉️</span><strong>Mini booster</strong><small>${canOpenMini ? 'Ouvre 1 carte' : 'Aucun mini booster'}</small></div>
      <div class="booster-pack ${canOpenBig ? 'ready big-pack' : ''}" ${canOpenBig ? 'onclick="openBooster()"' : ''}><span>🎁</span><strong>Grand booster</strong><small>${canOpenBig ? 'Ouvre 3 cartes' : 'Aucun grand booster'}</small></div>
    </div>
    ${lastCards.length ? `<div class="booster-opening"><p class="eyebrow">${packLabel(lastType)} ouvert</p><div class="booster-results opening-animation">${lastCards.map(card => cardHtml(card, { isNew: card.isNew })).join('')}</div></div>` : ''}`;
  updateBoosterBadge();
}

function addCardsToCollection(cards) {
  const state = loadState();
  const countsBefore = collectionCounts(state);
  const results = cards.map(card => ({ ...card, isNew: !countsBefore[card.id] }));
  results.forEach(card => state.collection.push(card.id));
  state.openedBoosters.push(Date.now());
  saveState(state);
  return results;
}

function openCardPack(count, type) {
  const state = loadState();
  if (type === 'daily') {
    if (state.lastDailyBooster === todayKey()) return;
    state.lastDailyBooster = todayKey();
    saveState(state);
  } else if (type === 'mini') {
    if (!state.miniBoosters) return;
    state.miniBoosters -= 1;
    saveState(state);
  } else {
    if (!state.boosters) return;
    state.boosters -= 1;
    saveState(state);
  }
  const results = addCardsToCollection(getNextCards(count));
  renderBoosters(results, type);
  renderCollection();
  triggerGoldBurst();
}

window.openDailyCard = function() { openCardPack(1, 'daily'); };
window.openMiniBooster = function() { openCardPack(1, 'mini'); };
window.openBooster = function() { openCardPack(3, 'big'); };

function renderCollection() {
  const state = loadState();
  const grid = document.getElementById('collectionGrid');
  const stats = document.getElementById('collectionStats');
  if (!grid) return;
  const counts = collectionCounts(state);
  const ownedIds = Object.keys(counts);
  const totalCards = (state.collection || []).length;
  const duplicates = Math.max(0, totalCards - ownedIds.length);
  if (stats) stats.innerHTML = `<strong>${ownedIds.length}</strong> / ${COLLECTION_CARDS.length} cartes découvertes · <strong>${duplicates}</strong> doublon(s)`;
  grid.innerHTML = COLLECTION_CARDS.map(card => counts[card.id] ? cardHtml(card, { count: counts[card.id] }) : cardHtml(card, { locked: true })).join('');
  updateBoosterBadge();
}

function renderChronicles() {
  const el = document.getElementById('chroniclesList');
  if (!el) return;
  el.innerHTML = `
    <article class="chronicle"><h3>Le commencement</h3><p>Certains souvenirs commencent doucement, puis prennent plus de place qu’on ne l’imaginait.</p></article>
    <article class="chronicle"><h3>Les tickets d’or</h3><p>Tu n’avais pas seulement une enveloppe entre les mains. Tu avais une collection de portes à ouvrir, chacune à son moment.</p></article>
    <article class="chronicle"><h3>Les mots réconfortants</h3><p>Parfois, les réponses ne se trouvent pas dans une énigme, mais dans un endroit préparé pour te faire du bien.</p></article>`;
}

function clearRoomTheme() {
  document.body.className = document.body.className.split(' ').filter(c => !c.startsWith('theme-')).join(' ');
  stopAmbience();
}

function applyRoomTheme(ticket) {
  document.body.className = document.body.className.split(' ').filter(c => !c.startsWith('theme-')).join(' ');
  if (ticket && ticket.theme) document.body.classList.add(`theme-${ticket.theme}`);
}

let ambienceCtx = null;
let currentAmbience = null;

window.toggleAmbience = async function(theme) {
  const btn = document.getElementById('ambienceBtn');
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      if (btn) btn.textContent = 'Son non compatible';
      return;
    }
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') await ctx.resume();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.75);
    gain.connect(ctx.destination);

    const freqs = theme === 'aube' ? [392, 523, 659] : theme === 'minuit' ? [220, 277, 330] : theme === 'rose' ? [330, 392, 494] : [262, 330, 392];
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(gain);
      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + 0.72 + i * 0.04);
    });
    currentAmbience = theme;
    if (btn) btn.textContent = 'Note d’ambiance jouée';
    setTimeout(() => { if (btn) btn.textContent = 'Jouer une note d’ambiance'; }, 1200);
    setTimeout(() => ctx.close(), 1200);
  } catch (e) {
    if (btn) btn.textContent = 'Son bloqué par le navigateur';
  }
};
function stopAmbience() {
  currentAmbience = null;
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


window.adminAddMiniBooster = function() {
  const state = loadState();
  state.miniBoosters = Number(state.miniBoosters || 0) + 1;
  saveState(state);
  updateBoosterBadge();
  renderBoosters();
};

window.adminAddBooster = function() {
  const state = loadState();
  state.boosters = Number(state.boosters || 0) + 1;
  saveState(state);
  updateBoosterBadge();
  renderBoosters();
};

window.adminAddBoosters = function(count) {
  const state = loadState();
  state.boosters = Number(state.boosters || 0) + Number(count || 1);
  saveState(state);
  updateBoosterBadge();
  renderBoosters();
};

window.adminRepairBoosters = function() {
  const state = loadState();
  let solvedNonFinal = 0;
  tickets.forEach(t => {
    const solved = state.answers[t.id] || [];
    solved.forEach(index => { if (index < (t.riddles || []).length - 1) solvedNonFinal += 1; });
  });
  const completed = (state.completed || []).length;
  const opened = (state.openedBoosters || []).length;
  const shouldHaveAtLeast = Math.max(0, solvedNonFinal + completed - opened);
  const current = Number(state.miniBoosters || 0) + Number(state.boosters || 0);
  if (current < shouldHaveAtLeast) state.miniBoosters = Number(state.miniBoosters || 0) + (shouldHaveAtLeast - current);
  saveState(state);
  updateBoosterBadge();
  renderBoosters();
};

function ensureAdminPanel() {
  if (document.getElementById('dynamicAdminPanel')) return;
  const panel = document.createElement('section');
  panel.id = 'dynamicAdminPanel';
  panel.className = 'admin-floating';
  panel.innerHTML = `
    <strong>Admin test</strong>
    <div class="admin-floating-grid">
      <button id="unlockAllDoorsBtn">Débloquer toutes les portes</button>
      <button id="lockAllDoorsBtn">Verrouiller toutes les portes</button>
      <button id="resetAllProgressBtn">Tout réinitialiser</button>
      <button id="addMiniBoosterBtn">+1 mini booster</button>
      <button id="addBoosterBtn">+1 grand booster</button>
      <button id="addFiveBoostersBtn">+5 boosters</button>
      <button id="repairBoostersBtn">Réparer boosters</button>
    </div>
    <div class="admin-door-grid">
      ${tickets.map(t => `<button onclick="adminUnlockDoor(${t.id})">Porte ${t.id}</button>`).join('')}
    </div>`;
  document.body.appendChild(panel);
  document.getElementById('unlockAllDoorsBtn')?.addEventListener('click', () => {
    const state = loadState();
    state.unlocked = tickets.map(t => t.id);
    state.lastUnlockMonth = null;
    saveState(state);
    renderMemories();
    alert('Toutes les portes sont débloquées pour test.');
  });
  document.getElementById('lockAllDoorsBtn')?.addEventListener('click', () => {
    const state = loadState();
    state.unlocked = [];
    state.lastUnlockMonth = null;
    saveState(state);
    renderMemories();
    showView('code');
    alert('Toutes les portes sont verrouillées.');
  });
  document.getElementById('resetAllProgressBtn')?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
  document.getElementById('addMiniBoosterBtn')?.addEventListener('click', () => { adminAddMiniBooster(); alert('Un mini booster a été ajouté.'); });
  document.getElementById('addBoosterBtn')?.addEventListener('click', () => { adminAddBooster(); alert('Un grand booster a été ajouté.'); });
  document.getElementById('addFiveBoostersBtn')?.addEventListener('click', () => { adminAddBoosters(5); alert('Cinq boosters ont été ajoutés.'); });
  document.getElementById('repairBoostersBtn')?.addEventListener('click', () => { adminRepairBoosters(); alert('Boosters réparés selon les portes terminées.'); });
}
window.adminUnlockDoor = function(ticketId) {
  unlockForTest(ticketId);
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) { renderRoom(ticket); showView('room'); }
};

function setupAdmin() {
  const params = new URLSearchParams(window.location.search);
  const enabled = params.get('admin') === '1';
  if (!enabled) return;
  document.body.classList.add('admin-enabled');
  ensureAdminPanel();

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
updateBoosterBadge();
