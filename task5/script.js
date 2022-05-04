const userText = document.querySelector('#text');
const userTextField = document.querySelector('#duplicateField');
const userButtom = document.querySelector('#input')
userText.addEventListener('input', () => {
    userTextField.textContent=userText.value;
});
userButtom.addEventListener('click', () => {
    console.log(userText.value);
    userText.value = "";
    userTextField.textContent = "";
});
