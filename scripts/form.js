document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "fc-1888", name: "flux capacitor", avgRating: 4.5, features: ["Time Travel", "Energy Storage", "Ease of Use", "Availability of Parts and Services", "Durability"] },
        { id: "fc-2050", name: "power laces", avgRating: 4.7, features: ["Automatic Lacing", "Comfort Fit", "Ease of Use", "Availability of Parts and Services", "Durability"] },
        { id: "fs-1987", name: "time circuits", avgRating: 3.5, features: ["Time Synchronization", "Destination Entry", "Ease of Use", "Availability of Parts and Services", "Durability"] },
        { id: "ac-2000", name: "low voltage reactor", avgRating: 3.9, features: ["Energy Regulation", "Compact Design", "Ease of Use", "Availability of Parts and Services", "Durability"] },
        { id: "jj-1969", name: "warp equalizer", avgRating: 5.0, features: ["Space-Time Manipulation", "Efficiency Boost", "Ease of Use", "Availability of Parts and Services", "Durability"] }
    ];

    // Function to capitalize the first letter of each word
    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    // Sort products alphabetically by name
    products.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    const productNameSelect = document.getElementById("productName");
    const featuresFieldset = document.getElementById("featuresFieldset");
    const submitBtn = document.getElementById("submitBtn");

    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = capitalizeWords(product.name); // Capitalize product name
            productNameSelect.appendChild(option);
        });

        productNameSelect.addEventListener("change", () => {
            const selectedProductId = productNameSelect.value;
            const selectedProduct = products.find(product => product.id === selectedProductId);

            // Clear previous checkboxes
            featuresFieldset.innerHTML = "";

            // Add checkboxes for selected product features
            if (selectedProduct) {
                selectedProduct.features.forEach(feature => {
                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.id = feature.toLowerCase().replace(/\s+/g, "-"); // Create id from feature name
                    checkbox.name = "features";
                    checkbox.value = feature;
                    const label = document.createElement("label");
                    label.textContent = feature;
                    label.appendChild(checkbox);
                    featuresFieldset.appendChild(label);
                });

                // Enable or disable submit button based on product selection
                if (selectedProductId) {
                    submitBtn.disabled = false;
                } else {
                    submitBtn.disabled = true;
                }
            }
        });
    }

    if (document.getElementById("reviewForm")) {
        if (!localStorage.getItem("reviewCounter")) {
            localStorage.setItem("reviewCounter", 0);
        }

        document.getElementById("reviewForm").addEventListener("submit", () => {
            let reviewCounter = localStorage.getItem("reviewCounter");
            reviewCounter++;
            localStorage.setItem("reviewCounter", reviewCounter);
        });
    }

    if (document.getElementById("reviewCount")) {
        const reviewCount = localStorage.getItem("reviewCounter");
        document.getElementById("reviewCount").textContent = reviewCount;
    }

    // Display current time of modification
    const displayCurrentTime = () => {
        const timeElement = document.getElementById("time");
        const currentDateTime = new Date();
        timeElement.textContent = `Current Time of Modification: ${currentDateTime.toLocaleString()}`;
    };

    displayCurrentTime(); // Automatically display the current time of modification when the page loads
});
