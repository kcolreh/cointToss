const btn = document.querySelector('.coin');
const answer = document.querySelector('#result');

btn.addEventListener('click', coinFlip);


function coinFlip (){
    random = Math.floor(Math.random() * 2 ) + 1;

    if (random === 1){
        answer.textContent = 'Coin'
    }else {
        answer.textContent = 'Tails'
    }
    
}


