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
const tagLine = document.querySelector("#banner p")
const dotsContainer = document.querySelector('.dots')
const prevArrow = document.querySelector(".arrow_left")
const nextArrow = document.querySelector(".arrow_right")

//-- INDEX
let currentSlide = 0

//-- SLIDES
function updateSlide(index) {    
    const slide = slides[index]
    bannerImg.src = `./assets/images/slideshow/${slide.image}`
    tagLine.innerHTML = slide.tagLine
	
	const dots = dotsContainer.querySelectorAll(".dot")
	dots.forEach((dot, dotIndex) => {
		if (dotIndex === index) {
			dot.classList.add("dot_selected")			
		} else {
			dot.classList.remove("dot_selected")
		}
	}) 
} 

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

// next Slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    updateSlide(currentSlide)
}

// prev Slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    updateSlide(currentSlide)
}

// !! click on dots - A REVOIR, NE FONCTIONNE PAS !!
function dotSlide() {
	for (let i=0; i < slides.length; i++) {
			updateSlide(i)
			console.log('hey')
		}  
	
}
// DOTS LISTENER
const dotElements = document.querySelector('.dots')
dotElements.addEventListener("click", dotSlide)

// ARROWS LISTENERS
prevArrow.addEventListener("click", prevSlide)
nextArrow.addEventListener("click", nextSlide)

// Restrictions RIGHT CLICK
bannerContainer.addEventListener("contextmenu", (event) => {
    console.log("right click is not allowed there")
	event.preventDefault()
})

updateSlide(currentSlide) // 