var play = document.querySelector('.button');

var cards = document.querySelectorAll('.flip-card');

var innerCards = document.querySelectorAll('.flip-card-inner');

var frontCards = document.querySelectorAll('.flip-card-front');

var backCards = document.querySelectorAll('.flip-card-back');

var img1 = document.querySelectorAll(".img1");

var img2 = document.querySelectorAll(".img2");

var hasFlipped = false;
var lockBoard = false;

var firstCard, secondCard, winner = true;


function flipCard() {
    if (lockBoard) {
        return;
    }

    this.classList.add('rotation');

    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        // remove click from the firstCard
        if (hasFlipped) {
            this.removeEventListener('click', flipCard)
        }
        console.log('first')
        return;
    }

    secondCard = this;
    console.log('second')

    hasFlipped = false;

    checkMatch();
    // chack Match and get back the click to first card 
    firstCard.addEventListener('click', flipCard)
}

innerCards.forEach(card => card.addEventListener('click', flipCard));


function checkMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        winner += winner;
        var audio = new Audio('./correct.wav');
        audio.play();
        firstCard.parentNode.classList.remove('animate__fadeIn')
        firstCard.parentNode.classList.add("animate__heartBeat")
        secondCard.parentNode.classList.remove('animate__fadeIn')
        secondCard.parentNode.classList.add("animate__heartBeat")
        if (winner == 64) {
            play.style = "display: inline-flex;"
            var music = new Audio('./winner.wav');
            music.play();
        }

        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('rotation');
        secondCard.classList.remove('rotation');

        lockBoard = false;
    }, 1200);
}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style = `
      order: ${ramdomPos};
  `;
    });
})();

function reset() {
    location.reload();
}
play.addEventListener('click', reset)








// innerCards[i].classList.add("rotation");
// innerCards[i].classList.add("rotation");
// src1 = backCards[i].firstElementChild.getAttribute('src');
// if(src1 === backCards[i].firstElementChild.getAttribute('src')) {
//     setTimeout(() => {
//         innerCards[i].classList.remove("rotation");
//     }, 1000)
// }
// src1 = arrChecker[0]
// src2 = arrChecker[1]
// src3 = arrChecker[2]
// src4 = arrChecker[3]
// src5 = arrChecker[4]
// src6 = arrChecker[5]
// src7 = arrChecker[6]
// src8 = arrChecker[7]
// src9 = arrChecker[8]
// src10 = arrChecker[9]
// src11 = arrChecker[10]
// src12 = arrChecker[11]
