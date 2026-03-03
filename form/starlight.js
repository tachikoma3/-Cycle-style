/* ---------------------------------
星を生成するコード
----------------------------------*/
const starContainer = document.querySelector('.stars');
const STAR_COUNT = 140;

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  starContainer.appendChild(star);
}