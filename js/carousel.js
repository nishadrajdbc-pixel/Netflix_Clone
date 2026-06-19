function initializeCarousel() {

    document.addEventListener("click", function(event) {

        if (event.target.classList.contains("left")) {

            const carousel =
                event.target.parentElement.querySelector(".carousel");

            if (carousel) {

                carousel.scrollBy({
                    left: -800,
                    behavior: "smooth"
                });

            }

        }

        if (event.target.classList.contains("right")) {

            const carousel =
                event.target.parentElement.querySelector(".carousel");

            if (carousel) {

                carousel.scrollBy({
                    left: 800,
                    behavior: "smooth"
                });

            }

        }

    });

}
