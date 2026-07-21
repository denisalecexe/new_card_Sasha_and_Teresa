# Seikon no Qwaser - Character Cards
Progetto web interattivo per la visualizzazione delle schede personaggio dell'anime *Seikon no Qwaser*.
Il sito presenta le schede di **Alexander Nikolaevich Hell (Sasha)** e **Teresa Beria**, permettendo di consultare la loro lore e i loro dati in modo dinamico e compatto.

---

## Caratteristiche Principali

- **Struttura Semantica:** Organizzazione dei dati dei personaggi tramite lista di definizioni (`<dl>`, `<dt>`, `<dd>`) per la massima chiarezza e accessibilità.
- **Interattività JS:** Apertura e chiusura dinamica delle informazioni di ciascun personaggio con gestione degli eventi tramite `classList.toggle()`.
- **Design Tematico:** Stile personalizzato incentrato sull'estetica dell'anime, con palette di colori gestita via variabili CSS, font custom (`Acme` e `Rock Salt`) e cursore personalizzato.
- **Scrollbar Personalizzata & Cross-Browser:** Gestione dell'altezza massima delle card (`max-height`) con scrollbar personalizzata compatibile con i principali browser (Chrome, Safari, Edge e Firefox).

---

## Tecnologie Utilizzate

- **HTML5:** Marcatori semantici per la strutturazione della pagina.
- **CSS3:** Flexbox per il layout responsive, variabili `:root`, `@font-face` per i font personalizzati e styling custom delle scrollbar.
- **JavaScript (Vanilla):** Manipolazione del DOM, ascoltatori di eventi (`addEventListener`) e toggle di classi CSS.

---

## Struttura del Progetto

```text
├── new_card_Sasha_and_Teresa
│   ├── src/
│   │   ├── assets/
│   │   │   ├── cursor/
│   │   │   │   └── red-black-cursor.cur
│   │   │   ├── favicon/
│   │   │   │   └── Seikon-no-Qwaser-favicon.png
│   │   │   ├── font/
│   │   │   │   ├── Acme_Font
│   │   │   │   │   └── Acme-Regular.ttf
│   │   │   │   └── Rock_Salt_Font
│   │   │   │   │   └── RockSalt-Regular.ttf
│   │   │   ├── img/
│   │   │   │   ├── sasha.png
│   │   │   │   └── teresa.png
│   │   │   └── logo/
│   │   │   │   └── Seikopn-no-Qwaser-logo.png
│   │   └── styles/
│   │   │   └── style.css
│   │   └── js/
│   │   │   └── script.js
│   │   ├── index.html
├── LICENSE
└──README.md
```

---

## Come avviare il progetto

Se vuoi utilizzare e testare il progetto in locale, clonare il repository:
``` bash
git clone https://github.com/denisalecexe/new_card_Sasha_and_Teresa.git
```

---

## Contribuire al progetto

Le pull request sono benvenute. Per modifiche sostanziali si prega di aprire prima una segnalazione per discutere di cosa si desidera modificare.

---

## Autore
* **Denis (Dharelyx)** - Sviluppatore Junior appassionato di codice e problem solving.
* *Progetto creato e completato come parte del mio percorso.*