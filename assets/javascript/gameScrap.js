

function newGame () {
$("#nameClear").empty();
$("#nameClear").append(underScores);
$("#guessClear").append(guessesRemaining);
$("#winClear").append(wins);
$("#letterClear").empty();
$("#lossClear").append(losses);
}

//FUNCTIONS

function guessCount () {
    $("#guessClear").empty();
    $("#guessClear").append(guessesRemaining -= 1);
    if (guessesRemaining === 0) {
        alert("You Lose!!"); //TEMPORARILY KEEP THIS FOR FUNCITONALITY. I WILL NEED TO CHANGE 
        $("#lossClear").empty();
        $("#lossClear").append(guessesRemaining += 1);
        newGame (); //I will add a function to restart the game when the loss count ++
    }

}


//GAMEPLAY

$(document).ready(function() {
      newGame();
});

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        guessCount();
        for (var i = 0; i <= random.length; i++) {
            if (userGuess == random[i] ) {
                $("#nameClear").empty();
                underSplit.splice(i, 1, userGuess);
                $("#nameClear").append(underSplit);
    
            }
        }
    }
    else {
        alert("Please choose a letter.");
    }
    
}



