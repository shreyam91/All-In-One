let a = "Monu"
let b = "Sonu"
a = a+b;
b = a.substring(0,a.length-b.length);
a = a.substring(b.length);
console.log("a=",a);
console.log("b=",b);