document.addEventListener('DOMContentLoaded', () => {
    const productNameSelect = document.getElementById('productName');
    const featuresFieldset = document.getElementById('featuresFieldset');
    const submitBtn = document.getElementById('submitBtn');
    const reviewForm = document.getElementById('reviewForm');
    const reviewCountInput = document.getElementById('reviewCountInput');

    let reviewCount = 0; // Initialize review count

    // Initial features when no product is selected
    const initialFeatures = [
        'availability of parts and services',
        'durability',
        'ease of use'
    ];

    // Function to display features
    function displayFeatures(features) {
        const inputContainer = featuresFieldset.querySelector('.input-container');
        inputContainer.innerHTML = '';

        features.forEach(feature => {
            const label = document.createElement('label');
            label.className = 'inline';
            label.innerHTML = `<input type="checkbox" name="features" value="${feature}"> ${feature}`;
            inputContainer.appendChild(label);
        });
    }

    // Display initial features
    displayFeatures(initialFeatures);

    // Populate product name options (assuming products array is defined as before)
    const products = [
        { name: 'Air Conditioner', features: ['cooling', 'energy efficiency', 'noise level'] },
        { name: 'Refrigerator', features: ['capacity', 'energy efficiency', 'temperature control'] },
        { name: 'Washing Machine', features: ['load capacity', 'energy efficiency', 'wash programs'] },
        { name: 'Television', features: ['picture quality', 'smart features', 'sound quality'] },
        { name: 'Microwave Oven', features: ['cooking modes', 'energy efficiency', 'size'] }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    // Update features based on selected product
    productNameSelect.addEventListener('change', () => {
        if (productNameSelect.value === '') {
            displayFeatures(initialFeatures);
        } else {
            const selectedProduct = products.find(product => product.name === productNameSelect.value);
            if (selectedProduct) {
                const sortedFeatures = selectedProduct.features.sort();
                displayFeatures(sortedFeatures);
            }
        }
    });

    // Enable submit button when a product is selected
    productNameSelect.addEventListener('change', () => {
        submitBtn.disabled = !productNameSelect.value;
    });

    // Handle form submission
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        reviewCount++; // Increment review count
        reviewCountInput.value = reviewCount; // Update hidden input value
        localStorage.setItem('reviewCount', reviewCount); // Store count in localStorage for persistence
        reviewForm.submit(); // Submit the form to review.html
    });

    // Check localStorage for existing review count
    const storedReviewCount = localStorage.getItem('reviewCount');
    if (storedReviewCount) {
        reviewCount = parseInt(storedReviewCount, 10);
    }

    // Update review count display in the UI
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCount;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Function to format date and time
    function formatDateTime(date) {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
        };
        return date.toLocaleDateString('en-US', options);
    }

    // Update last modified date and time
    const timeElement = document.getElementById('time');
    if (timeElement) {
        const lastModified = new Date(document.lastModified);
        timeElement.textContent = `Last modified: ${formatDateTime(lastModified)}`;
    }
});
