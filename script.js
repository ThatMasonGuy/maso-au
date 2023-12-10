var aboutLinkText = "About Us";
var contactLinkText = "Contact";
var homeLinkText = "Home";

document.addEventListener('DOMContentLoaded', (event) => {
    var aboutLink = document.getElementById('aboutLink');
    var contactLink = document.getElementById('contactLink');
    var homeLink = document.getElementById('homeLink');

    if (aboutLink) {
        aboutLink.textContent = "About Us";
    }
    if (contactLink) {
        contactLink.textContent = "Contact";
    }
    if (homeLink) {
        homeLink.textContent = "Home";
    }
});

