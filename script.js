//We receive an array of all the note inputs
var listHold = localStorage.getItem('wordList');
var theWordList = JSON.parse(listHold);

alert("The word list: " + theWordList);

var words = theWordList;/*[{ number: 1, direction: 'down', row: 1, column: 10, clue: cluesList[0], answer: 'hadrian', hint: 'http://www.angelo.edu/asu_facts/history.php' },
  { number: 2, direction: 'down', row: 2, column: 16, clue: 'Softball plays at this field', answer: 'mayer', hint: '' },
  { number: 3, direction: 'down', row: 3, column: 18, clue: 'Award winning University Center', answer: 'houstonharte', hint: 'http://www.angelo.edu/services/specialevents/hhuc.php' },
  { number: 4, direction: 'across', row: 5, column: 1, clue: 'Dominic’s breed', answer: 'rambouillet', hint: 'http://www.angelo.edu/asu_facts/traditions.php' },
  { number: 5, direction: 'across', row: 6, column: 15, clue: 'Join this “ultimate” campus team', answer: 'frisbee', hint: 'http://myfuture.angelo.edu/content/news/13280-rams-ultimate-frisbee' },
  { number: 6, direction: 'across', row: 7, column: 3, clue: 'Women pitched their way to World Series runner up', answer: 'softball', hint: 'http://www.angelosports.com/news/2017/5/20/no-1-rambelles-clinch-trip-to-college-softball-world-series-with-6-2-win-over-texas-woman-s.aspx' },
  { number: 7, direction: 'down', row: 7, column: 7, clue: 'Toastiest homecoming tradition', answer: 'bonfire', hint: 'http://www.angelo.edu/asu_facts/traditions.php' },
  { number: 8, direction: 'down', row: 9, column: 9, clue: 'Greatest state in the country', answer: 'texas', hint: 'https://youtu.be/VGF4ibgcHQE?t=6s' },
  { number: 9, direction: 'across', row: 9, column: 14, clue: '4-legged mascot', answer: 'dominic', hint: 'http://www.angelo.edu/asu_facts/traditions.php' },
  { number: 10, direction: 'down', row: 11, column: 3, clue: 'Original school colors: ___ & gold', answer: 'black', hint: 'http://www.angelo.edu/content/profiles/6250-blue-and-gold' },
  { number: 11, direction: 'across', row: 11, column: 17, clue: 'Original initials for the school', answer: 'sajc', hint: 'http://www.angelo.edu/content/news/15372-10000-strong' },
  { number: 12, direction: 'across', row: 13, column: 3, clue: 'Champion bass fishers', answer: 'anglers', hint: 'http://www.angelo.edu/content/news/13930-asu-goes-clubbing/' },
  { number: 13, direction: 'down', row: 13, column: 8, clue: 'Back to back state champs in this intramural sport', answer: 'rugby', hint: 'http://www.angelo.edu/content/news/15450-ram-rugby-football-club' },
  { number: 14, direction: 'down', row: 13, column: 13, clue: 'Stickiest spot on campus', answer: 'gumtree', hint: 'http://www.angelo.edu/asu_facts/traditions.php' },
  { number: 15, direction: 'down', row: 14, column: 11, clue: 'Tree lighting grove', answer: 'oak', hint: 'https://www.angelo.edu/asu_facts/traditions.php' },
  { number: 16, direction: 'across', row: 14, column: 15, clue: '2017 National champion in this track & field sport', answer: 'javelin', hint: 'http://www.angelosports.com/news/2017/5/27/fischer-wins-javelin-national-title-rams-place-10th-and-rambelles-tie-for-13th-at-ncaa-division-ii-track-field-championships.aspx' },
  { number: 17, direction: 'down', row: 14, column: 17, clue: 'Spiked a spot in the Elite 8', answer: 'volleyball', hint: 'http://www.angelo.edu/content/news/15478-athletics-takes-some-big-wins' },
  { number: 18, direction: 'across', row: 16, column: 8, clue: 'Dribbled to Elite 8', answer: 'basketball', hint: 'http://www.angelosports.com/news/2017/3/14/womens-basketball-belles-historic-season-comes-to-a-close-in-regional-championship-game.aspx?path=wbball' },
  { number: 19, direction: 'down', row: 16, column: 19, clue: '“From ___, it’s possible”', answer: 'here', hint: 'http://www.angelo.edu/president_welcome/' },
  { number: 20, direction: 'down', row: 16, column: 21, clue: 'Newest academic building: ___ Strain', answer: 'hunter', hint: 'http://www.angelo.edu/content/news/15394-grand-occasion-fitting-tribute' },
  { number: 21, direction: 'across', row: 17, column: 6, clue: 'April showers bring this Dr’s Flowers', answer: 'may', hint: 'http://www.angelo.edu/president_welcome/presbiography.php' },
  { number: 21, direction: 'down', row: 17, column: 6, clue: 'New engineering degree on campus in 2018', answer: 'mechanical', hint: 'http://www.angelo.edu/content/news/14962-us-dept-of-education-grant-for-engineering' },
  { number: 22, direction: 'down', row: 18, column: 9, clue: 'Not silver but ___', answer: 'gold', hint: 'https://www.angelo.edu/asu_facts/traditions.php' },
  { number: 23, direction: 'across', row: 18, column: 16, clue: 'Football’s home', answer: 'legrand', hint: 'http://www.angelo.edu/services/ticket_office/football.php' },
  { number: 24, direction: 'across', row: 19, column: 8, clue: 'Fuzzy horned mascot', answer: 'roscoe', hint: 'http://www.angelo.edu/asu_facts/traditions.php' },
  { number: 25, direction: 'down', row: 20, column: 15, clue: 'Not ram jelly but ___', answer: 'ramjam', hint: 'http://www.angelo.edu/asu_facts/traditions.php' },
  { number: 26, direction: 'across', row: 21, column: 11, clue: 'She gets all women’s teams ramped up', answer: 'bella', hint: 'http://www.angelo.edu/asu_facts/traditions.php' },
  { number: 26, direction: 'down', row: 21, column: 11, clue: 'We are True ___', answer: 'blue', hint: '' },
  { number: 27, direction: 'down', row: 21, column: 13, clue: 'Celebrating 50 years on campus', answer: 'library', hint: 'http://angelo.libguides.com/PHL50thAnniversary' },
  { number: 28, direction: 'across', row: 21, column: 19, clue: 'Oldest residence hall on campus', answer: 'carr', hint: 'http://www.angelo.edu/dept/residential_programs/halls/' },
  { number: 29, direction: 'down', row: 21, column: 20, clue: 'New College of Health and Human Services Building', answer: 'archer', hint: 'http://www.angelo.edu/content/news/15488-the-changing-face-of-campus' },
  { number: 30, direction: 'down', row: 21, column: 22, clue: 'Brothers & sisters, faculty & staff', answer: 'ramfam', hint: '' },
  { number: 31, direction: 'across', row: 22, column: 3, clue: 'Newest women’s sport', answer: 'tennis', hint: 'http://www.angelosports.com/news/2017/9/7/womens-tennis-belle-tennis-to-compete-for-first-time-in-30-years.aspx?path=wten' },
  { number: 32, direction: 'across', row: 22, column: 15, clue: 'Not for shopping but walking', answer: 'mall', hint: '' }
];*/


