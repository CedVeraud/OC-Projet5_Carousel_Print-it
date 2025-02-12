const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// VARIABLES
const bannerContainer = document.getElementById("banner");
const prevArrow = document.querySelector(".arrow_left");
const nextArrow = document.querySelector(".arrow_right");

// Diapositive précédente
function prevSlide() {
	console.log("prev")
}

// Diapositive suivante
function nextSlide() {
	console.log("next")
}

// clicks sur les flèches gauche et droite
prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);

// Restrictions du click droit
bannerContainer.addEventListener("contextmenu", (event) => {
    console.log("right click is not allowed there")
	event.preventDefault()
})
