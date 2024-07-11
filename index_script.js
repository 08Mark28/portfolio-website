// Port2_script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.7
    };

    let observer = new IntersectionObserver(highlightNav, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    function highlightNav(entries) {
        entries.forEach(entry => {
            const navLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    // Animation on scroll
    const faders = document.querySelectorAll('.fade-in');
    const slideElements = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -150px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    slideElements.forEach(slide => {
        appearOnScroll.observe(slide);
    });
});
