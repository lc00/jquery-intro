

$(document).on('ready', function() {
//select all elemnts that match the given css selector 
//(passed as a string to the $ function)

  var welcome = $("#welcome-message");
  
  //first argument is the css property you want to change
  //second argument is the value to change it to 
  welcome.css("font-size", '200px');

  //change multiple css properties at once
  welcome.css({
  	'font-size': '72px',
  	'color': 'pink',
  	'font-weight': 'bold'
  });
  








});