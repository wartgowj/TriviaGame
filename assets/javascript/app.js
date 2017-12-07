$(document).ready(function() {

var correct
var incorrect
var unanswered
var time
var currentQuestion
var userGuess

var questionsList = [{
	question: "Who developed the equation to calculate horsepower?",
	answerList: ["Thomas Edison", "Nikola Tesla", "James Watt", "Albert Einstein"],
	answer: 2
},{
	question: "One horsepower is equal to _______ watts of electricity.",
	answerList: ["746", "1280", "57", "5325"],
	answer: 0
},{
	question: "A supercharger creates more horsepower by forcing more _______ into an engine.",
	answerList: ["Gasoline", "Air", "Oil", "Water"],
	answer: 1
},{
	question: "What is used to power a turbocharger?",
	answerList: ["Drivebelt", "Battery", "Exhaust Gases", "Gasoline"],
	answer: 2
},{
	question: "What is the purpose of a camshaft?",
	answerList: ["Pump Coolant", "Charge Battery", "Move Pistons", "Open Valves"],
	answer: 3
},{
	question: "Which of these is not needed on a diesel engine?",
	answerList: ["Sparkplugs", "Alternator", "Water Pump", "Pistons"],
	answer: 0
},{
	question: "On average, how many horespower does a Top fuel dragster have?",
	answerList: ["500", "10000+", "1000", "5000"],
	answer: 1
},{
	question: "Nitrous oxide increases horsepower by providing more what?",
	answerList: ["Hydrogen", "Nitrogen", "Oxygen", "Carbon Dioxide"],
	answer: 2
},{
	question: "What does an engine need in order to make more power?",
	answerList: ["More Air and Less Fuel", "More Air and More Fuel", "Less Air and Less Fuel", "Less Air and More Fuel"],
	answer: 1
},{
	question: "A performance exhaust system increases power by reducing what?",
	answerList: ["Cylinder Pressure", "Fuel Consumption", "Pollution", "Back Pressure"],
	answer: 3
},{
	question: "High octane fuel is _______ than regular fuel.",
	answerList: ["More Stable", "More Powerful", "Cleaner", "Higher Quality"],
	answer: 0
},{
	question: "The amount of pressure created by a turbocharger or supercharger is referred to as what?",
	answerList: ["Nitro", "Boost", "Back Pressure", "Compression"],
	answer: 1
},{
	question: "A performance camshaft adds horsepower by increasing valve lift and _______?",
	answerList: ["Fuel Pressure", "Compression Ratio", "Fuel Economy", "Duration"],
	answer: 3
}];

	function reset(){
		$('#currentQuestion').hide();
		$('#possibleAnswers').hide();
		$('#submitButton').hide();
		$('#startButton').show();
		$('#results').hide();
		$('#timer').hide();
		currentQuestion = 0;
		correct= 0 ;
		incorrect = 0;
		unanswered = 0;
		time = 10;
		userGuess = " ";
	}

	function start(){
		reset();
		$('#currentQuestion').show();
		$('#possibleAnswers').show();
		$('#timer').show();
		$('#submitButton').show();
		$('#startButton').hide();
		$('#results').hide();
		intervalId = setInterval(countDown, 1000);
		generateQuestion();
	}

	function generateQuestion(){
		$('#currentQuestion').text(questionsList[currentQuestion].question);
		$('#choice1').text(questionsList[currentQuestion].answerList[0]);
		$('#choice2').text(questionsList[currentQuestion].answerList[1]);
		$('#choice3').text(questionsList[currentQuestion].answerList[2]);
		$('#choice4').text(questionsList[currentQuestion].answerList[3]);
	}

	function checkAnswer(){
		if (userGuess == " "){
			unanswered++;
			console.log("Unanswered" + unanswered);
		}else if (userGuess == (questionsList[currentQuestion].answer)){
			correct++;
			console.log("Correct" + correct);
		}else if (userGuess !== (questionsList[currentQuestion].answer)){
			incorrect++;
			console.log("incorrect" + incorrect);
		}
	}

	function submit(){
		if(currentQuestion == questionsList.length - 1){
			showResults();
			clearInterval(intervalId);
		}else{
			checkAnswer();
			clearInterval(intervalId);
			time = 10;
			currentQuestion++;
			generateQuestion();
			intervalId = setInterval(countDown, 1000);
			countDown();
			userGuess = " ";
		}
	}

	function countDown(){
		$('#timer').html("Time remaining: " + time + " seconds");
		time--;
		if (time < 0){
			clearInterval(intervalId);
			alert("Time Up!!");
			submit();
		}	
	}

	function showResults(){
			$('#currentQuestion').hide();
			$('#possibleAnswers').hide();
			$('#submitButton').hide();
			$('#startButton').show();
			$('#results').show();
			$('#timer').hide();
			$('#startButton').text("Restart Horsepower Trivia");
			$('#correct').text("Correct:"+" "+correct);
			$('#incorrect').text("Incorrect:"+" "+incorrect);
			$('#unanswered').text("Unanswered:"+" "+unanswered);
		}

	$('#startButton').on("click", function(){
		start();
	})

	$('#submitButton').on("click", function(){
		submit();
	})

	$('#possibleAnswers button').on("click", function(){
		userGuess = $(this).val();
		console.log(userGuess);
	})

	

reset()

});