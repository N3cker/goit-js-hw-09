import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const pickerInput = document.getElementById('datetime-picker');
const btnStart = document.querySelector('.start-button');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

btnStart.disabled = true;

let inputDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const pickedDate = selectedDates[0];

        const currentDate = new Date();
        inputDate = selectedDates[0];
        
        if(pickedDate.getTime() <= currentDate.getTime()) {
            alert("Please choose a date in the future");
            btnStart.disabled = true;
        }else {
            btnStart.disabled = false;
        }
    },
};


flatpickr(pickerInput, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

const convertDate = time => String(time).length > 1 ? time:`0${time}`;

const updateCounter = (time) => {
    timerDays.innerText = convertDate(time.days);
    timerHours.innerText = convertDate(time.hours);
    timerMinutes.innerText = convertDate(time.minutes);
    timerSeconds.innerText = convertDate(time.seconds);
}


btnStart.addEventListener('click', () => {
    const intervalId = setInterval(() => {
        const currentDate = new Date();
        const remainingTime = inputDate.getTime() - currentDate.getTime();
        const convertedTime = convertMs(remainingTime);
        updateCounter(convertedTime);

        if(remainingTime < 1000) {
            clearInterval(intervalId)
        }
    }, 1000)
});