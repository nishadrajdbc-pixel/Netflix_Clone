/* =========================
APP INITIALIZATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    createMovieSections();

    initializeCarousel();

    initializeNavbar();

    initializeSearch();

    initializeHeroSlider();

});

/* =========================
HERO SLIDER DATA
========================= */

const heroSlides = [

{
    title: "STRANGER THINGS",
    description:
        "When a young boy disappears, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange girl.",
    image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80"
},

{
    title: "WEDNESDAY",
    description:
        "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends.",
    image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920&q=80"
},

{
    title: "MONEY HEIST",
    description:
        "An unusual group of robbers attempt the most perfect robbery in Spanish history.",
    image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=80"
},

{
    title: "DARK",
    description:
        "A family saga with a supernatural twist set in a German town where the disappearance of two children exposes relationships among four families.",
    image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1920&q=80"
}

];

/* =========================
HERO SLIDER
========================= */

function initializeHeroSlider() {

    const hero =
        document.querySelector(".hero");

    const heroTitle =
        document.querySelector(".hero-content h1");

    const heroDescription =
        document.querySelector(".hero-content p");

    if (!hero) return;

    let currentSlide = 0;

    function updateSlide() {

        const slide =
            heroSlides[currentSlide];

        hero.style.backgroundImage =
            `url(${slide.image})`;

        heroTitle.textContent =
            slide.title;

        heroDescription.textContent =
            slide.description;

        currentSlide++;

        if (currentSlide >= heroSlides.length) {

            currentSlide = 0;

        }

    }

    updateSlide();

    setInterval(updateSlide, 5000);

}

/* =========================
NAVBAR
========================= */

function initializeNavbar() {

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    const hamburger =
        document.getElementById("hamburger");

    const mobileMenu =
        document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {

        mobileMenu.classList.toggle("show");

    });

    document
        .querySelectorAll(".mobile-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("show");

            });

        });

}

/* =========================
SEARCH
========================= */

function initializeSearch() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        document
            .querySelectorAll(".card")
            .forEach(card => {

                const title =
                    card.querySelector(".movie-title")
                    .textContent
                    .toLowerCase();

                if (title.includes(value)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

    });

}