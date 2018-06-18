//Input: an array that contains an unknown set of numbers
//outpt: an array with each input value doubled

//Recursion
const arrayDouble = function(array) {
    //base case
    if(array.length === 0) {
        return [];
    }

    //calling itself
    return [(array[0]*2),...arrayDouble(array.slice(1)) ];
}



//Iteratively
const arrayDoubleIterative = function(array) {
    let newArry = [];

    for(let i = 0; i < array.length; i++) {
        newArry.push(array[i] * 2);
    }

    return newArry;
}   


let numbers = [2, 3, 6];

console.log(arrayDouble(numbers));

console.log(arrayDoubleIterative(numbers));