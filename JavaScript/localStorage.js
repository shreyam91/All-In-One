let key = prompt("Enter key ")
let value = prompt("Enter value ")

localStorage.setItem(key, value) //srore key , value in localStorage.
//localStorage.removeItem(key) // removes key, value from localStorage.
// localStorage.getItem(key) // gets the value from localStorage by using key. 
//localStorage.clear() // clear or delete everything from localStorage.
//localStorage.key(index) // get the on a given position...
//localStorage.length() // get the length of key 

console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

/***************************************
*                                      *
*            sessionStorage            *
*                                      *
***************************************/

window.onstorage = (e) => {
    alert('changed')
    console.log(e)
} /// it is used to alert when user changes the value in storage.....
