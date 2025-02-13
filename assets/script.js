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

//-- SELECTORS
const bannerContainer = document.getElementById("banner")
const bannerImg = document.querySelector(".banner-img")
const dotsContainer = document.querySelector('.dots')
const prevArrow = document.querySelector(".arrow_left")
const nextArrow = document.querySelector(".arrow_right")

//-- INDEX
let currentSlide = 2

//-- 

//-- DOTS
// create DOTS
function createDots() {
	for (let i=0; i < slides.length; i++) {
		let dotElement = document.createElement("a")
		dotElement.href = '#'
		dotElement.classList.add("dot")

		dotsContainer.appendChild(dotElement)
	}
}
createDots() //

// selected DOT
function selectedDot() {
	const dotElements = document.querySelectorAll('.dot')
	dotElements.forEach((dot, index) =>  {
		dot.classList.toggle('dot_selected', index === currentSlide)
	})
}
selectedDot() //

// click DOT
function clickDot() {
	console.log("dot")
}
// PREVIOUS Slide
function prevSlide() {
	console.log("prev")
}
// NEXT Slide
function nextSlide() {
	console.log("next")
}

// LISTENERS
dotsContainer.addEventListener("click", clickDot)
prevArrow.addEventListener("click", prevSlide)
nextArrow.addEventListener("click", nextSlide)

// Restrictions RIGHT CLICK
bannerContainer.addEventListener("contextmenu", (event) => {
    console.log("right click is not allowed there")
	event.preventDefault()
})

//