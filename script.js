document.addEventListener("DOMContentLoaded", () => {

  let current = 0;
  const pages = document.querySelectorAll(".page");

  /* ===== NAVIGATION ===== */
  function showPage(i) {
    pages.forEach(p => p.classList.remove("active"));
    pages[i].classList.add("active");

    const back = pages[i].querySelector(".back");
    if (back) back.disabled = i === 0;
  }

  function nextPage() {
    if (current < pages.length - 1) {
      current++;
      showPage(current);
    }
  }

  function prevPage() {
    if (current > 0) {
      current--;
      showPage(current);
    }
  }

  // expose to HTML
  window.nextPage = nextPage;
  window.prevPage = prevPage;

  showPage(current);

  /* ===== DATE + TIME ===== */
  const dateEl = document.getElementById("dateText");
  const timeEl = document.getElementById("timeText");

  if (dateEl && timeEl) {
    const now = new Date();

    dateEl.innerText =
      `${now.toLocaleDateString(undefined, { day: "numeric", month: "long" })} · 
       ${now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}`;

    const hour = now.getHours();
    timeEl.innerText =
      hour < 12 ? "Good morning. I hope you woke up feeling calm and cared for."
      : hour < 17 ? "I hope your day has been kind to you."
      : hour < 21 ? "Evenings make me think of you more than I admit."
      : "If you’re reading this late at night, I hope you’re resting.";
  }

  /* ===== FLOATING HEARTS ===== */
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = Math.random() > 0.5 ? "♡" : "♥";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 6 + Math.random() * 6 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 12000);
  }, 600);

  /* ===== VALENTINE LOGIC ===== */
  let triedOnce = false;
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (yesBtn && noBtn) {

    yesBtn.addEventListener("click", () => {
      celebrateYes();
      setTimeout(nextPage, 900);
    });

    noBtn.addEventListener("click", () => {
      if (!triedOnce) {
        triedOnce = true;
        noBtn.innerText = "Try again";
      }
    });

    const dodge = () => {
      if (!triedOnce) return;
      noBtn.style.transform =
        `translate(${Math.random() * 140 - 70}px,
                   ${Math.random() * 50 - 25}px)`;
    };

    noBtn.addEventListener("mouseenter", dodge);
    noBtn.addEventListener("touchstart", dodge);
  }

  /* ===== YES CELEBRATION ===== */
  function celebrateYes() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < 24; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.innerText = Math.random() > 0.5 ? "♥" : "♡";

      const angle = Math.random() * Math.PI * 2;
      const dist = 120 + Math.random() * 80;

      p.style.left = cx + "px";
      p.style.top = cy + "px";
      p.style.setProperty("--x", Math.cos(angle) * dist + "px");
      p.style.setProperty("--y", Math.sin(angle) * dist + "px");

      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1800);
    }

    for (let i = 0; i < 18; i++) {
      const c = document.createElement("div");
      c.className = "particle confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.top = "-10px";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 2500);
    }
  }

});
