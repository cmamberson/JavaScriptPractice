(function(){

    var startingPopulation = 200;
    var birthRate = .1;
    var numOfWeeks = 5;
//runs for loop for amount of weeks to increment population
//parseInt so that only whole numbers are displayed
  for (let i = 0; i < numOfWeeks; i++){

    startingPopulation = parseInt(startingPopulation + (startingPopulation * birthRate));
  }
    console.log("There will be "+startingPopulation+" Cherokee Hares after "+numOfWeeks+" weeks.")
 
})()
