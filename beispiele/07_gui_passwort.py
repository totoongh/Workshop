"""Beispiel: Passwort-Generator mit Oberfläche (Anhang I).

Die Funktion erzeuge_passwort() weiß nichts vom Fenster.
So kannst du eine Funktion aus deiner Konsolenversion wiederverwenden.
"""
import random
import string
import tkinter as tk
from tkinter import messagebox

ZEICHEN = string.ascii_letters + string.digits
MINDESTLAENGE = 4


# ---------- Logik: funktioniert auch ohne Fenster ----------
def erzeuge_passwort(laenge):
    """Gibt ein zufälliges Passwort mit laenge Zeichen zurück."""
    passwort = ""
    for i in range(laenge):
        passwort = passwort + random.choice(ZEICHEN)
    return passwort


# ---------- Oberfläche ----------
def knopf_geklickt():
    text = eingabe_laenge.get()
    if not text.isdigit() or int(text) < MINDESTLAENGE:
        messagebox.showwarning("Ungültige Länge", "Bitte eine Zahl ab 4 eingeben.")
        return
    passwort = erzeuge_passwort(int(text))
    ausgabe.config(text=passwort)


fenster = tk.Tk()
fenster.title("Passwort-Generator")

tk.Label(fenster, text="Länge:").grid(row=0, column=0, padx=10, pady=10, sticky="e")
eingabe_laenge = tk.Entry(fenster, width=6)
eingabe_laenge.insert(0, "12")
eingabe_laenge.grid(row=0, column=1, padx=10, pady=10, sticky="w")

knopf = tk.Button(fenster, text="Erzeugen", command=knopf_geklickt)
knopf.grid(row=1, column=0, columnspan=2, pady=5)

ausgabe = tk.Label(fenster, text="", font=("Courier", 14))
ausgabe.grid(row=2, column=0, columnspan=2, padx=10, pady=(5, 15))

fenster.mainloop()
