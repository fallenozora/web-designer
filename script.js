// Animasi fade-in saat scroll
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(fader => observer.observe(fader));

// Form kirim
document.getElementById("kontakForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const status = document.getElementById("pesanStatus");

  if (nama && email && pesan) {
    status.textContent = `Terima kasih, ${nama}! Pesanmu telah dikirim 🎉`;
    status.style.color = "#4CAF50";
    this.reset();
  } else {
    status.textContent = "Harap isi semua field!";
    status.style.color = "#f44336";
  }
});

