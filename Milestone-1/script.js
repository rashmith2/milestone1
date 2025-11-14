document.addEventListener('DOMContentLoaded', () => {

    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const email = emailInput.value;
            
            if (email) {
                alert(`Thank you for subscribing, ${email}!`);
                emailInput.value = '';
            }
        });
    }

    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split('/').pop(); 

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); 
        }
    });

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const nameInput = document.getElementById('name');
            const userName = nameInput.value;
            
            alert(`Thank you for your message, ${userName}! We will get back to you soon.`);
            
            contactForm.reset();
        });
    }

});