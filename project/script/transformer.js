document.addEventListener('DOMContentLoaded', function() {
    // Example product list
    const products = [
        { name: 'Transformer A', description: 'High efficiency transformer for industrial use.' },
        { name: 'Transformer B', description: 'Compact transformer for residential use.' },
        { name: 'Transformer C', description: 'Heavy-duty transformer for commercial use.' },
    ];

    // Populate product list on products.html
    const productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
            productList.appendChild(li);
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Store form data in localStorage
            localStorage.setItem('contactName', name);
            localStorage.setItem('contactEmail', email);
            localStorage.setItem('contactMessage', message);

            // Display a thank you message
            alert(`Thank you, ${name}! Your message has been received.`);
            contactForm.reset();
        });
    }

    // Display current time in the footer
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        if (currentTimeElement) {
            const now = new Date();
            currentTimeElement.textContent = now.toLocaleTimeString();
        }
    }

    setInterval(updateTime, 1000);
    updateTime();
    
    // Handle the word count in forms
    function updateCounter() {
        const messageInput = document.getElementById('message');
        const words = messageInput.value.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const counter = document.getElementById('word-counter');
    
        // Limit message to 50 words
        if (wordCount > 50) {
            messageInput.value = words.slice(0, 50).join(" ");
        }
    
        counter.textContent = `${wordCount} / 50 words`;
    }
    

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Display current time in the footer
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        if (currentTimeElement) {
            const now = new Date();
            currentTimeElement.textContent = now.toLocaleTimeString();
        }
    }

    setInterval(updateTime, 1000);
    updateTime();
});
