export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  messageWrp: document.querySelector('.modal .title span'),
  closeBtn: document.querySelector('.close'),
  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  },
}

Modal.closeBtn.onclick = () => {
  Modal.close();
}

window.addEventListener('keydown', handleKeydown);

function handleKeydown (event){
  if (event.key === 'Escape'){
    Modal.close();
    }
}

