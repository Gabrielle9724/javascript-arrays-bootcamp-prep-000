var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "twix"
function addElementToBeginningOfArray (chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}