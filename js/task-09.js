const refs = {
  changeColorButton: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector("body"),
};

refs.changeColorButton.addEventListener('click', changeButtonClick);

function changeButtonClick() {
  const currentColor = getRandomHexColor();
  refs.color.textContent = currentColor;
  refs.body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
