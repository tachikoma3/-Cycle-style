gsap.utils.toArray(".feature").forEach(section => {

  const img = section.querySelector(".feature__img");
  const text = section.querySelector(".feature__text");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });

  tl.from(img, {
    x: -80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    once: true,
  })
  .from(text, {
    x: 80,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power3.out",
    once: true,
  }, "-=0.6");
});