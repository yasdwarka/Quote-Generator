/* declaring  variables and quotes arrays */
var beginning = ['Life is simple ', ' The beautiful journey of today ', 'When you are enthusiastic about', ' Accept your  challenges ', 'Lead your life'];
var middle = [' but we insist on', ' can only begin when we  ', ' what you do ', ' will be always ', ' smiles and laughs ', ' keeps going '];
var end = [' making it complicated ', ' let go of yesterday  ', ' you feel this positive energy ', ' in the moment', '  in this lifetime '];
var i;
var numquotes = 5;
var document;

/*function make quote with start,middle and end */
document.getElementById("randomBtn").addEventListener("click", makequote);

function makequote() {
	var randNumStart = 0;
	var randNumMiddle = 0;
	var randNumEnd = 0;

	for (i = 0; i < numquotes; i++) {
		randNumStart = Math.floor(Math.random() * beginning.length);
		randNumMiddle = Math.floor(Math.random() * middle.length);
		randNumEnd = Math.floor(Math.random() * end.length);
		document.getElementById('changetext').innerHTML = beginning[randNumStart] + middle[randNumMiddle] + end[randNumEnd];
	}
}
var romancestart = [' I believe ', 'And in her smile ', ' I love you ', ' I am catastrophically ', 'My love for you ', ' Romance is ', 'Loving is', 'One thing', 'Love to', 'Beauty lies', 'Your love'];

var romancemiddle = [' love is ', ' I see something', ' the way a ', ' in love', ' grows ', ' beautifully  ', ' giving and ', ' is to ', ' respect and ', ' in the eyes ', ' is the reason ']

var romanceend = [' forever alive ', ' more beautiful than the stars ', ' drowning man loves air ', ' with you', ' with every breath you take', ' that what I feel', 'forgiving', ' fall in love', ' to cherish ', ' of the beholder ', ' living is a blessing ']


/* function  to call romanticquote */

document.getElementById("romanceBtn").addEventListener("click", generatequote);

function generatequote() {
	var numberOfQs = document.getElementById("selection").value;
	var text = "";
	var i;
	for (i = 0; i < numberOfQs; i++) {
		var romanticquote = romancestart[Math.floor(Math.random() * romancestart.length)] + romancemiddle[Math.floor(Math.random() * romancemiddle.length)] + romanceend[Math.floor(Math.random() * romanceend.length)];
		text += romanticquote + "<br>" + "<br>";
	}
	document.getElementById("normal").innerHTML = text;
}



/* function to call  motivational quote*/

var motivatestart = ['Your limitation is ', 'Sometimes later becomes never', 'Dreaming is ', 'The harder you work ', 'Be confident and ', 'Never ', 'Do it now ', 'No regrets while working hard', 'Live ', ' Learn ', 'Every moment is a fresh beginning', 'Make each day ', 'Wherever'];

var motivatemiddle = [' only in ', ' later ', ' a  lot', ' you work for something', ' always keep ', '  surrender ', '  as tommorrow may ', ' keep going ', ' this life with ', ' to say ', ' as tommorrow ', ' filled with ', '  each day ', ' you go']

var motivateend = [' your imagination', '  becomes never ', ' with time ', ' the greater you feel you achieve it', ' going forward', ' with time', ' never come ', ' as far as you can', ' a motivational thought ', ' to people ', ' is yet to come ', ' happiness and success', ' count', ' go with your heart']

document.getElementById("motivateBtn").addEventListener("click", function () {
	var numberOfQs = document.getElementById("selection").value;
	var text = "";
	var i;
	for (i = 0; i < numberOfQs; i++) {
		var motivateArray = motivatestart[Math.floor(Math.random() * motivatestart.length)] + motivatemiddle[Math.floor(Math.random() * motivatemiddle.length)] + motivateend[Math.floor(Math.random() * motivateend.length)];
		text += motivateArray + "<br>" + "<br>";
	}
	document.getElementById("normal").innerHTML = text;
});

/* function to hide buttons when not selected */

$(document).ready(function () {
	$('input[type="radio"]').click(function () {
		var inputValue = $(this).attr("value");
		var targetBox = $("." + inputValue);
		$(".box").not(targetBox).hide();
		$(targetBox).show();
	});
});

/* function to quit program */
document.getElementById("closeBtn").addEventListener("click", closeWindow)

function closeWindow(){
	window.open('logout.html', '_self', '');
	window.close();
}
