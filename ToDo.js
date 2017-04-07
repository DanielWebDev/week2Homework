//create local node app that lets us populate a to-do list, lets us see what is in the list and ability to mark off
//array
//present to user
//what do you want to do next
//does not have to keep the data
//can use library we have already created

//user options
//	add to list
//	view list
//	remove from list

var q, err = false;
var ToDoArray = ['visit Italy'];
var result = 0;
var prompt = require('prompt');

var ToDoList = {

	// property name : property value

	initFunction : function(result) {

		console.log('\nselect an option\n1) Print ToDo\n2) Add ToDo\n3) Complete Todo\nq) Quit');
		prompt.start();

		prompt.get([{
		    type: 'integer',
		    required: true
		  }], function (err, result) {

			  	if (err) {
			  		console.log('*** an error has occurred *** ' + err);
			  		return;
			  	} else {
					switch (result.question) {
						case 1:
							console.log('1) selected, Print ToDo');
							ToDoList.displayList();
						case 2:			
							console.log('2) selected, Add ToDo');
							ToDoList.addItem();
						case 3:
							console.log('3) selected, Complete Todo');
						case q:// quit
							break;
						default:
							console.log('please enter a valid seletion');
					}
				}
		});
	},

	promptUser : function(result){

		prompt.get([{
			name: 'question',
		    type: 'integer',
		    required: true

		  }], function (err, result) {

			  	//console.log('in promptUser, result:', result.question);
		});

	},

	displayList : function(){

		console.log('\n');
		console.log('Displaying contents ToDo list ...');
		console.log('------------------------------------');

		ToDoArray.forEach(function(value){
		  	console.log(value);
		});

	},

	addItem : function(){

		console.log('please enter item to be added');

		ToDoArray.pop(this.promptUser(result));
		console.log('\n');

	},

	deleteItem : function(){},

	displayError : function(){}

}// End 'ToDoObject' object declaration

	ToDoList.initFunction(result);
	
