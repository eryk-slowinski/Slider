const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const firstSlide = document.querySelector('div.slider div');
const lastSlide = document.querySelector('div:nth-child(4)');
let slideInterval;

const nextSlide = () => {
    const currentSlide = document.querySelector('.current');

    if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.classList.add('current');
        currentSlide.classList.remove('current');
    } else {
        currentSlide.classList.remove('current');
        firstSlide.classList.add('current');
    }
}

const prevSlide = () => {
    const currentSlide = document.querySelector('.current');

    if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.classList.add('current');
        currentSlide.classList.remove('current');
    } else {
        currentSlide.classList.remove('current');
        lastSlide.classList.add('current');
    }
}

const autoSlide = () => {
    slideInterval = setInterval(nextSlide, 8000);
}

autoSlide();

btnPrev.addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval);
    autoSlide();
})
btnNext.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
    autoSlide();
})