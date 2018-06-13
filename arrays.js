var chocolateBars=[ 'snickers','hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  var returnArray= [element,...array]
  return returnArray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  var returnArray= [...array,element]
  return returnArray
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[index]
}

function RemoveElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyremoveElementFromBeginningOfArray(array) {
  array.pop()
  return array
}