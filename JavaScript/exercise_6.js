submit.addEventListener("click", (e) =>
{
    e.preventDefault(); // to prevent default behavior....
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("Todo", JSON.stringify([titlec,descc]))
    console.log("e");
    todo.innerHTML =`
    <h1> ${titlec}</h1>
    <p> ${descc} </p>`
    title.value = " "
    desc.value = " "
})


deleteBtn.addEventListener("click", (e) =>
{
    e.preventDefault(); // to prevent default behavior....
    localStorage.removeItem("Todo")
    todo.innerHTML = " "
})
