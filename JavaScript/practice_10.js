// 1. Use a free api from the internet and fetch your app with live data.
let url = 'http://kontests.net/api/v1/all';
let response = fetch(url)
response.then((v)=>{
    return v.json()
}) .then((contests)=>{
    console.log(contests)
    ihtml = " "
    for (item in contests){
        console.log(contests[item])
        ihtml += `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p>Start time: ${contests[item].start_time}</p>
                  <p>End time: ${contests[item].end_time}</p>
                  <a href="${contests[item].url}" class="btn btn-primary">Visit Site</a>
                </div>
              </div>`
            }
            cardContainer.innerHTML = ihtml
})


// Repeat the last question & fetch the note which was saved in the localStorage.
let n = localStorage.getItem('note')
alert("Your note is "+n)

// Create a note saving app which stores your note to localStorage.
let a = prompt('Enter your note')
if(a){
    localStorage.setItem('note', a)
}

// Delete the note from the previous question.
let c = confirm('Do you want to delete note.')
if(c){
    localStorage.removeItem('note')
    alert('note deleted successfully!')
}