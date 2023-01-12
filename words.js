var hold = JSON.parse((localStorage.getItem("clueItems")));

var words = [];

if (hold.length < 20) {
  words.push(
    'nerd',
    'giraffe',
    'flamboyance',
    'thirteen',
    'pacific',
    'skin',
    'sudan',
    'cornea',
    'texas',
    'spice',
    'flies',
    'guess',
    'word',
    'bald',
    'mrpotatohead'
  );
}

words = words.concat(hold);