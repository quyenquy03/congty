function changeSlide(slider) {
    var currentSlide = 0;
    maxSlide = slider.slideItems.length;

    loadCurrentSlide = function() {
        slider.slideList.style.left = -currentSlide*100 + '%';
    }

    autoChangeSlide = function() {
        currentSlide++;
        if(currentSlide >= maxSlide) {
            currentSlide = 0;
        }
        loadCurrentSlide();
    }

    startChangeSlide = function() {
        setInterval(autoChangeSlide,slider.timeDuration)
        loadCurrentSlide();
    }

    startChangeSlide();
}