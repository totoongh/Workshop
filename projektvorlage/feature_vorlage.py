"""Beispiel-Feature: Würfeln.

Kopiere diese Datei für dein eigenes Feature und gib ihr einen
passenden Namen, zum Beispiel passwort.py oder quiz.py.
"""
import random


def wuerfeln(anzahl_seiten):
    """Gibt eine Zufallszahl von 1 bis anzahl_seiten zurück."""
    return random.randint(1, anzahl_seiten)


def starte():
    """Wird aus dem Menü in main.py aufgerufen."""
    print("Du würfelst ...")
    ergebnis = wuerfeln(6)
    print("Ergebnis:", ergebnis)


# Dieser Block läuft nur, wenn du genau diese Datei startest.
# So kannst du dein Feature allein testen, ohne main.py.
if __name__ == "__main__":
    starte()
