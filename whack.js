///=====================================================================
// Name         : whack.js
// Description  : Script for whack a mole game
//======================================================================

//KNOWN BUGS: 
// 1. After hit, the mole won't re-spawn
//		Probably will use .on()
// 2. No automatic destroy mole

// Global Variables
var score = 0;
var arrMoles = [];

function hitFunction(id, content)
{
	score++;
	var str = "<span class=\"score\" id=\"scoreCalc\">" + score + "</span>";
	console.log(id);	
	var full = "<img src=\"base.png\" class=\"whack\" id=\"" + id + "\"/>"
	$(content).replaceWith(full);
	$("#scoreCalc").replaceWith(str);

}

function spawnMole()
{
	var num = (Math.floor(Math.random() * 10)%9);
	var ran = "w" + num;
	which = "#" + ran;
	var string = "<img src=\"char2.png\" class=\"whack\" id=\""+which+"\" onclick=\"hitFunction(this.getAttribute('id'), this)\"/>"
	$(which).replaceWith(string);
	arrMoles.push(num);
}

function destroyMole()
{
	/* 
	for ( var i = 0; i < arrMoles.length; i++)
	{
		console.log( i + arrMoles[i]);	
	}
	
	var size = arrMoles.length;
	var object = 0;
	while ( object == 0 )
	{
		var ranIndex = (Math.floor(Math.random() * 10)%size)
		object = arrMoles.slice(ranIndex);
	}
	arrMoles[ranIndex] = 0;
	which = "#w" + object;
	//console.log(which);
	var string = "<img src=\"base.png\" class=\"whack\" id=\"" + which + "\"/>"
	$(which).replaceWith(string);
	TOOK CPU TOO MUCH, DEADLOCK?
	*/

}
function startFunction()
{


}



$(document).ready(function(){
	setInterval(function(){spawnMole()}, 750);
});