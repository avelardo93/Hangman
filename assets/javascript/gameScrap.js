
console.log(random);
var randomSplit = random.split("").join(',');
console.log(randomSplit);
var underScores = randomSplit.replace(/[a-z]/g, '_');
console.log(underScores);
$("#nameClear").append(underScores);


document.onkeyup = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
if (event.keyCode >= 65 && event.keyCode <= 90) {
    for (var i = 0; i <= randomSplit.length; i++) {
        if (userGuess == randomSplit[i] ) {
            $("#nameClear").empty();
            underScores.splice(i, 1, userGuess);
            $("#nameClear").append(underScores);                                
            }
        }
    }
else {
        alert("Please choose a letter.");
    }
}
