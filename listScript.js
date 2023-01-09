let cluesList = [];//["dragon","bears","ashman","rocket"];
let modsList = [];//["Fire breathing dragon", "Lions and tigers and bears","My name is Katrina Ashman", "Pocket Rocket socket"];
if ((JSON.parse(localStorage.getItem("answerList"))) > 0) {
  cluesList = cluesList.concat(JSON.parse(localStorage.getItem("answerList")));
  modsList = modsList.concat(JSON.parse(localStorage.getItem("phraseList")));
}

//const { modifiedSentence, keyword } = {};

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i <= myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
var hd;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    cluesList = removeItemOnce(cluesList, cluesList[i]);
    modsList = removeItemOnce(modsList, modsList[i]);
  }
}


for (var r = 0; r <= cluesList.length; r++) {
  var li = document.createElement("li");
  var inputValue = modsList[r];
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  //alert(inputValue);
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
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
    //cluesList.push(inputValue);

    hd = inputValue;//JSON.stringify(inputValue);
    //alert("hd:  " + hd);
    //Here we may want to separate inputValue before pushing to cluesList
    hd = separateWord(hd);
    cluesList.push(hd);
    //alert("cluesList =  " + cluesList);
    //modsList.push(modifiedSentence);

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
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  console.log("[" + cluesList + ", " + modsList + "]");
}

function exchange() {
  //alert("exchange");
  //JSON.stringify(cluesList);
  localStorage.setItem("clueItems", JSON.stringify(cluesList));
  localStorage.setItem("answerList", JSON.stringify(cluesList));
  localStorage.setItem("clues", JSON.stringify(modsList));
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


function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}