
// SETTING UP THE STRUCTURE FOR YOU APP.JS.. CHEA 

// BUDGET CONTROLLLER

var budgetController = (function() {



})();



// UI CONTROLLER
var UIController = (function() {


    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {

                 type:  document.querySelector(DOMstrings.inputType).value,  // will be either inc or exp
                 description:  document.querySelector(DOMstrings.inputDescription).value,
                 value:  document.querySelector(DOMstrings.inputValue).value
            };

        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. get the filed input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. add the item to the budget controller

        // 3. add the item to the UI

        // 4. calculate the budget

        // 5. display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) { // event.which is for older browsers
            ctrlAddItem();
        }
    });

})(budgetController, UIController);


