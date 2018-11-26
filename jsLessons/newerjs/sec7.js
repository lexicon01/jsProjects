var person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}