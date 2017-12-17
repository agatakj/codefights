/**Given an array of integers, find the pair of adjacent
elements that has the largest product and return that product.
Example:
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product. #avatar**/

function adjacentElementsProduct(arr){
  var sum = []; 
  for(var i = 0; i < arr.length-1; i++){
    var max  = 0;
    max = arr[i] * arr[i+1];
    sum.push(max);
  }
  sum.sort(function(a,b){return b - a });
  return sum[0];
}

console.log("numbers"); //log
