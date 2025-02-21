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
		"image":"slide3a.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide3b.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide3c.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//-- SELECTORS >> Récupération des éléments HTML
const bannerContainer = document.getElementById("banner")
const bannerImg = document.querySelector(".banner-img")
const tagLine = document.querySelector("#banner p")
const dotsContainer = document.querySelector('.dots')
const prevArrow = document.querySelector(".arrow_left")
const nextArrow = document.querySelector(".arrow_right")

//-- INDEX >> sélectionne l'index [0] du tableau 
let currentSlide = 0


// create DOTS >>  Ajoute le nombre de points en fonction de la longueur du tableau
function createDots() { 
	for (let i=0; i < slides.length; i++) {
		let dotElement = document.createElement("a")
		dotElement.href = '#'
		dotElement.classList.add("dot")
		// dot LISTENERS
		dotElement.addEventListener("click", () => {
			updateSlide(i)
			currentSlide = i
		   })
		dotsContainer.appendChild(dotElement)
	}
}

// gestion des SLIDES >> Récupère et affiche la slide active (currentSlide)
function updateSlide(index) {
    const slide = slides[index]
    bannerImg.src = `./assets/images/slideshow/${slide.image}`
    tagLine.innerHTML = slide.tagLine 
	// console.log(currentSlide)

	// update du point actif >> Ajoute ou retire la class .dot_selected si le point est actif ou non
	const dots = dotsContainer.querySelectorAll(".dot")
	dots.forEach((dot, dotIndex) => {
		if (dotIndex === index) { 
			dot.classList.add("dot_selected")

		} else {
			dot.classList.remove("dot_selected")
		}
	}) 	
} 

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

//-- L'écoute du click sur les flèches gauche / droite déclenche les fonctions correspondantes
prevArrow.addEventListener("click", prevSlide) 
nextArrow.addEventListener("click", nextSlide) 

//-- Restrictions RIGHT CLICK
bannerContainer.addEventListener("contextmenu", (event) => {
    console.log("right click is not allowed there")
	event.preventDefault()
})

// AUTOSLIDE
let interval = 0;    

	function autoSlide() {
		interval = setInterval(nextSlide, 7000);
	}
	function pauseAutoSlide() {
		clearInterval(interval);
	}

	// pause on mouseover // play on mouseout sur tous les éléments de navigation
	[prevArrow, nextArrow, dotsContainer].forEach(item => {
		item.addEventListener('mouseover', () => {
			pauseAutoSlide()
			})
		item.addEventListener('mouseout', () => {
			autoSlide()
			})
	})

createDots()
updateSlide(currentSlide)
autoSlide()

