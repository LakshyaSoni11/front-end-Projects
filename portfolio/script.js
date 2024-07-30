var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname){
for(let content of tabcontents){

    content.classList.remove("active-tab");
}
for(let link of tablinks){

    link.classList.remove("active-link");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}