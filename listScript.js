let aList = [];
let isEditing = "false";
let cluesList = [];
let modsList = [];
let count = 0;
document.getElementById('myNoteCount').innerHTML = count;

if ((JSON.parse(localStorage.getItem("answerList"))).length > 0) {
  aList = (JSON.parse(localStorage.getItem("phraseList")));
}


for (var o = 0; o < aList.length; o++) {
  count = count + 1;
  document.getElementById('myNoteCount').innerHTML = count;
  var li = document.createElement("li");
  var t = document.createTextNode(aList[o]);
  li.appendChild(t);
  const order = document.getElementById("myUL");
  order.insertBefore(li, order.children[0]);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var g = 0; g < close.length; g++) {
    close[g].onclick = function() {
      count = count - 1;
      document.getElementById('myNoteCount').innerHTML = count;
      var div = this.parentElement;
      removeItem((div.textContent).substr(0, div.textContent.length - 2));
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  document.getElementById('myNoteCount').innerHTML = count;
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
var hd;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    count = count - 1;
    document.getElementById('myNoteCount').innerHTML = count;
    var div = this.parentElement;
    removeItem((div.textContent).substr(0, div.textContent.length - 2));
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    count = count + 1;
    document.getElementById('myNoteCount').innerHTML = count;
    document.getElementById("myUL").contentEditable = "true";
    const order = document.getElementById("myUL");
    order.insertBefore(li, order.children[0]);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.contentEditable = "false";
  li.appendChild(span);
  aList = ((document.getElementById("myUL").textContent)).split("×");

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      count = count - 1;
      document.getElementById('myNoteCount').innerHTML = count;
      var div = this.parentElement;
      removeItem((div.textContent).substr(0, div.textContent.length - 2));
      div.style.display = "none";
    }
  }
}




function exchange() {
  for (var u = 0; u < aList.length; u++) {
    cluesList.push(separateWord(aList[u]));
  }
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

  localStorage.setItem("primary-color", primClrHld);
  localStorage.setItem("secondary-color", secClrHld);
}

function removeItem(line) {
  aList.splice((aList.indexOf(line)), 1);
  document.getElementById('myNoteCount').innerHTML = aList.length;
}

