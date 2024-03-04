const buttons = document.querySelectorAll('.btn');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const maxScore = document.querySelector('select');
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');

let p1 = 0;
let p2 = 0;

for (const button of buttons) {
    button.addEventListener('click', function(evt) {
        const btnVal = evt.target.value;
        const max = maxScore.value;

        if (btnVal === 'one') {
            p1++;
            player1.textContent = p1;
        } else if (btnVal === 'two') {
            p2++;
            player2.textContent = p2;
        } else {
            p1 = 0;
            p2 = 0;
            player1.textContent = p1;
            player2.textContent = p2;

            btnOne.disabled = false;
            btnTwo.disabled = false;

            player1.style.color = 'black'
            player2.style.color = 'black'
        }
        
        if (p1 == max || p2 == max) {
            btnOne.disabled = true;
            btnTwo.disabled = true;

            p1 > p2 ? player1.style.color = 'green' : player2.style.color = 'blue';
        }
    })
}