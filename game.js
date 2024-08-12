
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generación correcta del número aleatorio entre 1 y 100

const ATTEMPS = 10; // Número de intentos cambiado a 10
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); // Selector de clase correcto
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = parseInt(guessField.value); // Conversión del valor ingresado a entero
  if (guessCount === 1) {
    guesses.textContent = 'Número aleatorio anterior: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = '¡Felicitaciones! ¡Adivinaste el número!';
    lastResult.style.backgroundColor = 'green'; // Color verde para el mensaje de éxito
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === ATTEMPS) {
    lastResult.textContent = '¡Perdiste!';
    lastResult.style.backgroundColor = 'red'; // Color rojo para el mensaje de pérdida
    setGameOver();
  } else {
    lastResult.textContent = '¡Incorrecto!';
    lastResult.style.backgroundColor = 'black'; // Color negro para el mensaje incorrecto
    if (userGuess < randomNumber) {
      lowOrHi.textContent = '¡El número es mayor!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = '¡El número es menor!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess); // Método de evento correcto

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  // Se crea un contenedor para el botón
  const buttonContainer = document.createElement('div');
  buttonContainer.style.textAlign = 'center'; // Centra el botón
  buttonContainer.style.marginTop = '20px'; // Espacio arriba del botón

  resetButton = document.createElement('button');
  resetButton.textContent = 'Comienza un nuevo juego';
  buttonContainer.appendChild(resetButton); 
  
  // Se agrega el contenedor del botón debajo del contenido principal
  document.querySelector('.content').appendChild(buttonContainer);
  resetButton.addEventListener('click', resetGame); // Método de evento correcto
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1; // Generación correcta del nuevo número aleatorio
}