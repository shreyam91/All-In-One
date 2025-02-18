// <!--- February 17 --->
// const obj = {name:"JS"}
// const arr = ["name"]
// obj[arr] = "React"
// console.log(obj); //{name: 'React'}

// const obj = {name:"JS"}
// const arr = ["name","age"]
// obj[arr] = "React"
// console.log(obj); //{ name: 'JS', 'name,age': 'React' }


// <!---- February 18 ---- >
// let a = NaN;
// let b = NaN;
// console.log(a==b); //false
// console.log(a===b); //false
// console.log(isNaN(a) && isNaN(b)); //true


// let n = "10";
// console.log(n+1) //101 because of String + is used as concatination
// console.log(n-1) //9 because of - 
// console.log(++n) //11
// console.log(n++) //11

// let a = 10;
// let b = a++;
// console.log(a); //11
// console.log(b); //10 
// console.log(a+b); //21

// left --> right
// let name = "JS"; 
// name[1]="Q";           
// console.log(name);

// let name = "JS"; 
// name = "JQ";     
// console.log(name); //JQ

// let num = 1;
// const sum = ++num + num++;  //4
// console.log(sum);

// let num = 1;
// const sum = num++ + num++;  //3
// console.log(sum);

// console.log("2"+1+1); //211
// console.log(2+1+"1"); //31
// console.log(1-"1"); //0

// console.log("S"-1); //NaN

// [a]=[2,3,4,5];
// console.log(a); //2

// [...b]=[1,2,3,4,5];
// console.log(b) //[1,2,3,4,5]

// const num = parseInt('7*6', 2);
// console.log(num); //7

// const a = "frontend";
// const b = "backend";
// const result1 = a&&b; //takes only second value.    
// const result2 = !!(a&&b);
// console.log(result1) //backend
// console.log(result2) //true

// const name = 'Monu';
// age = 21;

// console.log(delete name); // false {because variables declared with the var, const, or let keywords cannot be deleted using the delete operator.}
// console.log(delete age); // true {age is added as a property in global object.}

console.log(0 && "hello");  //0
console.log(5 && "hello");  //hello
console.log("" && "hello"); //""
console.log("hel" && "hello"); //hello