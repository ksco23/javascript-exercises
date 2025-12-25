const removeFromArray = function(arr, ...toRemove) {
    /*return arr.filter((item) => {
        let shouldKeep = true;
        for(const toRemoveItem of toRemove){
            if(item === toRemoveItem){
                shouldKeep = false;
                break;
            }
        }
        return shouldKeep;
    });*/

    return arr.filter(item => !toRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
