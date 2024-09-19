// animation of text in dev container
document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Front End Developer", "Full Stack Developer", "Mobile Developer"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const titleElement = document.getElementById("developer-title");

    function type() {
        const currentText = texts[currentTextIndex];
        const displayText = isDeleting
            ? currentText.substring(0, currentCharIndex--)
            : currentText.substring(0, currentCharIndex++);

        titleElement.textContent = displayText;

        if (!isDeleting && currentCharIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1000); 
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();
});

// end of animation

// darkmode
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");
    const bodyElement = document.body;
    const darkLogo = document.querySelector(".dark-logo");

    if (localStorage.getItem("theme") === "dark") {
        bodyElement.classList.add("dark-mode");
        darkLogo.src = "assets/moon.png";
    }

    toggleButton.addEventListener("click", function(e) {
        e.preventDefault(); 
        bodyElement.classList.toggle("dark-mode");

        if (bodyElement.classList.contains("dark-mode")) {
            darkLogo.src = "assets/moon.png";
            localStorage.setItem("theme", "dark");
        } else {
            darkLogo.src = "assets/sun.png"; 
            localStorage.setItem("theme", "light");
        }
    });
});

//end of light and dark mode //

//navbar smooth scrolling // 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function() {
        let currentSection;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = link;
            }
        });

        if (currentSection) {
            navLinks.forEach(link => link.classList.remove('active'));
            currentSection.classList.add('active');
        }
    });
});


// end of navbar smooth scrolling //

// fade in fade out animation //

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.skill-item, .service-item, .contact-form, .contact-details');

    const fadeInOnScroll = () => {
        elementsToAnimate.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            } else {
                element.classList.add('fade-out');
                element.classList.remove('fade-in');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Trigger animation on page load
});


// end of animation //

// burger menu //
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
// end of burger menu //