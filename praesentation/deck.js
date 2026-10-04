"use strict";
// Steuerung: Pfeile/Leertaste, Einblendungen, Notizen (N), Übersicht (O), Vollbild (F).

const container = document.querySelector("#folien");
container.innerHTML = folien
  .map((f, i) => `<section class="folie ${f.klasse || ""}" data-i="${i}" hidden>${f.html}</section>`)
  .join("");
const sektionen = [...container.querySelectorAll(".folie")];
const maxSchritt = sektionen.map((s) =>
  Math.max(0, ...[...s.querySelectorAll("[data-s]")].map((e) => Number(e.dataset.s))),
);

let aktuell = 0;
let schritt = 0;

function skalieren() {
  const buehne = document.querySelector("#buehne");
  const faktor = Math.min(buehne.clientWidth / 1640, buehne.clientHeight / 940);
  container.style.transform = `scale(${faktor})`;
}

function zeigen() {
  sektionen.forEach((s, i) => (s.hidden = i !== aktuell));
  sektionen[aktuell].querySelectorAll("[data-s]").forEach((e) => {
    e.classList.toggle("versteckt", Number(e.dataset.s) > schritt);
  });
  document.querySelector("#zaehler").textContent = `${aktuell + 1} / ${folien.length}`;
  document.querySelector("#kapitel").textContent = folien[aktuell].kapitel;
  document.querySelector("#fortschritt").style.width = `${((aktuell + 1) / folien.length) * 100}%`;
  const notiz = folien[aktuell].notiz;
  document.querySelector("#notizen-text").innerHTML =
    `<h4>${folien[aktuell].titel}</h4><p>${notiz || "Keine Notiz."}</p>` +
    `<p class="klein">Einblendung ${schritt} / ${maxSchritt[aktuell]}</p>`;
  history.replaceState(null, "", `#${aktuell + 1}/${schritt}`);
}

function weiter() {
  if (schritt < maxSchritt[aktuell]) schritt++;
  else if (aktuell < folien.length - 1) { aktuell++; schritt = 0; }
  zeigen();
}

function zurueck() {
  if (schritt > 0) schritt--;
  else if (aktuell > 0) { aktuell--; schritt = maxSchritt[aktuell]; }
  zeigen();
}

function springe(i, s = 0) {
  aktuell = Math.max(0, Math.min(folien.length - 1, i));
  schritt = Math.max(0, Math.min(maxSchritt[aktuell], s));
  zeigen();
}

function umschalten(id) {
  const el = document.querySelector(id);
  el.hidden = !el.hidden;
}

function vollbild() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.();
}

document.querySelector("#uebersicht-liste").innerHTML = folien
  .map((f, i) => `<li><a href="#${i + 1}/0" data-ziel="${i}">${f.titel}</a> <span class="kap">${f.kapitel}</span></li>`)
  .join("");
document.querySelector("#uebersicht-liste").addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  e.preventDefault();
  springe(Number(a.dataset.ziel));
  document.querySelector("#uebersicht").hidden = true;
});

document.querySelector("#btn-weiter").addEventListener("click", weiter);
document.querySelector("#btn-zurueck").addEventListener("click", zurueck);
document.querySelector("#btn-notizen").addEventListener("click", () => umschalten("#notizen"));
document.querySelector("#notizen-zu").addEventListener("click", () => umschalten("#notizen"));
document.querySelector("#btn-uebersicht").addEventListener("click", () => umschalten("#uebersicht"));
document.querySelector("#uebersicht-zu").addEventListener("click", () => umschalten("#uebersicht"));
document.querySelector("#btn-vollbild").addEventListener("click", vollbild);
container.addEventListener("click", weiter);

document.addEventListener("keydown", (e) => {
  if (e.target.closest("button") && (e.key === " " || e.key === "Enter")) return;
  switch (e.key) {
    case "ArrowRight": case "PageDown": case " ": e.preventDefault(); weiter(); break;
    case "ArrowLeft": case "PageUp": e.preventDefault(); zurueck(); break;
    case "Home": springe(0); break;
    case "End": springe(folien.length - 1, 99); break;
    case "n": case "N": umschalten("#notizen"); break;
    case "o": case "O": umschalten("#uebersicht"); break;
    case "f": case "F": vollbild(); break;
    case "Escape":
      document.querySelector("#notizen").hidden = true;
      document.querySelector("#uebersicht").hidden = true;
      break;
  }
});

let touchX = null;
document.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX));
document.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) (dx < 0 ? weiter : zurueck)();
  touchX = null;
});

window.addEventListener("resize", skalieren);
const [f, s] = location.hash.slice(1).split("/").map(Number);
skalieren();
springe((f || 1) - 1, s || 0);
