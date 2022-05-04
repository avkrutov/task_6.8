const userText = document.querySelector('#text');

userText.addEventListener('click', (event) => {
    event.preventDefault();
    const userInput = prompt('Введите текст!');
    userText.textContent = userInput;
});

