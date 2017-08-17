(function(){

 var mountains = [500, 200, 300, 1800, 700, 5000, 3000];
//function to have .sort sort numbers from smallest to largest
    function sortNum (num1, num2){
      return num1 - num2;
    }
//sorts array and applys function within the .sort
  mountains.sort(sortNum);
//stores largest number in variable
  var tallestMountain = mountains[6];

  console.log(tallestMountain);
 
})()
