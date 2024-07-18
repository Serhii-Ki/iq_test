export function modal() {
  const modal = document.querySelector('.nav');
  const openBtn = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close');

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    closeBtn.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    closeBtn.classList.remove('active');
  });

}