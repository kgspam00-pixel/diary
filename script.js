let current = 0;
const pages = document.querySelectorAll(".page");

/* ===== PAGE NAV ===== */
function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");

  const backBtn = pages[index].querySelector(".back");
  if (backBtn) backBtn.disabled = index === 0;
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

showPage(current);

/* ===== DATE + TIME ===== */
const now = new Date();
const date = now.toLocaleDateString(undefined, { day: "numeric", month: "long" });
const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });

document.getElementById("dateText").innerText = `${date} · ${time}`;

/* ===== TIME MESSAGE ===== */
const hour = now.getHours();
let message = "";

if (hour < 12) {
  message = "Good morning. I hope you woke up feeling calm and cared for.";
} else if (hour < 17) {
  message = "I hope your day has been kind to you. And if it wasn’t, I hope this helps a little.";
} else if (hour < 21) {
  message = "Evenings make me think of you more than I admit.";
} else {
  message = "If you’re reading this late at night, I hope you’re finally resting now.";
}

document.getElementById("timeText").innerText = message;

/* ===== FLOATING HEARTS ===== */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}
setInterval(createHeart, 900);

/* ===== VALENTINE LOGIC ===== */
let triedOnce = false;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn && noBtn) {

  yesBtn.addEventListener("click", () => {
    nextPage();
  });

  noBtn.addEventListener("click", () => {
    if (!triedOnce) {
      triedOnce = true;
      noBtn.innerText = "Try again";
    }
  });

  function dodge() {
    if (!triedOnce) return;

    const x = Math.random() * 140 - 70;
    const y = Math.random() * 50 - 25;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }

  noBtn.addEventListener("mouseenter", dodge);
  noBtn.addEventListener("touchstart", dodge);
}
