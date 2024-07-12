document.addEventListener('DOMContentLoaded', () => {
    const productNameSelect = document.getElementById('productName');
    const featuresFieldset = document.getElementById('featuresFieldset');
    const submitBtn = document.getElementById('submitBtn');
    const reviewForm = document.getElementById('reviewForm');
    const reviewCountInput = document.getElementById('reviewCountInput');
    const reviewTextarea = document.getElementById('review');
    const wordCountElement = document.getElementById('wordCount');
    const warningMessage = document.getElementById('warningMessage');

    let reviewCount = 0; // Initialize review count

    // Function to validate required fields
    function validateForm() {
        const featuresChecked = featuresFieldset.querySelectorAll('input[type="checkbox"]:checked').length > 0;
        const isProductSelected = productNameSelect.value !== '';
        const isRatingSelected = reviewForm.querySelector('input[name="rating"]:checked') !== null;
        const isDateProvided = document.getElementById('installationDate').value !== '';

        const allFieldsValid = isProductSelected && featuresChecked && isRatingSelected && isDateProvided;
        submitBtn.disabled = !allFieldsValid;

        // Show or hide warning message based on validation
        warningMessage.style.display = allFieldsValid ? 'none' : 'block';
    }

    // Initial features
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

    // Populate product name options
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

    // Enable submit button based on required fields
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
        validateForm();
    });

    // Check features and validate on change
    featuresFieldset.addEventListener('change', validateForm);
    reviewForm.addEventListener('change', validateForm);

    
// Handle form submission
reviewForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Check form validity
    const isProductSelected = productNameSelect.value !== '';
    const featuresChecked = featuresFieldset.querySelectorAll('input[type="checkbox"]:checked').length > 0;
    const isRatingSelected = reviewForm.querySelector('input[name="rating"]:checked') !== null;
    const isDateProvided = document.getElementById('installationDate').value !== '';

    // Clear previous warnings
    document.getElementById('productNameWarning').style.display = 'none';
    document.getElementById('featuresWarning').style.display = 'none';
    document.getElementById('ratingWarning').style.display = 'none';
    document.getElementById('installationDateWarning').style.display = 'none';

    // Show warnings for empty required fields
    if (!isProductSelected) {
        document.getElementById('productNameWarning').style.display = 'inline';
    }
    if (!featuresChecked) {
        document.getElementById('featuresWarning').style.display = 'inline';
    }
    if (!isRatingSelected) {
        document.getElementById('ratingWarning').style.display = 'inline';
    }
    if (!isDateProvided) {
        document.getElementById('installationDateWarning').style.display = 'inline';
    }

    // If all required fields are valid, submit the form
    if (isProductSelected && featuresChecked && isRatingSelected && isDateProvided) {
        reviewCount++; // Increment review count
        reviewCountInput.value = reviewCount; // Update hidden input value
        localStorage.setItem('reviewCount', reviewCount); // Store count in localStorage for persistence
        reviewForm.submit(); // Submit the form to review.html
    }
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

    // Update word count for written review
    reviewTextarea.addEventListener('input', () => {
        const words = reviewTextarea.value.trim().split(/\s+/).filter(word => word.length > 0);
        const remainingWords = 75 - words.length;
        wordCountElement.textContent = `${remainingWords} words remaining`;

        // Prevent input if word limit is exceeded
        if (remainingWords < 0) {
            reviewTextarea.value = words.slice(0, 75).join(' ');
            wordCountElement.textContent = '0 words remaining';
        }
    });
});

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
