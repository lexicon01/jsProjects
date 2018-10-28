var john = {
    name: 'john',
    yearOfBirth: 19998,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var john = new Person('john', 1998, 'teacher');
