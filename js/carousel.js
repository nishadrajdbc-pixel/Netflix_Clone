document.addEventListener("click",(e)=>{

if(e.target.classList.contains("left")){

const carousel =
e.target.parentElement.querySelector(".carousel");

carousel.scrollLeft -= 700;

}

if(e.target.classList.contains("right")){

const carousel =
e.target.parentElement.querySelector(".carousel");

carousel.scrollLeft += 700;

}

});
