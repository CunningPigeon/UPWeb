//кнопка прокрутки наверх
document.querySelector('.img_up').onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}