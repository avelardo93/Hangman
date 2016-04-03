var names = ["marshall", "ted", "barney", "robin", "lily", "stella", "victoria", "scooter", "james", "ranjit"];
var wins = 0;
var losses = 0;
var userGuess = "";
var incorrectGuess = "";
var guessesRemaining = 9;
var random = names[Math.floor(Math.random() * names.length)];


console.log(random);
var underScores = random.replace(/[a-z]/g, '_');
$("#nameClear").append(underScores);
$("#guessesRemaining").append(guessesRemaining);
//console.log(underScores);
var underSplit = underScores.split("");


document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.keyCode >= 65 && event.keyCode <= 90) {
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



