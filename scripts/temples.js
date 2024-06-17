document.addEventListener('DOMContentLoaded', function() {
    // Function to update current year in the footer
    function updateYear() {
        const currentYearSpan = document.getElementById('currentyear');
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    // Function to update last modified date in the footer
    function updateLastModified() {
        const lastModifiedSpan = document.getElementById('lastModified');
        const lastModifiedDate = document.lastModified;
        lastModifiedSpan.textContent = "Last modified: " + lastModifiedDate;
    }

    // Function to toggle the navigation menu for mobile view
    function toggleMenu() {
        const navMenu = document.querySelector('nav ul');
        const menuToggle = document.getElementById('menu-toggle');

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            if (navMenu.classList.contains('open')) {
                menuToggle.textContent = 'X';
            } else {
                menuToggle.textContent = '\u2630';
            }
        });
    }

    // Call functions to update year and last modified date
    updateYear();
    updateLastModified();

    // Call function to toggle menu
    toggleMenu();
});
