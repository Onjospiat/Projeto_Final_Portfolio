/* ------------------ CAROUSEL LOGIC ------------------ */

/* Gather all slides and track current index */
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

/* Select carousel navigation buttons */
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

/* Function to show a slide by index */
function showSlide(index) {
  // If index is out of bounds, wrap around
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Show the current slide
  slides[currentSlide].classList.add('active');
}

/* Move to previous/next slide on button clicks */
prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

/* ------------------ LANGUAGE TOGGLE ------------------ */

/* Current language starts as pt-BR */
let language = "pt-BR";

/* Switch between pt-BR and en */
function changeText() {
  const portugueseElems = document.getElementsByClassName("pt-BR");
  const englishElems = document.getElementsByClassName("en");

  if (language === "pt-BR") {
    // Switch to English
    language = "en";
    for (let i = 0; i < portugueseElems.length; i++) {
      portugueseElems[i].style.display = "inline-block";
    }
    for (let i = 0; i < englishElems.length; i++) {
      englishElems[i].style.display = "none";
    }
    document.documentElement.setAttribute("lang", "en");
  } else {
    // Switch back to Portuguese
    language = "pt-BR";
    for (let i = 0; i < portugueseElems.length; i++) {
      portugueseElems[i].style.display = "none";
    }
    for (let i = 0; i < englishElems.length; i++) {
      englishElems[i].style.display = "inline-block";
    }
    document.documentElement.setAttribute("lang", "pt");
  }
}

/* Expose changeText to the global scope so buttons can call it */
window.changeText = changeText;


/* ------------------ SMOOTH SCROLL ------------------ */

/* Smoothly scroll to a section by its ID */
function vai_pra_secao(nome_secao) {
  const elemento = document.getElementById(nome_secao);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
  }
}

/* Expose vai_pra_seccao globally */
window.vai_pra_secao = vai_pra_secao;
