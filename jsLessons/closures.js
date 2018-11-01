//  ************* 
//************ Closures ******************** */

/*              CLOSURES SUMMARY
     AN INNER FUNCTION HAS ALWAYS ACCESS TO THE 
     VARIABLES AND PARAMETERS OF ITS OUTER FUNCTION, 
     EVEN AFTER THE OUTER FUNCITON HAS RETURNED.  */


function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
 retirementUS(1990);

 var retirementGermany = retirement(65);
 var retirementIceland = retirement(67);


 retirementGermany(1990);
 retirementUS(1990);
 retirementIceland(1990);
 
 
 /*  
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
 */

 /*
            YOUR ATTEMPT ...LOL 

 function askjob(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        } 
    } else askjob(job) 
        if (job === 'teacher') {
            return function(name) {
                console.log(name + 'what subject do you teach, ' + name + '?');
            }
        } else return function(name) {
            console.log('hello' + name + ', what do you do?');
        }
    }
 }
 
  var workQ = askjob('designer');

  */

  //workQ('designer');

  function interviewQuestion(job) {
      return function(name) {
          if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
          } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
          }  else {
            console.log('hello ' + name + ', what do you do?');
          }
      }
  }
 
 //retirement(66)(1998);

 interviewQuestion('teacher')('john');