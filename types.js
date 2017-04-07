var value = 0;

function promptUser(value) {
	var prompt = require('./node_modules/prompt');

	prompt.start(value);

	console.log('select 1) Print ToDo, 2) Add ToDo, 3) Complete Todo');

	// prompt.get([{
	//     type: 'integer',
	//     required: true
	//   }], function (err, result) {
	//   //console.log('Input received:');
	//   //console.log(JSON.stringify(result, null, 2));
	// });
};

console.log(promptUser(value));