"""Beispiel: Highscores speichern und wieder laden (Anhang H).

Jede Zeile der Datei sieht so aus:  Name;Punkte
"""
import os

DATEINAME = "highscores.txt"


def lade_highscores():
    """Liest die Datei und gibt eine Liste mit [name, punkte] zurück."""
    highscores = []
    if not os.path.exists(DATEINAME):
        return highscores
    with open(DATEINAME, "r", encoding="utf-8") as datei:
        for zeile in datei:
            teile = zeile.strip().split(";")
            if len(teile) == 2:
                highscores.append([teile[0], int(teile[1])])
    return highscores


def speichere_highscore(name, punkte):
    """Hängt einen neuen Eintrag ans Ende der Datei an."""
    with open(DATEINAME, "a", encoding="utf-8") as datei:
        datei.write(name + ";" + str(punkte) + "\n")


def zeige_highscores():
    """Gibt alle gespeicherten Einträge aus."""
    highscores = lade_highscores()
    if len(highscores) == 0:
        print("Noch keine Highscores.")
    for eintrag in highscores:
        print(eintrag[0], "-", eintrag[1], "Punkte")


if __name__ == "__main__":
    name = input("Dein Name: ")
    punkte = int(input("Deine Punkte: "))
    speichere_highscore(name, punkte)
    zeige_highscores()
