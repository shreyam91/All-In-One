console.log(document.cookie);
document.cookie ="name = hello world";
document.cookie ="hello india";

let key = prompt('Enter the key you want to connect')
let value = prompt('Enter the value you want to enter')

document.cookie =`${encodeURIComponent(key)}${encodeURIComponent(value)}`
console.log(document.cookie)

// this is used to encrypt the data :- encodeURIComponent
// this is used to decrypt the data :- decodeURIComponent