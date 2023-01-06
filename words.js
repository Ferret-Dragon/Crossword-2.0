var hold = localStorage.getItem("clueItems");

var cluesList = hold.split(","); //cluesList is now an array
//for loop for every item in cluesList,  separateWord -- should have 2 arrays

var answerList = [];

/*for(let p = 0; p < cluesList.length(); p++){
  alert("just word: " + (separateWord(cluesList[1])).impWord);
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