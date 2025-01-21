// using for loop to print a string ....
let fr = "Shreyam"
for(i=0; i<fr.length; i++)
console.log(fr[i])

// print of this javascript code : console.log("shr\"".length)
let str = "shr\""
console.log(str.length)

// explore the includes,starts with & ends with function of a string 
const sentence = 'The quick brown fox jumped over the lazy dog';
const word = 'cat';
console.log(sentence.includes(word))
console.log(`the word "${word}"${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//starts with function
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("world", 6));

// ends with function
let text1 = "Hello world";
console.log(text1.endsWith("world"));

// convert a given string to lowercase
let char = "SHREYAM"
console.log(char.toLowerCase())

// extract the amount out of this string "Please give Rs 1000"
let amount = 'Please give Rs 1000'
let rupee = Number.parseInt(amount.slice('Please give Rs'.length))
console.log(rupee)
console.log(typeof rupee)

//change 4th character of a given string 
let friend ="Priyanka"
friend[3] = "M"
console.log(friend)  // not possible bcz string is immutable