const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const DEGREE_OFFSET = 90;

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + DEGREE_OFFSET;
    // Handle flicker for second hand by checking for reset
    if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees =
        (minutes / 60) * 360 + (seconds / 60) * 6 + DEGREE_OFFSET;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees =
        (hours / 12) * 360 + (minutes / 60) * 30 + DEGREE_OFFSET;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
