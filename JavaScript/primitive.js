// Primitive in JS
// N- NULL , N-NUMBER , S-STRING ,S-SYMBOL , B-BOOLEAN , B-BIGINT , U-UNDEFINED
let a = 23; // Number 
let b = null;  // NUll 
let c = true; // also false  (Boolean)
let d = BigInt("987"); // bigint 
let e = "Javascript"; // string
let f = Symbol("I m a nice symbol");  // symbol
let g = undefined; // also leave blank

console.log(a, b, c, d, e, f, g);
console.log(typeof c)

// Objects in  JS 
const item = {
    "Shreyam" : true,
    "shubh" :false,
    "sunshine" :23,
    "sunset" : undefined
}

console.log(item["sunset"])