function minuteToSecond(minute){
    const second = minute * 60;
    return second;
}
const dadaMinutes = 4;
const dadaSecond = minuteToSecond(dadaMinutes);
console.group(dadaSecond);