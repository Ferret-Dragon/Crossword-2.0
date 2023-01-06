var hold = localStorage.getItem("clueItems");

var cluesList = hold.split(","); //cluesList is now an array
//for loop for every item in cluesList,  separateWord -- should have 2 arrays

var dList = [];

//let cnt = (cluesList.length)-1;

/*for(let p = 0; p <= cnt; p++){
  dList.push(JSON.stringify(separateWord(cluesList[p])));
}*/

//alert(answerList.toString());
var words = [];
//alert(cluesList + " hold");
/*words */
/*words.push(
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