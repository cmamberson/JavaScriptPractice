(function(){
  var word = "christina;"
  var letter = "i";


  if (word.includes(letter)){
    var numOfTimes = word.split(letter).length - 1;
    return console.log("Yeah, the letter "+letter+" exists "+numOfTimes+" times in my word.");
  }
  else{
    return console.log("Nope, that letter doesn't exist in my word.")
  }

 
})()
