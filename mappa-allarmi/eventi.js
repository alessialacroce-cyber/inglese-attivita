// Dataset degli episodi 2–11 novembre 2026.
// Ogni voce: id, cat (aereo|scuola|supermercato|ospedale), data (YYYY-MM-DD), data_label,
// luogo, paese, lat, lon, approx (true = posizione indicativa: la fonte non indica il punto esatto),
// esito (falso | cyber | armato | aggressione | non_attacco), titolo, dettaglio, fonti [{nome, url}].
// Compilato il 11/11/2026 da fonti giornalistiche e istituzionali. Cifre e dettagli
// possono cambiare con gli aggiornamenti delle indagini.

const EVENTI = [
  // ───────────── ALLARMI BOMBA SU AEREI ─────────────
  {
    id: "a1", cat: "aereo", data: "2026-11-02", luogo: "Budapest (aeroporto)", paese: "Ungheria",
    lat: 47.437, lon: 19.256, esito: "falso",
    titolo: "Wizz Air Londra Luton → Sofia deviato a Budapest",
    dettaglio: "Minaccia ricevuta in volo; l'aereo è stato scortato da caccia ungheresi e fatto atterrare a Budapest. Nessun esplosivo trovato. È il primo episodio dell'ondata.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" },
      { nome: "Al Jazeera, 4/11", url: "https://www.aljazeera.com/news/2026/11/4/bomb-threats-disrupt-flights-across-europe-no-explosive-devices-found" }
    ]
  },
  {
    id: "a2", cat: "aereo", data: "2026-11-03", luogo: "Varsavia Chopin", paese: "Polonia",
    lat: 52.166, lon: 20.967, esito: "falso",
    titolo: "SAS Copenaghen → Varsavia controllato all'arrivo",
    dettaglio: "Segnalata una minaccia bomba; l'aereo è atterrato regolarmente a Varsavia-Chopin ed è stato ispezionato. Le autorità polacche: minaccia non confermata.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a3", cat: "aereo", data: "2026-11-03", luogo: "Plovdiv (aeroporto)", paese: "Bulgaria",
    lat: 42.068, lon: 24.851, esito: "falso",
    titolo: "Volo Ryanair deviato a Plovdiv",
    dettaglio: "Ryanair è la compagnia più colpita: quattro suoi voli presi di mira il 3 novembre, con controlli in Italia, Spagna e Bulgaria. Uno è stato dirottato su Plovdiv.",
    fonti: [
      { nome: "Al Jazeera, 4/11", url: "https://www.aljazeera.com/news/2026/11/4/bomb-threats-disrupt-flights-across-europe-no-explosive-devices-found" },
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a4", cat: "aereo", data: "2026-11-03", luogo: "Roma Fiumicino", paese: "Italia",
    lat: 41.800, lon: 12.239, esito: "falso",
    titolo: "Ryanair scortato dall'Aeronautica fino a Roma",
    dettaglio: "Dopo una minaccia, un aereo Ryanair è stato scortato da jet dell'Aeronautica Militare fino all'atterraggio a Roma. Allarme rivelatosi infondato.",
    fonti: [
      { nome: "Al Jazeera, 4/11", url: "https://www.aljazeera.com/news/2026/11/4/bomb-threats-disrupt-flights-across-europe-no-explosive-devices-found" }
    ]
  },
  {
    id: "a5", cat: "aereo", data: "2026-11-05", luogo: "Base aerea di Évreux (Normandia)", paese: "Francia",
    lat: 49.029, lon: 1.220, esito: "falso",
    titolo: "Aer Lingus EI402 Dublino → Roma deviato a Évreux",
    dettaglio: "L'Airbus A320 è stato fatto atterrare nella base militare di Évreux, secondo l'ufficio del primo ministro francese. Nessun ordigno.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" },
      { nome: "Al Jazeera, 5/11", url: "https://www.aljazeera.com/news/2026/11/5/bomb-threat-diverts-dublin-rome-flight-to-france" },
      { nome: "Washington Post, 5/11", url: "https://www.washingtonpost.com/world/2026/11/05/bomb-threats-target-multiple-flights-across-europe/" }
    ]
  },
  {
    id: "a6", cat: "aereo", data: "2026-11-05", luogo: "Bruxelles (aeroporto)", paese: "Belgio",
    lat: 50.901, lon: 4.484, esito: "falso",
    titolo: "LOT da Varsavia atterrato a Bruxelles",
    dettaglio: "Il volo LOT è atterrato senza problemi a Bruxelles dopo un allarme bomba.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a7", cat: "aereo", data: "2026-11-05", luogo: "Bucarest (aeroporto)", paese: "Romania",
    lat: 44.571, lon: 26.085, esito: "falso",
    titolo: "Air Serbia da Belgrado atterrato a Bucarest",
    dettaglio: "Minaccia bomba ricevuta in volo; atterraggio regolare a Bucarest.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a8", cat: "aereo", data: "2026-11-05", luogo: "Madrid-Barajas", paese: "Spagna",
    lat: 40.498, lon: -3.568, esito: "falso",
    titolo: "Sei voli coinvolti a Madrid-Barajas",
    dettaglio: "Secondo la Guardia Civil, tre minacce via email hanno riguardato sei voli in arrivo o partenza da Madrid-Barajas.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a9", cat: "aereo", data: "2026-11-05", luogo: "Sofia (aeroporto)", paese: "Bulgaria",
    lat: 42.695, lon: 23.406, esito: "falso",
    titolo: "Tre voli Ryanair diretti a Sofia scortati",
    dettaglio: "Tre aerei Ryanair diretti in Bulgaria hanno ricevuto minacce e sono stati scortati da velivoli militari; controlli negativi.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a10", cat: "aereo", data: "2026-11-05", luogo: "Londra Stansted", paese: "Regno Unito",
    lat: 51.885, lon: 0.235, esito: "falso",
    titolo: "Ryanair Cork → Londra Stansted controllato",
    dettaglio: "Verifiche all'arrivo dopo una minaccia bomba. Il governo britannico parla di \"minacce maliziose e false\".",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a11", cat: "aereo", data: "2026-11-05", luogo: "Praga (aeroporto)", paese: "Rep. Ceca",
    lat: 50.101, lon: 14.260, esito: "falso",
    titolo: "Due easyJet da Newcastle e Glasgow attesi dalla polizia a Praga",
    dettaglio: "Polizia sottobordo all'arrivo come precauzione. Le minacce erano arrivate con un'email anonima.",
    fonti: [
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" },
      { nome: "CNN, 5/11", url: "https://www.cnn.com/2026/11/05/europe/europe-bomb-threat-intl" }
    ]
  },
  {
    id: "a12", cat: "aereo", data: "2026-11-05", luogo: "Vienna (aeroporto)", paese: "Austria",
    lat: 48.110, lon: 16.570, esito: "falso",
    titolo: "Wizz Air Milano Malpensa → Varsavia deviato a Vienna",
    dettaglio: "Deviazione dopo una minaccia ricevuta in volo, secondo la compagnia. La procura di Busto Arsizio ha aperto un'indagine per procurato allarme sui voli di Malpensa.",
    fonti: [
      { nome: "Sky TG24, 5/11", url: "https://tg24.sky.it/mondo/2026/11/05/allarme-bomba-voli-europa-oggi-news-diretta" },
      { nome: "Il Post, 9/11", url: "https://www.ilpost.it/2026/11/09/attacchi-hacker-allarmi-bomba-italia-europa-in-ordine/" }
    ]
  },
  {
    id: "a13", cat: "aereo", data: "2026-11-05", luogo: "Milano Malpensa", paese: "Italia",
    lat: 45.630, lon: 8.723, esito: "falso",
    titolo: "Due aerei deviati su Malpensa; controlli su Ryanair Porto → Milano",
    dettaglio: "CNN riporta due voli dirottati su Malpensa; Reuters segnala verifiche su un volo Ryanair da Porto per Milano. Nessun esplosivo.",
    fonti: [
      { nome: "CNN live, 5/11", url: "https://www.cnn.com/2026/11/05/world/live-news/plane-flights-bomb-threats-europe-intl" },
      { nome: "Reuters (via US News) – Factbox", url: "https://www.usnews.com/news/world/articles/2026-11-03/factbox-europe-wide-bomb-threats-disrupt-air-travel" }
    ]
  },
  {
    id: "a14", cat: "aereo", data: "2026-11-05", luogo: "Roma Fiumicino", paese: "Italia",
    lat: 41.800, lon: 12.239, esito: "falso",
    titolo: "Finnair Helsinki → Roma scortato a Fiumicino",
    dettaglio: "Scortato da jet dell'Aeronautica fino a Fiumicino; l'allarme per una bomba a bordo si è rivelato falso.",
    fonti: [
      { nome: "Sky TG24, 5/11", url: "https://tg24.sky.it/mondo/2026/11/05/allarme-bomba-voli-europa-oggi-news-diretta" },
      { nome: "TGCom24", url: "https://www.tgcom24.mediaset.it/mondo/allarme-bomba-aerei-voli-dirottati_118611937-202602k.shtml" }
    ]
  },
  {
    id: "a15", cat: "aereo", data: "2026-11-06", luogo: "Praga (aeroporto)", paese: "Rep. Ceca",
    lat: 50.101, lon: 14.260, esito: "falso",
    titolo: "Almeno otto voli da e per Praga minacciati",
    dettaglio: "Secondo l'aeroporto, almeno otto voli colpiti da minacce. Ispezioni pirotecniche negative; l'indagine è passata al centro antiterrorismo ceco.",
    fonti: [
      { nome: "Sky TG24, 6/11", url: "https://tg24.sky.it/mondo/2026/11/06/allarmi-bomba-oggi-diretta" },
      { nome: "Al Jazeera, 6/11", url: "https://www.aljazeera.com/news/2026/11/6/new-bomb-threats-target-european-broadcasters-air-traffic" }
    ]
  },
  {
    id: "a16", cat: "aereo", data: "2026-11-06", luogo: "Venezia Marco Polo", paese: "Italia",
    lat: 45.505, lon: 12.352, esito: "falso",
    titolo: "Wizz Air Praga → Roma deviato a Venezia",
    dettaglio: "Atterraggio a Venezia, dove l'allarme è rientrato dopo i controlli.",
    fonti: [
      { nome: "Sky TG24, 6/11", url: "https://tg24.sky.it/mondo/2026/11/06/allarmi-bomba-oggi-diretta" },
      { nome: "Il Post, 6/11", url: "https://www.ilpost.it/2026/11/06/allarmi-bomba-aerei-roma/" }
    ]
  },

  // ───────────── ALLARMI BOMBA NELLE SCUOLE ─────────────
  {
    id: "s1", cat: "scuola", data: "2026-11-02", luogo: "Genova e Lavagna", paese: "Italia",
    lat: 44.406, lon: 8.946, esito: "falso",
    titolo: "Scuole evacuate in Liguria",
    dettaglio: "Parte della raffica di email minatorie arrivate a circa 270 scuole italiane il 2 novembre. Diverse scuole evacuate a Genova e Lavagna; allarmi infondati.",
    fonti: [
      { nome: "NewsIstruzione, 2/11", url: "https://www.newsistruzione.it/2026/11/02/allarmi-bomba-liguria-evacuate-scuole-genova-lavagna/amp" },
      { nome: "Orizzonte Scuola", url: "https://www.orizzontescuola.it/allarmi-bomba-nelle-scuole-mattinata-di-evacuazioni-in-liguria-lombardia-veneto-e-lazio-mail-anonime-e-telefonate-verifiche-ancora-in-corso/" }
    ]
  },
  {
    id: "s2", cat: "scuola", data: "2026-11-02", luogo: "Orzinuovi e Lonato del Garda (BS)", paese: "Italia",
    lat: 45.432, lon: 10.200, esito: "falso",
    titolo: "Lezioni interrotte nel Bresciano",
    dettaglio: "Evacuazioni e controlli in scuole di Orzinuovi e Lonato del Garda dopo email anonime.",
    fonti: [
      { nome: "Orizzonte Scuola", url: "https://www.orizzontescuola.it/allarmi-bomba-nelle-scuole-mattinata-di-evacuazioni-in-liguria-lombardia-veneto-e-lazio-mail-anonime-e-telefonate-verifiche-ancora-in-corso/" }
    ]
  },
  {
    id: "s3", cat: "scuola", data: "2026-11-02", luogo: "Roma, Tuscolano", paese: "Italia",
    lat: 41.869, lon: 12.533, esito: "falso",
    titolo: "Allarme in una primaria del Tuscolano",
    dettaglio: "Allarme scattato verso le 10:15; otto le scuole romane raggiunte dalle email quel giorno.",
    fonti: [
      { nome: "Open, 2/11", url: "https://www.open.online/2026/11/02/allarme-bomba-scuole-evacuazioni-roma-nord-italia/" }
    ]
  },
  {
    id: "s4", cat: "scuola", data: "2026-11-02", luogo: "Veneto", paese: "Italia",
    lat: 45.41, lon: 11.88, approx: true, esito: "falso",
    titolo: "Email minatorie a scuole venete",
    dettaglio: "Allarmi in diverse scuole del Veneto; la procura di Padova ha aperto un fascicolo per procurato allarme.",
    fonti: [
      { nome: "NewsIstruzione, 2/11", url: "https://www.newsistruzione.it/2026/11/02/allarmi-bomba-scuole-veneto-stefani/amp" }
    ]
  },
  {
    id: "s5", cat: "scuola", data: "2026-11-11", luogo: "Roma", paese: "Italia",
    lat: 41.903, lon: 12.496, esito: "falso",
    titolo: "Circa venti istituti romani coinvolti",
    dettaglio: "La Prefettura conferma allarmi in una ventina di scuole. Email firmata \"Mikhail Andropov\". Fonti di governo: nessun pericolo concreto; vertice a Palazzo Chigi.",
    fonti: [
      { nome: "Il Foglio, 11/11", url: "https://www.ilfoglio.it/cronaca/2026/11/11/news/attacco-hacker-alle-scuole-di-roma-allarme-bomba-in-venti-istituti-la-prefettura-conferma-al-foglio--413344" },
      { nome: "ANSA, 11/11", url: "https://www.ansa.it/sito/notizie/cronaca/2026/11/11/allarme-bomba-in-oltre-6000-scuole-in-italia-evacuazioni-e-controlli.-meloni-grande_870b0024-72d2-4b15-bab5-0c74dcc1d653.html" }
    ]
  },
  {
    id: "s6", cat: "scuola", data: "2026-11-11", luogo: "Milano, liceo Virgilio", paese: "Italia",
    lat: 45.464, lon: 9.190, esito: "falso",
    titolo: "Liceo Virgilio evacuato",
    dettaglio: "Tutti gli studenti fatti uscire alle 11:30, lezioni sospese.",
    fonti: [
      { nome: "Il Fatto Quotidiano, diretta 11/11", url: "https://www.ilfattoquotidiano.it/scuola/live-post/2026/11/11/allarme-bomba-scuole-italia-diretta/8567853/" }
    ]
  },
  {
    id: "s7", cat: "scuola", data: "2026-11-11", luogo: "Torino e provincia", paese: "Italia",
    lat: 45.070, lon: 7.687, esito: "falso",
    titolo: "Scuole evacuate a Torino",
    dettaglio: "Una serie di falsi allarmi ha portato all'evacuazione di diverse scuole in città e provincia.",
    fonti: [
      { nome: "TorinoToday, 11/11", url: "https://www.torinotoday.it/cronaca/falsi-allarmi-bomba-scuole-11-novembre-2026.html" }
    ]
  },
  {
    id: "s8", cat: "scuola", data: "2026-11-11", luogo: "Varese", paese: "Italia",
    lat: 45.821, lon: 8.825, esito: "falso",
    titolo: "Evacuazioni a Varese",
    dettaglio: "Varese tra le città con evacuazioni dopo le email.",
    fonti: [
      { nome: "Il Messaggero, 11/11", url: "https://www.ilmessaggero.it/roma/tuscolana/allarmi_bomba_scuole_roma_oggi-9883274.html" }
    ]
  },
  {
    id: "s9", cat: "scuola", data: "2026-11-11", luogo: "Napoli", paese: "Italia",
    lat: 40.852, lon: 14.268, esito: "falso",
    titolo: "Studenti evacuati a Napoli",
    dettaglio: "Evacuazioni e controlli; in alcuni istituti gli studenti sono potuti rientrare in classe in giornata.",
    fonti: [
      { nome: "Sky TG24, 11/11", url: "https://tg24.sky.it/cronaca/2026/11/11/allarme-bomba-scuole" },
      { nome: "Il Messaggero, 11/11", url: "https://www.ilmessaggero.it/scuola/allarme_bomba_scuole_italia_oggi_dove-9883288.html" }
    ]
  },
  {
    id: "s10", cat: "scuola", data: "2026-11-11", luogo: "Salerno e Avellino", paese: "Italia",
    lat: 40.80, lon: 14.74, esito: "falso",
    titolo: "Evacuazioni in Campania",
    dettaglio: "Il Messaggero segnala scuole evacuate a Salerno e ad Avellino.",
    fonti: [
      { nome: "Il Messaggero, 11/11", url: "https://www.ilmessaggero.it/scuola/allarme_bomba_scuole_italia_oggi_dove-9883288.html" }
    ]
  },
  {
    id: "s11", cat: "scuola", data: "2026-11-11", luogo: "Sicilia (località non specificate)", paese: "Italia",
    lat: 37.55, lon: 14.10, approx: true, esito: "falso",
    titolo: "Scuole siciliane evacuate",
    dettaglio: "Le fonti citano evacuazioni in Sicilia senza indicare i comuni. Segnalazioni anche da Emilia-Romagna, Basilicata e Sardegna.",
    fonti: [
      { nome: "Il Messaggero, 11/11", url: "https://www.ilmessaggero.it/scuola/allarme_bomba_scuole_italia_oggi_dove-9883288.html" },
      { nome: "Il Post, 11/11", url: "https://www.ilpost.it/2026/11/11/allarmi-bomba-scuole/" }
    ]
  },
  {
    id: "s12", cat: "scuola", data: "2026-11-11", luogo: "Irlanda del Nord", paese: "Regno Unito",
    lat: 54.597, lon: -5.930, approx: true, esito: "falso",
    titolo: "Oltre 300 scuole nordirlandesi minacciate",
    dettaglio: "Il messaggio arriva da fuori del Regno Unito secondo la polizia (PSNI), che valuta il rischio come \"basso\". Simile a una minaccia di ottobre già dichiarata falsa.",
    fonti: [
      { nome: "CNN, 11/11", url: "https://www.cnn.com/2026/11/11/europe/italy-europe-bomb-threat-intl" },
      { nome: "UPI, 11/11", url: "https://www.upi.com/Top_News/World-News/2026/11/11/italy-northern-ireland-republic-scotland-email-bomb-threats-schools/9571794409682/" }
    ]
  },
  {
    id: "s13", cat: "scuola", data: "2026-11-11", luogo: "Irlanda", paese: "Irlanda",
    lat: 53.35, lon: -6.26, approx: true, esito: "falso",
    titolo: "Email a centinaia di scuole irlandesi",
    dettaglio: "La Garda considera la minaccia non credibile; il governo dice che non serve evacuare. Lo stesso presunto autore aveva rivendicato le minacce alle redazioni del 6 novembre.",
    fonti: [
      { nome: "Irish Times, 11/11", url: "https://www.irishtimes.com/crime-law/2026/11/11/gardai-investigating-series-of-bomb-threats-to-schools/" },
      { nome: "TheJournal.ie, 11/11", url: "https://www.thejournal.ie/bomb-threats-schools-media-thejournal-7222128-Nov2026/" }
    ]
  },
  {
    id: "s14", cat: "scuola", data: "2026-11-11", luogo: "Scozia", paese: "Regno Unito",
    lat: 55.95, lon: -3.19, approx: true, esito: "falso",
    titolo: "Minacce a scuole scozzesi",
    dettaglio: "Police Scotland: email inviate a liste di distribuzione in tutto il Regno Unito, minaccia non credibile.",
    fonti: [
      { nome: "UPI, 11/11", url: "https://www.upi.com/Top_News/World-News/2026/11/11/italy-northern-ireland-republic-scotland-email-bomb-threats-schools/9571794409682/" }
    ]
  },

  // ───────────── ATTACCHI AI SUPERMERCATI (informatici, catena del freddo) ─────────────
  {
    id: "m1", cat: "supermercato", data: "2026-11-02", luogo: "Svezia", paese: "Svezia",
    lat: 59.33, lon: 18.07, approx: true, esito: "cyber",
    titolo: "Coop e ICA: guasti a frigoriferi e congelatori",
    dettaglio: "Coop segnala disservizi in diversi negozi; ICA in un numero limitato di punti vendita. Attacco notturno ai sistemi di refrigerazione.",
    fonti: [
      { nome: "ABC News / AP", url: "https://abcnews.com/International/wireStory/freezers-supermarkets-european-countries-hit-apparent-cyberattacks-137765494" },
      { nome: "PBS NewsHour", url: "https://www.pbs.org/newshour/world/heres-what-to-know-about-another-cyberattack-on-european-supermarket-fridges" }
    ]
  },
  {
    id: "m2", cat: "supermercato", data: "2026-11-02", luogo: "Finlandia", paese: "Finlandia",
    lat: 60.17, lon: 24.94, approx: true, esito: "cyber",
    titolo: "Kesko: problemi di temperatura in piccoli K-food",
    dettaglio: "Secondo Yle, gli impianti colpiti non erano coperti dalle protezioni centralizzate della catena.",
    fonti: [
      { nome: "ABC News / AP", url: "https://abcnews.com/International/wireStory/freezers-supermarkets-european-countries-hit-apparent-cyberattacks-137765494" }
    ]
  },
  {
    id: "m3", cat: "supermercato", data: "2026-11-02", luogo: "Estonia", paese: "Estonia",
    lat: 59.44, lon: 24.75, approx: true, esito: "cyber",
    titolo: "Selver: un punto vendita, temperatura portata a 50 °C",
    dettaglio: "Un'azienda di refrigerazione riferisce che gli attaccanti hanno preso il controllo del computer che gestiva l'impianto.",
    fonti: [
      { nome: "ABC News / AP", url: "https://abcnews.com/International/wireStory/freezers-supermarkets-european-countries-hit-apparent-cyberattacks-137765494" },
      { nome: "Il Post, 2/11", url: "https://www.ilpost.it/2026/11/02/supermercati-belgio-svezia-estonia-attacchi-informatici/" }
    ]
  },
  {
    id: "m4", cat: "supermercato", data: "2026-11-02", luogo: "Irlanda", paese: "Irlanda",
    lat: 52.90, lon: -8.10, approx: true, esito: "cyber",
    titolo: "13 negozi SuperValu colpiti",
    dettaglio: "Musgrave Group conferma un \"incidente informatico\" sugli impianti di refrigerazione, poi \"completamente risolto\".",
    fonti: [
      { nome: "ABC News / AP", url: "https://abcnews.com/International/wireStory/freezers-supermarkets-european-countries-hit-apparent-cyberattacks-137765494" }
    ]
  },
  {
    id: "m5", cat: "supermercato", data: "2026-11-02", luogo: "Belgio", paese: "Belgio",
    lat: 50.85, lon: 4.35, approx: true, esito: "cyber",
    titolo: "Delhaize: diverse decine di negozi",
    dettaglio: "Un \"incidente IT\" ha colpito la refrigerazione in diverse decine di negozi Delhaize, soprattutto in Belgio.",
    fonti: [
      { nome: "ABC News / AP", url: "https://abcnews.com/International/wireStory/freezers-supermarkets-european-countries-hit-apparent-cyberattacks-137765494" },
      { nome: "Europa Today", url: "https://europa.today.it/attualita/temperature-50-gradi-frigoriferi-supermercati-2-novembre-2026.html" }
    ]
  },
  {
    id: "m6", cat: "supermercato", data: "2026-11-02", luogo: "Lussemburgo", paese: "Lussemburgo",
    lat: 49.61, lon: 6.13, approx: true, esito: "cyber",
    titolo: "Delhaize: alcuni negozi in Lussemburgo",
    dettaglio: "Stesso incidente IT dei negozi belgi.",
    fonti: [
      { nome: "ABC News / AP", url: "https://abcnews.com/International/wireStory/freezers-supermarkets-european-countries-hit-apparent-cyberattacks-137765494" }
    ]
  },
  {
    id: "m7", cat: "supermercato", data: "2026-11-02", luogo: "Catania", paese: "Italia",
    lat: 37.508, lon: 15.083, esito: "cyber",
    titolo: "Tre punti vendita Coop",
    dettaglio: "Attacchi ai sistemi di refrigerazione dei banchi alimentari. L'Agenzia per la cybersicurezza nazionale ha richiamato gli operatori.",
    fonti: [
      { nome: "Il Gazzettino", url: "https://www.ilgazzettino.it/italia/primopiano/attacco_hacker_supermercati_frigoriferi_55_gradi_italia_europa-9866098.html" },
      { nome: "Leggo, 3/11", url: "https://www.leggo.it/italia/cronache/03_novembre_2026_attacco_hacker_supermercati_conad_mense_scolastiche_frigoriferi_temperature_alterate-9866468.html" }
    ]
  },
  {
    id: "m8", cat: "supermercato", data: "2026-11-02", luogo: "Palermo", paese: "Italia",
    lat: 38.116, lon: 13.362, esito: "cyber",
    titolo: "Un punto vendita Coop",
    dettaglio: "Refrigerazione manomessa come a Catania.",
    fonti: [
      { nome: "Il Gazzettino", url: "https://www.ilgazzettino.it/italia/primopiano/attacco_hacker_supermercati_frigoriferi_55_gradi_italia_europa-9866098.html" }
    ]
  },
  {
    id: "m9", cat: "supermercato", data: "2026-11-02", luogo: "Napoli, centro", paese: "Italia",
    lat: 40.846, lon: 14.255, esito: "cyber",
    titolo: "Frigoriferi di surgelati, pesce e pollame",
    dettaglio: "Supermercati del centro colpiti nei raid dell'1 e 2 novembre.",
    fonti: [
      { nome: "Fanpage", url: "https://fanpage.it/napoli/attacchi-hacker-ai-supermercati-in-centro-a-napoli-colpiti-i-frigo-con-surgelati-e-pollame-l1-e-2-novembre" }
    ]
  },
  {
    id: "m10", cat: "supermercato", data: "2026-11-05", data_label: "segnalato il 5 nov", luogo: "Ponzano Veneto (TV)", paese: "Italia",
    lat: 45.713, lon: 12.206, esito: "cyber",
    titolo: "Frigoriferi di un Conad",
    dettaglio: "Attacco notturno ai frigoriferi. Indaga anche la DDA di Genova.",
    fonti: [
      { nome: "Leggo, 5/11", url: "https://www.leggo.it/italia/cronache/05_novembre_2026_attacchi_hacker_supermercati_frigo_freezer_italia_dove-9871221.html" }
    ]
  },
  {
    id: "m11", cat: "supermercato", data: "2026-11-05", data_label: "segnalato il 5 nov", luogo: "Ronchi dei Legionari (GO)", paese: "Italia",
    lat: 45.828, lon: 13.504, esito: "cyber",
    titolo: "Frigoriferi di un Conad",
    dettaglio: "Episodio analogo a quello di Ponzano Veneto, nella stessa notte.",
    fonti: [
      { nome: "Leggo, 5/11", url: "https://www.leggo.it/italia/cronache/05_novembre_2026_attacchi_hacker_supermercati_frigo_freezer_italia_dove-9871221.html" }
    ]
  },
  {
    id: "m12", cat: "supermercato", data: "2026-11-05", data_label: "segnalato il 5 nov", luogo: "Isernia", paese: "Italia",
    lat: 41.596, lon: 14.234, esito: "cyber",
    titolo: "Colpito un congelatore",
    dettaglio: "Un freezer manomesso da remoto.",
    fonti: [
      { nome: "Leggo, 5/11", url: "https://www.leggo.it/italia/cronache/05_novembre_2026_attacchi_hacker_supermercati_frigo_freezer_italia_dove-9871221.html" }
    ]
  },

  // ───────────── OSPEDALI E STRUTTURE SANITARIE ─────────────
  {
    id: "o1", cat: "ospedale", data: "2026-11-02", data_label: "notte 1–2 nov", luogo: "Francia (3 siti EFS, località non rese note)", paese: "Francia",
    lat: 47.0, lon: 2.4, approx: true, esito: "cyber",
    titolo: "Banche del sangue EFS: refrigerazione manomessa",
    dettaglio: "Tre siti di conservazione del plasma dell'Établissement français du sang, tutti con lo stesso fornitore. Soglie di temperatura portate a livelli estremi. Nessun prodotto perso, raccolta e distribuzione regolari. In Italia il Centro nazionale sangue ha chiesto più vigilanza.",
    fonti: [
      { nome: "Reuters (via Internazionale), 4/11", url: "https://www.internazionale.it/ultime-notizie-reuters/2026/11/04/new-cyberattack-targets-french-blood-banks-health-ministry-says" },
      { nome: "CBS News", url: "https://www.cbsnews.com/news/cyberattack-france-blood-bank/" },
      { nome: "Il Post, 4/11", url: "https://ilpost.it/2026/11/04/francia-istituto-sangue-attacco-informatico" }
    ]
  },
  {
    id: "o2", cat: "ospedale", data: "2026-11-03", luogo: "Charkiv, distretto Nemyshlianskyi", paese: "Ucraina",
    lat: 49.99, lon: 36.33, esito: "armato",
    titolo: "Struttura sanitaria colpita da un attacco russo",
    dettaglio: "62 feriti (73 secondo la Procura generale ucraina), oltre 200 pazienti evacuati in altri ospedali. Più di mille finestre distrutte. Attacco con missili balistici e bombe guidate.",
    fonti: [
      { nome: "ANSA, 3/11", url: "https://www.ansa.it/sito/notizie/mondo/europa/2026/11/03/attacco-russo-su-struttura-sanitaria-a-kharkiv-62-feriti_3b286c02-6187-4c91-8559-c76e42f973df.html" },
      { nome: "Ukrainska Pravda, 3/11", url: "https://www.pravda.com.ua/eng/news/2026/11/03/8060956/" },
      { nome: "Kyiv Independent", url: "https://kyivindependent.com/russian-missile-attack-hits-kharkiv-medical-facility-62-casualties-reported/" }
    ]
  },
  {
    id: "o3", cat: "ospedale", data: "2026-11-03", luogo: "Dnipro", paese: "Ucraina",
    lat: 48.465, lon: 35.046, esito: "armato",
    titolo: "Ospedale danneggiato, MSF evacua due pazienti",
    dettaglio: "Medici Senza Frontiere ha trasferito in ambulanza due pazienti. Dall'inizio dell'invasione l'OMS registra oltre 3.400 attacchi alla sanità in Ucraina.",
    fonti: [
      { nome: "Medici Senza Frontiere", url: "https://www.medicisenzafrontiere.it/news-e-storie/news/ucraina-attacco-dnipro-danneggiato-ospedale-msf-evacua-2-pazienti/" }
    ]
  },
  {
    id: "o4", cat: "ospedale", data: "2026-11-07", data_label: "7–8 nov", luogo: "Reggio Emilia, pronto soccorso", paese: "Italia",
    lat: 44.698, lon: 10.631, esito: "aggressione",
    titolo: "Quattro infermieri aggrediti in un fine settimana",
    dettaglio: "Tra gli episodi, uno al pronto soccorso di Reggio Emilia. Non sono attacchi coordinati ma violenza contro il personale sanitario.",
    fonti: [
      { nome: "ANSA, 8/11", url: "https://www.ansa.it/amp/sito/notizie/cronaca/2026/11/08/in-un-giorno-aggrediti-4-infermieri-fenomeno-in-aumento_68d9ae75-27f0-4bbb-a54d-6a815f683953.html" }
    ]
  },
  {
    id: "o5", cat: "ospedale", data: "2026-11-07", luogo: "Provincia di Caserta", paese: "Italia",
    lat: 41.073, lon: 14.333, approx: true, esito: "aggressione",
    titolo: "Infermiere preso a schiaffi",
    dettaglio: "Ennesima aggressione in ospedale segnalata dalla stampa locale.",
    fonti: [
      { nome: "Edizione Caserta, 7/11", url: "https://edizionecaserta.net/2026/11/07/ennesima-aggressione-in-ospedale-infermiere-preso-a-schiaffi/" }
    ]
  },
  {
    id: "o6", cat: "ospedale", data: "2026-11-10", luogo: "UZ Brussel (Jette) e ospedali collegati", paese: "Belgio",
    lat: 50.888, lon: 4.308, esito: "non_attacco",
    titolo: "Blackout di rete: l'ospedale esclude il cyberattacco",
    dettaglio: "Interventi e ambulatori rinviati; problemi anche ad Anversa, Lier e Tielt. Il portavoce: \"non è il risultato di un attacco informatico\", nessun dato compromesso. Incluso per completezza.",
    fonti: [
      { nome: "Brussels Times, 10/11", url: "https://www.brusselstimes.com/belgium/2402470/not-a-cyberattack-network-issues-at-brussels-hospital-resolved" }
    ]
  }
];

const CATEGORIE = {
  aereo:        { nome: "Allarmi bomba su aerei", breve: "Aerei" },
  scuola:       { nome: "Allarmi bomba nelle scuole", breve: "Scuole" },
  supermercato: { nome: "Attacchi ai supermercati", breve: "Supermercati" },
  ospedale:     { nome: "Attacchi a ospedali e sanità", breve: "Ospedali" }
};

const ESITI = {
  falso:       "Falso allarme",
  cyber:       "Attacco informatico",
  armato:      "Attacco armato",
  aggressione: "Aggressione al personale",
  non_attacco: "Guasto, non attacco"
};

// Cifre aggregate dichiarate dalle fonti (non tutte geolocalizzabili).
const AGGREGATI = [
  { cat: "aereo", valore: "≈ 30–35", testo: "voli minacciati tra 2 e 6 novembre (Il Post; Eurocontrol via 21secolo: ~35 tra 3 e 5 nov). Almeno 27 nel solo 5 novembre secondo Reuters." },
  { cat: "scuola", valore: "300 – 6.300", testo: "scuole italiane raggiunte l'11 novembre: 312 secondo il ministro Valditara, circa 6.000–6.300 destinatarie della mail secondo Ministero/Reuters. Circa 270 già il 2 novembre. Oltre 300 in Irlanda del Nord." },
  { cat: "supermercato", valore: "> 100", testo: "supermercati con frigoriferi manomessi nella notte tra 1 e 2 novembre, in almeno 7 paesi europei (Italia compresa)." },
  { cat: "ospedale", valore: "3 + 2", testo: "siti EFS francesi colpiti da attacco informatico; due strutture sanitarie ucraine colpite da attacchi armati il 3 novembre." }
];

if (typeof module !== "undefined") module.exports = { EVENTI, CATEGORIE, ESITI, AGGREGATI };
