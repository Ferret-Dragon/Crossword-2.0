var hold = JSON.parse((localStorage.getItem("clueItems")));
//localStorage.getItem("clueItems");
alert(hold.length);
//var cluesList = hold.split(",");
//alert("cluesList after gen: " + cluesList);

//var hold = localStorage.getItem("clues");
//var allClues = hold.split(",");

var words = [];
//alert("cluesList array:  " + cluesList);
/*words */
words.push(
	'redemption',
	'hadrianashman',
	'forrest',
	'remember',
	'private',
	'knight',
	'father',
	'fiction',
	'fight',
	'beautiful'
);
//alert(words + "words");
//words = hold;
//alert(words + " hw");
words = words.concat(hold);