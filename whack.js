///=====================================================================
// Name         : whack.js
// Description  : Script for whack a mole game
//======================================================================

//== UNFINISHED ==

//KNOWN BUGS:

"use strict"

// Global Variables
var score = 0;
var arrMoles = [];

var spawnI;
var destroyI;
var clearI;

function gameHasEnded()
{
	var string = "Game has ended. \nYour final score is " + score;
	window.alert(string);
}

function updateScore()
{
	var str = "<span class=\"score\" id=\"scoreCalc\">" + score + "</span>";
	$("#scoreCalc").replaceWith(str);	
}

function removeElement(id)
{
	for (var i = 0; i < arrMoles.length; i++)
	{
		if ( arrMoles[i] == id)
		{
			array.splice(i,1);
		}
	}
}

function hitFunction(id, content)
{
	score++;
	var full = "<img src=\"base.png\" class=\"whack\" id=\"" + id + "\"/>"
	$(content).replaceWith(full);
	removeElement(id);
	updateScore();

}

function spawnMole()
{
	var num = (Math.floor(Math.random() * 10)%9);
	var ran = "w" + num;
	var which = "#" + ran;
	$(which).attr("src","char2.png");
	$(which).attr("onclick","hitFunction(this.getAttribute('id'), this)");
	arrMoles[arrMoles.length] = which;
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
	if ( !isPlaying() )
	{
		clearInterval(spawnI);
		clearInterval(destroyI);
		while ( arrMoles.length > 0 )
		{
			destroyMole();
		}
		clearInterval(clearI);
		document.getElementById("startBt").disabled=false;
		gameHasEnded();
	}
}
function startFunction()
{
	score = 0;
	updateScore();
	document.getElementById("startBt").disabled=true;
	$('#music').trigger("play");
	spawnI = window.setInterval(function(){spawnMole()}, 550);
	destroyI = window.setInterval(function(){destroyMole()}, 1000);
	clearI = window.setInterval(function(){clearStatus()}, 100)
}