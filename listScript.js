let aList = [];
let isEditing = "false";
let editCount = 0;
let cluesList = [];//["dragon","bears","ashman","rocket"];
let modsList = [];//["Fire breathing dragon", "Lions and tigers and bears","My name is Katrina Ashman", "Pocket Rocket socket"];
var idCount = modsList.length;
let idName = "";

if ((JSON.parse(localStorage.getItem("answerList"))).length > 0) {
  aList = (JSON.parse(localStorage.getItem("phraseList")));
  document.getElementById('myNoteCount').innerHTML = aList.length;
}


for (var o = 0; o < aList.length; o++) {
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
      var div = this.parentElement;
      removeItem((div.textContent).substr(0, div.textContent.length - 2));
      div.style.display = "none";
    }
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  isEditing = "true";
  editCount++;
  var prevCol = ev.target.style.backgroundColor;
  if (editCount > 1) {
    ev.target.style.color = ("black");
    ev.target.style.backgroundColor = (prevCol);
    isEditing = "false";
    editCount--;
    location.reload();
  }
  document.querySelector('span').className = ("editBtn");
  ev.target.style.color = ("teal");
  ev.target.style.backgroundColor = ("#c5e8de");
  if (ev.target.tagName === 'LI') {
    //document.getElementsByClassName("editBtn").innerHTML = "Edit";
    document.getElementById("myInput").value = (ev.target.textContent).substr(0, ev.target.textContent.length - 2);
    theCount = aList.indexOf((ev.target.textContent).substr(0, ev.target.textContent.length - 2));
    //edit(ev.target.textContent)
    //edit((ev.target.textContent).substr(0, ev.target.textContent.length - 2));
  }
}, false);




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
  document.getElementById('myNoteCount').innerHTML = aList.length;
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
var hd;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    removeItem((div.textContent).substr(0, div.textContent.length - 2));
    div.style.display = "none";
  }
}



// Create a new list item when clicking on the "Add" button
function newElement() {
  if (isEditing == "false") {
    alert("true");
    theCount = aList.length + 1;
    document.getElementById('myNoteCount').innerHTML = aList.length;
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);


    if (inputValue === '') {
      alert("You must write something!");
    } else {
      aList.push(inputValue);
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
      document.getElementById('myNoteCount').innerHTML = aList.length;
      close[i].onclick = function() {
        var div = this.parentElement;
        removeItem((div.textContent).substr(0, div.textContent.length - 2));
        div.style.display = "none";
      }
    }
  }
  else {

    if (isEditing == "true" && editCount == 0) {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);

      if (inputValue === '') {
        alert("You must write something!");
      } else {
        aList[theCount] = inputValue;
        const order = document.getElementById("myUL");
        order.insertBefore(li, order.children[theCount]);
        exchange();
        location.reload();
      }
      document.getElementById("myInput").value = "";
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        document.getElementById('myNoteCount').innerHTML = aList.length;
        close[i].onclick = function() {
          var div = this.parentElement;
          removeItem((div.textContent).substr(0, div.textContent.length - 1));
          div.style.display = "none";
        }
      }
      isEditing == "false";
      editCount = 0;
    }

  }
}




function exchange() {
  for (var u = 0; u < aList.length; u++) {
    cluesList.push(separateWord(aList[u]));
    //cluesList.push((separateWord(inputValue)))
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

