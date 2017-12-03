$(document).ready(function() {

var correct
var incorrect
var time

	function reset(){
		$('#currentQuestion').hide();
		$('#possibleAnswers').hide();
		$('#submitButton').hide();
		$('#startButton').show();
		correct= 0 ;
		incorrect = 0;
		time = 10;
	}

	function start(){
		$('#currentQuestion').show();
		$('#possibleAnswers').show();
		$('#submitButton').show();
		$('#startButton').hide();
		intervalId = setInterval(countDown, 1000);
	}

	function countDown(){
		time--;
		$('#timer').html("Time remaining: " + time + " seconds");
		if (time <= 0){
			clearInterval(intervalId);
		}
	}

	$('#startButton').on("click",function(){
		start();
	})

reset()

});