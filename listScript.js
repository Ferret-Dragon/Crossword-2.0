var cluesList = [];//["dragon","dragon"];
var modsList = [];//["Fire breathing ____", "Jane and the ____"];

const { modifiedSentence, keyword } = {};

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
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
    cluesList.splice(i, 1);
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
    //cluesList.push(inputValue);

    hd = JSON.stringify(inputValue);

    //Here we may want to separate inputValue before pushing to cluesList
    const { modifiedSentence, keyword } = extractKeyword(inputValue);
    cluesList.push(keyword);
    modsList.push(modifiedSentence);
    
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
}

function exchange(){
  JSON.stringify(cluesList);
  localStorage.setItem("clueItems",cluesList);

  JSON.stringify(modsList);
  localStorage.setItem("clues",modsList);
  
  //localStorage.setItem("clueItems",''); //- Clear for now
}

function clear(){
  localStorage.setItem("clueItems",'');
  localStorage.setItem("clues",'');
}