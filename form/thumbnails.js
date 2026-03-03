import { gsap } from "gsap";

import 'gallely.js';

$thumbnails.hover(
  function() {
    gsap.to($(this), { scale: 1.1, duration: 0.3 });
  },
  function() {
    gsap.to($(this), { scale: 1, duration: 0.3 });
  }
);