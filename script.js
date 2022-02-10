const userEntry = document.getElementById('user-input');
const check = document.getElementById('user-submit');
const mirror = document.getElementById('mirror');
const result = document.getElementById('result');

check.addEventListener('click', palindromes);
userEntry.addEventListener('keyup', mirrorFunc);

function mirrorFunc() {
    let string = userEntry.value;
    let stringArray = Array.from(string);
    stringArray.reverse();
    let mirrorArray = stringArray.join("");
    mirror.textContent = mirrorArray;
}
//add listener to text box, key down, execute mirror function

function palindromes() {
    let string = userEntry.value;
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const noPunc = string.replace(regex, '');
        
    let array = Array.from(noPunc);
     
    let lowerCase = array.map(element => element.toLowerCase());
    
    let noSpace = lowerCase.filter((item) => item !== ' ');
    
    let reverse = noSpace.map(element => element);
    reverse.reverse();

    //have to return false in if statement it finds unequal value otherwise loop continues and if the last letters are = returns true.
    for (let i = 0; i < noSpace.length; i++) {
        if(noSpace[i] !== reverse[i]) {
            result.textContent = "'" + string + "'" + " ain't no palindrome.";
            userEntry.value = "";
            return false;
        } else result.textContent = "'" + string + "'" + " is a palindrome!";
      }
      userEntry.value = "";
}