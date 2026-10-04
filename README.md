# Workshop „Programmieren“

Material für den einwöchigen Programmier-Workshop im 1. Ausbildungsjahr (Fachinformatiker\*in für Daten- und Prozessanalyse).

In dieser Woche entwickelt ihr im Team ein eigenes Python-Programm: ein kleines Werkzeug für die IT-Administration oder ein Spiel. Was genau passiert, steht im **[Arbeitsauftrag](Arbeitsauftrag.pdf)**.

## Was liegt wo?

| Ordner / Datei | Inhalt |
|---|---|
| [`Arbeitsauftrag.pdf`](Arbeitsauftrag.pdf) | Das Heft für die Woche, mit allen Anhängen |
| [`projektvorlage/`](projektvorlage) | Startpunkt für euer Teamprojekt: `main.py` mit Menü und eine Vorlage für ein Feature |
| [`beispiele/`](beispiele) | Lauffähige Beispiele zu den Anhängen F (Bibliotheken), G (Fehlerbehandlung), H (Dateien) und I (Oberflächen) |
| [`praesentation/`](praesentation) | Präsentation zum Start des Workshops: `index.html` im Browser öffnen |
| [`vorlagen/`](vorlagen) | Checkliste, die beiden Feedback-Bögen und die Reflexion als einzelne PDFs zum Drucken |
| `quelle/` | Quelltext des Arbeitsauftrags. Braucht ihr nicht. |

---

## Code von GitHub holen: Schritt für Schritt

Git ist auf euren Rechnern schon installiert. Ihr braucht nur noch ein GitHub-Konto.

### Schritt 1: Einladung annehmen

Dieses Repository ist **privat**. Du siehst es erst, wenn du eingeladen wurdest.

1. Öffne die E-Mail von GitHub mit dem Betreff *„… invited you to … Workshop“*.
2. Klicke auf **View invitation** und dann auf **Accept invitation**.

Keine E-Mail bekommen? Melde dich auf [github.com](https://github.com) an und schau unter [github.com/notifications](https://github.com/notifications) nach. Die Einladung ist 7 Tage gültig.

### Schritt 2: Repository klonen

„Klonen“ heißt: eine Kopie des Repositorys auf deinen Rechner holen. Das machst du **einmal**, im Terminal (Windows: PowerShell).

Wechsle in den Ordner, in dem das Repository landen soll, und klone es:

```bash
cd Dokumente
git clone https://github.com/totoongh/Workshop.git
```

Beim ersten Mal öffnet sich ein Anmeldefenster („Git Credential Manager“). Melde dich dort mit deinem GitHub-Konto an. Danach liegt der Ordner `Workshop` in `Dokumente`.

### Schritt 3: eigenen Projektordner anlegen

1. Kopiere den Ordner `projektvorlage` als Projektordner für dein Team, zum Beispiel nach `Dokumente\workshop-team`. So bleibt die Vorlage unverändert.
2. Öffne diesen Ordner in PyCharm mit **File > Open**.
3. Starte `main.py`. Das Menü erscheint, und Menüpunkt 1 würfelt.
4. Kopiere `feature_vorlage.py` für dein eigenes Feature und benenne die Kopie passend, zum Beispiel `passwort.py`.

Wie die Dateien zusammenhängen und wie ihr sie im Team austauscht, steht im Arbeitsauftrag in Teil 7.

---

## Änderungen speichern und hochladen

Diese Befehle brauchst du in jedem Projekt, das mit Git arbeitet, zum Beispiel in einem eigenen Repository:

```bash
git status
git add passwort.py
git commit -m "Passwortlänge abfragen"
git push
```

- `git status` zeigt, was sich geändert hat.
- `git add` merkt Dateien für den nächsten Commit vor (`git add .` nimmt alle Änderungen).
- `git commit -m "…"` speichert den Stand als Version. Die Nachricht sagt kurz, was sich geändert hat.
- `git push` lädt deine Commits auf GitHub hoch.

Lieber nach jedem funktionierenden Teilschritt einen kleinen Commit als einen großen am Ende.

---

## Wenn etwas nicht klappt

| Meldung | Ursache und Lösung |
|---|---|
| `Repository not found` | Einladung noch nicht angenommen, oder du bist mit einem anderen GitHub-Konto angemeldet. |
| `Authentication failed` | Anmeldung abgelaufen oder abgebrochen. Befehl noch einmal ausführen, dann erscheint das Anmeldefenster erneut. |
| `Please tell me who you are` | Git kennt deinen Namen noch nicht. Einmalig: `git config --global user.name "Vorname Nachname"` und `git config --global user.email "deine@adresse.de"` |
| `rejected … fetch first` | Auf GitHub gibt es neuere Commits. Erst `git pull`, dann erneut `git push`. |
| `fatal: destination path 'Workshop' already exists` | Du hast schon einmal geklont. Nutze den vorhandenen Ordner. |
| `'git' is not recognized …` | Git ist im Terminal nicht gefunden worden. Schließe das Terminal und öffne es neu. Hilft das nicht, frag den Ausbilder. |

## Die wichtigsten Begriffe

| Begriff | Bedeutung |
|---|---|
| **Git** | Programm auf deinem Rechner, das Versionen von Dateien verwaltet |
| **GitHub** | Website, auf der Git-Repositorys gespeichert und geteilt werden |
| **Repository** | Projektordner mit allen Dateien und ihrer Versionsgeschichte, kurz „Repo“ |
| **Clone** | Repository einmalig auf den eigenen Rechner kopieren |
| **Add** | Geänderte Dateien für den nächsten Commit vormerken |
| **Commit** | Vorgemerkte Änderungen als Version speichern, mit kurzer Nachricht |
| **Push** | Eigene Commits auf GitHub hochladen |
| **Pull** | Neue Commits von GitHub in die eigene Kopie holen |

## Spickzettel

| Befehl | Was er tut |
|---|---|
| `git clone <Adresse>` | Repository einmalig auf den Rechner holen |
| `git status` | Zeigen, welche Dateien geändert oder neu sind |
| `git add <Datei>` / `git add .` | Eine Datei oder alle Änderungen vormerken |
| `git commit -m "Nachricht"` | Vorgemerkte Änderungen als Version speichern |
| `git push` | Eigene Commits hochladen |
| `git pull` | Neue Commits von GitHub holen |
| `git log --oneline` | Die bisherigen Commits kurz auflisten |
| `cd <Ordner>` / `cd ..` | In einen Ordner wechseln / eine Ebene nach oben |
| `dir` (Windows) / `ls` (macOS) | Inhalt des aktuellen Ordners anzeigen |
| `py datei.py` (Windows) / `python3 datei.py` (macOS) | Python-Programm starten |

---

## Die Beispiele ausführen

Die Programme in [`beispiele/`](beispiele) gehören zu den Anhängen im Arbeitsauftrag. Du kannst sie in PyCharm mit Rechtsklick > **Run** starten.

| Datei | Thema | Anhang |
|---|---|---|
| `01_standardmodule.py` | `random`, `math`, `time`, `datetime`, `string` | F |
| `02_pip_rich.py` | Externes Paket `rich`. Vorher installieren: `py -m pip install -r beispiele/requirements.txt` | F |
| `03_dateien_basics.py` | Textdatei schreiben, ergänzen, lesen | H |
| `04_highscore.py` | Highscores speichern und laden | H |
| `05_json_speichern.py` | Liste mit Dictionaries als JSON speichern | H |
| `06_gui_minimal.py` | Erstes Fenster mit tkinter | I |
| `07_gui_passwort.py` | Passwort-Generator mit Oberfläche | I |
| `08_fehlerbehandlung.py` | Eingaben mit `try` und `except` absichern | G |

Die Datei-Beispiele legen ihre Dateien (`notizen.txt`, `highscores.txt`, `geraete.json`) im Arbeitsordner an. In PyCharm ist das normalerweise der Ordner, in dem das Skript liegt.

> **tkinter unter macOS:** Mit dem Python von python.org ist tkinter dabei. Mit Homebrew-Python fehlt es manchmal (`No module named '_tkinter'`), dann hilft `brew install python-tk`. Unter Windows ist tkinter immer dabei.

---

## Für den Ausbilder: Präsentation

`praesentation/index.html` im Browser öffnen, ohne Installation und ohne Internet.

| Taste | Wirkung |
|---|---|
| Pfeil rechts, Leertaste, Klick | Nächste Einblendung, dann nächste Folie |
| Pfeil links | Zurück |
| O | Folienübersicht |
| N | Sprechernotizen (beim Teilen des Bildschirms sichtbar!) |
| F | Vollbild |
| Esc | Notizen und Übersicht schließen |

Folieninhalte stehen in `praesentation/slides.js`.

## Für den Ausbilder: Arbeitsauftrag neu erzeugen

Der Arbeitsauftrag wird aus `quelle/arbeitsauftrag.html` erzeugt. Voraussetzungen: Google Chrome und Python mit `pypdf`.

```bash
cd quelle
python3 -m pip install -r requirements.txt
python3 build.py
```

Das Skript druckt das HTML mit Chrome als PDF, trägt die Seitenzahlen ins Inhaltsverzeichnis ein, fügt „Programmieren mit System“ als Anhang A ein und legt Checkliste, Bögen und Reflexion einzeln in `vorlagen/` ab.
