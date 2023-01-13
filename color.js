document.getElementById("myDIV").style.backgroundColor = (localStorage.getItem("primary-color"));
document.getElementById("noteCountBox").style.backgroundColor = (localStorage.getItem("primary-color"));
//document.getElementById("secondary").style.backgroundColor = (localStorage.getItem("secondary-color"));


const changer = document.querySelector("div.color-changer input")
const bodyTag = document.querySelector("primary")

changer.addEventListener("input", function() {
  localStorage.setItem("primary-color",changer.value);
  document.getElementById("myDIV").style.backgroundColor = (localStorage.getItem("primary-color"));
  document.getElementById("noteCountBox").style.backgroundColor = (localStorage.getItem("primary-color"));
})

/*const changer2 = document.querySelector("div.color-changer2 input")
const bodyTag2 = document.querySelector("secondary")

changer2.addEventListener("input", function() {
  localStorage.setItem("secondary-color",changer2.value);
  bodyTag2.style.backgroundColor = (localStorage.getItem("secondary-color"));
})*/