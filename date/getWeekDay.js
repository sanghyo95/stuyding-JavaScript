function getWeekDay(date) {
    switch(date.getDay()){
        case 0: return "SU"; 
        case 1: return "MO"; 
        case 2: return "TU";
        case 3: return "WE";
        case 4: return "TH";
        case 5: return "FR";
        case 6: return "SA";
    }
}

let date = new Date(2012, 0, 4);
console.log(getWeekDay(date));