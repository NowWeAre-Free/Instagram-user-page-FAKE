const actualTime = () => {

const now = new Date();

let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

const clock = document.querySelector('#clock');

clock.innerText = `${hours}:${minutes}`;

}

setInterval(actualTime, 1000);