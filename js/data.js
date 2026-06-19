const movieSections = [

{
    id: "trending",
    title: "Trending Now",
    movies: [

        {
            name: "Stranger Things",
            image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Wednesday",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Dark",
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Money Heist",
            image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Ozark",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "1899",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        }
    ]
},

{
    id: "tvshows",
    title: "Popular on Netflix",
    movies: [

        {
            name: "Breaking Bad",
            image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "The Witcher",
            image: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Narcos",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "You",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Lucifer",
            image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Peaky Blinders",
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
        }
    ]
},

{
    id: "movies",
    title: "Action Movies",
    movies: [

        {
            name: "Extraction",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "The Gray Man",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Red Notice",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "6 Underground",
            image: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Polar",
            image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "John Wick",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
        }
    ]
},

{
    id: "scifi",
    title: "Sci-Fi & Fantasy",
    movies: [

        {
            name: "Interstellar",
            image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Dune",
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Foundation",
            image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Arrival",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "The Expanse",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Avatar",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
        }
    ]
},

{
    id: "toprated",
    title: "Top Rated",
    movies: [

        {
            name: "Inception",
            image: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Fight Club",
            image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Joker",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "The Dark Knight",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Shutter Island",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Gladiator",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
        }
    ]
},

{
    id: "mylist",
    title: "Continue Watching",
    movies: [

        {
            name: "Manifest",
            image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "The Crown",
            image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Vikings",
            image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Black Mirror",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "The Last Kingdom",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "House of Cards",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
        }
    ]
}

];