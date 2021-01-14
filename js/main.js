// startOfEachMonth represents the day of the year
// (0 - 364) on which each month starts
const startOfEachMonth = {
    january: 0,
    february: 31,
    march: 59,
    april: 90,
    may: 120,
    june: 151,
    july: 181,
    august: 212,
    september: 243,
    october: 273,
    november: 304,
    december: 334
};

// signsByStartDay represents each day of the year
// on which a new sign starts
const signsByStartDay = {
    '20': 'aquarius',
    '50': 'pisces',
    '80': 'aires',
    '110': 'taurus',
    '141': 'gemini',
    '172': 'cancer',
    '204': 'leo',
    '235': 'virgo',
    '266': 'libra',
    '296': 'scorpio',
    '326': 'sagittarius',
    '356': 'capricorn'
};

const getSign = (month, day) => {
    month= document.querySelector("#monthBorn").value.toLowerCase();
    day = Number(document.querySelector("#dayBorn").value);
    /*Make sure the month is a valid one*/
        
        if (!month || !day) {
            document.querySelector("#yourSign").innerHTML = "Please enter valid month/day"
        } else if (!startOfEachMonth[month] || day>=32) {
            document.querySelector("#yourSign").innerHTML = "Not a valid month/day" ;
         } else{
            document.querySelector("#yourSign").innerHTML= signForYearDay(monthDayToYearDay(month, day))
        } 
       
                
}

const signForYearDay = (yearDay) => {
    let sign;
    while (sign === undefined) {
        sign = signsByStartDay[yearDay];
        yearDay--;
    }
    return sign
}

const monthDayToYearDay = (month, day) => {
    month = document.querySelector("#monthBorn").value.toLowerCase();
    day = Number(document.querySelector("#dayBorn").value);
    let total = startOfEachMonth[month] + day;
    return total;
}

document.querySelector("#submit").addEventListener("click", getSign);


