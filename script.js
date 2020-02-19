

// computer chooses a word
var computer_word = "javascript";

//Split in Array
var computer_array = computer_word.split("");

//New Array
var fill_in_array = [];

//Change Values
fill_in_array[0] = "j";
fill_in_array[1] = "*";
fill_in_array[2] = "*";
fill_in_array[3] = "*";
fill_in_array[4] = "*";
fill_in_array[5] = "*";
fill_in_array[6] = "*";
fill_in_array[7] = "*";
fill_in_array[8] = "*";
fill_in_array[9] = "t";




//Change ARRAY
// for (var i = 0; i < computer_array.length; i++) {
//    fill_in_array.push("*");
// }



//Display Word
//console.log(fill_in_array);
console.log((fill_in_array.join("")));

//Prompt User
var player_letter = prompt("chose a letter, not a number").toLowerCase();



//Function to check user letter
function check_whole_word(player_letter){
  for (var i = 0; i < computer_array.length; i++) {
    if (player_letter === computer_array[i]) {
      fill_in_array[i] = player_letter;
      //console.log(fill_in_array);
      console.log((fill_in_array.join("")));
    }
  }
}

  //Loop Attempts
  for (var i = 0; i < 9; i++) {
    check_whole_word(player_letter);
    if ((fill_in_array.join(""))===computer_word) {
        break;
      }
      // else if (fill_in_array !== computer_array) {
          player_letter = prompt("choose another letter, you have "+(10-(i+1))+" more tries!").toLowerCase();
        // }
}


//Cases When you reach all 10 attempts
switch (true) {
  case i===9:
  alert("you lost! the word was "+computer_word);
    break;
  default:  alert("you won! the word was "+computer_word);
}





//console.log((fill_in_array.join("")));




console.log(" this is the fill in array: ", fill_in_array);


console.log("this is computer array ", computer_array);




// computer displays the spaces



// you have 10 trys to guess a guess the word
// if you guess a letter if in word display in it in its position if not dont displays



// if you know the word and type the rest of the missing letters
 // let player know he won if not lost