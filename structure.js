// Set global variables
var gridSize = [20, 20];     // number of squares wide, number of squares tall
var direction = 'across';   // set initial direction to 'across'
var markCorrect = true;     // indicates ability for answers to be marked correct. will be set to false if "show answers" is clicked
var successShown = false;   // indicates whether the success modal has been shown
var $clueTooltip = $('<div class="clue-tooltip invisible"><div class="clue-tooltip-arrow"></div><div class="clue-tooltip-text"></div></div>').appendTo('.crossword');

// set up the base grid
var $crosswordPuzzle = $('<div class="crossword-puzzle col-md-8 col-lg-9"></div>');
var $table = $('<table class="crossword-grid"></table>');
for (i = 0; i < gridSize[1]; i++) {
  var $row = $('<tr class="grid-row"></tr>');
  for (j = 0; j < gridSize[0]; j++) {
    $square = $('<td class="slot"></td>');
    $square.appendTo($row);
  }
  $row.appendTo($table);
  $table.appendTo($crosswordPuzzle);
  $crosswordPuzzle.appendTo('.crossword');
}

// Add the clues to the page
var $crosswordClues = $('<div class="crossword-clues col-md-4 col-lg-3"><div class="row"></div></div>');
var $acrossClues = $('<div class="across-clues col-sm-6 col-md-12"><p><strong>Across</strong></p><ol></ol></div>');
var $downClues = $('<div class="down-clues col-sm-6 col-md-12"><p><strong>Down</strong></p><ol></ol></div>');
for (i = 0; i < words.length; i++) {
  var $clue = $('<li value="' + words[i].number + '" data-direction="' + words[i].direction + '" data-clue="' + words[i].number + '"><label>' + words[i].clue + ' </label></li>');
  $clue.find('label').attr('for', $('[data-' + words[i].direction + '=' + words[i].number + ']').eq(0).attr('id'));
  $clue.on('click', function() {
    direction = $(this).data('direction');
  })
  if (words[i].hint.length > 0 && words[i].hint != '') {
    $('<a class="hint" href="' + words[i].hint + '" target="_blank" title="Hint for ' + words[i].number + ' ' + words[i].direction + '">(Hint)</a>').appendTo($clue.find('label'));
  }
  if (words[i].direction == 'across') {
    $clue.appendTo($acrossClues.find('ol'));
  } else {
    $clue.appendTo($downClues.find('ol'));
  }
}
$acrossClues.appendTo($crosswordClues.find('.row'));
$downClues.appendTo($crosswordClues.find('.row'));
$crosswordClues.appendTo('.crossword');

// Add the hints, reset, and show answers buttons
var $puzzleButtons = $('<div class="crossword-buttons"></div>');
var $hintsButton = $('<button class="btn btn-default">Show Hints</button>');
$hintsButton.on('click', function(e) {
  e.preventDefault();
  $('.crossword-clues').toggleClass('show-hints');
  $(this).text($(this).text() == 'Show Hints' ? 'Hide Hints' : 'Show Hints');
});
$hintsButton.appendTo($puzzleButtons);
var $resetButton = $('<button class="btn btn-default">Clear Puzzle</button>');
$resetButton.on('click', function(e) {
  e.preventDefault();
  $('input.letter').val('').parent('.slot').removeClass('correct-down correct-across');
  $('.crossword-clues li').removeClass('correct');
  markCorrect = true;
});
$resetButton.appendTo($puzzleButtons);
var $solveButton = $('<button class="show-answers btn btn-default">Show Answers</button>');
$solveButton.on('click', function(e) {
  e.preventDefault();
  $('input.letter').each(function() {
    $(this).val($(this).data('letter'));
  });
  markCorrect = false;
});
$solveButton.appendTo($puzzleButtons);
$puzzleButtons.appendTo('.crossword');

// Add the success modal
var $modal = $('<div class="modal fade" id="success-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Congratulations!</h4></div><div class="modal-body"><p>You have finished the puzzle.</p></div></div></div></div>');
$modal.appendTo('body');