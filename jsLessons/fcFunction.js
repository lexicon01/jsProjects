function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }

    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('hello' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

//teacherQuestion('John');

interviewQuestion('hookin');