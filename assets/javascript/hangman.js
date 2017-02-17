var wordList = [
	"cincinnati",
	"dallas",
	"cleveland",
	"new york",
	"pittsburgh",
	"sacramento",
	"san francisco",
	"los angeles",
	"omaha",
	"minneapolis",
	"oklahoma city",
	"baltimore",
	"richmond",
	"atlanta",
	"chicago",
	"hartford",
	"boston",
	"seattle",
	"portland",
	"san diego",
	"las vegas",
	"salt lake city",
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
	"jefferson city",
	"sioux city",
	"des moines",
	"pierre",
	"bismarck",
	"charleston",
	"montpelier",
	"augusta",
	"concord",
	"manchester",
	"raleigh",
	"charlotte",
	"san jose",
	"madison",
	"milwaukee",
	"little rock",
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
	"santa fe",
	"albuquerque",
	"phoenix",
	"tempe",
	"tampa bay",
	"san antonio",
	"santa barbara", 
	"lansing",
	"cheyenne",
	"colorado springs",
	"boulder",
	"fargo",
	"rochester",
	"harrisburg", 
	"columbus",
	"columbia",
	"fort lauderdale",
	"biloxi",
	"baton rouge",
	"shreveport",
	"tulsa",
	"kansas city",
	"saint louis",
	"peoria",
	"south bend",
	"durango",
	"carson city",
	"saint paul",
	"montgomery",
	"frankfort",
	"knoxville",
	"memphis",
	"salem",
	"springfield",
	"wheeling",
	"chattanooga",
	"el paso",
	"new orleans",
	"buffalo",
	"billings",
	"anaheim",
	"newark",
	"trenton",
	"scranton",
	"savannah",
	"palm springs",
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
	"corpus christi",
	"jacksonville",
	"fort worth",
	"washington dc",
	"louisville",
	"tucson",
	"long beach",
	"virginia beach",
	"oakland",
	"wichita",
	"bakersfield",
	"riverside",
	"stockton",
	"toledo",
	"greensboro",
	"plano",
	"fort wayne",
	"orlando",
	"durham",
	"lubbock",
	"irvine",
	"san bernardino"
];

var chosenWord = ""; //stores the random word chosen from wordList using math.random
var letterInChosenWord = []; //will break up chosen word into independent letters so that the user can guess it and so that we can manipulate it through the logic of the game.. using a for loop
var numBlanks = 0; //will hold the number of letters in the chosenWord
var blanksAndSuccesses = []; //will hold whether the user guessed the letter right or wrong
var wrongGuesses = []; //will hold wrongly guessed letters

var winCounter = 0; //will increase by one if user wins
var lossCounter = 0; //will increase by one if user loses
var numGuesses = 9; //will be set to nine, amount of chances you have before the game is over

function startGame(){
	/*
1.  select a word at random
2.  want to break up that random word into letters and replace them with underscores
			for loop
3.  want to add those underscores to the HTML
4.  at start of the game, numGuesses always equals 9, blankAndSuccesses is an empty array, and wrongGuesses is also 0

	*/
wrongGuesses = [];
numGuesses = 9;
blanksAndSuccesses = [];


chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks);

for(var i = 0; i < numBlanks; i++){
	blanksAndSuccesses.push("_");
}
console.log(blanksAndSuccesses);
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;
}

function checkLetters(letter){
	/*
	1.  Compare to see if the letter the user picks matches any of the leters in the word
	2.  Want a conditional statement to determine if the letter the user picked is in the word.  If so, do something, if not, do something else.
	3.  If the user is wrong we want to decrease the numGuesses variables by one
*/

var letterInWord = false;

for(var i = 0; i < numBlanks; i++){
	if(chosenWord[i] === letter){
		letterInWord = true;

}
}
    if(letterInWord){
    	for(i = 0; i < numBlanks; i++){
    		if(chosenWord[i] === letter){
		blanksAndSuccesses[i] = letter;
    	}
    	
    	}
    }

    else{
    	numGuesses --;
    	wrongGuesses.push(letter)
    }
    
}

function roundComplete(){
	/*
	1. Its going to update the HTML with letters that are in the word
	2. Its going to update the HTML with guesses we have left
	3. Its going to update the HTML to show the wrong guesses
	4. Its going to deteremine whether the user won the game or not
	*/
	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHTML = numGuesses;
	document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

	console.log(lettersInChosenWord);
	console.log(blanksAndSuccesses);
	if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
		winCounter++;
		alert("You win!!");
		document.getElementById('win-counter').innerHTML = winCounter;
		startGame();
	}
	else if (numGuesses === 0){
		document.getElementById('loss-counter').innerHTML = lossCounter++;
		document.getElementById('wrong-guesses').innerHTML = "";
		alert("you don't have any more guesses");
		startGame();
	}

}

startGame();
document.onkeyup = function(event){
	/*
	1. Its going to take in the letter that we type in
	2. Its going to pass it through the CheckLetter function
	*/
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the letter we typed", letterGuessed)
	checkLetters(letterGuessed)
	roundComplete();
}