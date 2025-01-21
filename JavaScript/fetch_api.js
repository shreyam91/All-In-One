// let p = fetch("https://v2.jokeapi.dev/joke/Any")
// p.then((value1)=>{
//     console.log(value1.status) // status is printed
//     console.log(value1.ok) // ok is printed
//     console.log(value1.headers) // headers is printed
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })

/***************************************
*                                      *
*               Post api               *
*                                      *
***************************************/
const createToDo = async(todo) => {
let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' 
    },
    body : JSON.stringify(todo
        // {title: 'foo',
        // body: 'bar',
        // userid: 1,}
    ),
}
let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
let response = await p.json()
return response
}
    // .then   ((response)=> response.json())
    // .then((json)=> console.log(json))   

const mainFunc = async() => {
    let todo = {
        title: 'foo',
        body: 'bar',
        userid: 1,
    }
    let todo1  =  await createToDo(todo);
    console.log(todo1)
}

mainFunc()