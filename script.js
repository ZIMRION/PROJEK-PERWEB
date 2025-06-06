// bahasa
document.querySelectorAll(".slider-container").forEach((container) => {
  const slider = container.querySelector(".slider");
  const slides = container.querySelectorAll(".slidet");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");
  const indicators = container.querySelectorAll(".indicator-segment");

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach((segment, index) => {
      segment.classList.toggle("active", index === currentSlide);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  indicators.forEach((segment) => {
    segment.addEventListener("click", (e) => {
      currentSlide = parseInt(e.target.dataset.index);
      updateSlider();
    });
  });

  // Inisialisasi posisi awal
  updateSlider();
});

// bahasa

// menu
// Toggle class active
const navbarNav = document.querySelector(".nav-links");
const menuBtn = document.querySelector("#men");
const navLinks = document.querySelectorAll(".nav-links a");

menuBtn.onclick = (e) => {
  e.preventDefault();
  if (navbarNav.classList.contains("active")) {
    navbarNav.style.maxHeight = "0px";
    navbarNav.classList.remove("active");
  } else {
    navbarNav.style.maxHeight = navbarNav.scrollHeight + "100vh";
    navbarNav.classList.add("active");
  }
  menuBtn.classList.toggle("active");
};

// Tambahan: tutup menu dan reset ikon saat link diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.style.maxHeight = "0px"; // Tutup menu
    navbarNav.classList.remove("active"); // Hapus aktif
    menuBtn.classList.remove("active"); // Ganti ikon jadi hamburger
  });
});

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

// slide
// slide
// slide
// slide
// slide
// slide
// slide

//
// slide
// slide
// slide

// slide
// slide
// slide

const starContainer = document.getElementById("starfield");
const totalParticles = 500;

for (let i = 0; i < totalParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("data-particle");

  const size = Math.random() * 2 + 1; // kotak 1 - 4 px
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.left = `${Math.random() * 200}vw`;
  particle.style.animationDuration = `${Math.random() * 50 + 30}s`;

  starContainer.appendChild(particle);
}

// aufcgfwufguk

//
function toggleSearch() {
  const container = document.querySelector(".search-container");
  container.classList.toggle("active");

  const input = document.getElementById("search-input");
  if (container.classList.contains("active")) {
    input.focus();
  } else {
    input.value = "";
  }
}

function focusInput() {
  const wrapper = document.querySelector(".input-wrapper");
  const input = document.getElementById("search-input");
  wrapper.classList.add("active");
  input.focus();
}

// opsional: hilangkan jika blur
document.getElementById("search-input").addEventListener("blur", () => {
  document.querySelector(".input-wrapper").classList.remove("active");
});

// sjhfveu

//search bagi 2
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("searchBtn");
const landing = document.getElementById("landingPage");
const searchResults = document.getElementById("searchResults");
const resultsList = document.getElementById("resultsList");

const sampleData = [
  {
    title: "Open the world",
    description: "Discover new opportunities and cultures across the globe.",
    image: "12.webp",
  },
  {
    title: "Learn a lot",
    description: "Expand your knowledge in tech, science, and more.",
    image: "12.webp",
  },
  {
    title: "Master the world",
    description: "Sharpen your skills and make an impact worldwide.",
    image: "12.webp",
  },
  {
    title: "Explore new knowledge",
    description: "Dive into ideas, research, and innovation.",
    image: "12.webp",
  },
  {
    title: "Develop your skills",
    description: "Practical tools to build your future.",
    image: "12.webp",
  },
  {
    title: "Reach your goals",
    description: "Step by step, turn dreams into reality.",
    image: "12.webp",
  },
];

// fokusin input pas tombol search diklik
searchBtn.addEventListener("click", () => {
  searchInput.focus();
});

// render hasil pencarian
function renderResults(query) {
  resultsList.innerHTML = "";
  const filtered = sampleData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    resultsList.innerHTML = "<p>No results found.</p>";
  } else {
    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("result-card");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="result-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;

      // Tambahkan ini supaya bisa diklik
      card.onclick = () => openPopup(item);

      resultsList.appendChild(card);
    });
  }
}

// ketika enter ditekan di input search
// langsung ganti tampilan saat user mulai ngetik
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();

  if (query.length > 0) {
    landing.style.display = "none";
    searchResults.style.display = "block";
    renderResults(query);
  } else {
    landing.style.display = "block";
    searchResults.style.display = "none";
    resultsList.innerHTML = ""; // bersihkan hasil jika kosong
  }
});

// blur input dan reset ke icon saat klik di luar input-wrapper
document.addEventListener("click", (e) => {
  if (!document.querySelector(".input-wrapper").contains(e.target)) {
    searchInput.blur();
  }
});

// tetss
const popupOverlay = document.getElementById("popupOverlay");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");

function openPopup(item) {
  popupImage.src = item.image;
  popupTitle.textContent = item.title;
  popupDesc.textContent = item.description;
  popupOverlay.style.display = "flex";
}

function closePopup() {
  popupOverlay.style.display = "none";
}

// test2
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close-popup");
const carouselImages = document.querySelectorAll(".carousel-track img");

// Tampilkan popup saat gambar diklik
carouselImages.forEach((img) => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popup.classList.remove("hidden");
  });
});

// Tutup popup saat tombol silang diklik
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  popupImg.src = "";
});

popup.addEventListener("click", (event) => {
  if (!popupImg.contains(event.target) && !closeBtn.contains(event.target)) {
    popup.classList.add("hidden");
    popupImg.src = "";
  }
});

// Set indikator awal saat halaman pertama kali dibuka
