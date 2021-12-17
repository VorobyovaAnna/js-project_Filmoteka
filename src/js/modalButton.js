export const modals = ({ openButton, closeButton, backdrop }) => {
  backdrop.classList.add('backdrop');
  closeButton.classList.add('modal__close');
  closeButton.querySelector('use').classList.add('modal__icon');
  closeButton.querySelector('svg').classList.add('modal__icon-wrapper');

  const closeModal = e => {
    backdrop.classList.remove('is-open');
    document.removeEventListener('keydown', onEscClick);
  };

  const onEscClick = e => {
    if (e.key !== 'Escape') return;
    closeModal();
  };

  const onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  const openModal = e => {
    if (e.target.nodeName === 'UL' || !e.target.closest('button')) return;
    backdrop.classList.add('is-open');
    document.addEventListener('keydown', onEscClick);
  };
  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  backdrop.addEventListener('click', onBackdropClick);
};
