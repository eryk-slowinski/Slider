const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const firstSlide = document.querySelector('div.slider div');
const lastSlide = document.querySelector('div:nth-child(4)');


btnNext.addEventListener('click', function () {
    const currentSlide = document.querySelector('.current');

    if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.classList.add('current');
        currentSlide.classList.remove('current');
    } else {
        currentSlide.classList.remove('current');
        firstSlide.classList.add('current');
    }
})

btnPrev.addEventListener('click', function () {
    const currentSlide = document.querySelector('.current');

    if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.classList.add('current');
        currentSlide.classList.remove('current');
    } else {
        currentSlide.classList.remove('current');
        lastSlide.classList.add('current');
    }
})