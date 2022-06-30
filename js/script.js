const inputBtn = document.querySelector('.radio-btn')
const btn = document.querySelector('.btn')

function visible() {
    if (inputBtn.checked) {
        activeBtn()
    }
}
function activeBtn() {
    if (btn.disabled) {
        btn.disabled = false
        btn.innerText = 'Кнопка разблокированна, нажми чтобы снять выбор'
        btn.style.backgroundColor = 'lightgreen'
    }
}
function disableBtn() {
    if (inputBtn.checked === false) {
        btn.disabled = true
        btn.innerText = 'Кнопка заблокирована'
        btn.style.backgroundColor = 'rgb(196, 196, 196)'
    }
}

inputBtn.addEventListener('input', () => {
    visible()
})
btn.addEventListener('click', () => {
    if (inputBtn.checked) {
        inputBtn.checked = false
        disableBtn()
    }
})