const button = document.getElementsByClassName('btn');
const result = document.getElementById('result');


const checkPalindrome = str => {
    let regex = /\W/g;
    let string = str.replace(regex, '').toUpperCase();
    string = string.replace('_', '');
    
    let checkArray = [];
    for (let i=0; i<string.length; i++) {
        if (string[i] == string[string.length-i-1]) {
          checkArray.push('yes')
        } else {
          checkArray.push('no')
        }
    }
    
    if (!checkArray.includes('no')) return true;
    return false;
}

document.getElementById('form').addEventListener("submit", function(e) {
    e.preventDefault();
    const word = document.getElementById('palindrome').value;
    if (checkPalindrome(word)) {
        result.textContent = "YattaY! Palindrome!"
    } else {
        result.textContent = 'Nope. Pas palindrome.'
    }

});



//button.onclick = checkPalindrome(word);
