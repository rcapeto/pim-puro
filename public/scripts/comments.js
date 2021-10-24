const comments = document.querySelectorAll('.comment');
const nextBTN = document.querySelector('[data-button-next]');
const prevBTN = document.querySelector('[data-button-prev]');

const maxComments = Array.from(comments).length;

let currentIndex = 0;

const formatSlides = () => {
   comments.forEach((comment, index) => {
      comment.style.transform = `translateX(${100 * (index - currentIndex)}%)`
   });
};

const nextComment = () => {
   currentIndex++;
   currentIndex >= maxComments && (currentIndex = 0);
   formatSlides();
};
const prevComment = () => {
   currentIndex--;
   currentIndex < 0 && (currentIndex = maxComments - 1);
   formatSlides();
};

formatSlides();

nextBTN.addEventListener('click', nextComment);
prevBTN.addEventListener('click', prevComment);