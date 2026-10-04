"use strict";
// Folieninhalte. Jede Folie: kapitel, titel, html, notiz.
// Elemente mit data-s="1", "2", ... werden nacheinander eingeblendet.

const S = (n, html, tag = "div", cls = "") =>
  `<${tag} class="schritt ${cls}" data-s="${n}">${html}</${tag}>`;

const punkt = (nr, titel, text, n = 0) => {
  const inner = `<div class="nr">${nr}</div><div><h3>${titel}</h3>${text ? `<p>${text}</p>` : ""}</div>`;
  return n ? S(n, inner, "div", "punkt") : `<div class="punkt">${inner}</div>`;
};

const folien = [
  // ---------------------------------------------------------------- Start
  {
    kapitel: "Start",
    titel: "Workshop „Programmieren“",
    klasse: "titel",
    html: `
      <img class="logo" src="assets/IT-Systemhaus-BA.png" alt="IT-Systemhaus der Bundesagentur für Arbeit">
      <div class="linie"></div>
      <h1>Workshop „Programmieren“</h1>
      <div class="untertitel">in Python<br>Fachinformatiker*in für Daten- und Prozessanalyse · 1. Ausbildungsjahr</div>
      <p class="gross">Eine Woche. Drei Teams.<br>Euer eigenes Programm.</p>`,
    notiz: "Begrüßung. Heute gehen wir den Arbeitsauftrag durch, danach startet direkt die Ideenfindung in den Teams. Das Heft liegt allen ausgedruckt vor und im Repository als PDF.",
  },
  {
    kapitel: "Start",
    titel: "Worum es geht",
    html: `
      <div class="kicker">Teil 1 · Ziel</div>
      <h2>Worum es in dieser Woche geht</h2>
      <p class="lead">Ihr entwickelt im Team ein eigenes Python-Programm: ein kleines <b>Werkzeug für die IT-Administration</b> oder ein <b>Spiel</b>.</p>
      <div class="band">
        ${S(1, "<b>Idee finden</b>Was wollen wir bauen?", "div", "station")}
        ${S(1, "→", "div", "pfeil")}
        ${S(2, "<b>Planen</b>Wer baut was?", "div", "station")}
        ${S(2, "→", "div", "pfeil")}
        ${S(3, "<b>Programmieren</b>Teilschritt für Teilschritt", "div", "station")}
        ${S(3, "→", "div", "pfeil")}
        ${S(4, "<b>Feedback</b>im Zwischenreview", "div", "station")}
        ${S(4, "→", "div", "pfeil")}
        ${S(5, "<b>Vorstellen</b>mit Live-Vorführung", "div", "station")}
      </div>
      ${S(6, `<div class="karte teal" style="margin-top:36px"><div class="karte-titel">Am Ende der Woche habt ihr</div>
        <ul><li>ein <b>lauffähiges Programm</b>, zu dem jede Person ein eigenes Feature beigetragen hat,</li>
        <li>eine <b>Präsentation</b>, in der jede Person ihren eigenen Code erklärt,</li>
        <li><b>Feedback</b> von den anderen Teams und eine eigene <b>Reflexion</b>.</li></ul></div>`)}`,
    notiz: "Die fünf Schritte nacheinander einblenden. Betonen: Jede Person hat am Ende etwas Eigenes gebaut und kann es erklären.",
  },
  {
    kapitel: "Start",
    titel: "Ablauf der Woche",
    html: `
      <div class="kicker">Ablauf</div>
      <h2>Ablauf der Woche</h2>
      <table class="kompakt">
        <thead><tr><th style="width:190px">Tag</th><th style="width:220px">Zeit</th><th>Was passiert</th></tr></thead>
        <tbody>
          <tr class="extern"><td class="tag">Montag</td><td class="zeit">Vormittag</td><td>Pflicht-Übungsaufgaben zur Klausur</td></tr>
          <tr><td></td><td class="zeit">Nachmittag</td><td><b>Start:</b> Arbeitsauftrag, Teams, Ergebnis · <b>Phase 1: Ideen finden</b></td></tr>
          <tr class="neu extern"><td class="tag">Dienstag</td><td class="zeit">08:45</td><td>Klausur, danach Pause bis 10:05</td></tr>
          <tr><td></td><td class="zeit">10:05 – 11:45</td><td><b>Phase 2: Planen</b></td></tr>
          <tr class="extern"><td></td><td class="zeit">11:45 – 12:45</td><td>Mittagspause</td></tr>
          <tr><td></td><td class="zeit">ab 12:45</td><td><b>Phase 3: Umsetzen</b> beginnt</td></tr>
          <tr class="neu"><td class="tag">Mittwoch</td><td class="zeit">Vormittag</td><td><b>Umsetzen:</b> Muss-Features fertigstellen</td></tr>
          <tr><td></td><td class="zeit">Nachmittag</td><td><b>Zwischenreview</b>: je zwei Teams schauen sich gegenseitig an</td></tr>
          <tr class="neu"><td class="tag">Donnerstag</td><td class="zeit">ganztags</td><td><b>Umsetzen:</b> Feedback einarbeiten, Exkurse für Fortgeschrittene, aufräumen, Präsentation vorbereiten</td></tr>
          <tr class="neu"><td class="tag">Freitag</td><td class="zeit">ganztags</td><td><b>Präsentation und Vorführung</b>, Feedback, Reflexion</td></tr>
        </tbody>
      </table>`,
    notiz: "Die Woche im Überblick. Wichtig: Dienstagmorgen ist die Klausur, geplant wird erst danach. Mittwochnachmittag sollen die Muss-Features laufen, weil dann das Zwischenreview ist.",
  },
  {
    kapitel: "Start",
    titel: "Teams",
    html: `
      <div class="kicker">Teams</div>
      <h2>Eure Teams</h2>
      <p class="lead">Jede Person übernimmt im Team ein eigenes Feature.</p>
      <div class="raster3">
        <div class="team"><h3>Team 1</h3><ul><li>Julia</li><li>Paul</li><li>Philipp</li><li>Leni</li></ul></div>
        <div class="team"><h3>Team 2</h3><ul><li>Moritz</li><li>Darleen</li><li>Marija</li></ul></div>
        <div class="team"><h3>Team 3</h3><ul><li>Alex</li><li>Jannik</li><li>Beyza</li></ul></div>
      </div>`,
    notiz: "Teams sind fest. Gleich nach der Einführung setzen sich die Teams zusammen.",
  },
  {
    kapitel: "Start",
    titel: "Unterschiedliche Erfahrung",
    klasse: "zentriert",
    html: `
      <div class="kicker">Gut zu wissen</div>
      <h2>Unterschiedliche Erfahrung ist gewollt</h2>
      <p class="gross" style="margin:20px 0 40px">Jede Person wählt ein Feature, das zu ihr passt:</p>
      <div class="raster3" style="width:100%">
        <div class="karte teal"><span class="stufe b">Basis</span><p style="margin-top:16px">Ein Feature, das sicher läuft und das du vollständig verstehst.</p></div>
        <div class="karte orange"><span class="stufe a">Aufbau</span><p style="margin-top:16px">Mehr Logik, mehr Fälle, mehr Schleifen und Bedingungen.</p></div>
        <div class="karte purple"><span class="stufe p">Profi</span><p style="margin-top:16px">Mit Exkursen: Dateien, Fehlerbehandlung, Oberfläche, pip.</p></div>
      </div>
      ${S(1, '<p class="gross" style="margin-top:44px"><b>Niemand muss alles können.</b> Wichtig ist, dass du dein Feature verstehst und erklären kannst.</p>')}`,
    notiz: "Unterschiede offen ansprechen und entdramatisieren. Ein sauberes Basis-Feature ist ein sehr gutes Ergebnis.",
  },

  // ---------------------------------------------------------------- Regeln
  {
    kapitel: "Regeln",
    titel: "Regeln im Team",
    html: `
      <div class="kicker">Teil 2 · Regeln</div>
      <h2>Regeln im Team</h2>
      <div class="liste-nr zwei" style="margin-top:20px">
        ${punkt(1, "Jede Person hat ihr eigenes Feature.", "In einer eigenen Datei, mit mindestens einer eigenen Funktion.", 1)}
        ${punkt(2, "Wer tippt, entscheidet.", "Die anderen helfen als Navigator: Fragen stellen statt vorsagen.", 2)}
        ${punkt(3, "Erst planen, dann programmieren.", "Teilschritte oder Pseudocode auf Papier, bevor du Code schreibst.", 3)}
        ${punkt(4, "Klein anfangen.", "Erst Muss, dann Soll, dann Kann.", 4)}
        ${punkt(5, "Steckenbleiben ist normal.", "Es gibt immer einen nächsten Schritt: die 10-20-Regel.", 5)}
        ${punkt(6, "Jede Person erklärt ihren eigenen Code.", "Schreibe nur Code, den du erklären kannst.", 6)}
        ${punkt(7, "Feedback ist freundlich und konkret.", "Über Code sprechen, nicht über Menschen.", 7)}
      </div>`,
    notiz: "Regeln einzeln einblenden und jeweils kurz begründen. Bei Regel 2: Navigator heißt, Fragen stellen wie „Was soll in dieser Zeile passieren?“, nicht die Tastatur übernehmen.",
  },
  {
    kapitel: "Regeln",
    titel: "Die 10-20-Regel",
    html: `
      <div class="kicker">Teil 2 · Regeln</div>
      <h2>Die 10-20-Regel: Wenn du feststeckst</h2>
      <div class="raster3" style="margin-top:30px">
        ${S(1, `<div class="karte" style="height:100%"><div class="karte-titel">0 bis 10 Minuten</div><h3>Allein</h3><p>Schritte aus „Programmieren mit System“ durchgehen. Problem kleiner machen, Vermutung mit <code>print()</code> testen.</p></div>`)}
        ${S(2, `<div class="karte teal" style="height:100%"><div class="karte-titel">Nach 10 Minuten</div><h3>Team fragen</h3><p>Mit der Hilfe-Formel fragen.</p></div>`)}
        ${S(3, `<div class="karte purple" style="height:100%"><div class="karte-titel">Nach 20 Minuten</div><h3>Ausbilder fragen</h3><p>Das ist kein Scheitern, sondern effizient.</p></div>`)}
      </div>
      ${S(4, `<div class="karte rahmen" style="margin-top:34px"><div class="karte-titel">Die Hilfe-Formel</div><p class="gross" style="font-size:34px;margin:0">„Ich möchte <b>X</b> erreichen. Ich habe <b>Y</b> versucht. Ich erwarte <b>A</b>, bekomme aber <b>B</b>.“</p></div>`)}`,
    notiz: "Die Hilfe-Formel kennen sie aus „Programmieren mit System“ (Anhang A im Heft). Auf der Rückseite des Blatts steht der Werkzeugkasten.",
  },

  // ---------------------------------------------------------------- Ergebnis
  {
    kapitel: "Ergebnis",
    titel: "Woran wir ein gutes Ergebnis erkennen",
    html: `
      <div class="kicker">Teil 3 · Ergebnis</div>
      <h2>Woran wir ein gutes Ergebnis erkennen</h2>
      <div class="liste-nr zwei" style="margin-top:16px">
        ${punkt(1, "Es läuft.", "Auch bei einer falschen Eingabe.", 1)}
        ${punkt(2, "Man kann es bedienen.", "Fremde kommen ohne Hilfe zurecht.", 2)}
        ${punkt(3, "Seminarinhalte sind sichtbar.", "Die Checkliste zeigt, was dazugehört.", 3)}
        ${punkt(4, "Der Code ist sauber.", "Verständliche Namen, kurze Funktionen.", 4)}
        ${punkt(5, "Jede Person hat ihren Teil.", "Und kann ihn zeigen und erklären.", 5)}
        ${punkt(6, "Das Vorgehen ist nachvollziehbar.", "Teilschritte, Pseudocode, Tests.", 6)}
        ${punkt(7, "Ihr habt als Team gearbeitet.", "Absprachen, Hilfe geben und annehmen.", 7)}
      </div>
      ${S(8, '<p class="gross" style="margin-top:30px;font-size:34px"><b>Größer ist nicht besser.</b> Ein kleines Programm, das sauber läuft und das alle erklären können, ist ein sehr gutes Ergebnis.</p>')}`,
    notiz: "Diese Merkmale sind die Grundlage für das Feedback im Zwischenreview und nach der Präsentation. Im Heft steht zu jedem Merkmal eine Leitfrage.",
  },
  {
    kapitel: "Ergebnis",
    titel: "Checkliste",
    html: `
      <div class="kicker">Teil 4 · Checkliste</div>
      <h2>Das gehört in euer Programm</h2>
      <p class="lead">Nicht jede Person muss alles einbauen, aber im Team-Programm sollte am Ende alles vorkommen.</p>
      <div class="raster2">
        <div class="karte teal"><div class="karte-titel">Python-Grundlagen aus dem Seminar</div>
          <p>Variablen · Datentypen · <code>input()</code> und Umwandlung · <code>print()</code> · Rechnen und Texte · Vergleiche und <code>and</code>/<code>or</code>/<code>not</code> · <code>if</code>/<code>elif</code>/<code>else</code> · <code>while</code> · <code>for</code> mit <code>range()</code> · Listen · eigene Funktionen mit <code>return</code> · ein Modul wie <code>random</code></p></div>
        <div>
          ${S(1, `<div class="karte" style="margin-bottom:22px"><div class="karte-titel">Aufbau und Qualität</div><p><code>main.py</code> mit Menü · jedes Feature in eigener Datei · falsche Eingaben stürzen nicht ab · Schreibtischtest oder Debugger · Clean-Code-Check</p></div>`)}
          ${S(2, `<div class="karte purple"><div class="karte-titel">Zusatz für Fortgeschrittene</div><p><code>try</code>/<code>except</code> · Dateien · Oberfläche mit tkinter · Paket per pip</p></div>`)}
        </div>
      </div>`,
    notiz: "Die vollständige Checkliste zum Ankreuzen steht in Teil 4 des Hefts und einzeln im Ordner vorlagen.",
  },

  // ---------------------------------------------------------------- Phasen
  {
    kapitel: "Phase 1",
    titel: "Phase 1: Ideen finden",
    html: `
      <div class="kicker">Teil 5 · Phase 1</div>
      <h2>Phase 1: Ideen finden</h2>
      <div class="raster2" style="margin-top:20px">
        <div class="liste-nr">
          ${punkt(1, "Allein sammeln", "Jede Person notiert drei Ideen.", 1)}
          ${punkt(2, "Vorstellen", "Reihum, jede Idee in einem Satz.", 2)}
          ${punkt(3, "Prüfen", "Mit den Prüffragen. Kombinieren ist erlaubt.", 3)}
          ${punkt(4, "Entscheiden", "Jede Person hat drei Striche.", 4)}
          ${punkt(5, "Festhalten", "Projektname, Idee in einem Satz, erste Features.", 5)}
        </div>
        ${S(6, `<div class="karte teal"><div class="karte-titel">Prüffragen</div><ul>
          <li>Läuft eine einfache Version <b>bis zum Zwischenreview</b>?</li>
          <li>Gibt es für <b>jede Person ein eigenes Feature</b>?</li>
          <li>Geht es als <b>Menü mit mehreren Punkten</b>?</li>
          <li>Kommen <b>Seminarinhalte</b> vor?</li>
          <li>Habt ihr <b>Lust</b> darauf?</li></ul></div>`)}
      </div>`,
    notiz: "Das ist gleich der erste Arbeitsauftrag. Ideenpool auf den nächsten beiden Folien bzw. im Heft Teil 5.",
  },
  {
    kapitel: "Phase 1",
    titel: "Ideenpool: Admin-Werkzeuge",
    html: `
      <div class="kicker">Teil 5 · Ideenpool</div>
      <h2>Ideen: Admin-Werkzeuge</h2>
      <div class="raster3" style="margin-top:20px">
        <div class="karte rahmen"><h3>Passwort-Werkstatt</h3><p class="klein">Passwörter erzeugen, prüfen, speichern</p></div>
        <div class="karte rahmen"><h3>Geräteverleih</h3><p class="klein">Wer hat welchen Laptop?</p></div>
        <div class="karte rahmen"><h3>Benutzerkonten-Generator</h3><p class="klein">Benutzernamen und Startpasswörter</p></div>
        <div class="karte rahmen"><h3>Helpdesk-Tickets</h3><p class="klein">Störungen erfassen und abarbeiten</p></div>
        <div class="karte rahmen"><h3>IT-Rechner</h3><p class="klein">Speichergrößen, Downloadzeit, Binär</p></div>
        <div class="karte rahmen"><h3>Inventarliste</h3><p class="klein">Bestand mit Mindestwert-Warnung</p></div>
      </div>
      <p class="klein" style="margin-top:28px">Im Heft stehen zu jeder Idee Features in drei Stufen: <span class="stufe b">Basis</span> <span class="stufe a">Aufbau</span> <span class="stufe p">Profi</span></p>`,
    notiz: "Nur kurz zeigen, die Details stehen im Heft. Eigene Ideen sind ausdrücklich willkommen.",
  },
  {
    kapitel: "Phase 1",
    titel: "Ideenpool: Spiele",
    html: `
      <div class="kicker">Teil 5 · Ideenpool</div>
      <h2>Ideen: Spiele</h2>
      <div class="raster3" style="margin-top:20px">
        <div class="karte rahmen"><h3>Galgenmännchen</h3><p class="klein">Wort Buchstabe für Buchstabe raten</p></div>
        <div class="karte rahmen"><h3>IT-Quiz</h3><p class="klein">Fragen zu Hardware, Netzwerk, Python</p></div>
        <div class="karte rahmen"><h3>Würfelduell</h3><p class="klein">Zwei Personen würfeln gegeneinander</p></div>
        <div class="karte rahmen"><h3>Schere, Stein, Papier</h3><p class="klein">Gegen den Computer, mit Statistik</p></div>
        <div class="karte rahmen"><h3>Textadventure</h3><p class="klein">Räume, Gegenstände, ein Ziel</p></div>
        <div class="karte rahmen"><h3>Mastermind</h3><p class="klein">Einen geheimen Zahlencode knacken</p></div>
      </div>
      ${S(1, '<div class="karte orange" style="margin-top:28px"><div class="karte-titel">Eigene Idee?</div><p>Gern, wenn sie die Prüffragen besteht.</p></div>')}`,
    notiz: "",
  },
  {
    kapitel: "Phase 1",
    titel: "Ein Menü verbindet alles",
    html: `
      <div class="kicker">Teil 5 · Phase 1</div>
      <h2>Ein Menü verbindet alles</h2>
      <p class="lead"><code>main.py</code> zeigt ein Menü. Jeder Menüpunkt ist das Feature einer Person.</p>
      <div class="raster2" style="align-items:start">
<pre class="terminal">=== Passwort-Werkstatt ===
1 - Passwort erzeugen
2 - Passwort prüfen
3 - Merksatz-Passwort
4 - Passwörter speichern
0 - Beenden
Deine Wahl: _</pre>
        <div class="liste-nr">
          ${S(1, '<span class="stufe b">Basis</span>&nbsp; <b>passwort.py</b> · Person 1')}
          ${S(2, '<span class="stufe a">Aufbau</span>&nbsp; <b>pruefer.py</b> · Person 2')}
          ${S(3, '<span class="stufe a">Aufbau</span>&nbsp; <b>merksatz.py</b> · Person 3')}
          ${S(4, '<span class="stufe p">Profi</span>&nbsp; <b>speicher.py</b> · Person 4')}
        </div>
      </div>`,
    notiz: "So lässt sich fast jede Idee aufteilen. Die Projektvorlage im Repository hat genau diese Struktur.",
  },
  {
    kapitel: "Phase 2",
    titel: "Phase 2: Planen",
    html: `
      <div class="kicker">Teil 6 · Phase 2</div>
      <h2>Phase 2: Planen</h2>
      <p class="lead">Ein Leitfaden mit Fragen. Wie ihr die Antworten festhaltet, entscheidet ihr selbst.</p>
      <div class="raster2">
        ${S(1, `<div class="karte teal" style="height:100%"><div class="karte-titel">Fragen fürs Team</div><ol style="padding-left:30px;margin:0">
          <li><b>Was soll euer Programm können?</b><br><span class="klein">Muss · Soll · Kann</span></li>
          <li><b>Wer baut was?</b><br><span class="klein">Jede Person ein Muss-Feature, ehrlich gewählt</span></li>
          <li><b>Wie passen die Teile zusammen?</b><br><span class="klein">Dateiname, Funktionsname, was rein, was raus</span></li></ol></div>`)}
        ${S(2, `<div class="karte purple" style="height:100%"><div class="karte-titel">Fragen für dein Feature</div><ol start="4" style="padding-left:30px;margin:0">
          <li><b>Verstehen:</b> Was soll passieren?<br><span class="klein">In einem Satz. Eingabe, Ausgabe.</span></li>
          <li><b>Konkretisieren:</b> Wie sieht ein Beispiel aus?<br><span class="klein">Mit Randfall</span></li>
          <li><b>Zerlegen:</b> Welche kleinen Schritte gibt es?<br><span class="klein">Teilschritte, Pseudocode</span></li></ol></div>`)}
      </div>`,
    notiz: "Die Fragen 4 bis 6 entsprechen den Schritten 1 bis 4 aus „Programmieren mit System“. Ein ausgefülltes Beispiel steht im Heft auf der Seite danach.",
  },
  {
    kapitel: "Phase 2",
    titel: "Beispiel: ein Feature durchdacht",
    html: `
      <div class="kicker">Teil 6 · Phase 2</div>
      <h2>Beispiel: Passwort erzeugen <span class="stufe b">Basis</span></h2>
      <div class="raster2" style="margin-top:20px">
        <div class="karte">
          <p><b>In einem Satz:</b> Erzeugt ein zufälliges Passwort in der gewünschten Länge.</p>
          <p><b>Beispiel:</b> <code>8</code> → <code>k3T9xQ2a</code></p>
          <p><b>Randfall:</b> <code>2</code> ist zu kurz, erneut fragen.</p>
          <p><b>Zusammenspiel:</b> <code>passwort.py</code>,<br><code>erzeuge_passwort(laenge)</code> gibt einen <code>str</code> zurück.</p>
        </div>
        ${S(1, `<div class="karte"><div class="karte-titel">Teilschritte</div><ol style="padding-left:30px;margin:0;font-size:26px">
          <li>Ein zufälliges Zeichen ausgeben</li>
          <li>Mit for-Schleife 8 Zeichen aneinanderhängen</li>
          <li>In eine Funktion mit <code>return</code> packen</li>
          <li>Länge mit <code>input()</code> abfragen</li>
          <li>Zu kurze Länge abfangen</li>
          <li>Ins Menü einbauen</li></ol></div>`)}
      </div>`,
    notiz: "Der erste Teilschritt ist bewusst winzig. Er läuft nach wenigen Minuten, das gibt einen frühen Erfolg.",
  },
  {
    kapitel: "Phase 3",
    titel: "Phase 3: Umsetzen",
    html: `
      <div class="kicker">Teil 7 · Phase 3</div>
      <h2>Phase 3: Umsetzen</h2>
      <div class="raster2" style="margin-top:20px;align-items:start">
        <div>
          <p>Ordner <code>projektvorlage</code> aus dem Repository kopieren. Jede Person kopiert <code>feature_vorlage.py</code> für ihr Feature.</p>
<pre class="terminal">workshop-team/
├── main.py       ← Menü
├── passwort.py   ← Person 1
├── pruefer.py    ← Person 2
└── merksatz.py   ← Person 3</pre>
        </div>
        ${S(1, `<div><pre><span class="k">import</span> passwort

<span class="k">if</span> auswahl == <span class="s">"1"</span>:
    passwort.starte()</pre>
          <p class="klein" style="margin-top:18px"><code>if __name__ == "__main__":</code> am Ende deiner Datei: So testest du dein Feature allein, ohne dass das Menü fertig sein muss.</p></div>`)}
      </div>`,
    notiz: "Die Projektvorlage zeigen, gern live: main.py starten, feature_vorlage.py einzeln starten.",
  },
  {
    kapitel: "Phase 3",
    titel: "Arbeiten in kleinen Schritten",
    html: `
      <div class="kicker">Teil 7 · Phase 3</div>
      <h2>Arbeiten in kleinen Schritten</h2>
      <div class="band">
        ${S(1, "<b>1. Kleinster Schritt</b>Nur den nächsten Teilschritt programmieren", "div", "station")}
        ${S(1, "→", "div", "pfeil")}
        ${S(2, "<b>2. Vorhersagen</b>Was soll passieren?", "div", "station")}
        ${S(2, "→", "div", "pfeil")}
        ${S(3, "<b>3. Ausführen</b>Stimmen Soll und Ist überein?", "div", "station")}
        ${S(3, "→", "div", "pfeil")}
        ${S(4, "<b>4. Abhaken</b>Dann der nächste", "div", "station")}
      </div>
      <div class="raster3" style="margin-top:40px">
        ${S(5, `<div class="karte teal" style="height:100%"><div class="karte-titel">Vor dem Zwischenreview</div><p>Muss-Features laufen. Was abstürzt, kommt vorübergehend aus dem Menü.</p></div>`)}
        ${S(6, `<div class="karte purple" style="height:100%"><div class="karte-titel">Danach</div><p>Feedback einarbeiten, Soll-Features, Exkurse für Fortgeschrittene.</p></div>`)}
        ${S(7, `<div class="karte orange" style="height:100%"><div class="karte-titel">Dateien austauschen</div><p>Teams-Kanal: Jede Person lädt nur ihre eigene Datei hoch.</p></div>`)}
      </div>`,
    notiz: "Regelmäßig lädt eine Person alle aktuellen Dateien herunter und startet main.py, damit früh auffällt, ob alles zusammenpasst. Nie die Datei einer anderen Person ändern.",
  },
  {
    kapitel: "Zwischenreview",
    titel: "Zwischenreview",
    html: `
      <div class="kicker">Teil 8 · Zwischenreview</div>
      <h2>Zwischenreview</h2>
      <div class="raster2" style="margin-top:20px;align-items:start">
        <table>
          <thead><tr><th>Runde</th><th>Wer reviewt wen?</th></tr></thead>
          <tbody>
            <tr><td><b>1</b></td><td>Team 1 ↔ Team 2</td></tr>
            <tr><td><b>2</b></td><td>Team 2 ↔ Team 3</td></tr>
            <tr><td><b>3</b></td><td>Team 3 ↔ Team 1</td></tr>
          </tbody>
        </table>
        <div class="liste-nr">
          ${punkt(1, "Ausprobieren", "Gast-Team bedient das Programm ohne Erklärung und denkt laut.", 1)}
          ${punkt(2, "Code lesen", "Eine Feature-Datei, mit dem Bogen aus Anhang B.", 2)}
          ${punkt(3, "Feedback", "Zwei Sterne und ein Wunsch.", 3)}
        </div>
      </div>
      ${S(4, '<p class="klein" style="margin-top:30px">Danach wird getauscht. Das dritte Team arbeitet in der Zeit weiter.</p>')}`,
    notiz: "Jedes Team reviewt zweimal und bekommt von beiden anderen Teams Feedback. Am Ende trägt jedes Team mindestens einen Punkt ein, den es bis zur Präsentation umsetzt.",
  },
  {
    kapitel: "Zwischenreview",
    titel: "Feedback geben und annehmen",
    html: `
      <div class="kicker">Teil 8 · Zwischenreview</div>
      <h2>Feedback geben und annehmen</h2>
      <div class="raster2" style="margin-top:20px">
        ${S(1, `<div class="karte teal" style="height:100%"><div class="karte-titel">Geben</div><ul>
          <li>Konkret: „Bei Menüpunkt 2 wusste ich nicht, ob ich eine Zahl eingeben soll.“</li>
          <li>Über die Sache, nicht über die Person.</li>
          <li>Auch Gelungenes genau benennen.</li></ul></div>`)}
        ${S(2, `<div class="karte purple" style="height:100%"><div class="karte-titel">Annehmen</div><ul>
          <li>Zuhören und mitschreiben, nicht rechtfertigen.</li>
          <li>Nachfragen, wenn etwas unklar ist.</li>
          <li>Danach im Team entscheiden, was ihr umsetzt.</li></ul></div>`)}
      </div>
      ${S(3, '<p class="gross" style="margin-top:40px">★ ★ &nbsp;zwei Dinge, die gut gelungen sind<br>➜ &nbsp;ein konkreter Wunsch</p>')}`,
    notiz: "",
  },
  {
    kapitel: "Präsentation",
    titel: "Präsentation",
    html: `
      <div class="kicker">Teil 9 · Präsentation</div>
      <h2>Präsentation</h2>
      <div class="raster2" style="margin-top:20px;align-items:start">
        <div class="liste-nr">
          ${punkt(1, "Idee und Plan", "Was macht euer Programm? Wer hat was gebaut?", 1)}
          ${punkt(2, "Fremde Vorführung", "Jemand aus einem anderen Team bedient euer Programm.", 2)}
          ${punkt(3, "Code-Einblick", "Jede Person erklärt eine eigene Funktion Zeile für Zeile.", 3)}
          ${punkt(4, "Rückblick", "Was lief gut, wo seid ihr steckengeblieben?", 4)}
          ${punkt(5, "Fragen und Feedback", "Mit den Leitfragen aus Anhang C.", 5)}
        </div>
        ${S(6, `<div class="karte grau"><div class="karte-titel">Warum eine fremde Person vorführt</div><p>Ob euer Programm verständlich ist, merkt ihr erst, wenn jemand es bedient, der es nicht kennt.</p></div>`)}
      </div>`,
    notiz: "Bei der fremden Vorführung darf das Team sagen, was ausprobiert werden soll, aber nicht die Tastatur übernehmen. Leitfragen im Bogen Präsentation: Bedienung, Code, Erklärung, Zusammenarbeit.",
  },
  {
    kapitel: "Reflexion",
    titel: "Reflexion",
    klasse: "zentriert",
    html: `
      <div class="kicker">Teil 10 · Reflexion</div>
      <h2>Reflexion</h2>
      <ul class="gross" style="margin-top:20px">
        ${S(1, "Was habe ich gelernt, das ich vorher nicht konnte?", "li")}
        ${S(2, "Wo bin ich steckengeblieben, und was hat geholfen?", "li")}
        ${S(3, "Was hat in unserem Team gut funktioniert?", "li")}
        ${S(4, "Was mache ich beim nächsten Projekt anders?", "li")}
      </ul>
      ${S(5, '<p class="gross" style="margin-top:40px">Abschlussrunde: <b>„Das nehme ich mit …“</b></p>')}`,
    notiz: "Erst allein schriftlich (Teil 10 im Heft), dann eine kurze Runde mit je einem Satz.",
  },

  // ---------------------------------------------------------------- Material & Start
  {
    kapitel: "Material",
    titel: "Das Material",
    html: `
      <div class="kicker">Material</div>
      <h2>Wo ihr alles findet</h2>
      <div class="raster2" style="margin-top:20px;align-items:start">
        <div>
          <p><b>Repository klonen</b> (Einladung vorher annehmen):</p>
<pre class="terminal">cd Dokumente
git clone https://github.com/totoongh/Workshop.git</pre>
          <p class="klein" style="margin-top:16px">Darin: Arbeitsauftrag als PDF, <code>projektvorlage</code>, <code>beispiele</code>, <code>vorlagen</code></p>
        </div>
        <div class="karte"><div class="karte-titel">Im Anhang des Hefts</div>
          <ul style="list-style:none;padding:0;font-size:25px;line-height:1.5;margin:0">
            <li><b>A</b> Programmieren mit System</li><li><b>B, C</b> Bögen Zwischenreview und Präsentation</li>
            <li><b>D</b> Clean Code</li><li><b>E</b> GitHub</li><li><b>F</b> Bibliotheken</li>
            <li><b>G</b> Fehlerbehandlung</li><li><b>H</b> Dateien</li><li><b>I</b> Oberflächen</li></ul></div>
      </div>`,
    notiz: "Die Klonadresse ggf. anpassen, falls das Repository auf GitHub Enterprise umzieht.",
  },
  {
    kapitel: "Los geht's",
    titel: "Los geht's",
    klasse: "titel",
    html: `
      <div class="linie"></div>
      <h1>Los geht's: Phase 1</h1>
      <p class="gross">Setzt euch in euren Teams zusammen.<br>Jede Person notiert zuerst <b>allein drei Ideen</b>.</p>`,
    notiz: "Übergang in die Teamarbeit.",
  },
];
