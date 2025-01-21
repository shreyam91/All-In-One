// create a navbar and change the color of its first element to red.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// create a table without tbody now use "view page source " button to check whether it has tbody or not ...

// create an element with 3 children .Now change the color of the first & last child to green.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// write a js code to change background of all <li> tags to light green.
Array.from(document.getElementsByTagName("li")).forEach((element)=> {
    element.style.background = "skyblue";
})