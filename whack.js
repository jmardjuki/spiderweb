///=====================================================================
// Name         : whack.js
// Description  : Script for whack a mole game
//======================================================================

//== UNFINISHED ==

//KNOWN BUGS: 
// 1. After hit, the mole won't re-spawn
//		Probably will use .on()
// 2. No automatic destroy mole

"use strict"

// Global Variables
var score = 0;
var arrMoles = [];
var start = false;

function hitFunction(id, content)
{
	score++;
	var str = "<span class=\"score\" id=\"scoreCalc\">" + score + "</span>";
	var full = "<img src=\"base.png\" class=\"whack\" id=\"" + id + "\"/>"
	$(content).replaceWith(full);
	$("#scoreCalc").replaceWith(str);

}

function spawnMole()
{
	var num = (Math.floor(Math.random() * 10)%9);
	var ran = "w" + num;
	var which = "#" + ran;
	$(which).attr("src","char2.png");
	$(which).attr("onclick","hitFunction(this.getAttribute('id'), this)");
	arrMoles.push(which);
}

function destroyMole()
{
	var destroy = arrMoles.pop();
	$(destroy).attr("src","base.png");
	$(destroy).attr('onclick','').unbind('click');	

}
function startFunction()
{

	$('#music').trigger("play");
	start = true;
	if ( start == true)
	{
		window.setInterval(function(){spawnMole()}, 750);
		window.setInterval(function(){destroyMole()}, 1500);
	}
}