$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('autoWidth').removeClass('cs-hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var countElement = document.getElementById('counter');
    var endCount = 232;
    var duration = 1000; // Durée de l'animation en millisecondes
    var step = 1; // Pas d'incrémentation

    var currentCount = 0;
    var interval = setInterval(function () {
      if (currentCount >= endCount) {
        clearInterval(interval);
      } else {
        currentCount += step;
        countElement.textContent = currentCount;
      }
    }, duration / (endCount / step));
  });

  const clientTextElements = document.querySelectorAll('.client-text');  // Select all client text elements

clientTextElements.forEach(element => {
  element.addEventListener('click', function() {  // Add click event listener
    const clientText = this.textContent.trim();  // Get the text content of the clicked element
    document.querySelector('.users').textContent = clientText;  // Update the "USERS" element
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Récupérer tous les boutons
  var buttons = document.querySelectorAll('.button-container button');

  // Ajouter un gestionnaire d'événement click à chaque bouton
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Changer la couleur de fond du bouton au clic
      button.style.background = "#1acc8d";

      // Réinitialiser la couleur de fond de tous les autres boutons
      buttons.forEach(function(btn) {
        if (btn !== button) {
          btn.style.background = ""; // Réinitialiser la couleur de fond
        }
      });
    });
  });
});

function updateUsers(text) {
  var usersParagraphs = document.getElementsByClassName('users');
  for (var i = 0; i < usersParagraphs.length; i++) {
    usersParagraphs[i].innerText = text;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const centerBtn = document.querySelector(".center-btn");
  const orbitBtns = document.querySelectorAll(".orbit-btn");
  const svg = document.querySelector(".connectors");

  orbitBtns.forEach(btn => {
      const centerBtnRect = centerBtn.getBoundingClientRect();
      const orbitBtnRect = btn.getBoundingClientRect();

      const x1 = centerBtnRect.left + centerBtnRect.width / 2;
      const y1 = centerBtnRect.top + centerBtnRect.height / 2;
      const x2 = orbitBtnRect.left + orbitBtnRect.width / 2;
      const y2 = orbitBtnRect.top + orbitBtnRect.height / 2;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      svg.appendChild(line);
  });
});


let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}