/* =========================
MOVIE SECTION GENERATOR
========================= */

function createMovieSections() {

    const container =
        document.getElementById("movie-sections");

    if (!container) return;

    container.innerHTML = "";

    movieSections.forEach(section => {

        const sectionElement =
            document.createElement("section");

        sectionElement.classList.add("movie-section");

        sectionElement.id = section.id;

        sectionElement.innerHTML = `

            <h2>${section.title}</h2>

            <div class="carousel-wrapper">

                <button
                    class="scroll-btn left">
                    ❮
                </button>

                <div class="carousel">

                    ${section.movies.map(movie => `

                        <div class="card">

    <img
        src="${movie.image}"
        alt="${movie.name}"
    >

    <div class="card-overlay"></div>

    <div class="play-icon">
        ▶
    </div>

    <div class="rating">
        ★ 8.9
    </div>

    <div class="movie-title">
        ${movie.name}
    </div>

</div>

                    `).join("")}

                </div>

                <button
                    class="scroll-btn right">
                    ❯
                </button>

            </div>

        `;

        container.appendChild(sectionElement);

    });

}