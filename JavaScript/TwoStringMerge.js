str1 = "abcdef"
str2 = "123"

let mergedString = ""

let n = str1.length
let m = str2.length

let length = Math.min(n,m);
for(let i=0; i<length;i++){
    mergedString += str1[i] + str2[i]
}
mergedString += str1.slice(length) + str2.slice(length)
console.log(mergedString);
