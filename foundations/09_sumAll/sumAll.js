const sumAll = function(arg1, arg2) {
    
    if(arg1 >= 0 && arg2 >= 0 && Number.isInteger(arg1) && Number.isInteger(arg2)){
        const nextDirection = arg1 < arg2 ? 1 : -1;
        let sum = arg1 + arg2;
        let next = arg1 + nextDirection;

        while(next !== arg2){
            sum += next;
            next += nextDirection;
        }
        return sum;
    }

    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
