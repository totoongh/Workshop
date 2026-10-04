"""Beispiel: ein externes Paket nutzen (Anhang G).

Das Paket rich ist nicht in Python enthalten. Installiere es vorher einmal:
    Windows:  py -m pip install rich
    macOS:    python3 -m pip install rich
"""
from rich.console import Console
from rich.table import Table

konsole = Console()
konsole.print("Hallo [bold green]Workshop[/bold green]!")

tabelle = Table(title="Geräteliste")
tabelle.add_column("Gerät")
tabelle.add_column("Status")
tabelle.add_row("Laptop 1", "[green]frei[/green]")
tabelle.add_row("Laptop 2", "[red]verliehen[/red]")
konsole.print(tabelle)
