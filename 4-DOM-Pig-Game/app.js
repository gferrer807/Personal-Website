var scores, roundScore, activePlayer;
var gameactive = true;
init();

//stle is to modify css
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var lastdice;
//function is anonoymous. has no name and cannot be called outside of scope
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameactive) {
    var lastroll = 0;
        //1 Ranndom #
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    //update round score if the rolled number was not a 1
        if (dice === 6 && lastdice === 6) {
            nextplayer();
        } else if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextplayer();
    }
        lastdice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameactive) {
      //add current socre to overall score
        scores[activePlayer] += roundScore;

    
    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check if player won game
    if (scores[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = '.noe';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gameactive = false;
    } else {
        nextplayer();
    }  
    }
});

function nextplayer () {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        lastroll = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('dice').display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameactive = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}