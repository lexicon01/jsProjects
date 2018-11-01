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
            console.log('hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var alexQuestion = interviewQuestion(); // asigning the function and leaving it empty and passing a paramiter is 1 way of getting it to work..smh 
//teacherQuestion('John');
//designerQuestion('alex');
// you can do designerQuestion to multiple names

//interviewQuestion('teacher')('mark');

alexQuestion('alex');

