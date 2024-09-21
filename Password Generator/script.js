const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet) // If UpperCase is checked than pass the upperSet
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet) // If LowerCase is checked than pass the lowerSet
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet) // If Number is checked than pass the numberSet
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet) // If symbol is checked than pass the symbolSet
    }
    if (password.length < totalChar.value) {
        return generatePassword(password) //recursion for generate specified digits of password...
    }

    // console.log(password);
    passBox.innerText = truncateString(password, totalChar.value); // To display the password on page
}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }

)

// Trim the character from password above value of digits...
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}