var names = ["marshall", "ted", "barney", "robin", "lily", "stella", "victoria", "scooter", "james", "ranjit"];
var wins = 0;
var losses = 0;
var userGuess = "";
var incorrectGuess = [];
var guessesRemaining = 9;
var random = names[Math.floor(Math.random() * names.length)];


console.log(random); // Checking if name printed matched random.
var underScores = random.replace(/[a-z]/g, '_');
$("#nameClear").append(underScores);
var underSplit = underScores.split("");
$("#guessClear").append(guessesRemaining);
$("#winClear").append(wins);
$("#lossClear").append(losses);


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

function newGame () { //function that restarts game
    $("#letterClear").empty(); //clear letter incorrect letters 
    $("#nameClear").empty(); //clear the name
    $("#nameClear").append(underScores); //apend a new name
}

function deleteRepeat () {
    for (var i = 0; i <= incorrectGuess.length; i++) {
        for (var j = 0; j <= 0; j++) {
            if (incorrectGuess[i] === random[j]) {
            $(incorrectGuess[i]).remove();
        }
        }       
    }
}

//GAMEPLAY

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        guessCount();
        for (var i = 0; i < random.length; i++) {
            if (userGuess === random[i] ) {
                $("#nameClear").empty(); //clears the name chosen
                underSplit.splice(i, 1, userGuess); //replaces underscore with letter guessed
                $("#nameClear").append(underSplit); //appends to nameClear
    
            }
            else {                 //this userguess below is the issue
                incorrectGuess.push(userGuess); //clears multiple letters in the incorrect letter array
                incorrectGuess = incorrectGuess.filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });

                $("#letterClear").empty();
                $("#letterClear").append(incorrectGuess);
            }
        }
        
    }
    else {
        alert("Please choose a letter.");
    }
    
}