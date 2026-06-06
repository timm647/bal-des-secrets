const tickets = [
  {
    "id": 1,
    "code": "REFUGE-DORÉ",
    "title": "Le Refuge Doré",
    "gift": "Doudou",
    "teaser": "Un mystère doux, discret, pensé pour les choses que tu gardes près de toi sans toujours l’expliquer.",
    "intro": "<p>Certains trésors ne brillent pas.</p><p>Ils restent là. Ils rassurent. Et parfois, ils accompagnent une vie plus longtemps qu’on ne l’avoue.</p>",
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
        "success": "Le premier mot est trouvé."
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
          "La seconde image montre une matière que l’on retrouve dans certains vêtements.",
          "Assemble le son de la lettre de la carte avec le nom de la matière."
        ],
        "success": "Oui. Un câlin peut rassurer beaucoup."
      },
      {
        "type": "concept",
        "title": "Épreuve III — Ce que l’on cherche",
        "q": "<p>Je ne suis ni une personne, ni un lieu.</p><p>Pourtant, beaucoup me cherchent.</p><p>Certains me trouvent dans une présence.</p><p>D’autres dans une habitude.</p><p>D’autres encore dans quelque chose qu’ils gardent depuis longtemps.</p><p><strong>Que suis-je ?</strong></p>",
        "answers": [
          "reconfort",
          "réconfort"
        ],
        "hints": [
          "La réponse ne peut pas se voir ni se toucher.",
          "Elle se ressent plus qu’elle ne se possède.",
          "Elle est proche du calme et de l’apaisement.",
          "On la cherche souvent quand on a besoin d’aller mieux."
        ],
        "success": "Exact."
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
          "Elle décrit un lien émotionnel."
        ],
        "success": "Oui."
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
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Refuge Doré cachait un doudou.</h3><p>Un petit refuge à garder près de toi, pour les jours où un simple câlin vaut plus qu’un grand discours.</p></div>",
    "memory": "Le Refuge Doré — un souvenir doux, gardé pour toi."
  },
  {
    "id": 2,
    "code": "ROSE-NOIRE",
    "title": "La Rose Noire",
    "gift": "Fleurs",
    "teaser": "Un message silencieux, fait pour dire quelque chose sans utiliser les phrases habituelles.",
    "intro": "<p>Cette porte cherche une façon de transmettre une attention sans écrire de grande déclaration.</p>",
    "riddles": [
      {
        "type": "deduction",
        "title": "Épreuve I — Le bon messager",
        "q": "<p>Quatre messagers veulent porter une attention jusqu’à toi.</p><ul><li>Le papier garde les mots, mais demande qu’on les lise.</li><li>Le parfum laisse une trace, mais disparaît trop vite.</li><li>La lumière révèle, mais ne reste pas entre les mains.</li><li>Le végétal peut être offert, gardé un moment, puis devenir souvenir.</li></ul><p><strong>Quel messager correspond à cette porte ?</strong></p>",
        "answers": [
          "vegetal",
          "végétal"
        ],
        "hints": [
          "Ce n’est pas un objet fabriqué.",
          "Il peut vivre puis faner.",
          "On peut l’offrir sans écrire une phrase.",
          "La réponse désigne ce qui pousse."
        ],
        "success": "Le messager vivant est trouvé."
      },
      {
        "type": "caesar",
        "title": "Épreuve II — Le mot décalé",
        "q": "<p class=\"instruction\">Chaque lettre a été avancée de 3 places.</p><div class=\"cipher-text\"><strong>DWWHQWLRQ</strong></div><p><strong>Quel mot retrouves-tu ?</strong></p>",
        "answers": [
          "attention"
        ],
        "hints": [
          "C’est un code de César.",
          "Il faut reculer les lettres.",
          "D devient A.",
          "Le mot désigne le soin mis dans un geste."
        ],
        "success": "Oui, l’attention compte plus que le prix."
      },
      {
        "type": "logic",
        "title": "Épreuve III — Le geste invisible",
        "q": "<p>Un objet donné au hasard ne raconte pas grand-chose.</p><p>Le même objet choisi pour toi peut soudain prendre du sens.</p><p>Ce n’est pas l’objet qui change, mais ce qu’il contient derrière le geste.</p><p><strong>Quel mot désigne ce qu’on veut faire passer ?</strong></p>",
        "answers": [
          "intention"
        ],
        "hints": [
          "Ce mot n’est pas visible.",
          "Il existe avant le geste.",
          "Il répond à la question “pourquoi ?”.",
          "Il commence par INT."
        ],
        "success": "Exact."
      },
      {
        "type": "morse",
        "title": "Épreuve IV — Le ruban codé",
        "q": "<p class=\"instruction\">Décode ce morse.</p><div class=\"cipher-text\"><strong>.-. ..- -... .- -.</strong></div><p>Ce n’est pas le cadeau. C’est ce qui peut l’accompagner.</p><p><strong>Quel mot apparaît ?</strong></p>",
        "answers": [
          "ruban"
        ],
        "hints": [
          "Cinq groupes, cinq lettres.",
          "Le code utilise points et tirets.",
          ".-. donne R.",
          "On peut l’attacher autour d’un bouquet."
        ],
        "success": "Oui, le ruban accompagne sans être le message principal."
      },
      {
        "type": "final",
        "title": "Épreuve V — Ce qui parle sans phrase",
        "q": "<p>Tu as trouvé un messager vivant, une attention, une intention et un ruban.</p><p>Il reste à nommer ce qui peut porter tout cela à la fois.</p><p>On les offre rarement pour leur utilité.</p><p>On les offre parce qu’elles disent quelque chose.</p><p><strong>Que sont-elles ?</strong></p>",
        "answers": [
          "fleurs",
          "fleur"
        ],
        "hints": [
          "La réponse désigne un cadeau vivant.",
          "Elles ne restent pas éternellement.",
          "On peut les offrir en bouquet.",
          "Le mot commence par F."
        ],
        "success": "Tu as trouvé la Rose Noire."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>La Rose Noire cachait des fleurs.</h3><p>Des fleurs choisies pour te transmettre un message sans avoir besoin de trop en dire.</p></div>",
    "memory": "La Rose Noire — un message vivant, pensé pour toi."
  },
  {
    "id": 3,
    "code": "10-AVRIL",
    "title": "Le Parc des Premiers Secrets",
    "gift": "Journée avec toi",
    "teaser": "Un souvenir, un endroit, et le début discret d’une histoire à deux.",
    "intro": "<p>Cette porte commence par un jour et un lieu, mais elle ne s’arrête pas au passé.</p>",
    "riddles": [
      {
        "type": "memory",
        "title": "Épreuve I — Deux nombres",
        "q": "<p class=\"instruction\">Deux nombres ont été laissés sans explication.</p><div class=\"date-fragments\"><span>10</span><span>04</span></div><p>Ils ne demandent pas seulement d’être lus comme une date.</p><p>Ils demandent de retrouver ce qu’ils protègent : un souvenir très court, mais important.</p><p><strong>Quel souvenir se cache derrière eux ?</strong></p>",
        "answers": [
          "premier baiser",
          "premier bisou",
          "bisou",
          "baiser"
        ],
        "hints": [
          "La réponse n’est pas “10 avril”.",
          "Les deux nombres sont la clé, pas le trésor.",
          "Le souvenir a duré seulement quelques secondes.",
          "C’est arrivé entre nous pour la première fois ce jour-là."
        ],
        "success": "Oui, la date protégeait le premier baiser."
      },
      {
        "type": "place",
        "title": "Épreuve II — Le témoin discret",
        "q": "<p>Ce n’était pas une maison.</p><p>Ce n’était pas une rue.</p><p>C’était un endroit assez grand pour marcher et assez calme pour s’arrêter.</p><p>Ce jour-là, il est devenu le témoin discret d’un commencement.</p><p><strong>Quel lieu était-ce ?</strong></p>",
        "answers": [
          "parcdisle",
          "parc d isle",
          "parc d'isle",
          "parc de lisle",
          "parc de l isle",
          "parc isle"
        ],
        "hints": [
          "Ce lieu n’était pas important pour tout le monde.",
          "On pouvait y marcher sans destination précise.",
          "Son nom évoque presque quelque chose entouré d’eau.",
          "Il se trouve à Saint-Quentin."
        ],
        "success": "Le lieu est retrouvé."
      },
      {
        "type": "chronology",
        "title": "Épreuve III — Après coup",
        "q": "<p>Un moment peut sembler simple quand il arrive.</p><p>Puis, plus tard, on comprend qu’on l’a gardé quelque part.</p><p>Il n’a pas besoin d’être long pour compter.</p><p><strong>Quel mot donne un nom à ce qui reste ?</strong></p>",
        "answers": [
          "souvenir"
        ],
        "hints": [
          "Ce n’est pas le lieu.",
          "Il existe après le moment.",
          "On peut le raconter plus tard.",
          "Le mot commence par S."
        ],
        "success": "Oui."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Ce qu’on prépare",
        "q": "<p>Si un souvenir a déjà existé, on peut choisir d’en créer un autre.</p><p>Cette porte ne prépare pas un objet.</p><p>Elle prépare du temps à vivre ensemble.</p><p><strong>Quel mot peut désigner ce moment prévu ?</strong></p>",
        "answers": [
          "sortie",
          "rendezvous",
          "rendez-vous",
          "date"
        ],
        "hints": [
          "La réponse n’est pas matérielle.",
          "Elle demande de se voir.",
          "Elle peut être organisée.",
          "On peut appeler ça une sortie ou un rendez-vous."
        ],
        "success": "Exact."
      },
      {
        "type": "final",
        "title": "Épreuve V — Le temps offert",
        "q": "<p>Tu as retrouvé le souvenir, le lieu, ce qu’il a laissé et l’idée d’un nouveau moment.</p><p>Cette porte cache du temps pour marcher, rire, parler, manger, découvrir, se retrouver.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "journee avec toi",
          "journée avec toi",
          "journee a deux",
          "journée à deux",
          "date avec toi"
        ],
        "hints": [
          "Ce n’est pas un objet.",
          "Cela dure plusieurs heures.",
          "Cela se vit ensemble.",
          "C’est une journée préparée pour nous."
        ],
        "success": "Tu as trouvé : une journée à deux."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Cette porte cachait une journée avec moi.</h3><p>Un cadeau à vivre ensemble, pour créer un nouveau souvenir.</p></div>",
    "memory": "Le Parc des Premiers Secrets — du 10 avril vers une journée à deux."
  },
  {
    "id": 4,
    "code": "AUBE-ROYALE",
    "title": "L’Aube Royale",
    "gift": "Petit-déjeuner",
    "teaser": "Une porte construite autour de réveil, lumière, plateau et gourmandise, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : R… ?</strong></p>",
        "answers": [
          "réveil"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par R."
        ],
        "success": "Premier fragment trouvé : réveil."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">L _ _ _</div>",
        "answers": [
          "lumière"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par L."
        ],
        "success": "Deuxième fragment trouvé : lumière."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "plateau"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par P."
        ],
        "success": "Troisième fragment trouvé : plateau."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "gourmandise"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par G."
        ],
        "success": "Dernier fragment trouvé : gourmandise."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : réveil, lumière, plateau, gourmandise.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "petit-déjeuner"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : petit-déjeuner."
        ],
        "success": "Tu as trouvé : petit-déjeuner."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>L’Aube Royale cachait Petit-déjeuner.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "L’Aube Royale — une porte terminée autour de Petit-déjeuner."
  },
  {
    "id": 5,
    "code": "JOKER-18",
    "title": "Le Joker",
    "gift": "Une envie à réaliser",
    "teaser": "Une porte construite autour de carte libre, choix, souhait et une fois, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : C… ?</strong></p>",
        "answers": [
          "carte libre"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par C."
        ],
        "success": "Premier fragment trouvé : carte libre."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">C _ _ _</div>",
        "answers": [
          "choix"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par C."
        ],
        "success": "Deuxième fragment trouvé : choix."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "souhait"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par S."
        ],
        "success": "Troisième fragment trouvé : souhait."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "une fois"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par U."
        ],
        "success": "Dernier fragment trouvé : une fois."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : carte libre, choix, souhait, une fois.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "envie à réaliser"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : envie à réaliser."
        ],
        "success": "Tu as trouvé : envie à réaliser."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Joker cachait Une envie à réaliser.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Le Joker — une porte terminée autour de Une envie à réaliser."
  },
  {
    "id": 6,
    "code": "APRÈS-MINUIT",
    "title": "Après Minuit",
    "gift": "Pyjama / lingerie",
    "teaser": "Une porte construite autour de douceur, texture, intimité et confort, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : D… ?</strong></p>",
        "answers": [
          "douceur"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par D."
        ],
        "success": "Premier fragment trouvé : douceur."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">T _ _ _</div>",
        "answers": [
          "texture"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par T."
        ],
        "success": "Deuxième fragment trouvé : texture."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "intimité"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par I."
        ],
        "success": "Troisième fragment trouvé : intimité."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "confort"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par C."
        ],
        "success": "Dernier fragment trouvé : confort."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : douceur, texture, intimité, confort.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "pyjama / lingerie"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : pyjama / lingerie."
        ],
        "success": "Tu as trouvé : pyjama / lingerie."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Après Minuit cachait Pyjama / lingerie.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Après Minuit — une porte terminée autour de Pyjama / lingerie."
  },
  {
    "id": 7,
    "code": "CHAPITRE-XII",
    "title": "Chapitre XII",
    "gift": "Livre au choix",
    "teaser": "Une porte construite autour de imagination, auteur, mot et histoire, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : I… ?</strong></p>",
        "answers": [
          "imagination"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par I."
        ],
        "success": "Premier fragment trouvé : imagination."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">A _ _ _</div>",
        "answers": [
          "auteur"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par A."
        ],
        "success": "Deuxième fragment trouvé : auteur."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "mot"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par M."
        ],
        "success": "Troisième fragment trouvé : mot."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "histoire"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par H."
        ],
        "success": "Dernier fragment trouvé : histoire."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : imagination, auteur, mot, histoire.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "livre"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : livre."
        ],
        "success": "Tu as trouvé : livre."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Chapitre XII cachait Livre au choix.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Chapitre XII — une porte terminée autour de Livre au choix."
  },
  {
    "id": 8,
    "code": "FESTIN-DORÉ",
    "title": "Le Festin Doré",
    "gift": "Pack nourriture",
    "teaser": "Une porte construite autour de goût, envie, panier et pâtes carbo, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : G… ?</strong></p>",
        "answers": [
          "goût"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par G."
        ],
        "success": "Premier fragment trouvé : goût."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">E _ _ _</div>",
        "answers": [
          "envie"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par E."
        ],
        "success": "Deuxième fragment trouvé : envie."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "panier"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par P."
        ],
        "success": "Troisième fragment trouvé : panier."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "pâtes carbo"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par P."
        ],
        "success": "Dernier fragment trouvé : pâtes carbo."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : goût, envie, panier, pâtes carbo.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "pack nourriture"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : pack nourriture."
        ],
        "success": "Tu as trouvé : pack nourriture."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Festin Doré cachait Pack nourriture.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Le Festin Doré — une porte terminée autour de Pack nourriture."
  },
  {
    "id": 9,
    "code": "FIL-DORÉ",
    "title": "Le Fil Doré",
    "gift": "Tee-shirts",
    "teaser": "Une porte construite autour de style, coton, taille et ambiance, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : S… ?</strong></p>",
        "answers": [
          "style"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par S."
        ],
        "success": "Premier fragment trouvé : style."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">C _ _ _</div>",
        "answers": [
          "coton"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par C."
        ],
        "success": "Deuxième fragment trouvé : coton."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "taille"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par T."
        ],
        "success": "Troisième fragment trouvé : taille."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "ambiance"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par A."
        ],
        "success": "Dernier fragment trouvé : ambiance."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : style, coton, taille, ambiance.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "tee-shirt"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : tee-shirt."
        ],
        "success": "Tu as trouvé : tee-shirt."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Fil Doré cachait Tee-shirts.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Le Fil Doré — une porte terminée autour de Tee-shirts."
  },
  {
    "id": 10,
    "code": "PETIT-MONDE",
    "title": "Le Petit Monde",
    "gift": "Figurines",
    "teaser": "Une porte construite autour de miniature, personnage, collection et univers, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : M… ?</strong></p>",
        "answers": [
          "miniature"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par M."
        ],
        "success": "Premier fragment trouvé : miniature."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">P _ _ _</div>",
        "answers": [
          "personnage"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par P."
        ],
        "success": "Deuxième fragment trouvé : personnage."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "collection"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par C."
        ],
        "success": "Troisième fragment trouvé : collection."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "univers"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par U."
        ],
        "success": "Dernier fragment trouvé : univers."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : miniature, personnage, collection, univers.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "figurines"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : figurines."
        ],
        "success": "Tu as trouvé : figurines."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Petit Monde cachait Figurines.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Le Petit Monde — une porte terminée autour de Figurines."
  },
  {
    "id": 11,
    "code": "JARDIN-SECRET",
    "title": "Le Jardin Secret",
    "gift": "Cadeau secret",
    "teaser": "Une porte construite autour de secret, confiance, désir et respect, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : S… ?</strong></p>",
        "answers": [
          "secret"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par S."
        ],
        "success": "Premier fragment trouvé : secret."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">C _ _ _</div>",
        "answers": [
          "confiance"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par C."
        ],
        "success": "Deuxième fragment trouvé : confiance."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "désir"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par D."
        ],
        "success": "Troisième fragment trouvé : désir."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "respect"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par R."
        ],
        "success": "Dernier fragment trouvé : respect."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : secret, confiance, désir, respect.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "cadeau intime"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : cadeau intime."
        ],
        "success": "Tu as trouvé : cadeau intime."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Jardin Secret cachait Cadeau secret.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Le Jardin Secret — une porte terminée autour de Cadeau secret."
  },
  {
    "id": 12,
    "code": "DERNIER-MASQUE",
    "title": "Le Dernier Masque",
    "gift": "Cadeau final",
    "teaser": "Une porte construite autour de souvenir, archives, doudou et possibilité, sans révéler trop vite son secret.",
    "intro": "<p>Cette porte avance par étapes. Chaque réponse te rapproche du secret, mais aucune ne doit le donner trop tôt.</p>",
    "riddles": [
      {
        "type": "code",
        "title": "Épreuve I — Premier fragment",
        "q": "<p>Le premier fragment n’est pas le cadeau.</p><p>Il donne seulement l’ambiance de cette porte.</p><p><strong>Quel mot correspond à cette idée : S… ?</strong></p>",
        "answers": [
          "souvenir"
        ],
        "hints": [
          "La réponse est un mot d’ambiance.",
          "Elle ne désigne pas le cadeau final.",
          "Elle ouvre la logique de la porte.",
          "Le mot commence par S."
        ],
        "success": "Premier fragment trouvé : souvenir."
      },
      {
        "type": "logic",
        "title": "Épreuve II — Deuxième fragment",
        "q": "<p>Ce fragment complète le premier sans le répéter.</p><p>Il ajoute une nouvelle idée à la porte.</p><p><strong>Quel mot cherches-tu ?</strong></p><div class=\"sealed-note\">A _ _ _</div>",
        "answers": [
          "archives"
        ],
        "hints": [
          "Ce mot ne répète pas la première réponse.",
          "Il appartient au même univers que la porte.",
          "Il aide à comprendre le chemin vers le cadeau.",
          "Il commence par A."
        ],
        "success": "Deuxième fragment trouvé : archives."
      },
      {
        "type": "observation",
        "title": "Épreuve III — L’objet intermédiaire",
        "q": "<p>La porte se précise, mais pas encore jusqu’au cadeau.</p><p>Ce mot sert d’étape entre l’idée et la révélation.</p><p><strong>Quel mot manque ?</strong></p>",
        "answers": [
          "doudou"
        ],
        "hints": [
          "La réponse sert de pont.",
          "Ce n’est pas le cadeau final.",
          "Elle peut être concrète ou liée à l’histoire.",
          "Elle commence par D."
        ],
        "success": "Troisième fragment trouvé : doudou."
      },
      {
        "type": "deduction",
        "title": "Épreuve IV — Le dernier indice",
        "q": "<p>Ce dernier fragment donne presque la direction finale.</p><p>Mais il ne donne pas encore le nom du cadeau.</p><p><strong>Quel mot complète la progression ?</strong></p>",
        "answers": [
          "possibilité"
        ],
        "hints": [
          "La réponse est proche de la révélation.",
          "Elle doit rester différente du cadeau final.",
          "Elle donne le sens de la porte.",
          "Elle commence par P."
        ],
        "success": "Dernier fragment trouvé : possibilité."
      },
      {
        "type": "final",
        "title": "Épreuve V — La révélation",
        "q": "<p>Tu as trouvé : souvenir, archives, doudou, possibilité.</p><p>Ces fragments pointent tous vers le même secret.</p><p><strong>Quel cadeau se cache ici ?</strong></p>",
        "answers": [
          "cadeau final"
        ],
        "hints": [
          "La réponse est maintenant le cadeau.",
          "Les quatre fragments précédents doivent y mener.",
          "C’est la révélation de cette porte.",
          "La réponse attendue est : cadeau final."
        ],
        "success": "Tu as trouvé : cadeau final."
      }
    ],
    "reveal": "<div class=\"reveal-card\"><div class=\"stamp\">DÉCOUVERT</div><h3>Le Dernier Masque cachait Cadeau final.</h3><p>Un cadeau pensé pour toi, révélé étape par étape.</p></div>",
    "memory": "Le Dernier Masque — une porte terminée autour de Cadeau final."
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
    .replace(/[-\s]+/g, '');
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
    </div>
    <div class="admin-door-grid">
      ${tickets.map(t => `<button onclick="adminUnlockDoor(${t.id})">Ouvrir ${t.id}</button>`).join('')}
    </div>`;
  document.body.appendChild(panel);
  document.getElementById('unlockAllDoorsBtn')?.addEventListener('click', () => {
    const state = loadState(); state.unlocked = tickets.map(t => t.id); state.lastUnlockMonth = null; saveState(state); renderMemories(); alert('Toutes les portes sont débloquées pour test.');
  });
  document.getElementById('lockAllDoorsBtn')?.addEventListener('click', () => {
    const state = loadState(); state.unlocked = []; state.lastUnlockMonth = null; saveState(state); renderMemories(); showView('code'); alert('Toutes les portes sont verrouillées.');
  });
  document.getElementById('resetAllProgressBtn')?.addEventListener('click', () => { localStorage.removeItem(STORAGE_KEY); location.reload(); });
}
window.adminUnlockDoor = function(ticketId) { unlockForTest(ticketId); const ticket = tickets.find(t => t.id === ticketId); if (ticket) { renderRoom(ticket); showView('room'); } };

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
