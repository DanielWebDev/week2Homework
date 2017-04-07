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
var myArray = ['1','2',3,4,5];
var result = 0;

var ToDoList = {

	// property name : property value

	initFunction : function(result) {

		console.log('select 1) Print ToDo, 2) Add ToDo, 3) Complete Todo');

		this.promptUser(result);

		console.log('got to A; err: ' + err);

	  	if (err) {
	  		console.log('*** an error has occurred *** ' + err);
	  		return;
	  	} else {
			switch (result.question) {
				case 1:
					console.log('1) selected, Print ToDo');
					this.myFunction.displayList();
				case 2:			
					console.log('2) selected, Add ToDo');
					myFunction.addItem();
				case 3:
					console.log('3) selected, Complete Todo');
				case q:// quit
					break;
				default:
					console.log('please enter a valid seletion');
			}
		}
		//console.log('in initFunction, result:', result.question);
		console.log('got to B');

	},

	promptUser : function(result){

		var prompt = require('prompt');// path not required as 

		prompt.start();

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

		myArray.forEach(function(value){
		  	console.log(value);
		});

	},

	addItem : function(){

		console.log('please enter item to be added');

		//this.promptUser(result);
		myArray.pop(this.promptUser(result));

	},

	deleteItem : function(){},

	displayError : function(){}

}// End 'ToDoObject' object declaration

	ToDoList.initFunction(result);
	
