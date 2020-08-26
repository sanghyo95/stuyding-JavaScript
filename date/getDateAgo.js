function getDateAgo(date,day) { 
   let dateCopy = new Date(date);

   dateCopy.setDate(date.getDate() - day);
   return dateCopy.getDate();
}


let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
console.log( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
console.log( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)
