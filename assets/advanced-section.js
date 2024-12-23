$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slider-wrapper .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const offset = -index * 100;
        $('.slider-wrapper').css('transform', `translateX(${offset}%)`);
    }

    $('.slider-next').on('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    $('.slider-prev').on('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    // Auto-play (optional)
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds
});

