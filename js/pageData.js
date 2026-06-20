const sections = [

"Trending Now",
"Popular on Netflix",
"Action Movies",
"Sci-Fi & Fantasy",
"Top Rated",
"Continue Watching"

];

const posters = [

"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
"https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
"https://images.unsplash.com/photo-1478720568477-152d9b164e26",
"https://images.unsplash.com/photo-1513106580091-1d82408b8cd6",
"https://images.unsplash.com/photo-1516280440614-37939bbacd81",
"https://images.unsplash.com/photo-1505685296765-3a2736de412f",
"https://images.unsplash.com/photo-1460881680858-30d872d5b530",
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"

];

const container = document.getElementById("sections");

sections.forEach(section => {

const row = document.createElement("section");

row.classList.add("movie-section");

row.innerHTML = `

<h2>${section}</h2>

<div class="carousel-wrapper">

<button class="scroll-btn left">❮</button>

<div class="carousel">

${posters.map(img=>`

<div class="card">

<img src="${img}?auto=format&fit=crop&w=500&q=80">

</div>

`).join('')}

</div>

<button class="scroll-btn right">❯</button>

</div>

`;

container.appendChild(row);

});