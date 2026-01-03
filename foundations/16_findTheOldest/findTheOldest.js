const findTheOldest = function(arr) {
    const curYear = new Date().getFullYear();
    const sortedArr = arr.sort((a, b) => {
        const aAge = (a.yearOfDeath || curYear) - a.yearOfBirth;
        const bAge = (b.yearOfDeath || curYear) - b.yearOfBirth;
        return bAge - aAge;
    });

    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
