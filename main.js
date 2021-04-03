// DOM elements
const resultE1 = document.getElementById('result'); 
const lengthE1 = document.getElementById('length'); 
const uppercaseE1 = document.getElementById('uppercase'); 
const lowercaseE1 = document.getElementById('lowercase'); 
const numberE1 = document.getElementById('number'); 
const symbolsE1 = document.getElementById('symbols'); 
const generateE1 = document.getElementById('generate'); 
const clipboardE1 = document.getElementById('clipboard'); 

const randomFun = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateE1.addEventListener('click', ()=>{
    const length = +lengthE1.value
    console.log( typeof length)
     
})
//Generator functions
function getRandomLower() {
  return  String.fromCharCode(Math.floor( Math.random() * 26) +97)
}
function getRandomUpper() {
    return  String.fromCharCode(Math.floor( Math.random() * 26) +65)
  }
  function getRandomNumber() {
    return  String.fromCharCode(Math.floor( Math.random() * 10) +48)
  }
  function getRandomSymbol() {
    const symbols = '!@$#%^&*()_+?><{}|*-'
    return symbols[Math.floor(Math.random()* symbols.length)];
  }
//console.log(getRandomSymbol());