console.log("hello")

// 1.
function maxOfTwoNumbers (x,y) {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

console.log("maxOfTwoNumbers(3,9)")
console.log(maxOfTwoNumbers(3,9))

// 2.
function maxOfThree(x,y,z) {
  // make a variable named maxvalue
  var maxValue = 0;

  //check whether x or y is bigger and give me the larger one
  if (x > y) {  //set that one to the max value
    maxValue = x
  } else {
    maxValue = y
  }

  if(z > maxValue){
    return z
  } else {
    return maxValue
  }
}
console.log('maxOfThree(2,4,6)')
console.log(maxOfThree(2,4,6))


// 3.
function isCharAVowel(character) {
  character = character.toLowerCase()
  return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'
}

console.log("isCharAVowel('f')")
console.log(isCharAVowel('f'))
console.log("isCharAVowel('F')")
console.log(isCharAVowel('F'))
console.log("isCharAVowel('A')")
console.log(isCharAVowel('A'))
console.log("isCharAVowel('e')")
console.log(isCharAVowel('e'))

// 4.
function sumArray(array) {
  var sum = 0
  for (var i=0; i<array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}

console.log("function 4")
console.log("sumArray[1,2,3,4]")
console.log(sumArray([1,2,3,4]))

console.log("sumArray[3,2,1]")
console.log(sumArray([3,2,1]))


// 5.
function multiply(array) {
  var product = 1
  for (var i=0; i<array.length; i++) {
    product = product * array[i]
  }
  return product
}

console.log("multiply([2,2])")
console.log(multiply([2,2]))

console.log("multiply([3,3,2])")
console.log(multiply([3,3,2]))

// 6.
function numArgs() {
  return arguments.length
}

console.log("numArgs(2,3,4,5)")
console.log(numArgs(2,3,4,5))
console.log("numArgs(2,3,4,5,4,5,6,6)")
console.log(numArgs(2,3,4,5,4,5,6,6))

// 7.
function  reverseString (string) {
  var returnString = ''
  //return string one by one from the end to the beginning
  for (var i = string.length-1; i>0; i--) {
    returnString = returnString + string[i]
  }
  return returnString
}

console.log("reverseString('abcdefg')")
console.log(reverseString('abcdefg'))

// 8.
function longestWordLength (arrayOfStrings) {
  var longestWordLength = 0
  var currentWordLength = 0

  //go through each element one by one
  for (var i = 0; i < arrayOfStrings.length; i++) {
    currentWordLength = arrayOfStrings[i].length
    if(currentWordLength > longestWordLength) {
      longestWordLength = currentWordLength
    }
  }
  return longestWordLength
}

console.log("longestWordLength(['cat', 'a', 'abcde', 'ee'])")
console.log(longestWordLength['cat', 'a', 'abcde', 'ee'])

function longestWordLength2 (words) {
  longestLength = 0
  currentLenth = 0

  for (var i = 0; i < words.length; i++) {
    currentLength = words[i].length

    if(currentLength > longestLength){
      longestLength = currentLength
    }
  }

  return longestLength
}

console.log("longestWordLength2(['cat', 'a', 'abcde', 'ee'])")
console.log(longestWordLength2(['cat', 'a', 'abcde', 'ee']))

// 9.
function  stringsLongerThan (array, x) {
  // start with ['touch', 'me', 'in', 'the', 'morning'], 2
  var output = []

  for (var i = 0; i < array.length; i++) {
    if(array[i].length > x){
      output.push(array[i])
    }
  }

  return output
  // return ["touch" , "the", "morning"]
}

console.log("stringsLongerThan(['1', '12', '123','1234'],1)")
console.log(stringsLongerThan(['1', '12', '123','1234'],1))

console.log("stringsLongerThan(['1', '12', '123','1234'],2)")
console.log(stringsLongerThan(['1', '12', '123','1234'],2))

console.log("stringsLongerThan(['1', '12', '123','1234'],3)")
console.log(stringsLongerThan(['1', '12', '123','1234'],3))






