// USING CLOSURES AND IIFE GROUPING THEM TOGETHERS
// OUTPUT OBJECT STILL HAS ACCESS TO OUTSIDE VARIABLES INSIDE
// CLOSURE FUNCTION.... CHEA WE OUT HERE..

var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();


var UIController = (function() {

    //Some code

})();


var controller = (function(budgetCtrl, UICtrl) {

   var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);