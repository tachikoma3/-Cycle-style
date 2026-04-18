 gsap.registerPlugin(ScrollTrigger);
 
 // ---------- スクロールスライドイン ----------
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // 1度だけ表示
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".slide-in").forEach(el => observer.observe(el));

  // ---------- モーダル開閉 ----------
  document.addEventListener("click", (e) => {
    if (e.target.matches(".open-modal")) {
      const targetModal = document.querySelector(e.target.dataset.target);
      targetModal.classList.add("active");
    }
    if (e.target.matches(".close-btn") || e.target.classList.contains("modal")) {
      e.target.closest(".modal").classList.remove("active");
    }
  });

  // ESCキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.active")
        .forEach(m => m.classList.remove("active"));
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  const glassPanels = document.querySelectorAll(".glass");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  glassPanels.forEach(panel => observer.observe(panel));
});
