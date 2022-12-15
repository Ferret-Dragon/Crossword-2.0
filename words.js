var hold = localStorage.getItem("clueItems");
var cluesList = hold.split(",");

/* For every item in cluesList we need to perform the reduction function, add the keyword to one array, then replace it with '_____'*/

var words = [];
alert(cluesList + " hold");
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
words = words.concat(cluesList);