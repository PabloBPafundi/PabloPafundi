// Define una función que resalta elementos
function highlightElements(link, elements) {
    link.addEventListener('click', () => {
      elements.forEach(element => {
        element.classList.add('highlight');
      });
      setTimeout(() => {
        elements.forEach(element => {
          element.classList.remove('highlight');
        });
      }, 900);
    });
  }
  
  // Selecciona los enlaces y los elementos a resaltar
  const aboutMeLink = document.querySelector('a[href="#AM"]');
  const cardTextAM = document.querySelector('.card#AM .card-body');
  const weLink = document.querySelector('a[href="#WE"]');
  const cardTextsWE = document.querySelectorAll('#WE .card-body');
  const eduLink = document.querySelector('a[href="#Edu"]');
  const cardTextsEdu = document.querySelectorAll('#Edu .card-body');
  const skLink = document.querySelector('a[href="#Skills"]');
  const divSk = document.querySelector('#Skills');
  
  // Resalta los elementos cuando se hace clic en el enlace correspondiente
  highlightElements(aboutMeLink, [cardTextAM]);
  highlightElements(weLink, cardTextsWE);
  highlightElements(eduLink, cardTextsEdu);
  highlightElements(skLink, [divSk]);