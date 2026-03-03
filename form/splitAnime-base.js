// DOMが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {

  // ScrollTriggerを登録
  gsap.registerPlugin(ScrollTrigger);

  // 分割関数（安全設計込み）
  function simpleSplit(selector) {
    const el = document.querySelector(selector);
    if (!el) return null; // 要素がなければ終了

    const chars = el.textContent.split("");

    el.innerHTML = chars
      .map(c => c === " "
        ? " "
        : `<h1 class="hero-top">${c}</h1>`)
      .join("");

    return el.querySelectorAll(".hero-top");
  }

  // 文字分割を実行
  const chars = simpleSplit(".title");

  // アニメーション設定（スクロール連動）
  gsap.from(chars, {
    y: 40,                  // 下から
    opacity: 0,             // フェードイン
    stagger: 0.03,          // 文字ごとに遅延
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".title",    // 発動トリガー
      start: "top 60%",     // 要素が画面下から60%位置に来たら
      toggleActions: "play none none none",
      once: true,
    }
  
  });
    gsap.from(".hero-comment",  {
      x:-500,
      scrollTrigger:{
      trigger:".hero-comment",
      start:"top 60%",
      ease: "power2.out",
      stagger: 0.8,
      delay: 1,
      duration: 1, 
      once: true,
      }
})

    gsap.from(".hero-img",  {
      x:500,
      scrollTrigger:{
      trigger:".hero-img",
      start:"top 60%",
      ease: "power2.out",
      stagger: 0.8,
      delay: 1.5,
      duration: 1, 
      once: true,
      }
})


});