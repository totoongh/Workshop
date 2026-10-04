"""Beispiel: Fehlerbehandlung mit try und except (Anhang G)."""


def frage_zahl(text):
    """Fragt so lange, bis eine ganze Zahl eingegeben wird."""
    while True:
        try:
            return int(input(text))
        except ValueError:
            print("Bitte eine ganze Zahl eingeben.")


def teile_auf(betrag, anzahl):
    """Teilt einen Betrag gleichmäßig auf mehrere Personen auf."""
    return betrag / anzahl


if __name__ == "__main__":
    betrag = frage_zahl("Betrag in Euro: ")
    anzahl = frage_zahl("Anzahl Personen: ")
    try:
        anteil = teile_auf(betrag, anzahl)
        print("Pro Person:", round(anteil, 2), "Euro")
    except ZeroDivisionError:
        print("Durch 0 Personen kann man nichts teilen.")
