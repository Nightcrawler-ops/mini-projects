// 10 Random fortune teller response
const fortune1 = "You will have a great day!";
const fortune2 = "A surprise is waiting for you.";
const fortune3 = "You will meet someone special.";
const fortune4 = "Good news will come to you soon.";
const fortune5 = "You will find success in your endeavors.";
const fortune6 = "A new opportunity will present itself.";
const fortune7 = "You will overcome a challenge.";
const fortune8 = "Happiness is on the horizon.";
const fortune9 = "You will make a new friend.";
const fortune10 = "A journey is in your future.";

let fortuneMessage = "";

const fortune = Math.floor(Math.random() * 10) + 1;

if (fortune === 1) {
    fortuneMessage = fortune1;
} else if (fortune === 2) {
    fortuneMessage = fortune2;
} else if (fortune === 3) {
    fortuneMessage = fortune3;
} else if (fortune === 4) {
    fortuneMessage = fortune4;
} else if (fortune === 5) {
    fortuneMessage = fortune5;
} else if (fortune === 6) {
    fortuneMessage = fortune6;
} else if (fortune === 7) {
    fortuneMessage = fortune7;
} else if (fortune === 8) {
    fortuneMessage = fortune8;
} else if (fortune === 9) {
    fortuneMessage = fortune9;
} else if (fortune === 10) {
    fortuneMessage = fortune10;
} 

console.log(fortuneMessage)