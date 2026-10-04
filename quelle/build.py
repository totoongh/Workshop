"""Erzeugt Arbeitsauftrag.pdf und die Einzelvorlagen aus arbeitsauftrag.html.

Voraussetzungen: Google Chrome und das Paket pypdf (pip install -r requirements.txt).
Aufruf aus dem Ordner quelle:  python build.py

Ablauf:
1. Chrome druckt das HTML als PDF (mit Seitenzahlen über @page).
2. Das Skript sucht, auf welcher Seite jeder Teil beginnt, schreibt die
   Seitenzahlen in seiten.js und druckt erneut (Inhaltsverzeichnis).
3. Die Platzhalterseiten für Anhang A werden durch die Originalseiten von
   „Programmieren mit System“ ersetzt.
4. Steckbrief, Bögen und Checkliste werden als einzelne PDFs gespeichert.
"""
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from pypdf import PdfReader, PdfWriter

QUELLE = Path(__file__).resolve().parent
REPO = QUELLE.parent
HTML = QUELLE / "arbeitsauftrag.html"
SEITEN_JS = QUELLE / "seiten.js"
ANHANG_A = QUELLE / "assets" / "Programmieren-mit-System-A4.pdf"
ZIEL = REPO / "Arbeitsauftrag.pdf"
VORLAGEN = REPO / "vorlagen"

# Dateiname -> Abschnitte (ids), die in die Einzelvorlage kommen
EINZELVORLAGEN = {
    "Checkliste.pdf": ["checkliste"],
    "Steckbrief-und-Mein-Feature.pdf": ["anhang-b", "anhang-b2"],
    "Bogen-Zwischenreview.pdf": ["anhang-c"],
    "Bogen-Praesentation.pdf": ["anhang-d"],
}

CHROME_KANDIDATEN = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "google-chrome",
    "chromium",
]


def finde_chrome():
    for kandidat in CHROME_KANDIDATEN:
        if Path(kandidat).exists() or shutil.which(kandidat):
            return kandidat
    sys.exit("Google Chrome wurde nicht gefunden.")


def drucke(chrome, ziel):
    subprocess.run(
        [
            chrome,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--virtual-time-budget=10000",
            "--print-to-pdf=" + str(ziel),
            HTML.as_uri(),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def normalisiere(text):
    return re.sub(r"[\s\u00ad\-–]+", "", text)


def abschnitte():
    """Liefert [(id, Suchtext)] in der Reihenfolge des Dokuments."""
    html = HTML.read_text(encoding="utf-8")
    ergebnis = []
    muster = r'<section class="teil[^"]*" id="([\w-]+)">.*?<h1>(.*?)</h1>|<div class="einlage" id="([\w-]+)">(.*?)</div>'
    for m in re.finditer(muster, html, flags=re.S):
        if m.group(1):
            titel = re.sub(r"<[^>]+>", "", m.group(2))
            ergebnis.append((m.group(1), titel))
        else:
            ergebnis.append((m.group(3), m.group(4)))
    return ergebnis


def seitenzahlen(pdf):
    """Sucht für jeden Abschnitt die erste Seite (1-basiert)."""
    texte = [normalisiere(seite.extract_text() or "") for seite in PdfReader(pdf).pages]
    seiten = {}
    ab = 1  # Deckblatt (Index 0) überspringen, dort steht das Inhaltsverzeichnis
    for abschnitt_id, suchtext in abschnitte():
        nadel = normalisiere(suchtext)[:40]
        for index in range(ab, len(texte)):
            if nadel in texte[index]:
                seiten[abschnitt_id] = index + 1
                ab = index + 1
                break
        else:
            sys.exit("Abschnitt nicht gefunden: " + abschnitt_id)
    seiten["gesamt"] = len(texte)
    return seiten


def schreibe_seiten_js(seiten):
    SEITEN_JS.write_text(
        "// Automatisch erzeugt von build.py\nwindow.SEITEN = " + json.dumps(seiten, indent=1) + ";\n",
        encoding="utf-8",
    )


def main():
    chrome = finde_chrome()
    with tempfile.TemporaryDirectory() as tmp:
        roh = Path(tmp) / "roh.pdf"

        schreibe_seiten_js({})
        drucke(chrome, roh)
        seiten = seitenzahlen(roh)
        for durchlauf in range(3):
            schreibe_seiten_js(seiten)
            drucke(chrome, roh)
            neu = seitenzahlen(roh)
            if neu == seiten:
                break
            seiten = neu
        print("Seiten:", seiten)

        leser = PdfReader(roh)
        anhang_a = PdfReader(ANHANG_A)
        einlage_start = seiten["anhang-a"] - 1
        schreiber = PdfWriter()
        for index, seite in enumerate(leser.pages):
            if einlage_start <= index < einlage_start + len(anhang_a.pages):
                schreiber.add_page(anhang_a.pages[index - einlage_start])
            else:
                schreiber.add_page(seite)
        schreiber.add_metadata({"/Title": "Workshop „Programmieren“ · Arbeitsauftrag", "/Author": "Workshop Programmieren"})
        with open(ZIEL, "wb") as datei:
            schreiber.write(datei)
        print("Geschrieben:", ZIEL.relative_to(REPO))

        reihenfolge = [abschnitt_id for abschnitt_id, _ in abschnitte()]
        VORLAGEN.mkdir(exist_ok=True)
        gesamt = PdfReader(ZIEL)
        for dateiname, ids in EINZELVORLAGEN.items():
            vorlage = PdfWriter()
            for abschnitt_id in ids:
                start = seiten[abschnitt_id] - 1
                position = reihenfolge.index(abschnitt_id)
                if position + 1 < len(reihenfolge):
                    ende = seiten[reihenfolge[position + 1]] - 1
                else:
                    ende = len(gesamt.pages)
                for index in range(start, ende):
                    vorlage.add_page(gesamt.pages[index])
            with open(VORLAGEN / dateiname, "wb") as datei:
                vorlage.write(datei)
            print("Geschrieben:", (VORLAGEN / dateiname).relative_to(REPO))


if __name__ == "__main__":
    main()
