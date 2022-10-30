//Takes a random number from 1-2
//Converts 1 to head
//Converts 2 to tails
//Displays result to the user


const btn = document.querySelector('.coin');
btn.addEventListener('click', coinFlip);

function coinFlip (result){
    random = Math.floor(Math.random() * 2 ) + 1;

    if (random === 1){
        result = 'Heads', console.log(result);
    }else {
        result = 'Tails', console.log(result);
    }
    
}