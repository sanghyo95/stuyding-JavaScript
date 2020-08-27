
function sumToRecursion(number) {    
    if(number == 1)
        return 1;
    else 
        return  number + sumTo_1(number - 1);
}


function sumToFor(number) {
    let sum  = 0;
    for(let i = 1 ; i <= number ; i++) {
        sum += i;
    }
    return sum;
}

function sumToOfficial(number) {
    return (number*(number+1)) / 2;
}

console.log(sumToOfficial(100));

