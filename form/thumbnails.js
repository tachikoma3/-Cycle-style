// thumbnails.js を以下に丸ごと置き換え

$(function() {
  $(".gallery-thumbnails img").hover(
    function() {
      gsap.to($(this), { scale: 1.1, duration: 0.3 });
    },
    function() {
      gsap.to($(this), { scale: 1, duration: 0.3 });
    }
  );
});