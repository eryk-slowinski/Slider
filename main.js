const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const firstSlide = document.querySelector('div.slider div');
const lastSlide = document.querySelector('div:nth-child(4)');
let slideInterval;

const nextSlide = () => {
    const currentSlide = document.querySelector('.current');
    // running buttoncolors() async so first class is given, then function checks if it has to change color of button
    setTimeout(buttonColors, 0);

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
    setTimeout(buttonColors, 0);

    if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.classList.add('current');
        currentSlide.classList.remove('current');
    } else {
        currentSlide.classList.remove('current');
        lastSlide.classList.add('current');
    }
}

const buttonColors = () => {
    if (firstSlide.classList.contains('current') || lastSlide.classList.contains('current')) {
        btnNext.style.color = 'black';
        btnNext.style.border = '2px black solid';
        btnPrev.style.color = 'black';
        btnPrev.style.border = '2px black solid';
    } else {
        btnNext.style.color = '';
        btnNext.style.border = '';
        btnPrev.style.color = '';
        btnPrev.style.border = '';
    }
}

const autoSlide = () => {
    slideInterval = setInterval(nextSlide, 8000);
}

autoSlide();
buttonColors();

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