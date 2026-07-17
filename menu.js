/* Studio Monitor — menù del sito.
   1) apre/chiude il sottomenù "Servizi" nel menù laterale;
   2) su telefono apre/chiude l'intero menù col bottone ☰.
   Richiamato da tutte le pagine del sito. */
(function () {
  "use strict";

  /* sottomenù "Servizi" */
  var toggle = document.querySelector(".nav-toggle");
  var submenu = document.getElementById("submenu-servizi");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var aperto = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", aperto ? "false" : "true");
      if (submenu) submenu.classList.toggle("aperto", !aperto);
    });
  }

  /* bottone ☰ (esiste solo su telefono: su PC è nascosto dal CSS) */
  var mbtn = document.querySelector(".menu-btn");
  if (mbtn) {
    mbtn.addEventListener("click", function () {
      var aperto = document.body.classList.toggle("menu-aperto");
      mbtn.setAttribute("aria-expanded", aperto ? "true" : "false");
      mbtn.textContent = aperto ? "✕" : "☰";   /* ✕ / ☰ */
      mbtn.setAttribute("aria-label", aperto ? "Chiudi il menù" : "Apri il menù");
    });
  }
})();
