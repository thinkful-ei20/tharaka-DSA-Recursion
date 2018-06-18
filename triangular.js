//input: a number
//output: outputs the triangular number of a given number

//Recursion
const triangularNum = function(num) {
    //base case
    if(num <= 0) {
        return 0;
    }
    //calls itself
    return num + triangularNum(num - 1)
}

//Iteratively
const triangularNumIterative = function(num) {
    return ((num * (num + 1)) / 2); 
}

console.log(triangularNum(17));
console.log(triangularNumIterative(17));