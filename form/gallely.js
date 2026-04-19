// form/gallely.js を以下に丸ごと置き換え

(function() {

  // ============================
  // サムネ表示アニメ（スクロール）
  // ============================
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".gallery-thumbnails li", {
    scrollTrigger: {
      trigger: ".gallery-thumbnails",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  });

})();
