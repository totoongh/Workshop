"""Beispiel: Standardmodule einbinden (Anhang G).

Diese Module sind in Python schon enthalten. Du musst nichts installieren.
"""
import math
import random
import string
import time
from datetime import date

# random: Zufall
wurf = random.randint(1, 6)
print("Würfelwurf:", wurf)

farben = ["rot", "grün", "blau"]
print("Zufällige Farbe:", random.choice(farben))

# math: Mathematik
print("Wurzel aus 81:", math.sqrt(81))
print("4.2 aufgerundet:", math.ceil(4.2))

# string: fertige Zeichenvorräte
print("Alle Ziffern:", string.digits)

# time: kurz warten
print("Moment ...")
time.sleep(1)

# datetime: das heutige Datum
heute = date.today()
print("Heute ist der", heute.strftime("%d.%m.%Y"))
