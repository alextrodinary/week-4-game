//SPLIT INTO 3 SPECIFIC CHECKS SECTIONS!!!!!!!!!!!!
//==========================================================================================================

//Global Variables...accessed all across code file.
//==========================================================================================================
var wins = 0;
var losses = 0;
var jewelOne;
var jewelTwo;
var jewelThree;
var jewelFour;
var runningTot = 0;
var randomNum;

//Functions ..reusable blocks of code..called upon when needed
//==========================================================================================================
function startGame () {
	randomNum = Math.floor(Math.random() * (50-10) + 10);
	console.log(randomNum);
	jewelOne = Math.floor(Math.random() * (15-5));
	console.log(jewelOne);
	jewelTwo = Math.floor(Math.random() * (10-5));
	console.log(jewelTwo);
	jewelThree = Math.floor(Math.random() * (10-7));
	console.log(jewelThree);
	jewelFour = Math.floor(Math.random() * (10-7));
	console.log(jewelFour);
}

function buttonClick1(){
	runningTot = runningTot + jewelOne;
	var total = document.createElement("runningTot");
	total.innerHTML = "runningTot";
}

function buttonClick2(){
	runningTot = runningTot + jewelTwo;
}

function buttonClick1(){
	runningTot = runningTot + jewelThree;
}

function buttonClick1(){
	runningTot = runningTot + jewelFour;
}




//Main process..calling upon the functions to make something happen
//==========================================================================================================



// ,makes sure script is running ... alert("test");