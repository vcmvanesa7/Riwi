// Slider automático
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function mostrarSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function siguienteSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    mostrarSlide(slideIndex);
}

function anteriorSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    mostrarSlide(slideIndex);
}

// Automatizamos el slider cada 5 segundos
setInterval(siguienteSlide, 5000);

// Control de botones
document.querySelector('.siguiente').addEventListener('click', siguienteSlide);
document.querySelector('.anterior').addEventListener('click', anteriorSlide);
