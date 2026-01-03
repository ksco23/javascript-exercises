const fibonacci = function(a) {
    if(a < 0){
        return 'OOPS';
    }
    
    const fibArr = [0, 1, 1];

    while(typeof fibArr[a] === 'undefined'){
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }

    return fibArr[a];
};

// Do not edit below this line
module.exports = fibonacci;
