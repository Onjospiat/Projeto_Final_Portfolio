// Select all slides
const slides = document.querySelectorAll('.slide');

// Current slide index
let currentSlide = 0;

// Buttons
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Show the slide at index = currentSlide, hide others
function showSlide(index) {
  // Wrap around if out of range
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  
  // Hide all slides first
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Show the current slide
  slides[currentSlide].classList.add('active');
}

// Listen for button clicks
prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Optional: If you want an auto-play effect, uncomment below
/*
setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000); // change slides every 3 seconds
*/

var language = "pt-BR";

function changeText(){
    let x = document.getElementsByClassName("pt-BR");
    let y = document.getElementsByClassName("en");
    console.log(x);
    console.log(y);
    let i=0;
    if(language == "pt-BR"){
        language = "en";
        for(i=0;i<x.length;i++){
            x[i].style.display = "inline-block";
        }
        for(i=0;i<y.length;i++){
            y[i].style.display = "none";
        }
        document.documentElement.setAttribute("lang", "en");
    }
    else if(language == "en"){
        language = "pt-BR";
        for(i=0;i<x.length;i++){
            x[i].style.display = "none";
        }
        for(i=0;i<y.length;i++){
            y[i].style.display = "inline-block";
        }
        document.documentElement.setAttribute("lang", "pt");
    }
}

window.changeText = changeText;

function vai_pra_seccao(nome_seccao){
    const elemento = document.getElementById(nome_seccao);
    if(elemento){
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

window.vai_pra_seccao = vai_pra_seccao;