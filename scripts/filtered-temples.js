document.addEventListener('DOMContentLoaded', function() {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Additional temple objects as specified:
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 382207,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
        },
        {
            templeName: "Vancouver British Columbia",
            location: "British Columbia, CAnada",
            dedicated: "2007, April, 9",
            area: 28165,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vancouver-british-columbia/400x250/vancouver-temple-766984-wallpaper.jpg"
        },
        {
            templeName: "Taipei Taiwan",
            location: "Taipei City, Taiwan",
            dedicated: "1984, November, 17",
            area: 9945,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
        },
        {
            templeName: "San Juan Puerto Rico",
            location: "San Juan, Puerto Rico",
            dedicated: "2019, May, 4",
            area: 6988,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior%20(1).jpeg"
        },
        {
            templeName: "Sapporo Japan",
            location: "Sapporo, Hokkaido",
            dedicated: "2016, July, 8",
            area: 48480,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
        }
    ];

    function createTempleCard(temple) {
        return `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            </figure>
        `;
    }

    function displayTemples(templeList) {
        const gallery = document.getElementById('temple-gallery');
        gallery.innerHTML = templeList.map(createTempleCard).join('');
    }

    function filterTemples(criteria) {
        const currentYear = new Date().getFullYear();
        let filteredTemples;
        switch(criteria) {
            case 'old':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    }

    document.getElementById('home').addEventListener('click', () => filterTemples('home'));
    document.getElementById('old').addEventListener('click', () => filterTemples('old'));
    document.getElementById('new').addEventListener('click', () => filterTemples('new'));
    document.getElementById('large').addEventListener('click', () => filterTemples('large'));
    document.getElementById('small').addEventListener('click', () => filterTemples('small'));

    // Initial display of all temples
    displayTemples(temples);

    function updateYear() {
        const currentYearSpan = document.getElementById('currentyear');
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    function updateLastModified() {
        const lastModifiedSpan = document.getElementById('lastModified');
        const lastModifiedDate = document.lastModified;
        lastModifiedSpan.textContent = "Last modified: " + lastModifiedDate;
    }

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

    updateYear();
    updateLastModified();
    toggleMenu();
});