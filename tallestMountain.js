(function(){
//creates array and function to sort from smallest to largest
 var mountains = [500, 200, 300, 1800, 700, 5000, 3000];
    function sortNum (num1, num2){
      return num1 - num2;
    }
//sorts array and applys function
  mountains.sort(sortNum);
//stores largest number in variable
  var tallestMountain = mountains[6];

  console.log(tallestMountain);
 
})()
