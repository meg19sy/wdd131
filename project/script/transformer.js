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
});
