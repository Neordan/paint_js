// Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
// la souris entraîne un dessin sur le canevas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('paint');
const context = myPics.getContext('2d');

// On récupère le décalage du canevas en x et y par rapport aux bords
// de la page
const rect = myPics.getBoundingClientRect();

// On ajoute les gestionnaires d'évènements pour mousedown, mousemove
// et mouseup

//quand on appuie sur la souris
myPics.addEventListener('mousedown', e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

//quand on lache le clic de la souris
window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

let red = document.getElementsByClassName('red');
let green = document.getElementsByClassName('green');
let blue = document.getElementsByClassName('blue');
let gum = document.getElementsByClassName('fa-eraser');

// pour la couleur

//rouge
for (let i = 0; i < red.length; i++) {
  red[i].addEventListener('click', () => {
    context.strokeStyle = 'red';
  });
}

//vert
for (let i = 0; i < green.length; i++) {
  green[i].addEventListener('click', () => {
    context.strokeStyle = 'green';
  });
}

//bleu
for (let i = 0; i < blue.length; i++) {
  blue[i].addEventListener('click', () => {
    context.strokeStyle = 'blue';
  });
}

//couleur blanc pour effacer
for (let i = 0; i < gum.length; i++) {
    gum[i].addEventListener('click', () => {
      context.strokeStyle = 'white';
      context.lineWidth = 20;
    });
  }

  //code pour l'épaisseur du trait
let light = document.getElementsByClassName('light');
let medium = document.getElementsByClassName('medium');
let large = document.getElementsByClassName('large');

// pour l'épaisseur du trait fin
for (let i = 0; i < light.length; i++) {
  light[i].addEventListener('click', () => {
    context.lineWidth = 1;
  });
}

// pour l'épaisseur du trait medium
for (let i = 0; i < medium.length; i++) {
  medium[i].addEventListener('click', () => {
    context.lineWidth = 5;
  });
}

// pour l'épaisseur du trait large
for (let i = 0; i < large.length; i++) {
  large[i].addEventListener('click', () => {
    context.lineWidth = 10;
  });
}



// Fonction drawLine modifiée pour prendre en compte la couleur du trait
function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = context.strokeStyle || 'blue'; // couleur par défaut
  context.lineWidth = context.lineWidth || 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
