// Animasi Fade-in Saat Scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Form Kontak
document.getElementById("kontakForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const status = document.getElementById("pesanStatus");

  if (nama && email && pesan) {
    status.textContent = `Terima kasih, ${nama}! Pesanmu telah terkirim.`;
    status.style.color = "#00ffcc";
    this.reset(); // Reset form
  } else {
    status.textContent = "Harap lengkapi semua field.";
    status.style.color = "orange";
  }
});
