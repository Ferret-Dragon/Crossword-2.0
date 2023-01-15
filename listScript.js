let cluesList = [];//["dragon","bears","ashman","rocket"];
let modsList = [];//["Fire breathing dragon", "Lions and tigers and bears","My name is Katrina Ashman", "Pocket Rocket socket"];
var idCount = modsList.length;
let idName = "";

if ((JSON.parse(localStorage.getItem("answerList"))).length > 0) {
  cluesList = (JSON.parse(localStorage.getItem("answerList")));
  modsList = (JSON.parse(localStorage.getItem("phraseList")));
  document.getElementById('myNoteCount').innerHTML = modsList.length;
}


for (var o = 0; o < modsList.length; o++) {
  var li = document.createElement("li");
  var t = document.createTextNode(modsList[o]);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var g = 0; g < close.length; g++) {
    close[g].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}






//const { modifiedSentence, keyword } = {};

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  document.getElementById('myNoteCount').innerHTML = modsList.length;
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
var hd;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    alert(i/2 + " id: " + document.getElementById());
    div.style.display = "none";
  }
}



// Create a new list item when clicking on the "Add" button
function newElement() {
  theCount = cluesList.length + 1;
  theName = "liNAME_" + (theCount);
  
  document.getElementById('myNoteCount').innerHTML = modsList.length;
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  
/*
const li = document.createElement("li");
const t = document.createTextNode("Water");
li.appendChild(t);

const list = document.getElementById("myList");
order.insertBefore(li, document.children[0]);
*/


  
  //alert(li.id);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    cluesList.push((separateWord(inputValue)));

    const order = document.getElementById("myUL");
    order.insertBefore(li, order.children[0]);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    document.getElementById('myNoteCount').innerHTML = modsList.length;
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function exchange() {
  //alert("exchange");
  //JSON.stringify(cluesList);
  console.log("Clue items: " + cluesList);
  console.log("Clues: " + modsList);
  localStorage.setItem("clueItems", JSON.stringify(cluesList));
  localStorage.setItem("answerList", JSON.stringify(cluesList));
  localStorage.setItem("clues", JSON.stringify(modsList.toString()));
  localStorage.setItem("phraseList", JSON.stringify(modsList));

  //localStorage.setItem("clueItems",''); //- Clear for now
}

function clearStorage() {
  let primClrHld = localStorage.getItem("primary-color");
  let secClrHld = localStorage.getItem("secondary-color");
  cluesList = [];
  modsList = [];
  document.getElementById('myNoteCount').innerHTML = modsList.length;
  localStorage.clear();
  window.localStorage.clear();
  sessionStorage.clear();
  localStorage.setItem("answerList", JSON.stringify(cluesList));
  localStorage.setItem("phraseList", JSON.stringify(modsList));

  localStorage.setItem("primary-color",primClrHld);
  localStorage.setItem("secondary-color",secClrHld);
}

function removeItem(index){
  var ick = (index / 2)-1;
  alert(ick + " , " + cluesList[ick]);
  cluesList.splice(ick,1);
  modsList.splice(ick,1);
  alert(modsList);
  console.log(cluesList);
  console.log(modsList);
  localStorage.setItem("clueItems", JSON.stringify(cluesList));
  localStorage.setItem("answerList", JSON.stringify(cluesList));
  localStorage.setItem("clues", JSON.stringify(modsList));
  localStorage.setItem("phraseList", JSON.stringify(modsList));
}

