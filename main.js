const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const modalWrapper = document.querySelector('.modal-wrapper');
const btnClose = document.querySelector('.close');
const modalMessage = document.querySelector('.modal .title span');

form.onsubmit = (evt) => {
  evt.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;
  modalWrapper.classList.add('open');
  modalMessage.innerText = message;
};

btnClose.onclick = () => modalWrapper.classList.remove('open');

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function openModal() {}
