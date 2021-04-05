// DOM elements
var length;
const resultE1 = document.getElementById('result'); 
const lengthE1 = document.getElementById('length'); 
const uppercaseE1 = document.getElementById('uppercase'); 
const lowercaseE1 = document.getElementById('lowercase'); 
const numberE1 = document.getElementById('numbers'); 
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
     length = +lengthE1.value
    const hasLower = lowercaseE1.checked;
    const hasUpper = uppercaseE1.checked;
    const hasNumber = numberE1.checked;
    const hasSymbol = symbolsE1.checked;
   resultE1.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length)
     
});
// copy password to clickboard
clipboardE1.addEventListener('click', () => {
  const textarea =  document.createElement('textarea');
  const password = resultE1.innerText;

  if(!password){
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clicpboard');
})

// Generate Password Function
function generatePassword(lower,upper,number,symbol){
    //1. inita password
    //2. filterout unchecked
    //3 Loop over the length call generator function for each type

    let generatedPassword = '';
    const typescount = lower + upper + number + symbol;
    console.log('TypesCount' +typescount);
    const typeArr = [{lower} ,{upper},{number },{symbol} ].filter (
      
      item => Object.values(item)[0]
     
      )
    console.log('Typearry' +typeArr);

    if(typescount === 0){
      return '';
    }
    for(let i=0; i< length; i+= typescount){
        typeArr.forEach(type => {
          const funcName = Object.keys(type)[0];
           console.log( 'funcName:', funcName);
           generatedPassword += randomFun[funcName]();
        })
    }
    const finalPassword = generatedPassword.slice(0,length);
    return finalPassword;
}
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