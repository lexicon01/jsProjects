/*  * a function is an instance of the object type;
    * a function behaves like any other object;
    * we can store functions in a variable;
    * we can pass a function as an argument to another function;
    * we can return a function from a function.
*/ 


// Lecture: passing functions as aarguments 65 Re do this many times..

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) { // the < operator was set too > so my code didnt work 
        arrRes.push(fn(arr[i]));           // check for these in the future....
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}


function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {

    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
console.log(fullAges);
console.log(years);