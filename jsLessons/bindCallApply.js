
// *******  LECUTRE 69 Bind, Call and Apply ************


var john = { // this is an object
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) { //this is a method
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. have a nice ' + timeOfDay + '.');
        }
    }
}


var emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
};

john.presentation('formal','morning'); // here your calling the method with peramitors style and time of day


john.presentation.call(emily,'friendly', 'afternoon'); // useing Call method is called method borowing

 // another one called apply this excepts arguments as an array
//ex  john.presentation.apply(emily,['friendly', 'afternoon']); <=== that's the apply method turning arguments into arrays// said but the method doesnt expect to recive arrays so it wouldnt work chea
            