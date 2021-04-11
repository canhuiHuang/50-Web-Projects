const progress =document.getElementById('progress')
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const circles = document.querySelectorAll('.circle');
let curCircleIndex = 0;
const maxIndex = circles.length - 1;

next.addEventListener('click', () => {
    curCircleIndex++;

    circles[curCircleIndex].classList.add('active');

    progress.style.width = (curCircleIndex / (circles.length - 1)) * 100+ '%';

    // Allow prev button if step is greater than 1.
    if (curCircleIndex > 0) {
        prev.disabled = false;
    }

    // Disable button if last circle is reached.
    if (curCircleIndex === maxIndex) {
        next.disabled = true;
    }
})

prev.addEventListener('click', () => {

    progress.style.width = ((curCircleIndex - 1)/ (circles.length - 1)) * 100+ '%';
    circles[curCircleIndex].classList.remove('active');

    curCircleIndex--;

    // Allow next button if step is not the last circle.
    if (curCircleIndex < maxIndex) {
        next.disabled = false;
    }

    // Disable button if first circle is reached.
    if (curCircleIndex === 0) {
        prev.disabled = true;
    }
})