train.onclick = function() {
    let start = Date.now(); // mémoriser l'heure de début

    let timer = setInterval(function() {
        // combien de temps s'est écoulé depuis le début ?
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';
      // left obtient des valeurs de 0px à 800px (4000/5).

    //   if (timePassed > 2000) clearInterval(timer);
    if (timePassed >= 4000) {
        clearInterval(timer); // terminer l'animation après 4 secondes
        return;
      }

    }, 20);
    // à mesure que timePassed passe de 0 à 4000
  }