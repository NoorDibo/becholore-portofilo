let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' .menu a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(' .menu a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


//script to close the menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('toggle-menu');
    var menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(function(menulink) {
        menulink.addEventListener('click', function() {
            menuToggle.checked = false;
        });
    });
});