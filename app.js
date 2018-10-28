/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//**************** yout on lesson   10/26/18 *************** */

var scores, roundScore, activePlayer, dice, gamePlaying;

init();


var lastDice

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
    //Do something here // anonymous function will be used here becuase we only want to use this function on this btn
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;


    //2. display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'img/dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'img/dice-' + dice2 + '.png';


    //3. Update the round score If the rolled number was NOT a 1

    if (dice1 !==1 && dice2 !==1) {
        //Add score
        roundScore +=dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
    //     if (dice === 6 && lastDice === 6) {
    //         //Player looses score
    //         scores[activePlayer] = 0;
    //         document.querySelector('#score-' + activePlayer).textContent = '0';

    //     } else if (dice !== 1) {   //!== read in book something about type courosion

    //     //Add score
    //     roundScore += dice; // is like writing roundScore = rounscore + dice;
    //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
    // } else {
    //     //Next Player
    // //     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //turnerary Operator look this term up
    // //     roundScore = 0;
    // //     //******************** */
    // //     //same thing as writing
    // //     //if(activePlayer === 0) {
    // //     //     activePlayer = 1;
    // //     // }   else {
    // //     //     activePlayer = 0;
    // //     // }
    // //     //******************///
    // //     document.getElementById('current-0').textContent = '0';
    // //     document.getElementById('current-1').textContent = '0';

    // //     document.querySelector('.player-0-panel').classList.toggle('active');
    // //     document.querySelector('.player-1-panel').classList.toggle('active');

    // //     //*****************this is how you add and remove class properties*********** */
    // //    // document.querySelector('.player-0-panel').classList.remove('active');
    // //    // document.querySelector('.player-1-panel').classList.add('active');

    // //     document.querySelector('.dice').style.display = 'none'; // Lesson finishes on Lecture video 51

    //             //Next Player
    //             nextPlayer();
    // }

    // lastDice = dice;
}
            // end of btn function..
});
    


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        
    // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;    // same as scores[activePlayer] + scores[activePlayer] = roundScores;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;

    // Undefined, 0, null or "" are coerced to false..
    // Anything else is coerced to ture
    if (input) {
        winningScore = input;
    }  else {
        winningScore = 100;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        //document.querySelector('#name-' + activePlayer).style.fontWeight = '800';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }   else {
        //Next Player
        nextPlayer();
    }
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


     document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');








};

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;



// function btn() {
//     //Do something here
// }           ourside function is good to use when you want to use it somewhere else
