var hold = localStorage.getItem("clueItems");

var cluesList = hold.split(",");
var words = [];
alert(cluesList + " hold");
/*words 
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
);*/
//alert(words + "words");
//words = hold;
//alert(words + " hw");
words = words.concat(cluesList);