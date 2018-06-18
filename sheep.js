//Input Number of sheeps
//Output message Another sheep jump over the fence util not sheeps left

//Recursion
const sheepCount = function(num) {
    //base case
    if(num <= 0) {
        return '';
    }

    let message = `${num} - Another sheep jump over the fence\n`;

    //calling itself 
    // return sheepCount(num - 1) + message; //Gives accending order
    return message + sheepCount(num - 1);
};

console.log(sheepCount(3));

//Iteratively
const sheepCountNorm = function(num) {
    for(let i = num; i > 0; i--) {
        console.log(`${i} - Another sheep jump over the fence\n`);
    }
};

console.log(sheepCountNorm(3));