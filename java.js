const btn = document.querySelector('.coin');
const answer = document.querySelector('#result');
const counterCoin = document.querySelector('#counter-coin');
const counterTail = document.querySelector('#counter-tail');

btn.addEventListener('click', coinFlip);


function coinFlip() {
    random = Math.floor(Math.random() * 2) + 1;

    if (random === 1) {
        answer.textContent = 'Coin', answer.style.color = 'blue';

        counterCoin.textContent = +counterCoin.textContent + 1;
    } else {
        answer.textContent = 'Tails', answer.style.color = 'red';

        counterTail.textContent = +counterTail.textContent + 1;
    }
}


