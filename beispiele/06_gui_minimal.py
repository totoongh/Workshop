"""Beispiel: ein kleines Fenster mit tkinter (Anhang I)."""
import tkinter as tk


def begruessen():
    """Wird aufgerufen, wenn jemand auf den Knopf klickt."""
    name = eingabe.get()
    ausgabe.config(text="Hallo " + name + "!")


fenster = tk.Tk()
fenster.title("Mein erstes Fenster")

hinweis = tk.Label(fenster, text="Wie heißt du?")
hinweis.pack(padx=20, pady=(20, 5))

eingabe = tk.Entry(fenster)
eingabe.pack(padx=20)

knopf = tk.Button(fenster, text="Begrüßen", command=begruessen)
knopf.pack(pady=10)

ausgabe = tk.Label(fenster, text="")
ausgabe.pack(padx=20, pady=(0, 20))

fenster.mainloop()
