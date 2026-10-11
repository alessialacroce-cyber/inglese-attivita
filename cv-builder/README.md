# CV Lab – CV builder per le classi quinte (meccanica e grafica)

Un'unica pagina web (`index.html`) che gli studenti usano per costruire il proprio CV.
Non serve installare niente né creare account: funziona nel browser e salva i dati solo sul computer dello studente.

## Cosa fa (versione 1)

- **Sezioni libere**: lo studente aggiunge le sezioni che vuole (Profilo, Esperienze, Stage e PCTO, Progetti, Istruzione, Competenze, Lingue, Certificazioni, Interessi) oppure ne crea di personalizzate, le rinomina, le riordina e le elimina.
- **Quattro tipi di sezione**: *Paragrafo* (testo libero), *Esperienze* (ruolo, azienda, luogo, date, punti elenco), *Competenze* (gruppi di skill), *Elenco* (una voce per riga).
- **Tre stili grafici** pensati per una sola colonna, leggibili dagli ATS:
  - *Tecnico* (sans tecnica, filetti sotto i titoli): indicato per meccanica;
  - *Grafico* (titoli compatti, barra colorata): indicato per grafica;
  - *Classico* (serif sobrio): va bene per tutti.
  Cinque colori di accento adatti alla stampa.
- **Anteprima A4 dal vivo** e **Scarica PDF** (tramite la stampa del browser: “Salva come PDF”, margini “Nessuno”).
- **Controllo CV**, aggiornato mentre si scrive:
  - nome, titolo professionale, email e telefono presenti;
  - almeno un'esperienza o un progetto;
  - quanti punti contengono un numero (risultati misurabili);
  - quanti punti iniziano con un verbo d'azione (inglese e italiano);
  - **ogni skill è collegata a un'esperienza reale**: nella sezione Competenze ogni skill appare in verde con l'esperienza in cui è stata usata, oppure in arancione “non dimostrata”;
  - lunghezza (una pagina).
- **Copia per le Note**: copia tutto il CV come testo semplice da incollare nelle Note del telefono (o in una mail a se stessi). Il testo si può reincollare in **Apri file** per riprendere il lavoro: vengono copiati solo i campi compilati; basta lasciare uguali le righe che iniziano con `==` (titoli delle sezioni) e `#` (inizio di un'esperienza).
- **Ho finito** (per i PC del laboratorio): in un'unica finestra lo studente copia il CV per le Note o salva il file, spunta “Ho salvato il mio CV” e svuota il computer, così il compagno dopo non vede il suo CV.
- **Salva file / Apri file**: il CV si salva in un file `.json` da tenere su Drive o chiavetta e da riaprire in seguito. Il lavoro viene anche salvato in automatico nel browser.
- **Skill collegate**: sotto la sezione Competenze ogni skill è verde (dimostrata) o arancione. Sulle arancioni ci sono due pulsanti: **Dimostrala** (scegli l'esperienza, scrivi una frase che contiene la skill, la frase entra nel CV) e **Toglila**.
- Due **CV di esempio** (meccanica e grafica) con dati inventati, utili per mostrare in classe la formula giusta.

### La regola su cui si basa il controllo delle skill

Una skill della sezione Competenze è *dimostrata* solo se compare, con le stesse parole, **dentro un punto** di un'esperienza, cioè in una frase che dice cosa lo studente ha fatto e con che risultato. Non basta un'etichetta o un elenco: sarebbe keyword stuffing.
Così lo studente è costretto a rispondere alla domanda: *dove l'ho usata e con che risultato?*

Contro il keyword stuffing il controllo segnala anche:
- le skill che non compaiono in nessuna frase (in arancione: o le dimostri o le togli);
- un elenco Competenze con più di 14 skill;
- i punti che contengono 4 o più skill (un elenco di parole chiave travestito da frase).

Formula consigliata per ogni punto:
**verbo d'azione + attività + strumento/skill + risultato con un numero**
> Set up and ran a Mazak CNC lathe, producing 400+ steel shafts with zero rejected parts

## Come darlo agli studenti

**Opzione A – GitHub Pages (consigliata, un link per tutti)**
1. Su GitHub, apri il repository → *Settings* → *Pages*.
2. In *Build and deployment* scegli *Deploy from a branch*, branch `main`, cartella `/ (root)`.
3. Dopo un minuto il CV builder è online a
   `https://alessialacroce-cyber.github.io/inglese-attivita/cv-builder/`
   (serve che questo lavoro sia stato unito al branch `main`).

**Opzione B – file**
Condividi il file `index.html` (Classroom, Drive, chiavetta): gli studenti lo aprono con Chrome, Edge o Firefox.

Suggerimenti per gli studenti:
- usare Chrome o Edge per il PDF;
- premere **Salva file** a fine lezione (il salvataggio automatico vale solo per quel computer e quel browser: sui PC del laboratorio può essere cancellato);
- nominare il PDF `Nome-Cognome-CV.pdf`.

## Privacy

Nessun dato esce dal computer: non ci sono server, account o tracciamenti. I caratteri sono inclusi nel file, quindi `index.html` funziona identico anche senza internet (utile nei laboratori senza rete).

## Versione 2 – assistente AI (da fare)

Obiettivo: un assistente dentro CV Lab che, per ogni esperienza, aiuti lo studente a
1. riscrivere i punti con verbo d'azione e risultato misurabile;
2. individuare le skill dimostrate da quell'esperienza e collegarle alla sezione Competenze;
3. segnalare le skill dichiarate ma non dimostrate e fare domande per trovare l'esperienza reale in cui sono state usate (senza mai inventare).

Il codice della v1 è già predisposto: il controllo calcola quali skill non compaiono in nessuna frase. L'AI lavorerà su questi stessi dati, aiutando a riconoscere anche i sinonimi (es. “worked in a team of 4” → Teamwork) che il controllo automatico non capisce.

Opzioni gratuite per 21 studenti:

| Opzione | Costo | Account studenti | Qualità | Note |
|---|---|---|---|---|
| **Google Gemini (piano gratuito) + piccolo server Cloudflare Worker gratuito** | 0 € | nessuno | buona, anche in italiano | la chiave API è della docente e resta nascosta nel Worker; limiti giornalieri sufficienti per una classe; sul piano gratuito Google può usare i testi per migliorare i servizi, quindi all'AI si inviano solo i testi delle esperienze, mai nome, email o telefono |
| **Modello AI dentro il browser (WebLLM)** | 0 € | nessuno | discreta, più debole in italiano | massima privacy, niente server; richiede PC recenti con Chrome/Edge e un download iniziale di 1–2 GB per computer |
| **Groq / OpenRouter (modelli gratuiti) + Worker** | 0 € | nessuno | buona | come Gemini, ma i modelli gratuiti disponibili cambiano spesso |

## CV Lab 2 (`v2/index.html`) – bullet point guidati

Versione di prova con un nuovo modo di lavorare sulle skill. `index.html` (versione 1) resta com'è: le due versioni salvano i dati separatamente, quindi si possono usare entrambe sullo stesso computer.

Cosa cambia rispetto alla versione 1:
- **Ogni esperienza ha la parte “Describe your activity”** con il pulsante **Aiutami a scrivere un bullet point**:
  1. *Quale skill vuoi dimostrare?* Hard skill (cosa sai fare: programmi, macchine, tecniche) o soft skill (come lavori: con gli altri, con i tempi, con i problemi). Si sceglie tra 14 hard e 10 soft suggerite per grafica o meccanica, oppure si scrive la propria.
  2. *Domande guida*: cosa hai fatto (con i verbi d'azione), per chi o in che contesto, come l'hai fatto. Il bullet point si compone mentre si risponde e si può correggere.
  3. Nel CV appare come **Skill: frase**.
- **“Vedi un esempio”** mostra un esempio alla volta diviso nelle tre domande. Gli esempi non si possono inserire con un clic e, se la frase ricalca un esempio quasi parola per parola, il pulsante “Aggiungi al CV” si blocca.
- **La sezione Skills si compone da sola** dalle skill dei bullet point, divisa in *Hard skills* e *Soft skills*: nel CV non può comparire una skill non dimostrata.
- Il campo **“Altre cose che hai fatto”** accoglie le frasi che non dimostrano una skill.
- Nel pannello *Aspetto* si sceglie l'**indirizzo** (grafica / meccanica) per suggerimenti ed esempi.
- Tutto il resto è come nella versione 1: stili, PDF, Salva/Apri file, Copia per le Note, Ho finito, funzionamento senza internet. Un CV salvato con la versione 1 si apre anche nella 2.

**Avvio ed esempi (CV Lab 2).** A ogni apertura compare per prima la schermata di scelta. Se sul computer non c'è un CV in corso: *Inizia un CV nuovo*, *Apri il mio CV salvato*, *Guarda un esempio prima di iniziare*. Se c'è: *Continua il CV di …*, *Apri un altro CV salvato*, *Inizia un CV nuovo* (con conferma), senza esempi. L'esempio si può solo guardare (niente modifica, salvataggio o copia) e, dopo “Ho capito, inizia il mio CV”, non si può più riaprire: “Nuovo CV” offre solo il CV vuoto.

**Dizionario (CV Lab 2).** Il pulsante **Dizionario** apre un pannello laterale con 235 voci italiano ↔ inglese utili per il CV, divise in: sezioni del CV, verbi d'azione (al passato, con l'infinito), soft skill, meccanica, grafica, scuola e lavoro, frasi utili, date e tempi, falsi amici. Si cerca in tutte e due le lingue (anche senza accenti), ogni voce ha il pulsante *Copia* e, dove serve, una nota d'uso (UK/USA, numerabile/non numerabile, esempi). Funziona offline ed è raggiungibile anche dal costruttore dei bullet point.
