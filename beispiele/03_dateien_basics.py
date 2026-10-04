"""Beispiel: Textdateien schreiben, ergänzen und lesen (Anhang H)."""
import os

DATEINAME = "notizen.txt"

# 1. Schreiben: "w" legt die Datei neu an. Vorhandener Inhalt wird gelöscht.
with open(DATEINAME, "w", encoding="utf-8") as datei:
    datei.write("Erste Zeile\n")
    datei.write("Zweite Zeile\n")

# 2. Anhängen: "a" schreibt ans Ende der Datei.
with open(DATEINAME, "a", encoding="utf-8") as datei:
    datei.write("Dritte Zeile\n")

# 3. Lesen: Zeile für Zeile. strip() entfernt den Zeilenumbruch am Ende.
if os.path.exists(DATEINAME):
    with open(DATEINAME, "r", encoding="utf-8") as datei:
        for zeile in datei:
            print(zeile.strip())
