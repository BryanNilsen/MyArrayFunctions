console.log("app loaded...")

// define a starter array
const numberArray = [3, 8, 37, 6, 142, 201, 78, 9, 14, 9, 3, 2, 48, 33, 80]
const wordsArray = ["blue", "red", "pizza", "mountain", "paper", "guitar"]

// Write your own "myXXX" functions to mimic the behavior of the following array methods.




// forEach() >> executes a provided function once for each array element
function myForEach(theArray, theAction) {
  for (let i = 0; i < theArray.length; i++) {
    const currentElement = theArray[i];
    theAction(currentElement, i)
  }
}

myForEach(numberArray, (num) => console.log(num + 3))



// map() >> creates a new array populated with the results of calling a provided function on every element in the calling array.
function myMap(theArray, theAction) {
  const newArray = []
  for (let i = 0; i < theArray.length; i++) {
    const currentElement = theArray[i];
    const newElement = theAction(currentElement, i)
    newArray.push(newElement)
  }
  return newArray
}

const mappedArray = myMap(numberArray, (num) => `<li>Your number was: ${num}</li>`)
console.log('mappedArray: ', mappedArray);




// includes() >> determines whether an array includes a certain value among its entries, returning true or false as appropriate.
function myIncludes(theArray, theValue) {
  let booleanValue = false
  if (!booleanValue) {
    for (let i = 0; i < theArray.length; i++) {
      if (theArray[i] === theValue) {
        booleanValue = true
      }
    }
  }
  return booleanValue
}
const includesArray = myIncludes(numberArray, 80)
console.log('includesArray: ', includesArray);



// some() >> tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value
function mySome(theArray, theCondition) {
  let booleanValue = false
  if (!booleanValue) {
    for (let i = 0; i < theArray.length; i++) {
      if (theCondition(theArray[i], i)) {
        booleanValue = true
      }
    }
  }
  return booleanValue
}
const someArray = mySome(numberArray, (num) => num / 4 === 20)
console.log('someArray: ', someArray);




// every() >> tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
function myEvery(theArray, theCondition) {
  let booleanValue = false
  if (booleanValue === false) {
    for (let i = 0; i < theArray.length; i++) {
      if (theCondition(theArray[i], i)) {
        booleanValue = true
      }
    }
  }
  return booleanValue
}
const everyArray = myEvery(numberArray, (num) => num > 1000)
console.log('everyArray: ', everyArray);



// find() >> returns the value of the first element in the provided array that satisfies the provided testing function.

function myFind(theArray, theCondition) {
  for (let i = 0; i < theArray.length; i++) {
    if (theCondition(theArray[i], i)) {
      return theArray[i]
    }
  }
  return undefined
}

const myFindResult = myFind(numberArray, (num) => num % 38 === 0)
console.log('myFindResult: ', myFindResult); // expected undefined




// indexOf() >> returns the first index at which a given element can be found in the array, or -1 if it is not present
function myIndexOf(theArray, theCondition) {
  for (let i = 0; i < theArray.length; i++) {
    if (theCondition(theArray[i], i)) {
      return i
    }
  }
  return undefined
}
const myIndexOfResult = myIndexOf(numberArray, (num) => num > 73)
console.log('myIndexOfResult: ', myIndexOfResult);

// lastIndexOf() >> returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
function myLastIndexOf(theArray, theCondition) {
  for (let i = theArray.length - 1; i >= 0; i--) {
    if (theCondition(theArray[i], i)) {
      return i
    }
  }
  return undefined
}
const myLastIndexOfResult = myLastIndexOf(numberArray, (num) => num === 3)
console.log('myLastIndexOfResult: ', myLastIndexOfResult);


// join() >> creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
function myJoin(theArray, customSeparator) {
  let string = ""
  let separator = ","
  if (customSeparator) {
    separator = customSeparator
  }
  for (let i = 0; i < theArray.length; i++) {
    if (i === theArray.length - 1) {
      string += theArray[i]
    } else {

      string += theArray[i] + separator
    }
  }
  return string
}

const joinedArray = myJoin(numberArray)
console.log('joinedArray: ', joinedArray);

const joinedArrayWithSeparator = myJoin(numberArray, " -- ")
console.log('joinedArrayWithSeparator: ', joinedArrayWithSeparator);


// concat() >> used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
function myConcat(theFirstArray, theSecondArray) {
  const newArray = []
  for (let i = 0; i < theFirstArray.length; i++) {
    newArray.push(theFirstArray[i])
  }
  for (let j = 0; j < theSecondArray.length; j++) {
    newArray.push(theSecondArray[j])
  }
  return newArray
}

const concatArray = myConcat(numberArray, wordsArray)
console.log('concatArray: ', concatArray);

// reduce() >> executes a reducer function (that you provide) on each element of the array, resulting in a single output value
function myReduce(theArray, reducer, acc) {
  let accumulator = 0;
  if (acc) {
    accumulator = acc
  }
  for (let i = 0; i < theArray.length; i++) {
    accumulator = reducer(accumulator, theArray[i])
  }
  return accumulator
}

const reducedValueSum = myReduce(numberArray, (acc, num) => acc + num)
console.log('reducedValueSum: ', reducedValueSum);



// reverse() >> reverses an array in place. The first array element becomes the last, and the last array element becomes the first
function myReverse(theArray) {
  let reversedArray = [];
  for (let i = theArray.length - 1; i >= 0; i--) {
    reversedArray.push(theArray[i])
  }
  return reversedArray
}

const reversedArray = myReverse(numberArray)
console.log('reversedArray: ', reversedArray);