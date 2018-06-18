//Input: an array that contains an unknown set of numbers
//outpt: an array with each input value doubled

//Recursion
const arrayDouble = function(array) {
    //base case
    if(array.length === 0) {
        return [];
    }

    let newArry = [];
    newArry.push(array[0] * 2);
    // newArry.push("");
    // isArr = Object.prototype.toString.call(newArry) == '[object Array]';
    // console.log(isArr);

    //calling itself
    return newArry + arrayDouble(array.slice(1));
}


let numbers = [2, 3, 6];
// isArr = Object.prototype.toString.call(numbers) == '[object Array]';
// console.log(isArr);
console.log(arrayDouble(numbers));

//Iteratively
const arrayDoubleIterative = function(array) {
    let newArry = [];

    for(let i = 0; i < array.length; i++) {
        newArry.push(array[i] * 2);
    }

    return newArry;
}   

console.log(arrayDoubleIterative(numbers));