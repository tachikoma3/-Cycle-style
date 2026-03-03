document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky");
  const stars = document.querySelector(".stars");
  const starContainer = document.querySelector(".stars");
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");

  const STAR_COUNT = 140;

  // ----------------------------
  // 星生成
  // ----------------------------
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    starContainer.appendChild(star);
  }

  function updateSky() {
    const now = new Date();
    const seconds =
      now.getHours() * 3600 +
      now.getMinutes() * 60 +
      now.getSeconds();

    const progress = seconds / 86400;

    // ----------------------------
    // 太陽高度（-1〜1）
    // ----------------------------
    const angle = progress * Math.PI * 2 - Math.PI / 2;
    const sunHeight = Math.sin(angle);

    // ----------------------------
    // 空の明るさ
    // ----------------------------
    const lightness = 12 + (sunHeight + 1) * 28;

    // ----------------------------
    // 色相制御（夕焼け補正）
    // ----------------------------
    let hue;

    if (sunHeight > 0.3) {
      // 昼
      hue = 200;
    } else if (sunHeight > -0.2) {
      // 夕焼け帯
      hue = 30 - sunHeight * 100;
    } else {
      // 夜
      hue = 230;
    }

    sky.style.background = `
      linear-gradient(
        to top,
        hsl(${hue}, 70%, ${lightness - 8}%),
        hsl(${hue}, 85%, ${lightness}%)
      )
    `;

    // ----------------------------
    // 太陽位置（弧）
    // ----------------------------
    const sunX = progress * 100;
    const sunY = 75 - sunHeight * 60;

    sun.style.left = `${sunX}%`;
    sun.style.top = `${sunY}%`;
    sun.style.opacity = sunHeight > -0.05 ? 1 : 0;

    // グロー強化
    sun.style.boxShadow = `
      0 0 ${40 + sunHeight * 40}px rgba(255,200,0,0.6),
      0 0 ${80 + sunHeight * 60}px rgba(255,150,0,0.3)
    `;

    // ----------------------------
    // 月（逆軌道）
    // ----------------------------
    const moonHeight = -sunHeight;
    const moonX = ((progress + 0.5) % 1) * 100;
    const moonY = 75 - moonHeight * 60;

    moon.style.left = `${moonX}%`;
    moon.style.top = `${moonY}%`;
    moon.style.opacity = moonHeight > -0.05 ? 1 : 0;

    // ----------------------------
    // 星（夜のみ）
    // ----------------------------
    stars.style.opacity = sunHeight < -0.2 ? 0.9 : 0;

    requestAnimationFrame(updateSky);
  }

  updateSky();
});