document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("sharedModal");
  const overlay = document.querySelector(".modal-overlay");
  const modalContent = document.querySelector(".modal-content");
  const closeBtn = document.querySelector(".close-btn");

  let originalRect = null;

  document.querySelectorAll(".open-modal").forEach(img => {

    img.addEventListener("click", () => {

      originalRect = img.getBoundingClientRect();
      modalImage.src = img.src;

      modal.classList.add("is-active");
      document.body.classList.add("modal-open");

      // 画像ロード後に処理
      modalImage.onload = () => {

        gsap.set(modalContent, {
          top: originalRect.top,
          left: originalRect.left,
          width: originalRect.width,
          height: originalRect.height,
          xPercent: 0,
          yPercent: 0
        });

        gsap.to(overlay, {
          opacity: 1,
          duration: 0.4
        });

gsap.to(modalContent, {
  top: window.innerHeight / 2,
  left: window.innerWidth / 2,
  clearProps: "width,height",
  xPercent: -50,
  yPercent: -50,
  duration: 0.6,
  ease: "power3.out"
});

        gsap.to(closeBtn, {
          opacity: 1,
          duration: 0.3,
          delay: 0.3
        });

      };

    });

  });

  function closeModal() {

    if (!originalRect) return;

    gsap.to(closeBtn, { opacity: 0, duration: 0.2 });

    gsap.to(modalContent, {
      top: originalRect.top,
      left: originalRect.left,
      width: originalRect.width,
      height: originalRect.height,
      xPercent: 0,
      yPercent: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        modal.classList.remove("is-active");
        document.body.classList.remove("modal-open");
        modalContent.src = "";
        originalRect = null;
      }
    });

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.4
    });
  }

  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  modalContent.addEventListener("click", closeModal);

});