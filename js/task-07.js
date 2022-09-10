const refs = {
    inputControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.text.style.fontSize = refs.inputControl.value + 'px';
refs.inputControl.addEventListener('input', inputChange);

function inputChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
}