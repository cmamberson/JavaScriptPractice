(function(){
  var word = "christina;"
  var letter = "i";

//checks if letter is in the word
  if (word.includes(letter)){
//splits word at the defined letter. takes the length of that minus 1 to determine times it is in the word
    var numOfTimes = word.split(letter).length - 1;
    return console.log("Yeah, the letter "+letter+" exists "+numOfTimes+" times in my word.");
  }
  else{
    return console.log("Nope, that letter doesn't exist in my word.")
  }

 
})()
