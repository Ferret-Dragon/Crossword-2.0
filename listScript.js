let aList;
let bList;
let someList = [];
let ell;
let isEditing = "false";
let cluesList = [];
let modsList = [];
let count = 0;

      let org;
      let stacksList = [];

      let stacks = (localStorage.getItem("stacks"));
      if (stacks != "[]" && stacks != null) {
        stacksList = stacks.split("♤");
      }
      for (var x = stacksList.length - 1; x >= 0; x--) {
        if (stacksList[x] != "") {
          document.getElementById("myInput2").value = stacksList[x];
          newStackElement();
        }
        else {
          stacksList.splice(x, 1);
        }
      }

      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
          var newStack = replaceAll((((document.getElementById("myStack")).textContent)), "×", "♤");
          newStack = replaceAll(newStack, "  ", "");
          localStorage.setItem("stacks", newStack);
          newStack = replaceAll(newStack, " ", "_");
          localStorage.setItem("stacksItems", newStack);
        }
      }


document.getElementById('myNoteCount').innerHTML = count;
alert(org);
let Ahold = (localStorage.getItem(org));
if (Ahold != "[]") {
  someList = Ahold.split("¶");
  for (var f = 0; f < someList.length; f++) {
    if (someList[f] == "") {
      someList.splice(f, 1);
    }
  }
  //count = someList.length;

  for (var o = someList.length - 1; o >= 0; o--) {
    document.getElementById('myNoteCount').innerHTML = count;
    document.getElementById("myInput").value = someList[o];
    newElement();
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

var input = document.getElementById("myInput");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addBtn").click();
  }
});


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
  ell = (document.getElementById("myUL").textContent);
  //exchange();

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
  document.getElementById("myUL").contentEditable = "false";
  ell = (document.getElementById("myUL").textContent);
  aList = ((ell.substr(0, ell.length - 1)).replace("×", "¶")).replace(/(\r\n|\n|\r)/gm, "");
  bList = replaceAll(aList.toString(), "×", "¶");
  aList = aList.split("¶");
  bList = replaceAll(bList, "¶¶", "¶");
  for (var u = 0; u < aList.length; u++) {
    cluesList.push(separateWord(aList[u]));
  }
  //cluesList.push(separateWord(aList[aList.length]));
  console.log("Clue items: " + cluesList);
  console.log("Clues: " + modsList);
  localStorage.setItem("clueItems", JSON.stringify(cluesList));
  localStorage.setItem("answerList", JSON.stringify(cluesList));
  localStorage.setItem("clues", bList);
  localStorage.setItem("phraseList", bList);
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

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

function openStack() {
  document.getElementById("mySidenav").style.width = "30%";
  document.getElementById("main").style.marginLeft = "30%";
}
function closeStack() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function restart() {
  alert(org);
  document.getElementsById("title").innerText = org;
  document.getElementById('myNoteCount').innerHTML = 0;
  let Ahold = (localStorage.getItem(org));
  if (Ahold != "[]") {
    someList = Ahold.split("¶");
    for (var f = 0; f < someList.length; f++) {
      if (someList[f] == "") {
        someList.splice(f, 1);
      }
    }
    //count = someList.length;

    for (var o = someList.length - 1; o >= 0; o--) {
      document.getElementById('myNoteCount').innerHTML = count;
      document.getElementById("myInput").value = someList[o];
      newElement();
    }
  }
}