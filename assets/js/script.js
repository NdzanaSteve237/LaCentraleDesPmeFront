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

  