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
 
 
 
 
 
 //retirement(66)(1998);