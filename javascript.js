let incre = document.getElementById('plus');
let decre = document.getElementById('minus');
let number = document.getElementById('digit');

let digit = 0;

function updateDisplay () {
let num = digit < 10 ? "0" + digit:digit;
number.innerText = num;

if (digit > 0) {
    number.style.color = "Yellow"
}
if (digit > 3) {
    number.style.color = "orange";
} if (digit > 6) {
    number.style.color = "Red";
}

}

incre.addEventListener('click', () => {
    digit++;
    updateDisplay();
})

decre.addEventListener('click', () => {
    digit--;
    updateDisplay();
})




