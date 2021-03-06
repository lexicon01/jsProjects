var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};


// THIS IS CALLED A FUNCTION CONSTRUCTOR
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//Here your adding the Method=function inside object cal/Age
// thru the prototype that every object has chea
// proves inheritance works ********
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

//Here your adding a property to the function constructor
Person.prototype.lastName = 'Smith';
// THIS IS HOW YOU FILL IN A FUNCTION CONSTRUCTOR
// BY ADDING A new ____<= [name of obj constructor]
var john = new Person('john', 1990, 'teacher');
var jane = new Person('jane', 1968, 'designer');
var mark = new Person('Mark', 1948, 'retired')

jane.lastName = 'muligan';
mark.lastName = 'betencort';

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
