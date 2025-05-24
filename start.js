const favMovie = "avatar";                           //setting up a variable or the winning movie or right movie

let guess = prompt("Guess my favorite movie");       //giving pronpt to take the requests

while((guess  = favMovie) && (guess  = "quit")){     //conditions for guess
    guess = prompt("wrong guess please try again");  //if guess is not equal to favMovie then return the prompt 
} 
if(guess == favMovie){                               //condition if guess is true
    console.log("congrats !!");                      //winner!!!
}else{
    console.log("You quit");                         //you typed guess = quit
}
 