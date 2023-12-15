
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav-list');
    if (window.scrollY > 0) { // Check if the page is scrolled
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


