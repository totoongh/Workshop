# Workshop „Programmieren“

Material für den einwöchigen Programmier-Workshop im 1. Ausbildungsjahr (Fachinformatiker\*in für Daten- und Prozessanalyse).

In dieser Woche entwickelt ihr im Team ein eigenes Python-Programm: ein kleines Werkzeug für die IT-Administration oder ein Spiel. Was genau passiert, steht im **[Arbeitsauftrag](Arbeitsauftrag.pdf)**.

## Was liegt wo?

| Ordner / Datei | Inhalt |
|---|---|
| [`Arbeitsauftrag.pdf`](Arbeitsauftrag.pdf) | Das Heft für die Woche, mit allen Anhängen |
| [`projektvorlage/`](projektvorlage) | Startpunkt für euer Teamprojekt: `main.py` mit Menü und eine Vorlage für ein Feature |
| [`beispiele/`](beispiele) | Lauffähige Beispiele zu den Anhängen G (Bibliotheken), H (Dateien) und I (Oberflächen) |
| [`vorlagen/`](vorlagen) | Checkliste, Steckbrief, „Mein Feature“ und die Feedback-Bögen als einzelne PDFs zum Drucken |
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

„Klonen“ heißt: eine Kopie des Repositorys auf deinen Rechner holen. Das machst du **einmal**.

#### Variante A: in PyCharm (empfohlen)

1. Startbildschirm: **Clone Repository**.
   Ist schon ein Projekt offen: Menü **File > New > Project from Version Control**.
2. Links **GitHub** wählen und auf **Log In via GitHub** klicken. Im Browser anmelden und PyCharm erlauben, auf dein Konto zuzugreifen.
3. In der Liste **Workshop** auswählen.
4. Unten bei **Directory** einen Ordner wählen, zum Beispiel `Dokumente\Workshop`.
5. Auf **Clone** klicken. PyCharm öffnet das Repository als Projekt.

#### Variante B: im Terminal

Wechsle in den Ordner, in dem das Repository landen soll, und klone es:

```bash
cd Dokumente
git clone https://github.com/totoongh/Workshop.git
```

Beim ersten Mal öffnet sich ein Anmeldefenster im Browser („Git Credential Manager“). Melde dich dort mit deinem GitHub-Konto an. Danach liegt der Ordner `Workshop` in `Dokumente`.

### Schritt 3: eigenen Projektordner anlegen

**Arbeite nicht direkt im geklonten Ordner.** Sonst kann das Aktualisieren (Schritt 4) mit einer Fehlermeldung abbrechen.

1. Kopiere den Ordner `projektvorlage` an einen eigenen Ort, zum Beispiel nach `Dokumente\workshop-team`.
2. Öffne diesen Ordner in PyCharm mit **File > Open**.
3. Starte `main.py`. Das Menü erscheint, und Menüpunkt 1 würfelt.
4. Kopiere `feature_vorlage.py` für dein eigenes Feature und benenne die Kopie passend, zum Beispiel `passwort.py`.

Wie die Dateien zusammenhängen und wie ihr sie im Team austauscht, steht im Arbeitsauftrag in Teil 8.

### Schritt 4: neue Version holen

Wenn im Repository etwas ergänzt wird, holst du dir die Änderungen:

- **PyCharm:** Menü **Git > Update Project** (Windows `Strg + T`, macOS `⌘ + T`), dann **OK**.
- **Terminal:** im Ordner `Workshop`:

```bash
git pull
```

### Notlösung: als ZIP herunterladen

Klappt das Klonen gar nicht, kannst du auf der GitHub-Seite des Repositorys auf **Code > Download ZIP** klicken (du musst dafür angemeldet sein). Dann fehlt dir allerdings `git pull`. Für neue Versionen musst du das ZIP erneut herunterladen.

---

## Wenn etwas nicht klappt

| Meldung | Ursache und Lösung |
|---|---|
| `Repository not found` | Einladung noch nicht angenommen, oder du bist mit einem anderen GitHub-Konto angemeldet. |
| `Authentication failed` | Anmeldung abgelaufen oder abgebrochen. In PyCharm unter **Settings > Version Control > GitHub** das Konto entfernen und neu anmelden. Im Terminal den Befehl einfach noch einmal ausführen, dann erscheint das Anmeldefenster erneut. |
| `Your local changes to the following files would be overwritten` | Du hast im geklonten Ordner etwas geändert. Kopiere deine Datei an einen anderen Ort und frag dann im Team oder den Ausbilder. |
| `fatal: destination path 'Workshop' already exists` | Du hast schon einmal geklont. Nutze den vorhandenen Ordner und hol neue Versionen mit `git pull`. |
| `'git' is not recognized …` | Git ist im Terminal nicht gefunden worden. Schließe das Terminal und öffne es neu. Hilft das nicht, frag den Ausbilder. |

## Die wichtigsten Begriffe

| Begriff | Bedeutung |
|---|---|
| **Git** | Programm auf deinem Rechner, das Versionen von Dateien verwaltet |
| **GitHub** | Website, auf der Git-Repositorys gespeichert und geteilt werden |
| **Repository** | Projektordner mit allen Dateien und ihrer Versionsgeschichte, kurz „Repo“ |
| **Clone** | Repository einmalig auf den eigenen Rechner kopieren |
| **Pull** | Neue Änderungen von GitHub in die eigene Kopie holen |
| **Commit, Push** | Eigene Änderungen speichern und hochladen. Brauchen wir im Workshop nicht. |

## Spickzettel

| Befehl | Was er tut |
|---|---|
| `git clone <Adresse>` | Repository einmalig auf den Rechner holen |
| `git pull` | Neue Änderungen holen |
| `git status` | Zeigen, ob du im Repository etwas geändert hast |
| `git log --oneline` | Die letzten Änderungen kurz auflisten |
| `cd <Ordner>` / `cd ..` | In einen Ordner wechseln / eine Ebene nach oben |
| `dir` (Windows) / `ls` (macOS) | Inhalt des aktuellen Ordners anzeigen |
| `py datei.py` (Windows) / `python3 datei.py` (macOS) | Python-Programm starten |

---

## Die Beispiele ausführen

Die Programme in [`beispiele/`](beispiele) gehören zu den Anhängen im Arbeitsauftrag. Du kannst sie in PyCharm mit Rechtsklick > **Run** starten.

| Datei | Thema | Anhang |
|---|---|---|
| `01_standardmodule.py` | `random`, `math`, `time`, `datetime`, `string` | G |
| `02_pip_rich.py` | Externes Paket `rich`. Vorher installieren: `py -m pip install -r beispiele/requirements.txt` | G |
| `03_dateien_basics.py` | Textdatei schreiben, ergänzen, lesen | H |
| `04_highscore.py` | Highscores speichern und laden | H |
| `05_json_speichern.py` | Liste mit Dictionaries als JSON speichern | H |
| `06_gui_minimal.py` | Erstes Fenster mit tkinter | I |
| `07_gui_passwort.py` | Passwort-Generator mit Oberfläche | I |

Die Datei-Beispiele legen ihre Dateien (`notizen.txt`, `highscores.txt`, `geraete.json`) im Arbeitsordner an. In PyCharm ist das normalerweise der Ordner, in dem das Skript liegt.

> **tkinter unter macOS:** Mit dem Python von python.org ist tkinter dabei. Mit Homebrew-Python fehlt es manchmal (`No module named '_tkinter'`), dann hilft `brew install python-tk`. Unter Windows ist tkinter immer dabei.

---

## Für den Ausbilder: Arbeitsauftrag neu erzeugen

Der Arbeitsauftrag wird aus `quelle/arbeitsauftrag.html` erzeugt. Voraussetzungen: Google Chrome und Python mit `pypdf`.

```bash
cd quelle
python3 -m pip install -r requirements.txt
python3 build.py
```

Das Skript druckt das HTML mit Chrome als PDF, trägt die Seitenzahlen ins Inhaltsverzeichnis ein, fügt „Programmieren mit System“ als Anhang A ein und legt die Einzelvorlagen in `vorlagen/` ab.
