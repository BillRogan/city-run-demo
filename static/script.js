let scrollToTopButton = null;

let sponsorImage0Index = 0;
let sponsorImages = [
    {
        "src": "page-2-out-image-0-Image1.jpg", 
        "alt": "OÖ Nachrichten",
        "url": "https://www.nachrichten.at/"
    },
    {
        "src": "page-2-out-image-1-Image2.jpg", 
        "alt": "Braunauer Warte",
        "url": "https://www.nachrichten.at/"
    },
    {
        "src": "page-2-out-image-2-Image3.jpg", 
        "alt": "Volkszeitung",
        "url": "https://www.nachrichten.at/"
    },
    {
        "src": "page-14-out-image-2-Image3.jpg", 
        "alt": "Autohaus Büchl",
        "url": "https://www.autohaus-buechl.at/"
    },
    {
        "src": "page-14-out-image-3-Image4.jpg", 
        "alt": "Bäckerei Sailer",
        "url": "https://www.baeckerei-sailer.at/"
    }
];

function iterateSponsorImages0() {
    if (sponsorImage0Index >= sponsorImages.length) {
        sponsorImage0Index = 0;
    }
    let image = document.getElementById("sponsoren_1_image");
    image.src = "images/" + sponsorImages[sponsorImage0Index].src;
    image.alt = sponsorImages[sponsorImage0Index].alt;

    let link = document.getElementById("sponsoren_1_link");
    link.href = sponsorImages[sponsorImage0Index].url;

    sponsorImage0Index++;
}

function initIterateSponsorImages() {
    window.setInterval(iterateSponsorImages0, 3000);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

window.onload = function() {
    scrollToTopButton = document.getElementById("btn-back-to-top");
    scrollToTopButton.addEventListener("click", backToTop);
    initIterateSponsorImages();
}

window.onscroll = function () {
    scrollFunction();
};