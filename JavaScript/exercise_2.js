// use js to create a snake, water, gun game . The game should ask you to enter S, W and G. The computer should be able to randomly generate S, W and G and declare win or loss using alert functions...
// if required use confirm and prompt...

let user = prompt("Enter S, W and G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user)=>{
    if(cpu === user) {
        return  "Nobody wins"
    }
    else if (cpu === "S" & user === "W"){
        return "cpu"
    }
    else if (cpu === "G" & user === "W"){
        return "user"
    }
    else if (cpu === "G" & user === "S"){
        return "cpu"
    }
    else if (cpu === "S" & user === "G"){
        return "user"
    }
    else if (cpu === "W" & user === "S"){
        return "user"
    }
    else if (cpu === "W" & user === "G"){
        return "cpu"
    }
}
let result = match (cpu, user)
//console.log('The winner is:' + result)
document.write (`CPU:${cpu} <br> User:${user} <br> The winner is: ${result.toUpperCase()}`);