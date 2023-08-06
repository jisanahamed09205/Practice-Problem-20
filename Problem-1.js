function hourToMinute(hour){
    const minute = hour * 60;
    return minute;
}
const dadaHour = 1;
const dadaMinute = hourToMinute(dadaHour);
console.log(dadaMinute, "Minutes")