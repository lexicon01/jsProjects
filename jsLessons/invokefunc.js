///////////////////
/// Lectuere IIFE

// ***** Lecture 67 IIFE Anonymous Function *******
     // ** I-mediatly I-voked F-unction E-xpresion
     // Wraping it inside parainthisis declares
     // is an Expression not a Statement like normal way to make functions
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game(); */

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

console.log(score);  // cant read score outside of the paraintheis

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})();