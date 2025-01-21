const changeBgRed = () => {
    document.body.firstElementChild.getElementsByClassName.background = "red" // change bg color
}


let b = document.body
console.log("First child of b is: " , b.firstChild)
console.log("First Element child of b is: " , b.firstElementChild)

// table_navigation
let t = document.body.firstElementChild.firstElementChild
console.log(t) // show table
console.log(t.rows)// show all rows
console.log(t.caption) // print caption
console.log(t.tHead.firstElementChild) // print heading
console.log(t.tFoot) // print foot

// print typeof document and typeof window

