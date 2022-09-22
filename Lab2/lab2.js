function specialYears(inputYear) {
    const firstTwoDigitYear =  Number(String(inputYear).substring(0,2)); 
    let addValue = 0;
    if(firstTwoDigitYear == 16){
        addValue  = 6;
    }else if(firstTwoDigitYear == 17){
        addValue = 4;
    }else if(firstTwoDigitYear == 18){
        addValue = 2;
    }else if(firstTwoDigitYear == 20){
        addValue = 6
    }else if(firstTwoDigitYear == 21){
        addValue = 4;
    }else{
        addValue = 0;
    }
    return addValue;
}


function getDayOfTheWeek(year,month,day){
    const lastTwoDigitYear = String(year).substring(2); 
    const sevensInDigit = Math.trunc(Number(lastTwoDigitYear) / 12); // step1
    const reminderTwelve = Number(lastTwoDigitYear) % 12; // step2
    const foursInReminder = Math.trunc(reminderTwelve / 4); //step3 
    const monthCode = {January:1,February:4,March:4,April:0,May:2,June:5,July:0,August:3,September:6,October:1,November:4,December:6};
    let specialMonthInLeapYear = 0;

    if(isLeapYear(year) == true && (month == "January" || month == "February")){
        specialMonthInLeapYear = -1; 
    }else{
        specialMonthInLeapYear = 0; 
    }

    const addAll = sevensInDigit + reminderTwelve + foursInReminder + day + (monthCode[month]) + specialYears(year) + specialMonthInLeapYear; 
    const reminderSeven = addAll % 7; 
    const dayCode = {0:"Saturday",1:"Sunday",2:"Monday",3:"Tuesday",4:"Wednesday",5:"Thursday",6:"Friday"};
    const dayOfWeek = dayCode[reminderSeven];
    return dayOfWeek;
}

function isLeapYear(year){
    if(0 == year % 400 || (0 == year % 4 && 0 != year % 100)){
        return true;
    }else{
        return false;
    }
}

function makeCalendar() {
    const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    for (i = 0; i<= monthDays.length - 1; i++){
        for (j = 1; j <= monthDays[i]; j++){
            console.log(`${j}-${i+1}-2022 is ${getDayOfTheWeek(2022,months[i],j)}`);
        }
    }
}

module.exports = {getDayOfTheWeek,isLeapYear,makeCalendar,specialYears};



/* another way
function makeCalendar() {
    const dates = [];
    let currentDate = new Date(2022,0,1);
    let endDate = new Date(2022,11,31);
    const addDays = function (days) {
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }

    const months = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];
    for (i = 0;i <= dates.length - 1;i++){
        const dayInWeek = getDayOfTheWeek(dates[i].getFullYear(),months[dates[i].getMonth()],dates[i].getDate());
        console.log(`${dates[i].getDate()}-${(dates[i].getMonth() + 1)}-${dates[i].getFullYear()} is ${dayInWeek}`);
    }
}
*/
