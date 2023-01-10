function Word( text, row, column, vertical )
{
	this.text = text;
	this.row = row;
	this.column = column;
	this.vertical = vertical;
}

var word_answer = {number: 0, direction: '', row: 0, column: 0, clue: '', answer: '', hint: 'http://www.angelo.edu/asu_facts/history.php'};