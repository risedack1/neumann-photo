let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: "true",
    spaceBetween: 20,
    speed: 800,

    mousewheel: {
        invert: true,
    },
    // loop: "true",

    // Navigation arrows
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
});