let cluesList = ["dragon"];//["dragon","bears","ashman","rocket"];
let modsList = ["Fire breathing dragon"];//["Fire breathing dragon", "Lions and tigers and bears","My name is Katrina Ashman", "Pocket Rocket socket"];

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
    div.style.display = "none";
  }
}



// Create a new list item when clicking on the "Add" button
function newElement() {
  document.getElementById('myNoteCount').innerHTML = modsList.length;
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    hd = inputValue;
    hd = separateWord(hd);
    cluesList.push(hd);
    document.getElementById("myUL").appendChild(li);
    //alert(inputValue);
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
  cluesList = ["Please"];
  modsList = ["Please is the magic word"];
  localStorage.clear();
  window.localStorage.clear();
  sessionStorage.clear();
  localStorage.setItem("answerList", JSON.stringify(cluesList));
  localStorage.setItem("phraseList", JSON.stringify(modsList));
  //localStorage.setItem("clueItems",''); //- Clear for now
}