//input: a number -e.g. 5
//output: factorial of the given number -e.g. 125

/*
factorial of 5:  5 * 4 * 3 * 2 * 1 = 120
*/

//Recursion
const factorial = function(num) {
    //base case
    if(num <= 0) {
        return 1;//returns 1 instead of 0 because multiplying by 0 would give a total value of 0.
    }

    //calling iteself
    return factorial(num - 1) * num;
};

//Iteratively
const factorialIterate = function(num) {
    let factNum = 1;

    for(let i = num; i > 0; i--) {
        factNum = factNum * i;
    }

    return factNum;
};


console.log(factorial(5));
console.log(factorialIterate(5));