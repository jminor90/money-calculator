let calcButton = document.querySelector('#calcButton')
let clearButton = document.querySelector('#clearButton')
let form1 = document.querySelector('#form1')
let result = document.querySelector('#result')
let penniesResult = document.querySelector('#penniesResult')
let nickelsResult = document.querySelector('#nickelsResult')
let dimesResult = document.querySelector('#dimesResult')
let quartersResult = document.querySelector('#quartersResult')
let onesResult = document.querySelector('#onesResult')
let fivesResult = document.querySelector('#fivesResult')
let tensResult = document.querySelector('#tensResult')
let twentiesResult = document.querySelector('#twentiesResult')
let fiftiesResult = document.querySelector('#fiftiesResult')
let hundredsResult = document.querySelector('#hundredsResult')



function testFunction(event) {
  // let numberA = Number( document.querySelector('#numberA').value)
  // let numberB = Number( document.querySelector('#numberB').value)

  // numberA = numberA * 0.05
  // let sum = numberA + numberB

  // event.preventDefault()
  // console.log("Hello World")
  // console.log(`NumberA is: `+numberA)
  // console.log(`NumberB is: `+numberB)
  // console.log(`Their sum is: `+sum)

  event.preventDefault()
  let pennies = Number(document.querySelector('#pennies').value)
  let nickels = Number(document.querySelector('#nickels').value)
  let dimes = Number(document.querySelector('#dimes').value)
  let quarters = Number(document.querySelector('#quarters').value)

  let ones = Number(document.querySelector('#ones').value)
  let fives = Number(document.querySelector('#fives').value)
  let tens = Number(document.querySelector('#tens').value)
  let twenties = Number(document.querySelector('#twenties').value)
  let fifties = Number(document.querySelector('#fifties').value)
  let hundreds = Number(document.querySelector('#hundreds').value)

  pennies = (pennies * 0.01)
  nickels = (nickels * 0.05)
  dimes = (dimes * 0.10)
  quarters = (quarters * 0.25)

  ones = (ones * 1)
  fives = (fives * 5)
  tens = (tens * 10)
  twenties = (twenties * 20)
  fifties = (fifties * 50)
  hundreds = (hundreds * 100)

  console.log(pennies)
  console.log(nickels)
  console.log(dimes)
  console.log(quarters)
  console.log("~~~~~~~~~~~~~~~~~~~")
  console.log(ones)
  console.log(fives)
  console.log(tens)
  console.log(twenties)
  console.log(fifties)
  console.log(hundreds)

  let sum = Number(pennies + nickels + dimes + quarters + ones + fives + tens + twenties + fifties + hundreds).toFixed(2)


  console.log(sum)
  result.value = sum
  penniesResult.value = (pennies).toFixed(2)
  nickelsResult.value = (nickels).toFixed(2)
  dimesResult.value = (dimes).toFixed(2)
  quartersResult.value = (quarters).toFixed(2)

  onesResult.value = (ones).toFixed(2)
  fivesResult.value = (fives).toFixed(2)
  tensResult.value = (tens).toFixed(2)
  twentiesResult.value = (twenties).toFixed(2)
  fiftiesResult.value = (fifties).toFixed(2)
  hundredsResult.value = (hundreds).toFixed(2)
}

function clearFunction() {
  form1.reset
  console.log("Clear Button Clicked")
}


calcButton.addEventListener("click", testFunction)
clearButton.addEventListener("click", clearFunction)