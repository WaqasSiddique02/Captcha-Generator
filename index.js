function generateString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''; 
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

document.querySelector(".rebtn").addEventListener("click", regenerateButton);
var randomText = document.querySelector("#text");

function regenerateButton() {
    randomText.innerHTML = generateString(5);
}

var userInput = document.querySelector("input");

function checkInput() {
    var trimmedRandomText = randomText.innerHTML.trim();

    if (userInput.value === trimmedRandomText) {
        alert("Correct");
    } else {
        alert("Incorrect.. Try Again");
    }
}

document.querySelector(".subbtn").addEventListener("click", checkInput);