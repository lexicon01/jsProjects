/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;

init();




document.querySelector('.btn-roll').addEventListener('click', function() {
    //Do something here // anonymous function will be used here becuase we only want to use this function on this btn
    dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-' + dice + '.png';

    //3. Update the round score If the rolled number was NOT a 1
    if (dice !== 1) {   //!== read in book something about type courosion
        //Add score
        roundScore += dice; // is like writing roundScore = rounscore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
    //     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //turnerary Operator look this term up
    //     roundScore = 0;
    //     //******************** */
    //     //same thing as writing
    //     //if(activePlayer === 0) {
    //     //     activePlayer = 1;
    //     // }   else {
    //     //     activePlayer = 0;
    //     // }
    //     //******************///
    //     document.getElementById('current-0').textContent = '0';
    //     document.getElementById('current-1').textContent = '0';

    //     document.querySelector('.player-0-panel').classList.toggle('active');
    //     document.querySelector('.player-1-panel').classList.toggle('active');

    //     //*****************this is how you add and remove class properties*********** */
    //    // document.querySelector('.player-0-panel').classList.remove('active');
    //    // document.querySelector('.player-1-panel').classList.add('active');

    //     document.querySelector('.dice').style.display = 'none'; // Lesson finishes on Lecture video 51

        //Next Player
        nextPlayer();
    }
    
    // end of btn function..
    } )

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;    // same as scores[activePlayer] + scores[activePlayer] = roundScores;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('#name-' + activePlayer).style.fontWeight = '800';

        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    }   else {
        //Next Player
        nextPlayer();
    }
    
});


function nextPlayer() {
     //Next Player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //turnerary Operator look this term up
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');


     document.querySelector('.dice').style.display = 'none'; 
}

document.querySelector('btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';




}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;



// function btn() {
//     //Do something here
// }           ourside function is good to use when you want to use it somewhere else
