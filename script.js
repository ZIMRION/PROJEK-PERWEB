// bahasa
const langLinks = document.querySelectorAll(".nav-links a");
document.getElementById("id").addEventListener("click", () => {
  langLinks.forEach(
    (link) => (link.textContent = link.getAttribute("data-id"))
  );
});

document.getElementById("en").addEventListener("click", () => {
  langLinks.forEach(
    (link) => (link.textContent = link.getAttribute("data-en"))
  );
});
// bahasa

// menu
// Toggle class active
const navbarNav = document.querySelector(".nav-links");
// ketika menu di klik
document.querySelector("#men").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const meno = document.querySelector("#men");

document.addEventListener("click", function (e) {
  if (!meno.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tutup menu ketika link di dalam menu diklik
const menuLinks = document.querySelectorAll(".nav-links a"); // ambil semua link dalam nav

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active"); // tutup menu ketika link diklik
  });
});

/// gelaptrag
/// gelaptrag
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function updateThemeIcon() {
  // hapus isi button dulu
  toggleBtn.innerHTML = body.classList.contains("dark")
    ? '<i data-feather="sun"></i>'
    : '<i data-feather="moon"></i>';
  feather.replace(); // pasang ulang icon baru
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  updateThemeIcon();
});
/// gelaptrag
/// gelaptrag
