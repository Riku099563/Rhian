
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

const scrollReveal = new ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Usage
scrollReveal.reveal('.home-content, .heading', { origin: 'top' });
scrollReveal.reveal('.home-img ', { origin: 'bottom' });
scrollReveal.reveal('.home-content h1, .about-img', { origin: 'left' });

const typed = new Typed('.multiple-text', {
    strings: ['URSM', 'University Of Rizal System', 'Morong Rizal'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});






