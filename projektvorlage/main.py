"""Hauptprogramm eures Teamprojekts.

Diese Datei zeigt das Menü und ruft die Features auf.
Jedes Feature liegt in einer eigenen Datei (siehe feature_vorlage.py).

So baut ihr ein neues Feature ein:
1. Datei oben mit import einbinden.
2. Einen Menüpunkt in zeige_menue() ergänzen.
3. In main() einen elif-Zweig ergänzen, der das Feature startet.
"""
import feature_vorlage

PROGRAMMNAME = "Unser Teamprojekt"


def zeige_menue():
    print()
    print("=== " + PROGRAMMNAME + " ===")
    print("1 - Würfeln (Beispiel-Feature)")
    print("0 - Beenden")


def main():
    laeuft = True
    while laeuft:
        zeige_menue()
        auswahl = input("Deine Wahl: ")
        if auswahl == "1":
            feature_vorlage.starte()
        elif auswahl == "0":
            laeuft = False
        else:
            print("Bitte eine Zahl aus dem Menü eingeben.")
    print("Tschüss!")


main()
