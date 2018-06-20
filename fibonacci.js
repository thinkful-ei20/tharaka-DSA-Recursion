//input: a number -e.g. 7
//output: a sequence of fibonacci numbers of the given number -e.g. 1 1 2 3 5 8 13
//output: nth number of the given n number -e.g. 13

/*
1: 1
2: 1 1
3: 1 1 2
4: 1 1 2 3
5: 1 1 2 3 5
6: 1 1 2 3 5 8
7: 1 1 2 3 5 8 13
8: 1 1 2 3 5 8 13 21
*/

//Recursion
const fibonacci = function(num) {//Dont need an array
    //base case
    if(num <= 0) {
        return 0;
    }

    if(num === 1) {
        return 1;
    }

    let seq = '';
    seq = num 

    //calling itself
    return fibonacci(num - 1) + fibonacci(num - 2);
};


console.log(fibonacci(8));
