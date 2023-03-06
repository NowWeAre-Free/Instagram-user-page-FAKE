const actualTime = () => {

const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes();

const time = document.querySelector('#time');

time.innerText = `${hour}:${minutes}`;

}

setInterval(actualTime, 1000);