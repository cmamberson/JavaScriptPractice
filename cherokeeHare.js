(function(){

    var startingPopulation = 100;
    var birthRate = .1;
    var numOfWeeks = 2;

  for (i = 0; i < numOfWeeks; i++){

    startingPopulation = parseInt(startingPopulation + (startingPopulation * birthRate));
  }
    console.log("There will be "+startingPopulation+" Cherokee Hares after "+numOfWeeks+" weeks.")
 
})()
