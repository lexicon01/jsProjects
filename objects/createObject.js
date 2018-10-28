/*

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
*/

//Object.create **** A DIFFERENT WAY TO CREAT AN OBJECT ****
var personProto = {
    calculateAge: function() {
        console.log(2016-this.yearOfBirth);
    }
};
//Object.create
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1998;
john.job = 'teacher';

//Object.create
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

//Object.creat builds and object that inherents directly from
//the one that we past into the first argument

//function constructor newly created ovject inherits from constructor prototype property

//benifit of Object.creat is that you can impliment complex inheritance structures easier way
// enstead of function constructors ...allows directly specify witch object should be a prototype.

/******  FUNCTION CONSTRUCTORS & OBJECT.CREATE ARE THE MOST COMMON WAY 
 *          YOULL FIND ONLINE WHEN SEARCHING FOR OBJECT RELATED INFO  ****
 * 
 *      MOST POPULAR WAY IS FUNCTION CONSTRUCTOR ****
 */

