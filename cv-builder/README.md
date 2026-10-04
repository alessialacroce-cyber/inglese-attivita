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
- **Salva file / Apri file**: il CV si salva in un file `.json` da tenere su Drive o chiavetta e da riaprire in seguito. Il lavoro viene anche salvato in automatico nel browser.
- **Skill collegate**: sotto la sezione Competenze una breve spiegazione dice come collegare ogni skill; cliccando una skill verde si arriva al punto che la dimostra.
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

Nessun dato esce dal computer: non ci sono server, account o tracciamenti. I font sono caricati da Google Fonts; se manca la connessione la pagina usa font di sistema.

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
