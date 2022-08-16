const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

btnStart.addEventListener('click', () => {
    intervalId = setInterval(() => {
        body.style.background = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true;
})

btnStop.addEventListener('click', () => {
    clearInterval(intervalId);
    btnStart.disabled = false;
})
