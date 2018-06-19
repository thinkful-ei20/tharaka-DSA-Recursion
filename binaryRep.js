//input: decimal number -e.g. 5
//output: binary representation of a given number -e.g. 101

//user % 2 to get 1s and 0s

/*
5/2 = 2         5%2 = 1
2/2 = 1         2%2 = 0
1/2 = 0         1%2 = 1
*/

//Recursion
const binaryRep = function(num) {

    //base case
    if(num <= 0) {
        return '';
    }

    let binary = Math.floor(num % 2); //1 and 0s

    //calling itself
    return binaryRep(Math.floor(num/2)) + binary;
};


//Iteratively
const binaryRepIterative = function(num) {
    let binaryStr = '';

    while(num > 0 ) {
        binaryStr = binaryStr + Math.floor(num % 2); //1 and 0s
        num = Math.floor(num/2);
    };
    return binaryStr;
}

console.log(binaryRep(5));
console.log(binaryRepIterative(5));