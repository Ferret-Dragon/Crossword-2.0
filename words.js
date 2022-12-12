var hold = localStorage.getItem("clueItems");

var cluesList = hold.split(",");
var words = [];

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
words = words.concat(cluesList);