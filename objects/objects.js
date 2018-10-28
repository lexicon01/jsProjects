var john = {
    name: 'john',
    yearOfBirth: 19998,
    job: 'teacher'
};


// THIS IS CALLED A FUNCTION CONSTRUCTOR
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


// THIS IS HOW YOU FILL IN A FUNCTION CONSTRUCTOR
// BY ADDING A new ____<= [name of obj constructor]
var john = new Person('john', 1998, 'teacher');

console.log(john.yearOfBirth);