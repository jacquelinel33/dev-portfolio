document.addEventListener('DOMContentLoaded', function() {
    // Your scroll event listener and related code here
    window.addEventListener('scroll', function() {
        var nav = document.querySelector('.nav-links');
        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});