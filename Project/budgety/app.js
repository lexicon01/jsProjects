
// SETTING UP THE STRUCTURE FOR YOU APP.JS.. CHEA 

// BUDGET CONTROLLLER

var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value;
    };

    /*      TAKING VARIABLES AND PUTTING THEM INTO A DATA
                        STRUCTURE 
                        
    var allExpenses = [];  WE STARTED OUT WITH SINGLE
    var allIncomes = [];    VARIABLES.........
    var totalExpenses = 0; BETTER TO HAVE 1 DATA STRUCTURE
    */
    /*
    var data = {            BUT DECIDED TO PUT THEM
        allExpenses: [],    INTO AN OBJECT.....
        allIncomes: [],     THE : TURNS THEM INTO PROPERTIES
    }
    */
    var data = {    // allItems: IS AN OBJECT INSIDE
        allItems: {     // OBJECT DATA. SO
            exp: [];    //OBJ/OBJ/ARRAY <== CHEA
            inc: [];
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

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

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) { // event.which is for older browsers
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function() {

        // 1. get the filed input data
        var input = UICtrl.getInput();

        // 2. add the item to the budget controller

        // 3. add the item to the UI

        // 4. calculate the budget

        // 5. display the budget on the UI

    };

   return {
       init: function() {
           console.log('application has started.');
           setupEventListeners();
       }
   };

})(budgetController, UIController);

controller.init();


