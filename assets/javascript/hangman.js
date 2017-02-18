var words = [
	"cincinnati",
	"dallas",
	"cleveland",
	"pittsburgh",
	"sacramento",
	"omaha",
	"minneapolis",
	"baltimore",
	"richmond",
	"atlanta",
	"chicago",
	"hartford",
	"boston",
	"seattle",
	"portland",
	"provo",
	"helena",
	"boise",
	"austin",
	"houston",
	"nashville",
	"detroit",
	"indianapolis",
	"philadelphia",
	"albany",
	"miami",
	"dayton",
	"tallahassee",
	"birmingham",
	"jackson",
	"pierre",
	"bismarck",
	"charleston",
	"montpelier",
	"augusta",
	"concord",
	"manchester",
	"raleigh",
	"charlotte",
	"madison",
	"milwaukee",
	"annapolis",
	"charlotte",
	"bend",
	"reno",
	"olympia",
	"topeka",
	"tacoma",
	"honolulu",
	"juneau",
	"anchorage",
	"providence",
	"denver",
	"albuquerque",
	"phoenix",
	"tempe", 
	"lansing",
	"cheyenne",
	"boulder",
	"fargo",
	"rochester",
	"harrisburg", 
	"columbus",
	"columbia",
	"biloxi",
	"shreveport",
	"tulsa",
	"peoria",
	"durango",
	"montgomery",
	"frankfort",
	"knoxville",
	"memphis",
	"salem",
	"springfield",
	"wheeling",
	"chattanooga",
	"buffalo",
	"billings",
	"anaheim",
	"newark",
	"trenton",
	"scranton",
	"savannah",
	"spokane",
	"mobile",
	"flint",
	"dearborn",
	"lincoln",
	"akron",
	"huntsville",
	"tuscaloosa",
	"astoria",
	"fresno",
	"roanoke",
	"norfolk",
	"asheville",
	"dover",
	"wilmington",
	"jacksonville",
	"louisville",
	"tucson",
	"oakland",
	"wichita",
	"bakersfield",
	"riverside",
	"stockton",
	"toledo",
	"greensboro",
	"plano",
	"orlando",
	"durham",
	"lubbock",
	"irvine",
];

var wordChoice = "";
var wordString = [];
var wordLength = 0;
var letterChoice = [];
var wrongChoices = [];
var wins = 0;
var losses = 0;
var guesses = 9;

function startOfGame (){

	wrongChoices = [];
	letterChoice = [];
	guesses = 9;
	
	wordChoice = words[Math.floor(Math.random() * words.length)];
	wordString = wordChoice.split("");
	wordLength = wordString.length;
	console.log(wordChoice);
	console.log(wordLength);

	for(var i = 0; i < wordLength; i++){
			letterChoice.push("_");
	}
	console.log(letterChoice);
	document.getElementById('clue').innerHTML = letterChoice.join(" ");
	document.getElementById('guesses-left').innerHTML = guesses;
	// document.getElementById('result').innerHTML =  "";
}

function guessCheck(guess){
	
	var letterGuess = false;

	for(var i = 0; i < wordLength; i++){
		if(wordChoice[i] === guess){
			letterGuess = true;
		}
	}
	if(letterGuess){
		for(i=0; i < wordLength; i++){
			if(wordChoice[i] === guess){
				letterChoice[i] = guess;
			}
		}
	}
	else{
		guesses--;
		wrongChoices.push(guess);
	}
}

function game(){
	document.getElementById('clue').innerHTML = letterChoice.join(" ");
	document.getElementById('guesses-left').innerHTML = guesses;
	document.getElementById('wrong-guesses').innerHTML = wrongChoices.join(" ");

	console.log(wordString);
	console.log(letterChoice);
	if(wordString.join(" ") === letterChoice.join(" ")){
		wins++;
		alert(wordChoice.toUpperCase() + " is correct! You win!!");
		// document.getElementById('result').innerHTML = wordChoice.toUpperCase() + " is correct! You win!!";
		document.getElementById('wins').innerHTML = wins;
		startOfGame();
	}
	else if (guesses === 0){
		document.getElementById('losses').innerHTML = losses+=1;
		document.getElementById('wrong-guesses').innerHTML = "";
		alert("The city was " + wordChoice + ".  Better luck next time!");
		startOfGame();
	}
}

startOfGame();
document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("letter guessed by user", userGuess)
	guessCheck(userGuess);
	game();
}