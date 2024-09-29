//your JS code here. If required.

const now = new Date();
let container = document.getElementById("timer");
function updateDateTime(){
    let timer = now.toLocaleString();

    container.innerText = `${timer}`;
}

setInterval(updateDateTime, 1000);