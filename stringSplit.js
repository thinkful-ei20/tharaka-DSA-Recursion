//input: a string
//output: string seperated using the given seperator

//Recursion
const stringSeperator = function(str, seperator) {
    //base case
    if(str.length === 0) {
        return "";
    }

    //calling iteself
    if(str.length === 1) {
        return `${str.charAt(0)}` + stringSeperator(str.slice(1));
    } else {
        return `${str.charAt(0)}${seperator}` + stringSeperator(str.slice(1), seperator);
    }
}

//Iteratively
const stringSeperatorIterative = function(str, seperator) {
    let newStr = '';

    for(let i = 0; i < str.length; i++) {
        if(i === str.length - 1) {
            newStr = newStr + str.charAt(i);
        } else {
            newStr = newStr + str.charAt(i) + seperator;
        }
    }

    return newStr;
}

console.log(stringSeperator('hello', '#'));
console.log(stringSeperatorIterative('hello', '#'));