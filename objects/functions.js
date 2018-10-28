/*  * a function is an instance of the object type;
    * a function behaves like any other object;
    * we can store functions in a variable;
    * we can pass a function as an argument to another function;
    * we can return a function from a function.
*/ 


// Lecture: passing functions as aarguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i > arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

var ages = rrayCalc(years, calculateAge);

console.log(ages);