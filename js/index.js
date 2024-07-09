let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        document.getElementById("header").className = "scroll-event1"
    } else {
        // Scroll lên
        document.getElementById("header").className = "scroll-event2"


    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Đặt lại lastScrollTop
});
