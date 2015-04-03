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

var spawnI;
var destroyI;
var clearI;


function updateScore()
{
	var str = "<span class=\"score\" id=\"scoreCalc\">" + score + "</span>";
	$("#scoreCalc").replaceWith(str);	
}

function hitFunction(id, content)
{
	score++;
	var full = "<img src=\"base.png\" class=\"whack\" id=\"" + id + "\"/>"
	$(content).replaceWith(full);
	updateScore();

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
function isPlaying() {
    var player = document.getElementById("music");
    return !player.paused && !player.ended && 0 < player.currentTime;
}

function clearStatus(spawn, destroy)
{
	console.log("check in");
	if ( !isPlaying() )
	{
		clearInterval(spawnI);
		clearInterval(destroyI);
		while ( arrMoles.length > 0 )
		{
			destroyMole();
		}
		console.log("trying");
		clearInterval(clearI);
		document.getElementById("startBt").disabled=false;
	}
}
function startFunction()
{
	score = 0;
	updateScore();
	document.getElementById("startBt").disabled=true;
	$('#music').trigger("play");
	spawnI = window.setInterval(function(){spawnMole()}, 550);
	destroyI = window.setInterval(function(){destroyMole()}, 1500);
	clearI = window.setInterval(function(){clearStatus()}, 100)
}