//function getUserInput() {
    //var value = 0;
    //var result = '';
    var prompt = require('prompt');
    var value = {first:'one'};
   
    // 
    // Start the prompt 
    // 
    prompt.start();
   
    // 
    // Get two properties from the user: username and email 
    // 
    prompt.get(['username'], function (err, result) {
      // 
      // Log the results. 
      // 
      console.log('Command-line input received:');
      console.log('  username: ' + result.username);
      //console.log('  email: ' + result.email);
      value.first = result.username;
    });
  // }

  // console.log(getUserInput());

  value.first = 'two';

  console.log(value.first);