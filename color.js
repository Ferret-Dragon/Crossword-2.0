if(localStorage.getItem("primary-color")==null){
  localStorage.setItem("primary-color","#f44336");
}
if(localStorage.getItem("secondary-color")==null){
  localStorage.setItem("secondary-color","#f44336");
}

document.getElementById("myDIV").style.backgroundColor = (localStorage.getItem("primary-color"));
document.getElementById("myDIV2").style.backgroundColor = (localStorage.getItem("primary-color"));

document.getElementById("buttonsVal").style.background = (localStorage.getItem("secondary-color"));
document.getElementById("buttonsVal2").style.background = (localStorage.getItem("secondary-color"));
document.getElementById("buttonsValcol").style.background = (localStorage.getItem("secondary-color"));
document.getElementById("buttonsValcol2").style.background = (localStorage.getItem("secondary-color"));
document.getElementById("addBtn").style.background = (localStorage.getItem("secondary-color"));


const changer = document.querySelector("div.color-changer input")
const bodyTag = document.querySelector("primary")

changer.addEventListener("input", function() {
  localStorage.setItem("primary-color",changer.value);
  
  document.getElementById("myDIV").style.backgroundColor = (localStorage.getItem("primary-color"));
  document.getElementById("myDIV2").style.backgroundColor = (localStorage.getItem("primary-color"));

})

const changer2 = document.querySelector("div.color-changer2 input")
const bodyTag2 = document.querySelector("secondary")

changer2.addEventListener("input", function() {
  localStorage.setItem("secondary-color",changer2.value);
  
  document.getElementById("buttonsVal").style.background = (localStorage.getItem("secondary-color"));
  document.getElementById("buttonsVal2").style.background = (localStorage.getItem("secondary-color"));
document.getElementById("buttonsValcol").style.background = (localStorage.getItem("secondary-color"));
  document.getElementById("buttonsValcol2").style.background = (localStorage.getItem("secondary-color"));

})