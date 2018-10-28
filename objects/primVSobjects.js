//Primitives VS Objects


//PRIMITIVES
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);




//OBJECTS
var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// FUNCTION
var age = 27;
var obj = {
    name: 'leo',
    city: 'lexicon'
}

function change(a, b ) {
    a = 20;// primimitive doesnt change when (age) is called
    b.city = 'san jose';// b.city calls the object outside of the functio
                        // n becuase of the name city.. is what i gather.. so you have to be carfule
};

change(age, obj);
console.log(age);
console.log(obj.city);