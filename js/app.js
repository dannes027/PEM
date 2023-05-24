//Menu
let menu = document.getElementById('enlaces');
let hamburguesa = document.getElementsByClassName('menu-header')[0];

hamburguesa.addEventListener('click', function () {
    menu.classList.toggle('extra-clase');
});
//Letras

//Letras
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
//Animaciones elementos
window.addEventListener('scroll', function () {
    let animacion1 = document.getElementById('ilustracion1');
    let posicion1 = animacion1.getBoundingClientRect().top;
    let animacion2 = document.querySelectorAll('.card-acerca');
    posicion2 = animacion2[0].getBoundingClientRect().top;

    let tamañoPantalla = window.innerHeight/3;
    if (posicion1 < tamañoPantalla) {
        animacion1.style.animation = 'imagenes 1s';
    }

    if (posicion2 < tamañoPantalla) {
        animacion2[0].style.animation = 'imagenes .5s'
        animacion2[1].style.animation = 'imagenes .5s .3s'
        animacion2[2].style.animation = 'imagenes .5s .5s'
    }
});
//Slider
let slider = document.querySelector('.slider');
let cajaTestimonio = document.querySelectorAll('.cont-slide');
let contador = 1;
let tamañoWidth = 100
let intervalo = 3000;

setInterval(function () {
    slides();
}, intervalo);

window.addEventListener('resize', function () {
    tamañoWidth = 100;
})

function slides() {
    slider.style.transition = 'transform 1s';
    slider.style.transform = 'translateX('+ (-tamañoWidth*contador) + '%)';
    contador++;

    if (contador === cajaTestimonio.length) {
        contador=0;
        setTimeout(function () {
            slider.style.transform = 'translateX(0)';
            slider.style.transition = 'transform 0s';
        }, intervalo);
    }
}
