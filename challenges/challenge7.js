//****   CODING CHALLENGE ** */


/*
------Let's build a fun quiz game in the console! ====

1. Build a function constructor called Question to describe a question.  A question should include:
A) question itself
B) the answers from which the player can choose the coreect one (choose an adequate data structure here, array, object, etc.)
C) correct answer (I would use a number for this)

2. Create a couple of question using the constructor

3.  Store them all inside an array

4.  Select on random Question and log it on the console,  together with the possible andswers (each question should have a number) (Hint: write a method for the Question objects for this task).

5.  Use the 'prompt' function to ask the user for the correct answer.  The user should input the number of the correct answer such as you displayed it on task 4.

6.  Check if the ansWer is correct and print to the console wherther the answer is correct at nor (hint: write another method for this).

7.  Suppose this code would be a plugin for other programmers to use in their code.  So make sure that all your code is private and doesn't interfere with other programmers code (Hint: we learned a special technique to do exactly )
that).

====================== EXPERT LEVEL ===================

8.  After you display the result, display the next random question, so that the game never ends( Hint: write a function for this and call it right after displaying the result)

9. becareful: after Task 8, the game literally never ends  So include the option to quit the game if the users writes 'exit' instead of the answer.  In this case, DONT call the function from task 8.

10.  Track the user's score to make the game more fun! so each time an anser is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you dont have to, just do this with the tools you feel more confortable at this point).

11. Display the score in the console.  Use yet another method for this.


*/

(function() {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion =  function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('correct answer!');
        } else {
            console.log('Wrong answer try again');
        }
    }
    
    
    var q1 = new Question('Is javascript the coolest programming language in the world?', 
        ['yes', 'no'], 0); // the NEW keyword add this as a variable to the this.Question
    
    var q2 = new Question('what is the name of this course\'s teacher?', 
        ['john', 'Micheal', 'Jonas'], 1);
    
    var q3 = new Question('what does best describe coding?',
        ['boring', 'hard', 'fun', 'tedius'], 2);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer.'));
    
    questions[n].checkAnswer(answer);
    

}) ();

