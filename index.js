const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    let passwordLong = document.getElementById("number-el").valueAsNumber
    let password = ""
    for (let i = 0; i < passwordLong; i++) {
        password += characters[Math.floor(Math.random()* characters.length)] 
    }
    return password
}

let password1El = document.getElementById("pass1-el")
let password2El = document.getElementById("pass2-el")

function assignPasswords() {
    password1El.textContent = generatePassword()
    password2El.textContent = generatePassword()
}


function copyToClipboard() {
    let textCopied = document.getElementById("pass1-el")
    console.log(textCopied.textContent)
    textCopied.select
    navigator.clipboard.writeText(textCopied)
    alert("Copied the text: " + textCopied.textContent)
}
