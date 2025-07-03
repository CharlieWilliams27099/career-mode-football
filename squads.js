const squads = {
  Arsenal: {
    lineup: {
      LW: { name: "Gabriel Martinelli", position: "LW", rating: 84 },
      ST: { name: "Gabriel Jesus", position: "ST", rating: 85 },
      RW: { name: "Bukayo Saka", position: "RW", rating: 86 },
      LCM: { name: "Declan Rice", position: "LCM", rating: 87 },
      CM: { name: "Martin Ødegaard", position: "CM", rating: 87 },
      RCM: { name: "Jorginho", position: "RCM", rating: 81 },
      LB: { name: "Oleksandr Zinchenko", position: "LB", rating: 80 },
      LCB: { name: "Gabriel Magalhães", position: "LCB", rating: 83 },
      RCB: { name: "William Saliba", position: "RCB", rating: 84 },
      RB: { name: "Ben White", position: "RB", rating: 81 },
      GK: { name: "David Raya", position: "GK", rating: 82 }
    },
    subs: [
      { name: "Aaron Ramsdale", position: "GK", rating: 81 },
      { name: "Leandro Trossard", position: "LW", rating: 82 },
      { name: "Eddie Nketiah", position: "ST", rating: 77 },
      { name: "Fabio Vieira", position: "CAM", rating: 77 },
      { name: "Jurrien Timber", position: "RB", rating: 79 },
      { name: "Emile Smith Rowe", position: "CAM", rating: 78 },
      { name: "Takehiro Tomiyasu", position: "CB", rating: 80 }
    ]
  },

  AstonVilla: {
    lineup: {
      LW: { name: "Moussa Diaby", position: "LW", rating: 83 },
      ST: { name: "Ollie Watkins", position: "ST", rating: 83 },
      RW: { name: "Leon Bailey", position: "RW", rating: 80 },
      LCM: { name: "Douglas Luiz", position: "LCM", rating: 82 },
      CM: { name: "Youri Tielemans", position: "CM", rating: 81 },
      RCM: { name: "John McGinn", position: "RCM", rating: 80 },
      LB: { name: "Lucas Digne", position: "LB", rating: 81 },
      LCB: { name: "Pau Torres", position: "LCB", rating: 83 },
      RCB: { name: "Ezri Konsa", position: "RCB", rating: 81 },
      RB: { name: "Matty Cash", position: "RB", rating: 80 },
      GK: { name: "Emiliano Martínez", position: "GK", rating: 85 }
    },
    subs: [
      { name: "Nicolo Zaniolo", position: "CAM", rating: 79 },
      { name: "Diego Carlos", position: "CB", rating: 80 },
      { name: "Jacob Ramsey", position: "CM", rating: 79 },
      { name: "Calum Chambers", position: "CB", rating: 76 },
      { name: "Bertrand Traoré", position: "RW", rating: 75 },
      { name: "Leander Dendoncker", position: "CDM", rating: 78 },
      { name: "Robin Olsen", position: "GK", rating: 75 }
    ]
  },

  Bournemouth: {
    lineup: {
      LW: { name: "Dango Ouattara", position: "LW", rating: 74 },
      ST: { name: "Dominic Solanke", position: "ST", rating: 81 },
      RW: { name: "Justin Kluivert", position: "RW", rating: 76 },
      LCM: { name: "Philip Billing", position: "LCM", rating: 77 },
      CM: { name: "Lewis Cook", position: "CM", rating: 75 },
      RCM: { name: "Ryan Christie", position: "RCM", rating: 74 },
      LB: { name: "Lloyd Kelly", position: "LB", rating: 76 },
      LCB: { name: "Marcos Senesi", position: "LCB", rating: 78 },
      RCB: { name: "Chris Mepham", position: "RCB", rating: 74 },
      RB: { name: "Adam Smith", position: "RB", rating: 75 },
      GK: { name: "Neto", position: "GK", rating: 79 }
    },
    subs: [
      { name: "Kieffer Moore", position: "ST", rating: 73 },
      { name: "Jaidon Anthony", position: "LW", rating: 72 },
      { name: "David Brooks", position: "RW", rating: 74 },
      { name: "Illia Zabarnyi", position: "CB", rating: 75 },
      { name: "Joe Rothwell", position: "CM", rating: 73 },
      { name: "Mark Travers", position: "GK", rating: 72 },
      { name: "Lewis Tavernier", position: "CAM", rating: 73 }
    ]
  },

  Brentford: {
    lineup: {
      LW: { name: "Bryan Mbeumo", position: "LW", rating: 79 },
      ST: { name: "Yoane Wissa", position: "ST", rating: 77 },
      RW: { name: "Keane Lewis-Potter", position: "RW", rating: 73 },
      LCM: { name: "Mathias Jensen", position: "LCM", rating: 79 },
      CM: { name: "Christian Nørgaard", position: "CM", rating: 79 },
      RCM: { name: "Vitaly Janelt", position: "RCM", rating: 78 },
      LB: { name: "Rico Henry", position: "LB", rating: 76 },
      LCB: { name: "Ben Mee", position: "LCB", rating: 78 },
      RCB: { name: "Ethan Pinnock", position: "RCB", rating: 78 },
      RB: { name: "Aaron Hickey", position: "RB", rating: 75 },
      GK: { name: "Mark Flekken", position: "GK", rating: 78 }
    },
    subs: [
      { name: "Frank Onyeka", position: "CM", rating: 75 },
      { name: "Shandon Baptiste", position: "CM", rating: 73 },
      { name: "Kevin Schade", position: "ST", rating: 72 },
      { name: "Zanka", position: "CB", rating: 74 },
      { name: "Mads Roerslev", position: "RB", rating: 72 },
      { name: "Thomas Strakosha", position: "GK", rating: 76 },
      { name: "Saman Ghoddos", position: "RW", rating: 71 }
    ]
  },

  Brighton: {
    lineup: {
      LW: { name: "Kaoru Mitoma", position: "LW", rating: 80 },
      ST: { name: "João Pedro", position: "ST", rating: 78 },
      RW: { name: "Solly March", position: "RW", rating: 77 },
      LCM: { name: "Pascal Groß", position: "LCM", rating: 80 },
      CM: { name: "Billy Gilmour", position: "CM", rating: 75 },
      RCM: { name: "Carlos Baleba", position: "RCM", rating: 74 },
      LB: { name: "Pervis Estupiñán", position: "LB", rating: 80 },
      LCB: { name: "Lewis Dunk", position: "LCB", rating: 81 },
      RCB: { name: "Jan Paul van Hecke", position: "RCB", rating: 74 },
      RB: { name: "Tariq Lamptey", position: "RB", rating: 74 },
      GK: { name: "Bart Verbruggen", position: "GK", rating: 75 }
    },
    subs: [
      { name: "Adam Webster", position: "CB", rating: 77 },
      { name: "James Milner", position: "CM", rating: 75 },
      { name: "Julio Enciso", position: "CAM", rating: 76 },
      { name: "Facundo Buonanotte", position: "RW", rating: 73 },

        },

  Burnley: {
    lineup: {
      LW: { name: "Luca Koleosho", position: "LW", rating: 71 },
      ST: { name: "Zeki Amdouni", position: "ST", rating: 75 },
      RW: { name: "Anass Zaroury", position: "RW", rating: 73 },
      LCM: { name: "Josh Cullen", position: "LCM", rating: 75 },
      CM: { name: "Sander Berge", position: "CM", rating: 77 },
      RCM: { name: "Aaron Ramsey", position: "RCM", rating: 72 },
      LB: { name: "Charlie Taylor", position: "LB", rating: 74 },
      LCB: { name: "Dara O'Shea", position: "LCB", rating: 75 },
      RCB: { name: "Jordan Beyer", position: "RCB", rating: 74 },
      RB: { name: "Connor Roberts", position: "RB", rating: 74 },
      GK: { name: "James Trafford", position: "GK", rating: 75 }
    },
    subs: [
      { name: "Jay Rodriguez", position: "ST", rating: 72 },
      { name: "Jack Cork", position: "CM", rating: 73 },
      { name: "Vitinho", position: "RB", rating: 71 },
      { name: "Manuel Benson", position: "RW", rating: 73 },
      { name: "Arijanet Muric", position: "GK", rating: 74 },
      { name: "Hjalmar Ekdal", position: "CB", rating: 73 },
      { name: "Josh Brownhill", position: "CM", rating: 76 }
    ]
  },

  Chelsea: {
    lineup: {
      LW: { name: "Raheem Sterling", position: "LW", rating: 83 },
      ST: { name: "Christopher Nkunku", position: "ST", rating: 84 },
      RW: { name: "Noni Madueke", position: "RW", rating: 78 },
      LCM: { name: "Enzo Fernández", position: "LCM", rating: 83 },
      CM: { name: "Conor Gallagher", position: "CM", rating: 80 },
      RCM: { name: "Moises Caicedo", position: "RCM", rating: 81 },
      LB: { name: "Ben Chilwell", position: "LB", rating: 82 },
      LCB: { name: "Thiago Silva", position: "LCB", rating: 83 },
      RCB: { name: "Axel Disasi", position: "RCB", rating: 79 },
      RB: { name: "Reece James", position: "RB", rating: 84 },
      GK: { name: "Robert Sánchez", position: "GK", rating: 79 }
    },
    subs: [
      { name: "Cole Palmer", position: "RW", rating: 78 },
      { name: "Mykhailo Mudryk", position: "LW", rating: 77 },
      { name: "Levi Colwill", position: "CB", rating: 80 },
      { name: "Marc Cucurella", position: "LB", rating: 78 },
      { name: "Nicolas Jackson", position: "ST", rating: 78 },
      { name: "Lesley Ugochukwu", position: "CM", rating: 73 },
      { name: "Djordje Petrovic", position: "GK", rating: 76 }
    ]
  },

    CrystalPalace: {
    lineup: {
      LW: { name: "Eberechi Eze", position: "LW", rating: 81 },
      ST: { name: "Jean-Philippe Mateta", position: "ST", rating: 76 },
      RW: { name: "Michael Olise", position: "RW", rating: 81 },
      LCM: { name: "Jefferson Lerma", position: "LCM", rating: 78 },
      CM: { name: "Will Hughes", position: "CM", rating: 75 },
      RCM: { name: "Cheick Doucouré", position: "RCM", rating: 78 },
      LB: { name: "Tyrick Mitchell", position: "LB", rating: 76 },
      LCB: { name: "Marc Guéhi", position: "LCB", rating: 79 },
      RCB: { name: "Joachim Andersen", position: "RCB", rating: 80 },
      RB: { name: "Nathaniel Clyne", position: "RB", rating: 74 },
      GK: { name: "Sam Johnstone", position: "GK", rating: 78 }
    },
    subs: [
      { name: "Odsonne Édouard", position: "ST", rating: 76 },
      { name: "Jordan Ayew", position: "RW", rating: 75 },
      { name: "Chris Richards", position: "CB", rating: 75 },
      { name: "Jairo Riedewald", position: "CM", rating: 73 },
      { name: "Nathan Ferguson", position: "RB", rating: 71 },
      { name: "Dean Henderson", position: "GK", rating: 79 },
      { name: "Jesurun Rak-Sakyi", position: "RW", rating: 72 }
    ]
  },

  Everton: {
    lineup: {
      LW: { name: "Dwight McNeil", position: "LW", rating: 76 },
      ST: { name: "Dominic Calvert-Lewin", position: "ST", rating: 78 },
      RW: { name: "Jack Harrison", position: "RW", rating: 76 },
      LCM: { name: "Idrissa Gueye", position: "LCM", rating: 79 },
      CM: { name: "Amadou Onana", position: "CM", rating: 78 },
      RCM: { name: "James Garner", position: "RCM", rating: 75 },
      LB: { name: "Vitaliy Mykolenko", position: "LB", rating: 75 },
      LCB: { name: "Jarrad Branthwaite", position: "LCB", rating: 74 },
      RCB: { name: "James Tarkowski", position: "RCB", rating: 78 },
      RB: { name: "Nathan Patterson", position: "RB", rating: 74 },
      GK: { name: "Jordan Pickford", position: "GK", rating: 83 }
    },
    subs: [
      { name: "Arnaut Danjuma", position: "LW", rating: 75 },
      { name: "Ben Godfrey", position: "CB", rating: 76 },
      { name: "Michael Keane", position: "CB", rating: 76 },
      { name: "Ashley Young", position: "RB", rating: 75 },
      { name: "André Gomes", position: "CM", rating: 76 },
      { name: "Youssef Chermiti", position: "ST", rating: 70 },
      { name: "Andy Lonergan", position: "GK", rating: 65 }
    ]
  },

  Fulham: {
    lineup: {
      LW: { name: "Willian", position: "LW", rating: 79 },
      ST: { name: "Raúl Jiménez", position: "ST", rating: 77 },
      RW: { name: "Harry Wilson", position: "RW", rating: 77 },
      LCM: { name: "João Palhinha", position: "LCM", rating: 82 },
      CM: { name: "Tom Cairney", position: "CM", rating: 75 },
      RCM: { name: "Harrison Reed", position: "RCM", rating: 76 },
      LB: { name: "Antonee Robinson", position: "LB", rating: 76 },
      LCB: { name: "Tim Ream", position: "LCB", rating: 76 },
      RCB: { name: "Issa Diop", position: "RCB", rating: 77 },
      RB: { name: "Kenny Tete", position: "RB", rating: 76 },
      GK: { name: "Bernd Leno", position: "GK", rating: 82 }
    },
    subs: [
      { name: "Andreas Pereira", position: "CAM", rating: 78 },
      { name: "Carlos Vinícius", position: "ST", rating: 74 },
      { name: "Adama Traoré", position: "RW", rating: 76 },
      { name: "Calvin Bassey", position: "CB", rating: 75 },
      { name: "Kevin Mbabu", position: "RB", rating: 74 },
      { name: "Marek Rodák", position: "GK", rating: 74 },
      { name: "Sasa Lukic", position: "CM", rating: 75 }
    ]
  },

  Liverpool: {
    lineup: {
      LW: { name: "Luis Díaz", position: "LW", rating: 84 },
      ST: { name: "Darwin Núñez", position: "ST", rating: 83 },
      RW: { name: "Mohamed Salah", position: "RW", rating: 89 },
      LCM: { name: "Alexis Mac Allister", position: "LCM", rating: 82 },
      CM: { name: "Wataru Endō", position: "CM", rating: 80 },
      RCM: { name: "Dominik Szoboszlai", position: "RCM", rating: 83 },
      LB: { name: "Andy Robertson", position: "LB", rating: 84 },
      LCB: { name: "Virgil van Dijk", position: "LCB", rating: 89 },
      RCB: { name: "Ibrahima Konaté", position: "RCB", rating: 82 },
      RB: { name: "Trent Alexander-Arnold", position: "RB", rating: 87 },
      GK: { name: "Alisson", position: "GK", rating: 89 }
    },
    subs: [
      { name: "Diogo Jota", position: "ST", rating: 82 },
      { name: "Harvey Elliott", position: "RW", rating: 77 },
      { name: "Joe Gomez", position: "CB", rating: 79 },
      { name: "Kostas Tsimikas", position: "LB", rating: 77 },
      { name: "Curtis Jones", position: "CM", rating: 78 },
      { name: "Ryan Gravenberch", position: "CM", rating: 78 },
      { name: "Caoimhín Kelleher", position: "GK", rating: 76 }
    ]
  },

    ManchesterCity: {
    lineup: {
      LW: { name: "Jack Grealish", position: "LW", rating: 84 },
      ST: { name: "Erling Haaland", position: "ST", rating: 91 },
      RW: { name: "Bernardo Silva", position: "RW", rating: 88 },
      LCM: { name: "Phil Foden", position: "LCM", rating: 85 },
      CM: { name: "Rodri", position: "CM", rating: 89 },
      RCM: { name: "Kevin De Bruyne", position: "RCM", rating: 91 },
      LB: { name: "Josko Gvardiol", position: "LB", rating: 82 },
      LCB: { name: "Nathan Aké", position: "LCB", rating: 81 },
      RCB: { name: "Rúben Dias", position: "RCB", rating: 88 },
      RB: { name: "Kyle Walker", position: "RB", rating: 84 },
      GK: { name: "Ederson", position: "GK", rating: 88 }
    },
    subs: [
      { name: "Julián Álvarez", position: "ST", rating: 80 },
      { name: "Jérémy Doku", position: "RW", rating: 78 },
      { name: "Mateo Kovačić", position: "CM", rating: 83 },
      { name: "John Stones", position: "CB", rating: 85 },
      { name: "Sergio Gómez", position: "LB", rating: 74 },
      { name: "Stefan Ortega", position: "GK", rating: 78 },
      { name: "Rico Lewis", position: "RB", rating: 74 }
    ]
  },

  ManchesterUnited: {
    lineup: {
      LW: { name: "Marcus Rashford", position: "LW", rating: 85 },
      ST: { name: "Rasmus Højlund", position: "ST", rating: 79 },
      RW: { name: "Antony", position: "RW", rating: 80 },
      LCM: { name: "Mason Mount", position: "LCM", rating: 80 },
      CM: { name: "Casemiro", position: "CM", rating: 89 },
      RCM: { name: "Bruno Fernandes", position: "RCM", rating: 87 },
      LB: { name: "Luke Shaw", position: "LB", rating: 82 },
      LCB: { name: "Lisandro Martínez", position: "LCB", rating: 84 },
      RCB: { name: "Raphaël Varane", position: "RCB", rating: 84 },
      RB: { name: "Diogo Dalot", position: "RB", rating: 80 },
      GK: { name: "André Onana", position: "GK", rating: 83 }
    },
    subs: [
      { name: "Harry Maguire", position: "CB", rating: 80 },
      { name: "Christian Eriksen", position: "CM", rating: 81 },
      { name: "Facundo Pellistri", position: "RW", rating: 74 },
      { name: "Tyrell Malacia", position: "LB", rating: 77 },
      { name: "Victor Lindelöf", position: "CB", rating: 80 },
      { name: "Scott McTominay", position: "CM", rating: 77 },
      { name: "Altay Bayındır", position: "GK", rating: 77 }
    ]
  },

  NewcastleUnited: {
    lineup: {
      LW: { name: "Anthony Gordon", position: "LW", rating: 78 },
      ST: { name: "Alexander Isak", position: "ST", rating: 82 },
      RW: { name: "Miguel Almirón", position: "RW", rating: 80 },
      LCM: { name: "Bruno Guimarães", position: "LCM", rating: 84 },
      CM: { name: "Joelinton", position: "CM", rating: 81 },
      RCM: { name: "Sandro Tonali", position: "RCM", rating: 83 },
      LB: { name: "Dan Burn", position: "LB", rating: 77 },
      LCB: { name: "Sven Botman", position: "LCB", rating: 81 },
      RCB: { name: "Fabian Schär", position: "RCB", rating: 79 },
      RB: { name: "Kieran Trippier", position: "RB", rating: 85 },
      GK: { name: "Nick Pope", position: "GK", rating: 82 }
    },
    subs: [
      { name: "Callum Wilson", position: "ST", rating: 81 },
      { name: "Harvey Barnes", position: "LW", rating: 80 },
      { name: "Jacob Murphy", position: "RW", rating: 77 },
      { name: "Lewis Miley", position: "CM", rating: 70 },
      { name: "Tino Livramento", position: "RB", rating: 74 },
      { name: "Matt Targett", position: "LB", rating: 77 },
      { name: "Martin Dúbravka", position: "GK", rating: 77 }
    ]
  },

  NottinghamForest: {
    lineup: {
      LW: { name: "Callum Hudson-Odoi", position: "LW", rating: 75 },
      ST: { name: "Taiwo Awoniyi", position: "ST", rating: 78 },
      RW: { name: "Anthony Elanga", position: "RW", rating: 76 },
      LCM: { name: "Ryan Yates", position: "LCM", rating: 74 },
      CM: { name: "Danilo", position: "CM", rating: 76 },
      RCM: { name: "Nicolás Domínguez", position: "RCM", rating: 77 },
      LB: { name: "Nuno Tavares", position: "LB", rating: 75 },
      LCB: { name: "Murillo", position: "LCB", rating: 74 },
      RCB: { name: "Willy Boly", position: "RCB", rating: 76 },
      RB: { name: "Serge Aurier", position: "RB", rating: 75 },
      GK: { name: "Matt Turner", position: "GK", rating: 74 }
    },
    subs: [
      { name: "Orel Mangala", position: "CM", rating: 75 },
      { name: "Harry Toffolo", position: "LB", rating: 72 },
      { name: "Divock Origi", position: "ST", rating: 74 },
      { name: "Giovanni Reyna", position: "CAM", rating: 77 },
      { name: "Scott McKenna", position: "CB", rating: 74 },
      { name: "Odisseas Vlachodimos", position: "GK", rating: 76 },
      { name: "Gonzalo Montiel", position: "RB", rating: 77 }
    ]
  },

  TottenhamHotspur: {
    lineup: {
      LW: { name: "Heung-min Son", position: "LW", rating: 87 },
      ST: { name: "Richarlison", position: "ST", rating: 80 },
      RW: { name: "Dejan Kulusevski", position: "RW", rating: 81 },
      LCM: { name: "Pape Matar Sarr", position: "LCM", rating: 77 },
      CM: { name: "Yves Bissouma", position: "CM", rating: 78 },
      RCM: { name: "James Maddison", position: "RCM", rating: 84 },
      LB: { name: "Destiny Udogie", position: "LB", rating: 76 },
      LCB: { name: "Cristian Romero", position: "LCB", rating: 83 },
      RCB: { name: "Micky van de Ven", position: "RCB", rating: 78 },
      RB: { name: "Pedro Porro", position: "RB", rating: 80 },
      GK: { name: "Guglielmo Vicario", position: "GK", rating: 81 }
    },
    subs: [
      { name: "Giovani Lo Celso", position: "CM", rating: 79 },
      { name: "Ben Davies", position: "CB", rating: 78 },
      { name: "Manor Solomon", position: "LW", rating: 77 },
      { name: "Oliver Skipp", position: "CDM", rating: 76 },

        WestHamUnited: {
    lineup: {
      LW: { name: "Mohammed Kudus", position: "LW", rating: 82 },
      ST: { name: "Jarrod Bowen", position: "ST", rating: 81 },
      RW: { name: "Lucas Paquetá", position: "RW", rating: 82 },
      LCM: { name: "James Ward-Prowse", position: "LCM", rating: 79 },
      CM: { name: "Tomáš Souček", position: "CM", rating: 78 },
      RCM: { name: "Edson Álvarez", position: "RCM", rating: 80 },
      LB: { name: "Emerson", position: "LB", rating: 76 },
      LCB: { name: "Kurt Zouma", position: "LCB", rating: 81 },
      RCB: { name: "Nayef Aguerd", position: "RCB", rating: 80 },
      RB: { name: "Vladimír Coufal", position: "RB", rating: 78 },
      GK: { name: "Alphonse Areola", position: "GK", rating: 80 }
    },
    subs: [
      { name: "Saïd Benrahma", position: "LW", rating: 77 },
      { name: "Angelo Ogbonna", position: "CB", rating: 75 },
      { name: "Thilo Kehrer", position: "RB", rating: 76 },
      { name: "Aaron Cresswell", position: "LB", rating: 75 },
      { name: "Danny Ings", position: "ST", rating: 76 },
      { name: "Pablo Fornals", position: "CAM", rating: 77 },
      { name: "Łukasz Fabiański", position: "GK", rating: 78 }
    ]
  },

  Wolverhampton: {
    lineup: {
      LW: { name: "Pedro Neto", position: "LW", rating: 80 },
      ST: { name: "Matheus Cunha", position: "ST", rating: 78 },
      RW: { name: "Pablo Sarabia", position: "RW", rating: 78 },
      LCM: { name: "João Gomes", position: "LCM", rating: 76 },
      CM: { name: "Mario Lemina", position: "CM", rating: 78 },
      RCM: { name: "Boubacar Traoré", position: "RCM", rating: 74 },
      LB: { name: "Rayan Aït-Nouri", position: "LB", rating: 77 },
      LCB: { name: "Craig Dawson", position: "LCB", rating: 76 },
      RCB: { name: "Max Kilman", position: "RCB", rating: 78 },
      RB: { name: "Nélson Semedo", position: "RB", rating: 78 },
      GK: { name: "José Sá", position: "GK", rating: 81 }
    },
    subs: [
      { name: "Hugo Bueno", position: "LB", rating: 73 },
      { name: "Sasa Kalajdzic", position: "ST", rating: 74 },
      { name: "Tommy Doyle", position: "CM", rating: 72 },
      { name: "Joe Hodge", position: "CM", rating: 71 },
      { name: "Matt Doherty", position: "RB", rating: 75 },
      { name: "Toti", position: "CB", rating: 74 },
      { name: "Daniel Bentley", position: "GK", rating: 72 }
    ]
  },

  Sunderland: {
    lineup: {
      LW: { name: "Jack Clarke", position: "LW", rating: 76 },
      ST: { name: "Édouard Michut", position: "ST", rating: 72 },
      RW: { name: "Patrick Roberts", position: "RW", rating: 73 },
      LCM: { name: "Dan Neil", position: "LCM", rating: 72 },
      CM: { name: "Pierre Ekwah", position: "CM", rating: 71 },
      RCM: { name: "Jobe Bellingham", position: "RCM", rating: 70 },
      LB: { name: "Dennis Cirkin", position: "LB", rating: 71 },
      LCB: { name: "Dan Ballard", position: "LCB", rating: 72 },
      RCB: { name: "Luke O'Nien", position: "RCB", rating: 72 },
      RB: { name: "Trai Hume", position: "RB", rating: 70 },
      GK: { name: "Anthony Patterson", position: "GK", rating: 75 }
    },
    subs: [
      { name: "Alex Pritchard", position: "CAM", rating: 71 },
      { name: "Niall Huggins", position: "LB", rating: 68 },
      { name: "Abdoullah Ba", position: "RW", rating: 69 },
      { name: "Bradley Dack", position: "CAM", rating: 70 },
      { name: "Aji Alese", position: "CB", rating: 69 },
      { name: "Callum Styles", position: "CM", rating: 71 },
      { name: "Nathan Bishop", position: "GK", rating: 70 }
    ]
  }
};

  BirminghamCity: {
    lineup: {
      LW: { name: "Siriki Dembélé", position: "LW", rating: 70 },
      ST: { name: "Jay Stansfield", position: "ST", rating: 72 },
      RW: { name: "Koji Miyoshi", position: "RW", rating: 69 },
      LCM: { name: "Jordan James", position: "LCM", rating: 69 },
      CM: { name: "Ivan Šunjić", position: "CM", rating: 71 },
      RCM: { name: "Krystian Bielik", position: "RCM", rating: 71 },
      LB: { name: "Lee Buchanan", position: "LB", rating: 70 },
      LCB: { name: "Marc Roberts", position: "LCB", rating: 69 },
      RCB: { name: "Dion Sanderson", position: "RCB", rating: 70 },
      RB: { name: "Ethan Laird", position: "RB", rating: 70 },
      GK: { name: "John Ruddy", position: "GK", rating: 72 }
    },
    subs: [
      { name: "Keshi Anderson", position: "CAM", rating: 68 },
      { name: "Scott Hogan", position: "ST", rating: 70 },
      { name: "George Hall", position: "CM", rating: 68 },
      { name: "Emmanuel Longelo", position: "LB", rating: 67 },
      { name: "Andrés Prieto", position: "GK", rating: 66 },
      { name: "Juninho Bacuna", position: "CM", rating: 69 },
      { name: "Lukas Jutkiewicz", position: "ST", rating: 67 }
    ]
  },

  BlackburnRovers: {
    lineup: {
      LW: { name: "Harry Leonard", position: "LW", rating: 67 },
      ST: { name: "Sammie Szmodics", position: "ST", rating: 74 },
      RW: { name: "Tyrhys Dolan", position: "RW", rating: 71 },
      LCM: { name: "Lewis Travis", position: "LCM", rating: 71 },
      CM: { name: "Sondre Tronstad", position: "CM", rating: 69 },
      RCM: { name: "Adam Wharton", position: "RCM", rating: 73 },
      LB: { name: "Harry Pickering", position: "LB", rating: 70 },
      LCB: { name: "Dom Hyam", position: "LCB", rating: 72 },
      RCB: { name: "Scott Wharton", position: "RCB", rating: 70 },
      RB: { name: "Callum Brittain", position: "RB", rating: 69 },
      GK: { name: "Aynsley Pears", position: "GK", rating: 70 }
    },
    subs: [
      { name: "Joe Rankin-Costello", position: "RB", rating: 68 },
      { name: "Jake Garrett", position: "CM", rating: 67 },
      { name: "Arnór Sigurðsson", position: "CAM", rating: 71 },
      { name: "Hayden Carter", position: "CB", rating: 68 },
      { name: "Dilan Markanday", position: "RW", rating: 66 },
      { name: "Zac Gilsenan", position: "CM", rating: 64 },
      { name: "Leo Wahlstedt", position: "GK", rating: 69 }
    ]
  },

  BristolCity: {
    lineup: {
      LW: { name: "Sam Bell", position: "LW", rating: 67 },
      ST: { name: "Tommy Conway", position: "ST", rating: 70 },
      RW: { name: "Anis Mehmeti", position: "RW", rating: 68 },
      LCM: { name: "Joe Williams", position: "LCM", rating: 70 },
      CM: { name: "Matty James", position: "CM", rating: 71 },
      RCM: { name: "Jason Knight", position: "RCM", rating: 71 },
      LB: { name: "Haydon Roberts", position: "LB", rating: 66 },
      LCB: { name: "Rob Dickie", position: "LCB", rating: 70 },
      RCB: { name: "Zak Vyner", position: "RCB", rating: 69 },
      RB: { name: "George Tanner", position: "RB", rating: 68 },
      GK: { name: "Max O'Leary", position: "GK", rating: 70 }
    },
    subs: [
      { name: "Harry Cornick", position: "ST", rating: 68 },
      { name: "Mark Sykes", position: "CM", rating: 69 },
      { name: "Cam Pring", position: "LB", rating: 68 },
      { name: "Kal Naismith", position: "CB", rating: 69 },
      { name: "Jamie Knight-Lebel", position: "CB", rating: 64 },
      { name: "Harvey Wiles-Richards", position: "GK", rating: 63 },
      { name: "Andi Weimann", position: "CAM", rating: 69 }
    ]
  },

  CharltonAthletic: {
    lineup: {
      LW: { name: "Tennai Watson", position: "LW", rating: 67 },
      ST: { name: "Alfie May", position: "ST", rating: 71 },
      RW: { name: "Corey Blackett-Taylor", position: "RW", rating: 69 },
      LCM: { name: "Karoy Anderson", position: "LCM", rating: 66 },
      CM: { name: "George Dobson", position: "CM", rating: 69 },
      RCM: { name: "Conor McGrandles", position: "RCM", rating: 67 },
      LB: { name: "Terell Thomas", position: "LB", rating: 66 },
      LCB: { name: "Michael Hector", position: "LCB", rating: 67 },
      RCB: { name: "Lloyd Jones", position: "RCB", rating: 68 },
      RB: { name: "Nathan Asiimwe", position: "RB", rating: 65 },
      GK: { name: "Ashley Maynard-Brewer", position: "GK", rating: 68 }
    },
    subs: [
      { name: "Tyreece Campbell", position: "LW", rating: 66 },
      { name: "Macauley Bonne", position: "ST", rating: 67 },
      { name: "Lewis Fiorini", position: "CM", rating: 67 },
      { name: "Curtis Edwards", position: "CM", rating: 66 },
      { name: "Lucas Ness", position: "CB", rating: 66 },
      { name: "Harry Isted", position: "GK", rating: 66 },
      { name: "Miles Leaburn", position: "ST", rating: 68 }
    ]
  },

  CoventryCity: {
    lineup: {
      LW: { name: "Haji Wright", position: "LW", rating: 73 },
      ST: { name: "Ellis Simms", position: "ST", rating: 71 },
      RW: { name: "Tatsuhiro Sakamoto", position: "RW", rating: 72 },
      LCM: { name: "Ben Sheaf", position: "LCM", rating: 71 },
      CM: { name: "Callum O'Hare", position: "CM", rating: 72 },
      RCM: { name: "Josh Eccles", position: "RCM", rating: 70 },
      LB: { name: "Jake Bidwell", position: "LB", rating: 69 },
      LCB: { name: "Liam Kitching", position: "LCB", rating: 68 },
      RCB: { name: "Bobby Thomas", position: "RCB", rating: 69 },
      RB: { name: "Milan van Ewijk", position: "RB", rating: 72 },
      GK: { name: "Ben Wilson", position: "GK", rating: 70 }
    },
    subs: [
      { name: "Joel Latibeaudiere", position: "CB", rating: 70 },
      { name: "Yasin Ayari", position: "CM", rating: 69 },
      { name: "Jay Dasilva", position: "LB", rating: 70 },
      { name: "Kasey Palmer", position: "CAM", rating: 70 },
      { name: "Fabio Tavares", position: "ST", rating: 66 },

        DerbyCounty: {
    lineup: {
      LW: { name: "Nathaniel Mendez-Laing", position: "LW", rating: 69 },
      ST: { name: "James Collins", position: "ST", rating: 71 },
      RW: { name: "Tom Barkhuizen", position: "RW", rating: 70 },
      LCM: { name: "Conor Hourihane", position: "LCM", rating: 72 },
      CM: { name: "Max Bird", position: "CM", rating: 70 },
      RCM: { name: "Korey Smith", position: "RCM", rating: 70 },
      LB: { name: "Callum Elder", position: "LB", rating: 69 },
      LCB: { name: "Curtis Nelson", position: "LCB", rating: 70 },
      RCB: { name: "Eiran Cashin", position: "RCB", rating: 70 },
      RB: { name: "Kane Wilson", position: "RB", rating: 68 },
      GK: { name: "Joe Wildsmith", position: "GK", rating: 70 }
    },
    subs: [
      { name: "Louie Sibley", position: "CAM", rating: 69 },
      { name: "Dwight Gayle", position: "ST", rating: 68 },
      { name: "Liam Thompson", position: "CM", rating: 67 },
      { name: "Jake Rooney", position: "CB", rating: 66 },
      { name: "Josh Vickers", position: "GK", rating: 65 },
      { name: "Callum Ryan", position: "RB", rating: 64 },
      { name: "Liam Rosenior", position: "CB", rating: 65 }
    ]
  },

  HullCity: {
    lineup: {
      LW: { name: "Jaden Philogene", position: "LW", rating: 73 },
      ST: { name: "Liam Delap", position: "ST", rating: 71 },
      RW: { name: "Abdulkadir Omur", position: "RW", rating: 72 },
      LCM: { name: "Tyler Morton", position: "LCM", rating: 71 },
      CM: { name: "Jean Michaël Seri", position: "CM", rating: 73 },
      RCM: { name: "Ozan Tufan", position: "RCM", rating: 72 },
      LB: { name: "Jacob Greaves", position: "LB", rating: 74 },
      LCB: { name: "Sean McLoughlin", position: "LCB", rating: 71 },
      RCB: { name: "Alfie Jones", position: "RCB", rating: 70 },
      RB: { name: "Lewie Coyle", position: "RB", rating: 70 },
      GK: { name: "Ryan Allsop", position: "GK", rating: 71 }
    },
    subs: [
      { name: "Aaron Connolly", position: "ST", rating: 69 },
      { name: "Regan Slater", position: "CM", rating: 70 },
      { name: "Jason Lokilo", position: "RW", rating: 67 },
      { name: "Matty Jacob", position: "LB", rating: 66 },
      { name: "Harry Vaughan", position: "CAM", rating: 67 },
      { name: "David Robson", position: "GK", rating: 65 },
      { name: "Dogukan Sinik", position: "LW", rating: 68 }
    ]
  },

  IpswichTown: {
    lineup: {
      LW: { name: "Nathan Broadhead", position: "LW", rating: 72 },
      ST: { name: "George Hirst", position: "ST", rating: 69 },
      RW: { name: "Wes Burns", position: "RW", rating: 71 },
      LCM: { name: "Massimo Luongo", position: "LCM", rating: 69 },
      CM: { name: "Sam Morsy", position: "CM", rating: 71 },
      RCM: { name: "Lee Evans", position: "RCM", rating: 70 },
      LB: { name: "Leif Davis", position: "LB", rating: 72 },
      LCB: { name: "Cameron Burgess", position: "LCB", rating: 70 },
      RCB: { name: "Luke Woolfenden", position: "RCB", rating: 69 },
      RB: { name: "Harry Clarke", position: "RB", rating: 70 },
      GK: { name: "Vaclav Hladky", position: "GK", rating: 70 }
    },
    subs: [
      { name: "Freddie Ladapo", position: "ST", rating: 68 },
      { name: "Dominic Ball", position: "CM", rating: 69 },
      { name: "Janoi Donacien", position: "RB", rating: 68 },
      { name: "Omari Hutchinson", position: "RW", rating: 67 },
      { name: "Cieran Slicker", position: "GK", rating: 66 },
      { name: "Kayden Jackson", position: "RW", rating: 66 },
      { name: "Brandon Williams", position: "LB", rating: 68 }
    ]
  },

  LeicesterCity: {
    lineup: {
      LW: { name: "Stephy Mavididi", position: "LW", rating: 73 },
      ST: { name: "Jamie Vardy", position: "ST", rating: 75 },
      RW: { name: "Kasey McAteer", position: "RW", rating: 70 },
      LCM: { name: "Kiernan Dewsbury-Hall", position: "LCM", rating: 76 },
      CM: { name: "Wilfred Ndidi", position: "CM", rating: 76 },
      RCM: { name: "Harry Winks", position: "RCM", rating: 75 },
      LB: { name: "James Justin", position: "LB", rating: 74 },
      LCB: { name: "Wout Faes", position: "LCB", rating: 76 },
      RCB: { name: "Conor Coady", position: "RCB", rating: 75 },
      RB: { name: "Ricardo Pereira", position: "RB", rating: 76 },
      GK: { name: "Mads Hermansen", position: "GK", rating: 74 }
    },
    subs: [
      { name: "Patson Daka", position: "ST", rating: 73 },
      { name: "Yunus Akgün", position: "RW", rating: 72 },
      { name: "Hamza Choudhury", position: "CDM", rating: 70 },
      { name: "Dennis Praet", position: "CM", rating: 71 },
      { name: "Jannik Vestergaard", position: "CB", rating: 74 },
      { name: "Jakub Stolarczyk", position: "GK", rating: 67 },
      { name: "Marc Albrighton", position: "RW", rating: 71 }
    ]
  },

  Middlesbrough: {
    lineup: {
      LW: { name: "Sam Greenwood", position: "LW", rating: 69 },
      ST: { name: "Emmanuel Latte Lath", position: "ST", rating: 71 },
      RW: { name: "Isaiah Jones", position: "RW", rating: 72 },
      LCM: { name: "Hayden Hackney", position: "LCM", rating: 71 },
      CM: { name: "Jonny Howson", position: "CM", rating: 72 },
      RCM: { name: "Dan Barlaser", position: "RCM", rating: 70 },
      LB: { name: "Lukas Engel", position: "LB", rating: 69 },
      LCB: { name: "Paddy McNair", position: "LCB", rating: 73 },
      RCB: { name: "Dael Fry", position: "RCB", rating: 72 },
      RB: { name: "Tommy Smith", position: "RB", rating: 70 },
      GK: { name: "Seny Dieng", position: "GK", rating: 73 }
    },
    subs: [
      { name: "Riley McGree", position: "CAM", rating: 71 },
      { name: "Matt Crooks", position: "CM", rating: 70 },
      { name: "Anfernee Dijksteel", position: "RB", rating: 68 },
      { name: "Alex Bangura", position: "LB", rating: 69 },
      { name: "Rav van den Berg", position: "CB", rating: 69 },
      { name: "Jamie Jones", position: "GK", rating: 68 },
      { name: "Marcus Forss", position: "RW", rating: 71 }
    ]
  },

  Millwall: {
    lineup: {
      LW: { name: "Duncan Watmore", position: "LW", rating: 70 },
      ST: { name: "Kevin Nisbet", position: "ST", rating: 71 },
      RW: { name: "Zian Flemming", position: "RW", rating: 72 },
      LCM: { name: "Billy Mitchell", position: "LCM", rating: 70 },
      CM: { name: "George Saville", position: "CM", rating: 71 },
      RCM: { name: "Allan Campbell", position: "RCM", rating: 69 },
      LB: { name: "Murray Wallace", position: "LB", rating: 70 },
      LCB: { name: "Jake Cooper", position: "LCB", rating: 71 },
      RCB: { name: "Wes Harding", position: "RCB", rating: 70 },
      RB: { name: "Danny McNamara", position: "RB", rating: 69 },
      GK: { name: "Matija Sarkic", position: "GK", rating: 70 }
    },
    subs: [
      { name: "Ryan Leonard", position: "CM", rating: 69 },
      { name: "George Honeyman", position: "CM", rating: 70 },
      { name: "Shaun Hutchinson", position: "CB", rating: 68 },
      { name: "Tom Bradshaw", position: "ST", rating: 71 },
      { name: "Alex Mitchell", position: "CB", rating: 68 },
      { name: "Joe Bryan", position: "LB", rating: 69 },
      { name: "Bartosz Bialkowski", position: "GK", rating: 70 }
    ]
  },

  NorwichCity: {
    lineup: {
      LW: { name: "Jonathan Rowe", position: "LW", rating: 71 },
      ST: { name: "Josh Sargent", position: "ST", rating: 74 },
      RW: { name: "Gabriel Sara", position: "RW", rating: 74 },
      LCM: { name: "Kenny McLean", position: "LCM", rating: 72 },
      CM: { name: "Marcelino Núñez", position: "CM", rating: 72 },
      RCM: { name: "Liam Gibbs", position: "RCM", rating: 69 },
      LB: { name: "Dimitrios Giannoulis", position: "LB", rating: 71 },
      LCB: { name: "Ben Gibson", position: "LCB", rating: 70 },
      RCB: { name: "Grant Hanley", position: "RCB", rating: 71 },
      RB: { name: "Jack Stacey", position: "RB", rating: 70 },
      GK: { name: "Angus Gunn", position: "GK", rating: 73 }
    },
    subs: [
      { name: "Ashley Barnes", position: "ST", rating: 70 },
      { name: "Adam Idah", position: "ST", rating: 69 },
      { name: "Onel Hernández", position: "RW", rating: 69 },
      { name: "Sam McCallum", position: "LB", rating: 69 },
      { name: "Jonathan Tomkinson", position: "CB", rating: 68 },
      { name: "George Long", position: "GK", rating: 69 },
      ]
  },

  OxfordUnited: {
    lineup: {
      LW: { name: "Billy Bodin", position: "LW", rating: 67 },
      ST: { name: "Mark Harris", position: "ST", rating: 68 },
      RW: { name: "Tyler Goodrham", position: "RW", rating: 66 },
      LCM: { name: "Cameron Brannagan", position: "LCM", rating: 70 },
      CM: { name: "Marcus McGuane", position: "CM", rating: 69 },
      RCM: { name: "Josh McEachran", position: "RCM", rating: 68 },
      LB: { name: "Greg Leigh", position: "LB", rating: 67 },
      LCB: { name: "Ciaron Brown", position: "LCB", rating: 68 },
      RCB: { name: "Elliott Moore", position: "RCB", rating: 69 },
      RB: { name: "Sam Long", position: "RB", rating: 68 },
      GK: { name: "James Beadle", position: "GK", rating: 67 }
    },
    subs: [
      { name: "Oisin Smyth", position: "CM", rating: 66 },
      { name: "Gatlin O’Donkor", position: "ST", rating: 65 },
      { name: "Fin Stevens", position: "RB", rating: 66 },
      { name: "Kyle Edwards", position: "LW", rating: 66 },
      { name: "Stephan Negru", position: "CB", rating: 66 },
      { name: "Simon Eastwood", position: "GK", rating: 66 },
      { name: "Lewis Bate", position: "CM", rating: 67 }
    ]
  },

  Portsmouth: {
    lineup: {
      LW: { name: "Abu Kamara", position: "LW", rating: 67 },
      ST: { name: "Colby Bishop", position: "ST", rating: 71 },
      RW: { name: "Paddy Lane", position: "RW", rating: 68 },
      LCM: { name: "Joe Morrell", position: "LCM", rating: 70 },
      CM: { name: "Marlon Pack", position: "CM", rating: 71 },
      RCM: { name: "Terry Devlin", position: "RCM", rating: 66 },
      LB: { name: "Connor Ogilvie", position: "LB", rating: 69 },
      LCB: { name: "Regan Poole", position: "LCB", rating: 68 },
      RCB: { name: "Sean Raggett", position: "RCB", rating: 69 },
      RB: { name: "Joe Rafferty", position: "RB", rating: 68 },
      GK: { name: "Will Norris", position: "GK", rating: 67 }
    },
    subs: [
      { name: "Tom Lowery", position: "CM", rating: 68 },
      { name: "Christian Saydee", position: "ST", rating: 67 },
      { name: "Zak Swanson", position: "RB", rating: 66 },
      { name: "Gavin Whyte", position: "RW", rating: 66 },
      { name: "Ryley Towler", position: "CB", rating: 66 },
      { name: "Ryan Schofield", position: "GK", rating: 65 },
      { name: "Anthony Scully", position: "LW", rating: 67 }
    ]
  },

  PrestonNorthEnd: {
    lineup: {
      LW: { name: "Robbie Brady", position: "LW", rating: 69 },
      ST: { name: "Will Keane", position: "ST", rating: 71 },
      RW: { name: "Brad Potts", position: "RW", rating: 70 },
      LCM: { name: "Ali McCann", position: "LCM", rating: 70 },
      CM: { name: "Alan Browne", position: "CM", rating: 71 },
      RCM: { name: "Ryan Ledson", position: "RCM", rating: 69 },
      LB: { name: "Andrew Hughes", position: "LB", rating: 70 },
      LCB: { name: "Liam Lindsay", position: "LCB", rating: 71 },
      RCB: { name: "Jordan Storey", position: "RCB", rating: 70 },
      RB: { name: "Calvin Ramsay", position: "RB", rating: 69 },
      GK: { name: "Freddie Woodman", position: "GK", rating: 73 }
    },
    subs: [
      { name: "Ched Evans", position: "ST", rating: 67 },
      { name: "Ben Whiteman", position: "CM", rating: 70 },
      { name: "Greg Cunningham", position: "LB", rating: 68 },
      { name: "Layton Stewart", position: "ST", rating: 65 },
      { name: "Kian Taylor", position: "CB", rating: 66 },
      { name: "David Cornell", position: "GK", rating: 67 },
      { name: "Duane Holmes", position: "RW", rating: 68 }
    ]
  },

  QueensParkRangers: {
    lineup: {
      LW: { name: "Ilias Chair", position: "LW", rating: 73 },
      ST: { name: "Sinclair Armstrong", position: "ST", rating: 69 },
      RW: { name: "Paul Smyth", position: "RW", rating: 68 },
      LCM: { name: "Jack Colback", position: "LCM", rating: 70 },
      CM: { name: "Sam Field", position: "CM", rating: 70 },
      RCM: { name: "Andre Dozzell", position: "RCM", rating: 69 },
      LB: { name: "Kenneth Paal", position: "LB", rating: 71 },
      LCB: { name: "Jake Clarke-Salter", position: "LCB", rating: 69 },
      RCB: { name: "Jimmy Dunne", position: "RCB", rating: 68 },
      RB: { name: "Osman Kakay", position: "RB", rating: 66 },
      GK: { name: "Asmir Begović", position: "GK", rating: 72 }
    },
    subs: [
      { name: "Taylor Richards", position: "CM", rating: 68 },
      { name: "Ziyad Larkeche", position: "LB", rating: 66 },
      { name: "Stephen Duke-McKenna", position: "CM", rating: 66 },
      { name: "Joe Walsh", position: "GK", rating: 67 },
      { name: "Reggie Cannon", position: "RB", rating: 70 },
      { name: "Albert Adomah", position: "RW", rating: 67 },
      { name: "Aaron Drewe", position: "RB", rating: 65 }
    ]
  },

  SheffieldUnited: {
    lineup: {
      LW: { name: "Ben Brereton Díaz", position: "LW", rating: 75 },
      ST: { name: "Oli McBurnie", position: "ST", rating: 73 },
      RW: { name: "Cameron Archer", position: "RW", rating: 74 },
      LCM: { name: "James McAtee", position: "LCM", rating: 72 },
      CM: { name: "Oliver Norwood", position: "CM", rating: 74 },
      RCM: { name: "Gustavo Hamer", position: "RCM", rating: 76 },
      LB: { name: "Max Lowe", position: "LB", rating: 70 },
      LCB: { name: "Anel Ahmedhodžić", position: "LCB", rating: 75 },
      RCB: { name: "John Egan", position: "RCB", rating: 74 },
      RB: { name: "George Baldock", position: "RB", rating: 73 },
      GK: { name: "Wes Foderingham", position: "GK", rating: 71 }
    },
    subs: [
      { name: "Rhys Norrington-Davies", position: "LB", rating: 70 },
      { name: "Chris Basham", position: "CB", rating: 69 },
      { name: "Will Osula", position: "ST", rating: 67 },
      { name: "Jayden Bogle", position: "RB", rating: 71 },
      { name: "Ismaila Coulibaly", position: "CM", rating: 70 },
      { name: "Jack Robinson", position: "CB", rating: 70 },
      { name: "Adam Davies", position: "GK", rating: 70 },

      
