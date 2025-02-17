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


// create DOTS
function createDots() { // ajoute le nombre de points en fonction de la longueur du tableau slides
	for (let i=0; i < slides.length; i++) { // variable i est inférieur à la longueur du tableau > on incrémente jusqu'à la fin
		let dotElement = document.createElement("a")
		dotElement.href = '#'
		dotElement.classList.add("dot")
		// click sur les dots
		dotElement.addEventListener("click", () => { // écoute du click sur l'element dot
			updateSlide(i)
			currentSlide = i
		   })

		dotsContainer.appendChild(dotElement)
	}
}

//-- SLIDES
function updateSlide(index) {   // récupère la valeur à indexer pour currentSlide
    const slide = slides[index] // Défini la slide actuelle 
    bannerImg.src = `./assets/images/slideshow/${slide.image}` // utilisation des backticks pour pouvoir appeler la variable slide.image
    tagLine.innerHTML = slide.tagLine 

	// update DOT_SELECTED
	const dots = dotsContainer.querySelectorAll(".dot") // sélection de l'élément .dot (voir fonction createDots)
	dots.forEach((dot, dotIndex) => { // pour chaque element dot on va définir sa valeur et la comparer à l'indexage de la slide
		if (dotIndex === index) { // si dotIndex est égal à l'index on ajoute la classe
			dot.classList.add("dot_selected")

		} else { // sinon on la retire
			dot.classList.remove("dot_selected")
		}
	}) 	
} 

// next Slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length // slide actuel + 1 - comparé à la longueur restante
	updateSlide(currentSlide)
}
// prev Slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length // (slide actuelle - 1 + longueur totale) comparé à la longueur restante
    updateSlide(currentSlide)
}

// ARROWS LISTENERS
prevArrow.addEventListener("click", prevSlide) 
nextArrow.addEventListener("click", nextSlide) 

// Restrictions RIGHT CLICK
bannerContainer.addEventListener("contextmenu", (event) => { // 
    console.log("right click is not allowed there")
	event.preventDefault()
})

// autoSlide
let interval = 0;    

	function autoSlide() {
		interval = setInterval(nextSlide, 7000);
	}
	function pauseAutoSlide() {
		clearInterval(interval);
	}

	// pause on mouseover
	[prevArrow, nextArrow, dotsContainer].forEach(item => {
		item.addEventListener('mouseover', () => {
			pauseAutoSlide()
			console.log("pause")

			})
		item.addEventListener('mouseout', () => {
			autoSlide()
			console.log("play")

			})
	})

/*
 (option) apparition de la 1ère image >>> [A FAIRE] essayer d'ajouter un fondu entre les slides
 function transitionSlides() {
	bannerImg.style.opacity = '1'
	bannerImg.style.transition = 'opacity 0.7s ease-in-out'
} 
	transitionSlides()
*/

createDots()
updateSlide(currentSlide) 
autoSlide()

