//input: string
//output: reverse of that string

//Recursion
const reverseString = function(str) {
    //base case
    if(str.length === 0) {
        return '';
    }

    //calling itself 
    return reverseString(str.slice(1)) + str.charAt(0);
};


//Iteratively
const reverseStringIterative = function(str) {
    let newStr = '';

    for(let i = str.length; i >= 0; i--) {
       newStr = newStr + str.charAt(i);
    }

    return newStr;
}


let word = 'Hel lo';

// console.log(reverseString(word));
console.log(reverseStringIterative(word));

