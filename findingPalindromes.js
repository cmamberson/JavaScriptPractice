(function(){
//takes word, splits it, reverses it, joins it
  var word = "tacocat";
  var wordSplit = word.split("");
  var reversedWord = wordSplit.reverse("");
  var joinWord = reversedWord.join("");
  
//compared reversed word to original word
  if (joinWord === word){
    console.log('true');
  }
  else{
    console.log('false');
  }

 
})()
