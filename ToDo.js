// week2Homework
// ===============
// 
// Create a todo list app using node and the prompt library. Make sure you set the project up as a new node/git/github project. After doing your initial npm init you can install the prompt library via npm install prompt --save
// 
// You should be able to do the following "script" in your todo list:
// 
// 1. run node todo.js
// 
// 2. select 1 of 3 options from a printed list: Print ToDo, Add ToDo, Complete Todo
// 
// 3. When selecting Print ToDo, a ordered list of added todo options should be displayed... and then the menu options should be printed again
// 
// 4. When selecting Add ToDo you should be instructed to type a todo item and hit enter to add it. After following instructions the menu option should be printed again.
// 
// 5. When selecting Complete todo, instructions on selecting todo item to be removed should be presented. After following instructions the menu option should be printed again.

var err = false;
var ToDoArray = ['-install new windows'];
var result = 0;

var prompt = require('prompt');

var ToDoList = {

	// property name : property value

	initFunction : function() {

		console.log('select an option\n1) Print ToDo\n2) Add ToDo\n3) Complete Todo\n4) Quit');
		prompt.start();

		prompt.get([{
		    type: 'string',
		    required: true
		  }], function (err, result) {

			  	if (err) {
			  		console.log('*** an error has occurred *** ' + err);
			  		return;
			  	} else {
					//while (result.question !== false) {		  		
						switch (result.question) {
							case '1':
								//console.log('1) selected, Print ToDo');
								ToDoList.displayList();
								break;
							case '2':			
								//console.log('2) selected, Add ToDo');
								ToDoList.addItem();
								break;
							case '3':
								//console.log('3) selected, Complete Todo');
								break;
							case '4':// quit
								break;
							default:
								console.log('please enter a valid seletion');
						}
					//}
				}
		});
	},

	promptUser : function(){

		prompt.get([{
			name: 'question',
		    type: 'integer',
		    required: true

		  }], function (err, result) {

			  	//console.log('in promptUser, result:', result.question);
		});
		return;

	},

	displayList : function(){

		console.log('\nPrinting ToDo list ...');
		console.log('------------------------------------');

		ToDoArray.forEach(function(value){
		  	console.log(value);
		});

		console.log('------------------------------------\n');
		ToDoList.initFunction(result);
		//return;

	},

	addItem : function(){

		//prompt.start();

		prompt.get([{
			name: 'please enter item to be added',
			type: 'string',
		    required: true
		  }], function (err, result) {

			ToDoArray.push = result;
			//console.log(ToDoArray);

		});
		ToDoList.displayList();

	},

	deleteItem : function(){},

}// End 'ToDoObject' object declaration

	ToDoList.initFunction();
	