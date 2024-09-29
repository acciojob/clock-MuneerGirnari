//your JS code here. If required.

const now = new Date();
let container = document.getElementById("timer");
function updateDateTime(){
    let timer = now.toLocaleTimeString();

    let date = now.toLocaleDateString();

    let string = date +" , " + timer;

    container.innerText = `${date}, ${timer}`;
}

setInterval(updateDateTime, 1000);