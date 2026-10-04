"""Beispiel für Fortgeschrittene: eine Liste mit Dictionaries als JSON speichern (Anhang H).

Jedes Mal, wenn du das Programm startest, kommt ein Gerät dazu.
Schau dir danach die Datei geraete.json im Editor an.
"""
import json
import os

DATEINAME = "geraete.json"


def lade_geraete():
    """Gibt die gespeicherte Liste zurück oder eine leere Liste."""
    if not os.path.exists(DATEINAME):
        return []
    with open(DATEINAME, "r", encoding="utf-8") as datei:
        return json.load(datei)


def speichere_geraete(geraete):
    """Schreibt die komplette Liste in die Datei."""
    with open(DATEINAME, "w", encoding="utf-8") as datei:
        json.dump(geraete, datei, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    geraete = lade_geraete()
    neues_geraet = {"name": "Laptop " + str(len(geraete) + 1), "verliehen": False}
    geraete.append(neues_geraet)
    speichere_geraete(geraete)

    for geraet in geraete:
        if geraet["verliehen"]:
            print(geraet["name"], "- verliehen")
        else:
            print(geraet["name"], "- frei")
