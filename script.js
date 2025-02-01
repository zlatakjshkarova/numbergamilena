
const myBtn = document.querySelector("#myBtn");
const nameInput = document.querySelector("#name");
const hh = document.querySelector('#hh');

myBtn.addEventListener('click', () => {
    i++;
    let num = nameInput.value
    if (num == random) {
        hh.textContent = 'ТЫ угадал число поздравляю 👏'
    } else {
        hh.textContent = 'К сажелению вы не угадали число😢'
    }
})
let random = getRandomInt(1, 20);
console.log(random);
let i = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




